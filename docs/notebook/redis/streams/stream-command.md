---
title: Stream 命令
author:
category: Redis
tag: Redis
date: 2024-01-25
---

## 命令说明

- XACK：结束Pending，将消息标记为"已处理"
- XADD：生成消息
- XCLAIM：转移消息的归属权
- XDEL：删除消息
- XGROUP：消费组管理
- XINFO：查看流和消费者组的相关信息
- XLEN：消息队列长度
- XPENDING：Pending列表，显示待处理消息的相关信息
- XRANGE：获取消息队列中消息
- XREAD：消费消息
- XREADGROUP：分组消费消息
- XREVRANGE：逆序获取消息队列中消息
- XTRIM：消息队列容量

## QuickStart-无消费组

### 创建Stream

首次添加消息时，自动创建

```bash
xadd stream_key * key1 value1 key2 value2
```

参数说明：

- `*`：表示Redis自动生成消息ID
- `key1 value1 key2 value2`：表示一条消息的消息体内的key-value对

### 查看Stream信息

```bash
xinfo stream stream_key
```

### 读取Stream消息

```bash
xread count 10 streams stream_key1 0
```

参数说明：

- `count 10`：表示读取的消息数量
- `streams stream_key1`：表示读取的stream名称，可以指定多个stream，用空格分隔。如`streams stream_key1 stream_key2`
- `0`：表示要读取消息的起始ID，读取该起始ID之后的消息。另外有几个特殊值，如这里的`0`，代表从最旧的消息开始读(包括最旧的那条)

### 阻塞读取Stream消息

阻塞读取时，若读取不到内容，则阻塞等待；若读取到消息或达到阻塞时间，则不再阻塞，如还需阻塞读取，需要再次调用

```bash
xread block 0 count 10 streams stream_key1 $
```

> xread 如果不设置block参数，默认是非阻塞模式。

参数说明：

- `block 0`：block参数的单位是毫秒，block 0代表的是永远阻塞。
- `$`：表示是ID的一个特殊值，表示读取最新消息。`$`只有在阻塞模式中生效，非阻塞模式下，`$`无法读取到消息

