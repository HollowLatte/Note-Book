---
title: Eureka服务状态API
author:
category: SpringCloud
tag: SpringCloud
---

## 应用场景

在某些场景下，需要对系统进行滚动升级（滚动发布），每次只对系统的部分服务进行升级。先将一部分服务下线然后更新完再上线，再更按此方式更新剩下部分

由于Eureka不像Nacos可以在页面上直接控制上下线，但Eureka提供了服务查看服务状态、控制服务上下线的API

## Eureka API

如果Eureka版本较新，参考官方文档[Eureka REST operations](https://github.com/Netflix/eureka/wiki/Eureka-REST-operations)

```bash
# 查询所有服务状态
GET /eureka/apps

# 查看单个服务状态
GET /eureka/apps/{appID}

# 下线服务
PUT /eureka/apps/{appID}/{instanceID}/status?value=OUT_OF_SERVICE

# 上线服务
PUT /eureka/apps/{appID}/{instanceID}/status?value=UP
```

