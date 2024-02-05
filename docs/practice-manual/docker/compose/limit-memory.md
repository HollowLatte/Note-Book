---
title: DockerCompose 限制内存使用
author:
category: Docker
tag: Docker
date: 2024-02-05
---

## Docker Compose 限制容器内存占用

官方文档：[Docker Compose Limit](https://docs.docker.com/compose/compose-file/deploy/#resources)

以RocketMQ的docker compose文件为例：

```yaml
version: "3"

services:
  name-server:
    image: apache/rocketmq:5.1.2
    command: ./mqnamesrv
    ports:
      - "9876:9876"
    # 配置资源占用
    deploy:
      resources:
        limits:
          memory: 512m
  broker:
    image: apache/rocketmq:5.1.2
    command: ./mqbroker -n host.docker.internal:9876 -c /home/rocketmq/rocketmq-5.1.2/conf/broker.conf
    volumes:
      - "./broker.conf:/home/rocketmq/rocketmq-5.1.2/conf/broker.conf"
    ports:
      - "9877:9877"
      - "10909:10909"
      - "10911:10911"
      - "10912:10912"
    # 配置资源占用
    deploy:
      resources:
        limits:
          memory: 1g
    depends_on:
      - name-server
```

在每个service中加上`deploy.resources.limits.memory`的配置即可
