---
title: Netty实现字符处理
author:
category: Netty
tag: Netty
date: 2024-03-13
---

接收字符消息并回复Client字符消息

## Bootstrap

```java
public class HiStringNettyServer {
    public static void main(String[] args) throws InterruptedException {
        EventLoopGroup bossGroup = new NioEventLoopGroup(1);
        EventLoopGroup workerGroup = new NioEventLoopGroup(NettyRuntime.availableProcessors());

        ServerBootstrap serverBootstrap = new ServerBootstrap();
        serverBootstrap.group(bossGroup, workerGroup)
                .channel(NioServerSocketChannel.class)
                .option(ChannelOption.SO_BACKLOG, 1024)
                .childOption(ChannelOption.SO_KEEPALIVE, true)
                .handler(new LoggingHandler(LogLevel.INFO))
                .childHandler(new ChannelInitializer<>() {
                    @Override
                    protected void initChannel(Channel ch) throws Exception {
                        ChannelPipeline pipeline = ch.pipeline();
                        pipeline.addLast(new StringDecoder());
                        pipeline.addLast(new StringEncoder());
                        pipeline.addLast(new MessageHandler());
                    }
                })
        ;
        serverBootstrap.bind(9000).sync();
    }
}
```

## 自定义的Handler

```java
public class MessageHandler extends SimpleChannelInboundHandler<String> {
    @Override
    protected void channelRead0(ChannelHandlerContext ctx, String msg) throws Exception {
        log.info("Success to receive message:{}", msg);
        ctx.channel().writeAndFlush("Copy that!");
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        log.info("Inactive");
    }
}
```


