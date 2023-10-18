---
title: RocketMQ部署
author:
category: RocketMQ
tag: RocketMQ
---

## Docker Compose

```yaml
version: "3"

services:
  name-server:
    image: apache/rocketmq:5.1.2
    command: ./mqnamesrv
    ports:
      - "9876:9876"
  broker:
    image: apache/rocketmq:5.1.2
    mem_reservation: 1g
    command: ./mqbroker -n host.docker.internal:9876 -c /home/rocketmq/rocketmq-5.1.2/conf/broker.conf
    volumes:
      - "./broker.conf:/home/rocketmq/rocketmq-5.1.2/conf/broker.conf"
    ports:
      - "9877:9877"
      - "10909:10909"
      - "10911:10911"
      - "10912:10912"
    depends_on:
      - name-server
  dashboard:
    image: apacherocketmq/rocketmq-dashboard:1.0.0
    environment:
      - JAVA_OPTS=-Drocketmq.namesrv.addr=host.docker.internal:9876
    ports:
      - "9880:8080"
    depends_on:
      - name-server
```

::: warning
remotingServer：监听listenPort配置项指定的监听端口，默认10911
fastRemotingServer：监听端口值listenPort-2，即默认为10909
HAService：监听端口为值为listenPort+1，即10912，该端口用于Broker的主从同步
:::

## broker.conf

```properties
brokerClusterName = DefaultCluster
brokerName = broker-a
brokerId = 0
deleteWhen = 04
fileReservedTime = 48
brokerRole = ASYNC_MASTER
flushDiskType = ASYNC_FLUSH


# Custom config
brokerIP1 = host.docker.internal
brokerIP2 = host.docker.internal
autoCreateTopicEnable=true
```
