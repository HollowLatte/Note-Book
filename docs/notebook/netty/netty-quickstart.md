---
title: Netty快速入门
author:
category: Netty
tag: Netty
date: 2024-03-14
---


以一个可以接收字符并回写字符的Netty Server为例

## Server

```java
public class StringNettyServer {
    public static void main(String[] args) throws InterruptedException {
        EventLoopGroup bossGroup = new NioEventLoopGroup(1); // (1)
        EventLoopGroup workerGroup = new NioEventLoopGroup(NettyRuntime.availableProcessors()); 

        ServerBootstrap serverBootstrap = new ServerBootstrap(); // (2)
        serverBootstrap.group(bossGroup, workerGroup) // (3)
                .channel(NioServerSocketChannel.class) // (4)
                .option(ChannelOption.SO_BACKLOG, 1024) // (5)
                .childOption(ChannelOption.SO_KEEPALIVE, true) // (6)
                .handler(new LoggingHandler(LogLevel.INFO)) // (7)
                .childHandler(new ChannelInitializer<>() { // (8)
                    @Override
                    protected void initChannel(Channel ch) throws Exception {
                        ChannelPipeline pipeline = ch.pipeline(); // (9)
                        pipeline.addLast(new StringDecoder());
                        pipeline.addLast(new StringEncoder());
                        pipeline.addLast(new StringHandler());
                    }
                })
        ;
        serverBootstrap.bind(9000).sync();
    }
}
```

解释：

1. `NioEventLoopGroup`用来创建和管理服务端Channel，可以通过构造方法指定线程数量，线程数越多，NIO 事件循环可以处理的网络连接就越多
2. `ServerBootstrap`可以看做像SpringBoot启动类一样的东西，它里面封装了很多细节，但是不需要关心它的细节，配置参数后使用即可
3. `group(bossGroup, workerGroup)`设置两个group的原因是Netty使用了**主从Reactor网络模型**，一个为主一个为从
4. `channel(NioServerSocketChannel.class)`设置主从Reactor中主的channel具体实现类，后续创建的channel实例以它为准，而常用的就是NioServerSocketChannel
5. `option(ChannelOption.SO_BACKLOG, 1024)`设置主channel的参数`SO_BACKLOG`
   ，SO表示Socket，backlog其实是Socket中的一个参数，JDK中的Socket API中`ServerSocket`
   构造方法就可以设置，作用是Server在处理连接请求时，需要先将连接请求放入连接队列中，然后再逐个处理。Socket backlog参数就是用来设置
   连接队列 的最大长度。
6. `childOption(ChannelOption.SO_KEEPALIVE, true)`
   设置从channel的keepalive参数，用于设置TCP连接的保活机制，检测连接是否仍然可用。若不设置该参数，当网络异常导致连接断开后，Server无法感知，可能会导致数据丢失或程序异常。keepalive具体的探测间隔、超时时间等都是在系统内核参数设置的，无需在代码层面关心
7. `handler(new LoggingHandler(LogLevel.INFO))`
   LoggingHandler是Netty提供的日志处理器，此处是将该Handler配置给了主channel，那么主channel的连接建立、连接断开、数据读写、异常等事件都会打印出日志，方便排查。该Handler不是必须配置
8. `childHandler(new ChannelInitializer<>(){})`配置从channel处理器的标准写法
9. `ChannelPipeline`配置从channel的Handler流水线，ChannelPipeline上的Handler会按指定的顺序执行

> 更多Java Socket参数可以在`java.net.SocketOptions`查看，带有注释。Netty的ChannelOption中的参数基本都可以在SocketOptions中找到

## Handler

```java
public class StringHandler extends SimpleChannelInboundHandler<String> { // (1)
    @Override
    protected void channelRead0(ChannelHandlerContext ctx, String msg) throws Exception { // (2)
        log.info("Success to receive message:{}", msg);
        ctx.channel().writeAndFlush("Copy that!"); // (3)
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception { // (4)
        log.info("Inactive");
    }
}
```

解析：

1. `SimpleChannelInboundHandler`
   此处使用的入站处理器可以自动将接收到的ByteBuf解码成特定类型的消息对象，并且支持泛型，可以简化开发。需要注意，只有该泛型是ByteBuf的子类时，才能自动解码正常触发channelRead0，所以直接使用String泛型是无法触发channelRead0的，需要在child
   handler加上`StringDecoder`
   才能正常转换。既然如此，那么SimpleChannelInboundHandler自动解码有什么用呢？其实在搭建WebSocket
   Server时就可以体现出来，`TextWebSocketFrame`在ByteBuf上进行了封装，使用TextWebSocketFrame作为泛型，可以自动解码Client发送过来的WebSocket数据
2. `channelRead0`重写该方法可以自定义处理接收到的Client数据
3. `ctx.channel().writeAndFlush()`将数据回写到发送数据的Client，注意别与`ctx.writeAndFlush()`弄混,`ctx.writeAndFlush()`
   无法回写数据

