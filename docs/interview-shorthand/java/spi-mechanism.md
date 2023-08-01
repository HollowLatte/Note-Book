---
title: SPI机制
category: Java
tag: Java
---

## SPI

SPI 即 Service Provider Interface ，字面意思就是：“服务提供者的接口”，我的理解是：专门提供给服务提供者或者扩展框架功能的开发者去使用的一个接口。

SPI 将服务接口和具体的服务实现分离开来，将服务调用方和服务实现者解耦，能够提升程序的扩展性、可维护性。修改或者替换服务实现并不需要修改调用方。很多框架都使用了

## Java SPI

Java 的 SPI 机制，比如：Spring 框架、数据库加载驱动、日志接口、以及 Dubbo 的扩展实现等等。

Java 实现 SPI 机制需要依赖 `ServiceLoader`类，它是 JDK 提供的一个工具类

### ServiceLoader

**ServiceLoader的方法签名**：

```java
public final class ServiceLoader<S> implements Iterable<S>
```

ServiceLoader实现了 Iterable 接口。之所以实现了迭代器，是为了方便后续我们能够通过迭代的方式得到对应的服务实现。

ServiceLoader可以看到一个熟悉的常量定义：<br>`private static final String PREFIX = "META-INF/services/";`

## Spring SPI

### SpringFactoriesLoader

SpringFactoriesLoader可以看到一个熟悉的常量定义：<br>
`public static final String FACTORIES_RESOURCE_LOCATION = "META-INF/spring.factories";`
