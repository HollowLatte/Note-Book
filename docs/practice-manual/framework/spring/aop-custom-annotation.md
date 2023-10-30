---
title: AOP自定义注解
author:
category: Spring
tag: Spring
---

## 前置条件

1. AOP的依赖
    ```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-aop</artifactId>
    </dependency>
    ```

2. `@SpringBootApplication`能扫描到AOP Aspect

## 自定义注解

例如创建一个自定义注解`@Log`

```java
@Aspect
@Component
public class LogAspect {
    @Before("@annotation(log)")
    public void doBefore(Log log) {}

    @After("@annotation(log)")
    public void doAfter(Log log) {}

    @AfterReturning("@annotation(log)")
    public void doAfterReturning(Log log) {}

    @Around("@annotation(log)")
    public Object doAround(ProceedingJoinPoint joinPoint, Log log) {
        try {
            return joinPoint.proceed();
        } catch (Throwable throwable) {
            throw new RuntimeException(e.getMessage());
        }
    }
    
    @AfterThrowing(value = "@annotation(log)", throwing = "e")
    public void doAfterThrowing(Throwable e, Log log) {}
}
```

## 问题

### 为什么不用`@Pointcut`

例如下面使用的@Pointcut的方式来定义切点：

```java
@Pointcut("@annotation(com.example.annotation.Log)")
public void pointcut() {}

@Before("pointcut()")
public void doBefore(Log log) {}
```

那么IDEA会提示错误`Unbound pointcut parameter 'log' `，这样，doBefore方法就无法通过log参数方便地获取@Log的值

如果实在要获取需通过反射的方式获取，较为繁琐，因此，不建议使用@Pointcut定义切点的方式
