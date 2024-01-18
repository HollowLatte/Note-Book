---
title: 查看内存使用
author:
category: Redis
tag: Redis
date: 2024-01-18
---

## info命令

info命令可以查看redis实例的各种统计信息，如客户端、服务器、内存、集群等

```bash
# 查看所有
info

# 只查看内存信息
info memory

# 只查看key信息
info keyspace
```

## memory命令

```bash
# 获取Redis实例的整体内存统计信息
memory states

# 获取指定键的内存使用量，单位字节
memory usage [key]
```

