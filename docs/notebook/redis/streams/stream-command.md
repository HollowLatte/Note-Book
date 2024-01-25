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
