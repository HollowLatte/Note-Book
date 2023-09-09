---
title: Retryable失败重试
author:
category: Spring
tag: Spring
---

## 快速入门

1. **引入依赖**：

```xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.retry</groupId>
    <artifactId>spring-retry</artifactId>
</dependency>
```

2. **启动类启用Retryable**： 启动类加上`@EnableRetry`

3. **将@Retryable添加到想要失败重试的方法上**：

```java
@Retryable(retryFor = {EsException.class}, maxAttempts = 3, backoff = @Backoff(500L))
```

## @Retryable常用参数

- retryFor/include：需要重试的异常，**一定要配置，因为该值默认为空**
- maxAttempts：最大重试次数
- backoff：配置重试间隔、重试延迟时间等

## @Retryable不生效

1. 异常类型未被包含，需要确认方法抛出的异常与@Retryable中include是不是同一个Exception
2. 方法不是public，@Retryable默认只作用于public方法上,如果方法不是public则需要额外指定interceptors。
3. 异常被吞没未抛出
