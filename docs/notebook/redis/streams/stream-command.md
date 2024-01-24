---
title: Stream 命令
author:
category: Redis
tag: Redis
date: 2024-01-25
---

## Stream 配置

Redis是基于内存的，不可能无限制保存历史数据，对stream数据结构来说，也是做了一些默认的设置，保存固定长度【容量】的数据。

```bash
stream-node-max-bytes 4096
stream-node-max-entries 100
```

stream-node-max-bytes：
Redis 流式数据结构使用 Radix 树来存储内容。参数指定可用于在单个树节点中存储内容的最大字节数。达到此限制后，新内容将存储在新的树节点中。
整数 0 及以上。（默认值 = 4096）0表示无限大小的树节点。

stream-node-max-entries：
Redis 流式数据结构使用 Radix 树来存储内容。参数指定可以存储在单个节点中的内容数。当达到此限制时，新内容将存储在新的树节点中。
整数 0 及以上。（默认值 = 100）0 表示不受限制的树节点。

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
