---
title: JPA批量删除导致OOM
author:
category: JPA
tag: JPA
date: 2024-03-21
---

## 背景

系统定时会清空一个存放日志信息的表，数据平时十几万条，最高时达百万条

> **JDK版本：** 21

> **JPA的版本：** `org.springframework.boot:spring-boot-starter-data-jpa:3.2.3`

## 问题现象

服务宕机，生产日志出现OOM信息

模拟的堆栈如下（原本生产环境的OOM日志找不到了）：

```text
java.lang.RuntimeException: java.lang.OutOfMemoryError: Java heap space

	at org.springframework.data.repository.core.support.RepositoryMethodInvoker$RepositoryFragmentMethodInvoker.lambda$new$0(RepositoryMethodInvoker.java:281)
	at org.springframework.data.repository.core.support.RepositoryMethodInvoker.doInvoke(RepositoryMethodInvoker.java:170)
	at org.springframework.data.repository.core.support.RepositoryMethodInvoker.invoke(RepositoryMethodInvoker.java:158)
	at org.springframework.data.repository.core.support.RepositoryComposition$RepositoryFragments.invoke(RepositoryComposition.java:516)
	at org.springframework.data.repository.core.support.RepositoryComposition.invoke(RepositoryComposition.java:285)
	at org.springframework.data.repository.core.support.RepositoryFactorySupport$ImplementationMethodExecutionInterceptor.invoke(RepositoryFactorySupport.java:628)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.doInvoke(QueryExecutorMethodInterceptor.java:168)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.invoke(QueryExecutorMethodInterceptor.java:143)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.data.projection.DefaultMethodInvokingMethodInterceptor.invoke(DefaultMethodInvokingMethodInterceptor.java:70)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:123)
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:385)
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:137)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.data.jpa.repository.support.CrudMethodMetadataPostProcessor$CrudMethodMetadataPopulatingMethodInterceptor.invoke(CrudMethodMetadataPostProcessor.java:164)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:97)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:220)
	at jdk.proxy2/jdk.proxy2.$Proxy111.deleteAll(Unknown Source)
	at org.example.hijpa.DeleteTest.deleteAllTest(DeleteTest.java:24)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at java.base/java.util.ArrayList.forEach(ArrayList.java:1596)
	at java.base/java.util.ArrayList.forEach(ArrayList.java:1596)
Caused by: java.lang.OutOfMemoryError: Java heap space
	at com.mysql.cj.util.StringUtils.toString(StringUtils.java:1370)
	at com.mysql.cj.result.StringValueFactory.createFromBytes(StringValueFactory.java:149)
	at com.mysql.cj.result.StringValueFactory.createFromBytes(StringValueFactory.java:47)
	at com.mysql.cj.protocol.a.MysqlTextValueDecoder.decodeByteArray(MysqlTextValueDecoder.java:159)
	at com.mysql.cj.protocol.result.AbstractResultsetRow.decodeAndCreateReturnValue(AbstractResultsetRow.java:136)
	at com.mysql.cj.protocol.result.AbstractResultsetRow.getValueFromBytes(AbstractResultsetRow.java:244)
	at com.mysql.cj.protocol.a.result.ByteArrayRow.getValue(ByteArrayRow.java:91)
	at com.mysql.cj.jdbc.result.ResultSetImpl.getString(ResultSetImpl.java:879)
	at com.zaxxer.hikari.pool.HikariProxyResultSet.getString(HikariProxyResultSet.java)
	at org.hibernate.type.descriptor.jdbc.VarcharJdbcType$2.doExtract(VarcharJdbcType.java:118)
```

发现代码中调用了`logRepo.deleteAll()`来删除所有表记录

## 可能原因

没想到删除操作也能OOM

## 原因分析

`logRepo.deleteAll()`中，进入源码后发现调用的实际是`CrudRepository.deleteAll()`

`CrudRepository.deleteAll()`调的又是`SimpleJpaRepository.deleteAll()`

`SimpleJpaRepository.deleteAll()`代码如下：

```java
public void deleteAll() {

    for (T element : findAll()) {
        delete(element);
    }
}
```

看到一个`findAll()`，震惊，删除全部数据前还会全部查出来，数据量一大，当然OOM啊

## 问题原因

JPA提供的deleteAll方法会先查出所有数据，然后一条一条删。如果表数据很多，查全部数据的时候就会OOM了

## 解决方法

不要使用JPA提供的方法，自己通过 **@Query** 来写delete语句
