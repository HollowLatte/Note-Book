---
title: Spring工具类
author:
category: Java
tag: Java
---

## Spring内置

### AopUtils

```java
// 判断是不是 Spring 代理对象
boolean isAopProxy()

// 判断是不是 jdk 动态代理对象
boolean isJdkDynamicProxy()

// 判断是不是 CGLIB 代理对象
boolean isCglibProxy()

// 获取被代理的目标 class
Class<?> getTargetClass()
```

### AopContext

```java
// 获取当前对象的代理对象
Object currentProxy()
```
