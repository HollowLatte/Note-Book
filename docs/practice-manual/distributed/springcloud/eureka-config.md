---
title: Eureka常用配置
author:
category: SpringCloud
tag: SpringCloud
---

## 常用参数

```yaml
eureka:
  client:
    # 表示该实例是否应向 eureka 服务器注册信息，以便其他服务发现。在某些情况下，你不希望自己的实例被发现，而只希望发现其他实例。
    # 该配置在本地调试时常用，可以通过Eureka调用到其他服务，而其他服务的的请求不会过来
    register-with-eureka: false
    # Eureka服务的url
    service-url:
      defaultZone: http://192.168.29.137:6199/eureka
  instance:
    # 表示在猜测主机名时，应优先使用服务器的 IP 地址，而不是操作系统报告的主机名。
    prefer-ip-address: true
    # 声明的IP地址，告知其他服务如果要请求过来，应该请求该ip
    ip-address: 192.168.8.190
    # 声明当前注册的实例id
    instance-id: ${eureka.instance.ip-address}:${spring.application.name}:${server.port}
```
