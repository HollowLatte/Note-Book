---
title: Docker镜像配置
author:
category: Docker
tag: Docker
---

## 配置Docker镜像源

找到Docker配置文件daemon.json的位置：`/etc/docker/daemon.json`， 若文件不存在则新建一个

加上以下配置：

```json
{
  "registry-mirrors": [
    // 镜像地址
  ]
}
```

## 获取阿里个人镜像源

[阿里容器镜像服务](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

容器镜像服务->镜像工具->镜像加速器->加速器地址

将加速器地址配置到Docker的daemon文件中即可

