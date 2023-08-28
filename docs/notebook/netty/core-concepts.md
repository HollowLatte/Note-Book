---
title: Java NIO核心概念
author:
category: Netty
tag: Netty
---

## NIO核心组件

**NIO 主要包括以下三个核心组件**：

- **Buffer（缓冲区）**：NIO 读写数据都是通过缓冲区进行操作的。读操作的时候将 Channel 中的数据填充到
  Buffer中，而写操作时将 Buffer中的数据写入到 Channel 中。
- **Channel（通道）**：Channel 是一个双向的、可读可写的数据传输通道，NIO
  通过Channel来实现数据的输入输出。通道是一个抽象的概念，它可以代表文件、套接字或者其他数据源之间的连接。
- **Selector（选择器）**：允许一个线程处理多个
  Channel，基于事件驱动的 I/O 多路复用模型。所有的 Channel 都可以注册到Selector上，由Selector来分配线程来处理事件。

![Buffer、Channel、Selector关系](../pic/channel-buffer-selector.png)

## Netty

Netty是基于Java NIO实现的网络应用框架。

Netty的核心IO模型是异步非阻塞的,这是建立在Java NIO的非阻塞IO基础之上的。相比于传统的BIO同步阻塞模型,NIO可以大大提高网络应用的性能和扩展能力。

Netty对Java NIO进行了抽象和封装,实现了Reactor模式来做到异步非阻塞,其主要基于Java NIO的抽象有:

- 使用Java NIO的Channel、Selector、ByteBuffer等作为异步IO的基础。
- 基于Java NIO的SocketChannel实现了异步客户端和服务端。
- 通过ByteBuf抽象了虚拟缓存区,用于高效处理字节数据。
- 用Pipeline、ChannelHandler等实现了拦截过滤链模式。
- 基于Selector实现了异步非阻塞的事件驱动模型。
- 提供了各种协议的编解码器和框架。
- 简化和扩展了线程模型的使用。

综上,Netty对Java NIO的抽象使其更易于使用,并构建了一个灵活强大的异步网络应用框架。所以可以说Netty是基于Java
NIO之上进行模块化设计实现的。
