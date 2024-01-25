---
title: Stream与MQ
author:
category: Redis
tag: Redis
date: 2024-01-24
---

## Stream 与 MQ

Redis Stream是 Redis 5.0 引入的一种数据结构，用于消息队列的持久化和主备复制。

在Redis5.0之前，如果用redis来模拟MQ功能，通常使用list或PUB/SUB发布订阅模式。

Stream 具有完善的MQ功能：

1. 消息持久化存储，持久化保存消息数据，确保消息在存储中的可靠性和持久性。即使 Redis
   服务器重启，消息仍然可以保留，避免数据丢失。
2. 提供了消费者组功能。类似Kafka与RocketMQ的消费组
3. 消费确认ack机制。

### pub/sub模式

消息发布之后，主动推送消息到订阅的客户端。

优点：简单快速
缺点：一旦redis服务或者消费者重启，那么会丢失在重启的这段时间之内所有的消息，因为Redis没有持久化这种模式的缓存，只是做了内存缓冲区 +
消息转发

可以通过Redission的getTopic 获取一个pubsub通道

### list方式

list的方式是stream出现之前可靠度比较高的实现

使用bpop来阻塞等待消息

优点：

- rdb或者aof可以在一定范围内降低消息丢失率。如果消费者重启，可以从之前消费的进度继续读取数据
- 使用bpop指令阻塞等待消息，不用一直轮询，降低网络交互产生的IO损耗。

缺点：没有真正具备MQ的功能，如消息确认机制、消费者组等

可以通过Redission的getQueue 获取一个队列

## Stream 数据格式

Stream 在Redis的存储结构类似与Redis中的Hash

Stream的一条消息中包含消息id和消息体

消息ID称为`StreamMessageId`：格式为`毫秒时间戳+序号`，如1706162668568-0，高位是毫秒级时间戳，低位是递增变量，用来标记唯一一条消息。
消息体为key-value的格式

## Stream 相关文档

Redis Stream 官方文档：[Redis Streams](https://redis.io/docs/data-types/streams/)

Redisson Stream API
文档：[Redisson Stream API](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#720-stream)