---
title: 获取ApplicationContext
author:
category: Spring
tag: Spring
date: 2024-03-27
---

获取Spring容器的Bean就要先拿到ApplicationContext

## 通过Aware获取（常用）

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

## AnnotationConfigApplicationContext（测试用）

```java
ApplicationContext context = new AnnotationConfigApplicationContext("./");
```

`AnnotationConfigApplicationContext`的构造函数可以传递包扫描路径
