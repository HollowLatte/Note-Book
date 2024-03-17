---
title: ChannelPipeline
author:
category: Netty
tag: Netty
date: 2024-03-16
---

## ChannelPipeline

ChannelPipeline类是ChannelHandler实例对象的链表，用于处理或截获通道的接收和发送数据。它提供了一种高级的截取过滤模式（类似serverlet中的filter功能），让用户可以在ChannelPipeline中完全控制一个事件以及如何处理ChannelHandler与ChannelPipeline的交互。



```mermaid
graph LR
    A(Channel) --> B(Handler)
    B --> C(Pipeline)
    C --> D(Context)
    D --> E(Next)
    E --> F(Context)
    F --> G(Handler)
    G --> H(Prev)
    H --> I(Handler)
    I --> J(Prev)
    J --> K(Channel)
```

