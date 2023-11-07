---
title: 编程式事务
author:
category: Spring
tag: Spring
---

官方文档先来上：[Programmatic Transaction Management](https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#transaction-programmatic)

Spring提供了两种编程式事务的实现方式：`TransactionTemplate`和`PlatformTransactionManager`。

Spring推荐使用`TransactionTemplate`来管理事务，因为它已经基于`PlatformTransactionManager`
封装了一层操作，可以通过方便地处理自定义事务。而`PlatformTransactionManager`更底层一些

## TransactionTemplate

使用示例：

```java

@Service
public class TransactionTemplateService {
    @Autowired
    private TransactionTemplate transactionTemplate;

    public void update() {
        // 带有返回值的事务
        transactionTemplate.execute(status -> {
            try {
                updateOperation1();
                updateOperation2();
            } catch (Exception e) {
                // 回滚事务
                status.setRollbackOnly();
            }
            return true;
        });

        // 没有返回值的事务
        transactionTemplate.executeWithoutResult(status -> {
            try {
                updateOperation1();
                updateOperation2();
            } catch (Exception e) {
                // 回滚事务
                status.setRollbackOnly();
            }
        });
    }
}
```

其中，`status.setRollbackOnly`用于回滚事务

如果想要设置事务的隔离级别和传播机制，可以直接用TransactionTemplate.setXXX的方式设置，TransactionTemplate是线程安全的。
但是如果在一个类中想要使用不同隔离级别设置的TransactionTemplate，这就需要创建两个不同的TransactionTemplate然后分别设置了

## PlatformTransactionManager

PlatformTransactionManager是TransactionManager的一个常用实现类

使用示例：

```java

@Service
public class PlatformTransactionManagerService {
    @Autowired
    private PlatformTransactionManager transactionManager;

    public void update() {
        DefaultTransactionDefinition def = new DefaultTransactionDefinition();
        def.setName("SomeTxName");
        def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);

        TransactionStatus status = transactionManager.getTransaction(def);
        try {
            updateOperation1();
            updateOperation2();
        } catch (Exception e) {
            // 回滚事务
            transactionManager.rollback(status);
            throw e;
        }
        transactionManager.commit(status);
    }
}
```
