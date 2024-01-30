---
title: 常见类
author:
category: Netty
tag: Netty
---

## 常见类及作用

Netty作为Java中使用广泛的NIO框架,其主要类和作用如下：

- **Channel**：对套接字连接的抽象,用于处理连接的生命周期事件。
- **ChannelHandler**：用于处理Channel上的IO事件及数据处理逻辑,分为入站、出站Handler。
- **ChannelPipeline**：存放ChannelHandler的链,用于处理或拦截Channel的IO事件和数据。
- **EventLoop**：处理IO操作的线程,一个EventLoop可以处理多个Channel。
- **EventLoopGroup**：一组EventLoop,用于为Channel分配EventLoop。
- **ChannelFuture**：异步IO操作的结果容器,可以添加回调函数。
- **Bootstrap**：客户端启动助手类,用于连接服务器。
- **ServerBootstrap**：服务器启动引导类,用于绑定端口启动服务器。
- **ByteBuf**：Netty的数据容器,用于缓冲读写的数据。

## 常见Encoder

### MessageToByteEncoder

MessageToByteEncoder 是一种出站的编码器,它将消息对象编码成字节码然后发送出站

**作用**：

1. 将实现可序列化Serializable接口的消息对象编码为字节数组。
2. 通过抽象方法encode()实现自定义的编码运算。
3. 将消息编码为io.netty.buffer.ByteBuf类型的数据。
4. 编码时可以获取ChannelHandlerContext相关的上下文信息。
5. 线程安全的编码器实现。

**使用案例**：

1. 实现protobuf、json等格式的编码器。
2. 将消息封装成自定义协议的字节码数据。
3. 加密编码实现安全传输。
4. 使用gzip等实现数据压缩编码。
5. 结合WebSocket实现自定义帧数据编码。

## 常见Decoder

### ByteToMessageDecoder

### LengthFieldBasedFrameDecoder

LengthFieldBasedFrameDecoder 是 Netty 中一个非常常用的字节流解码器,它允许按照帧长度来解码字节数据,常用于处理setFixed长度帧的自定义协议解码。

**作用**:

1. 可以把字节流拆分成按帧长度定义的消息包,解决粘包/拆包问题。
2. 支持固定长度或者部分长度字段的协议解码。
3. 可以处理异步串口、网络流等不定长字节流。
4. 常与 LineBasedFrameDecoder 组合使用,实现分帧和分行解码器。
5. 可配置长度字段的偏移量、长度和调整值来适应不同协议。
6. 高性能的零拷贝实现,直接解码到 ByteBuf。

如果需要实现自定义的变长协议解码,应该扩展 ByteToMessageDecoder;如果协议带长度字段,可以直接使用
LengthFieldBasedFrameDecoder 更加方便

## Handler

### ChannelInboundHandlerAdapter

**有下面几个常用方法**：

1. **channelRead**：
   这个方法会在收到入站数据时被调用,是最重要的一个方法。通常会在这个方法中实现对入站数据的处理逻辑,比如:

    - 对入站数据进行解码
    - 处理业务逻辑
    - 生成响应等

2. **channelReadComplete**：
   会在channelRead()读取到入站数据结束时调用,可以在这个方法中发送响应数据。

3. **exceptionCaught**：
   用来处理发生的异常,避免异常传播导致程序终止。

4. **userEventTriggered**：
   可以用来处理自定义的用户事件,根据需要决定是否实现。

5. **channelRegistered/channelUnregistered**：
   channel 的生命周期回调方法,可以在里面执行初始化或销毁的逻辑。

6. **channelActive/channelInactive**：
   channel 连接激活或失活时调用,可以控制连接。


Netty

https://blog.csdn.net/qq_38263083/article/details/131825724


