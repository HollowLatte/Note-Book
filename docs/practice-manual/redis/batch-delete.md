---
title: 批量删除key
author:
category: Redis
tag: Redis
date: 2024-01-18
---

## 批量删除key

```bash
# 命令格式
redis-cli -a [password] --scan --pattern [key prefix] | xargs redis-cli -a [password] del

# 举例，删除数据库1中所有以tokens开头的key
redis-cli -a "123456" -n 1 --scan --pattern "tokens:*" | xargs redis-cli -a "123456" -n 1 del
```