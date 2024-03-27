---
title: AOP实现切面
author:
category: Spring
tag: Spring
date: 2024-03-27
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

## 实现自定义注解切面

创建一个自定义注解`@Log`

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

在@Around的方法中需要调用proceed方法才能正常执行被增强方法，否则原目标方法会被阻塞

### 为什么不用`@Pointcut`

@Pointcut的方式定义切点：

```java
@Pointcut("@annotation(com.example.annotation.Log)")
public void pointcut() {}

@Before("pointcut()")
public void doBefore(Log log) {}
```

编译器会提示错误`Unbound pointcut parameter 'log' `，这样，doBefore方法就无法通过log参数方便地获取@Log的值

只能通过反射的方式获取@Log的参数值

## 实现切面

表达式格式：execution(?1 ?2 ?3(?4))

- ?1（可选）：代表方法的访问类型，即public等
- ?2（必须）：代表方法的返回类型
- ?3（必须）：方法的全限定名
- ?4：参数类型
- `*`来匹配任意字符或字符串，`..`匹配任意数量的参数

```java
@Aspect
@Component
public class LogAspect {
    @Pointcut("execution(* com.hollowlatte..*(..))")
    public void pointcut() {}

    @Before("pointcut()")
    public void doBefore() {}

    @After("pointcut()")
    public void doAfter() {}
}
```

### Pointcut示例

* execution(* *(..)): 匹配所有方法。
* execution(* doSomething()): 匹配所有名为 doSomething 的方法。
* execution(* *doSomething()): 匹配所有后缀为 doSomething 的方法。
* execution(public * doSomething()): 匹配所有公共方法名为 doSomething 的方法。
* execution(String doSomething(String, int)): 匹配返回值类型为 String、参数类型为 String 和 int 的方法名为 doSomething
  的方法。
* execution(* doSomething(.. throws Exception)): 匹配所有抛出 Exception 异常的方法名为 doSomething 的方法。

## 其他Pointcut

* within
* this
* target
