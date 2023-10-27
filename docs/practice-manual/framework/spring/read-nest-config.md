---
title: 读取嵌套配置
author:
category: Spring
tag: Spring
---

## 读取嵌套配置

例如现在application.yml中有如下的配置：

```yaml
websocket:
  port: 8090
  boss-group:
    threads: 1
  worker-group:
    threads: 12
  heartbeat:
    interval-time: 30
```

那么代码中应该如何配置？使用`@Value`一个个映射过于繁琐，应该使用`@ConfigurationProperties`

以下是读取上面配置对应的实体类：

```java
@Data
@ConfigurationProperties(prefix = "websocket")
public class WebSocketProperties {
    private Integer port;
    private BossGroup bossGroup;
    private WorkerGroup workerGroup;
    private HeartBeat heartBeat;

    @Data
    public static class BossGroup {
        private Integer threads;
    }

    @Data
    public static class WorkerGroup {
        private Integer threads;
    }

    @Data
    public static class HeartBeat {
        private Integer intervalTime;
    }
}
```

使用静态内部类来映射带有子参数的配置


>
> 官方文档也有描述该做法：[Spring Boot Configuration Metadata](https://docs.spring.io/spring-boot/docs/3.1.5/reference/html/configuration-metadata.html#appendix.configuration-metadata.annotation-processor.automatic-metadata-generation.nested-properties)
>
