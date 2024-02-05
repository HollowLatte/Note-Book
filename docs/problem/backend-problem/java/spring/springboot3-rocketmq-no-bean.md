---
title: SpringBoot3整合RocketMQ缺失Bean
author:
category: RocketMQ
tag: RocketMQ
date: 2024-02-05
---

## 问题现象

引入rocketmq-spring-boot-starter依赖后，配置了RocketMQ相关连接参数后，启动SpringBoot失败，异常信息是：缺失`RocketMQTemplate`
的Bean

## 可能原因

以为需要自己手动配置RocketMQTemplate的Bean

## 原因分析

排查步骤：

1. 当使用SpringBoot3以下版本时是正常的，比如SpringBoot2.7版本，引入依赖配置参数后即可正常启动。因此，应该是SpringBoot3版本某些特性导致的
2. 查看SpringBoot3官方文档，在Migration-Guide中找到一个关键的说明：
   [Spring-Boot-3.0-Migration-Guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide#auto-configuration-files)
   ```text
   Spring Boot 2.7 introduced a new META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports file
   for registering auto-configurations, while maintaining backwards compatibility with registration in spring.factories.
   With this release, support for registering auto-configurations in spring.factories using the
   org.springframework.boot.autoconfigure.EnableAutoConfiguration key has been removed in favor of the imports file. Other
   entries in spring.factories under other keys are unaffected.
   ```
3. 上面文档提到的，SpringBoot2.7引入了一个新的imports文件来注册自动配置，并且保持了原本spring.factories的注册自动配置，即两种方式都可以。
   但是SpringBoot3中删除了对spring.factories的注册自动配置的支持。所以翻看 rocketmq-spring-boot-starter
   具体的包，发现确实只有`spring.factories`
   文件，而没有`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`
   文件

## 问题原因

引入的 `rocketmq-spring-boot-starter` 依赖版本为2.2.3，其中并没有很好地支持SpringBoot3，只带了`spring.factories`
注册自动配置的方式，而SpringBoot3只支持通过`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`
文件来注册自动配置

**简单来说，就是SpringBoot3的注册自动配置文件的方式变了，而2.2.3版本的RocketMQ starter还未支持**

## 解决方法

在代码的`resource`目录下创建`META-INF/spring`
这两级目录，再创建名称为`org.springframework.boot.autoconfigure.AutoConfiguration.imports`的文件，内容如下：

```java
org.apache.rocketmq.spring.autoconfigure.RocketMQAutoConfiguration
```

> 上面的其实等效于SpringBoot3以前的`META-INF/spring.factories`
> ```java
> org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
> org.apache.rocketmq.spring.autoconfigure.RocketMQAutoConfiguration
> ```
