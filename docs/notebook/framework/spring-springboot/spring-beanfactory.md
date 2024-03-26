---
title: Spring BeanFactory
author:
category: Spring
tag: Spring
date: 2024-03-26
---

## 什么是BeanFactory？

BeanFactory 是 Spring 框架的核心接口，用于管理 Bean 的实例化和配置。它提供了一系列方法来创建、获取和管理 Bean 实例

其实在开发中可能会经常用到BeanFactory的几个方法：

```java
public interface BeanFactory {
    <T> T getBean(Class<T> requiredType)
    
    Object getBean(String name)
}
```

上面两个方法可以从Spring容器中获取Bean。

实际应用中，其实很少直接用到BeanFactory，而是使用BeanFactory的实现类

如：`ApplicationContext`、`AnnotationConfigApplicationContext`等等

## 使用案例

通过实现`ApplicationContextAware`接口来获取`ApplicationContext`

```java
@Component
public class SpringContextHolder implements ApplicationContextAware {
    private static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContextHolder.applicationContext = applicationContext;
    }

    public static Object getBean(String name) throws BeansException {
        return applicationContext.getBean(name);
    }

    public static <T> T getBean(Class<T> requiredType) throws BeansException {
        return applicationContext.getBean(requiredType);
    }
}
```

## BeanFactory和FactoryBean

BeanFactory是Spring容器的核心接口，用于管理和获取Bean实例，
而FactoryBean是Bean的一种特殊类型，用于创建那些需要特殊处理的Bean。BeanFactory是容器的接口，而FactoryBean是容器中的一个Bean
