---
title: Inbound/OutboundHandler执行顺序
author:
category: Netty
tag: Netty
date: 2024-03-18
---

## Inbound/OutboundHandler执行顺序

关键：InboundHandler顺序执行，OutboundHandler逆序执行。

以Server端为例：

```java
pipeline.addLast(new FirstOutbound());
pipeline.addLast(new SecondOutbound());
pipeline.addLast(new FirstInbound());
pipeline.addLast(new SecondInbound());
pipeline.addLast(new ThirdOutbound());
```

```mermaid
graph LR
    A(Head) <--> B(FirstOutbound)
    B <--> C(SecondOutbound)
    C <--> D(FirstInbound)
    D <--> E(SecondInbound)
    E <--> F(ThirdOutbound)
    F <--> G(Tail)
```

* 当收到数据时，会先执行入站（Inbound）处理器，方向是`Head->Tail`，即执行FirstInbound、SecondInbound
* 当发送数据时，会执行出站（Outbound）处理器，方向是`Tail->Head`，即执行SecondOutbound、FirstOutbound

Inbound和Outbound谁先执行，还要以不同的视角来看，上面的示例是Server，先读后写所以先Inbound后Outbound。如果是Client端，先写后读所以先Outbound后Inbound

## 不同的write影响Handler执行顺序

在Inbound/OutboundHandler都会看到有两种write数据的方式，`ChannelHandlerContext.write`和`Channel.write`
，使用不当时会极大影响Handler的执行顺序，甚至会死循环

### ChannelHandlerContext的write

```mermaid
graph LR
    A(Head) <--> B(FirstOutbound)
    B <--> C(SecondOutbound)
    C <--> D(FirstInbound)
    D <--> E(SecondInbound)
    E <--> F(ThirdOutbound)
    F <--> G(Tail)
```

#### InboundHandler内使用

在InboundHandler内使用`ChannelHandlerContext.write`时，会以当前为起点，**往Head节点方向寻找OutboundHandler执行**

例如，在SecondInbound内执行，就会往左边也就是Head节点方向寻找出站处理器，那么就会找到SecondOutbound。

此时就会有问题，ThirdOutbound没有被执行，所以，Inbound和Outbound的放置顺序需要格外小心

#### OutboundHandler内使用

在OutboundHandler内使用`ChannelHandlerContext.write`时，同样会以当前为起点，**往Head节点方向寻找OutboundHandler执行**

例如，在SecondOutbound内执行，就会传递到FirstOutbound

### Channel的write

`Channel.write`与`ChannelHandlerContext.write`不同，Channel.write不会从当前Handler向Head节点寻找Outbound，而是直接从Tail节点开始

```mermaid
graph LR
    A(Head) <--> B(FirstOutbound)
    B <--> C(SecondOutbound)
    C <--> D(FirstInbound)
    D <--> E(SecondInbound)
    E <--> F(ThirdOutbound)
    F <--> G(Tail)
```

#### InboundHandler内使用

在InboundHandler内使用`Channel.write`时，会直接以Tail为起点，**往Head节点方向寻找OutboundHandler执行**

例如，在SecondInbound内执行，从Tail往左边也就是Head节点方向寻找出站处理器，那么就会找到ThirdOutbound。

与上面`ChannelHandlerContext.write`相比，`Channel.write`会执行ThirdOutbound，它执行的Outbound会相对完整，贯穿了整个pipeline

#### OutboundHandler内使用

在OutboundHandler内使用`Channel.write`时，会直接以Tail为起点，**往Head节点方向寻找OutboundHandler执行**

例如，在SecondOutbound内执行，**如果每次执行SecondOutbound都会执行`Channel.write`，那么就会发生死循环！**

因为`SecondOutbound`执行`Channel.write`
后，会跳到Tail节点，Tail节点往左寻找找到ThirdOutbound，ThirdOutbound再传递给SecondOutbound，`SecondOutbound`
执行`Channel.write`又跳到Tail节点，就这样一直循环下去了

**所以在`OutboundHandler`内使用`Channel.write`时要格外注意**

## 源码分析
