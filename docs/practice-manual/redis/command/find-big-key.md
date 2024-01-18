---
title: 查找BigKey
author:
category: Redis
tag: Redis
date: 2024-01-18
---

## 命令

默认Redis在127.0.0.1:6379上

```bash
# a指定密码,n指定库
redis-cli -a 123456 -n 1 --bigkeys
```

### Couldn't determine DBSIZE!问题

在执行`redis-cli --bigkeys`时，Redis响应了`Couldn't determine DBSIZE!`。

这个问题很坑。从响应信息看起来像是要指定db，但是加上`-n 0`后，还是报错或者没有响应值

最后发现是要带上密码，即加上`-a 密码`

如果其他redis-cli命令出现类似问题，也可如此解决