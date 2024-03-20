---
title: JPA批量删除导致栈溢出SO与慢SQL
author:
category: JPA
tag: JPA
date: 2024-03-20
---

## 背景

MySQL有一张表存放一些第三方应用的回调事件，例如ZOOM的会议回调事件、腾讯会议的会议相关事件

该表数据行数有时能达百万级

> **JDK版本：** 13

> **JPA的版本：** `org.springframework.boot:spring-boot-starter-data-jpa:3.1.5`

## 问题现象

出现栈溢出问题的堆栈：

```text
java.lang.StackOverflowError
	at java.base/java.lang.Class.newInstance(Class.java:590)
	at org.hibernate.hql.internal.ast.SqlASTFactory.create(SqlASTFactory.java:249)
	at antlr.ASTFactory.create(ASTFactory.java:153)
	at antlr.ASTFactory.create(ASTFactory.java:186)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2080)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	at org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)
	...省略
```

另外从发生OOM的堆栈信息附近的异常中，发现代码中使用了JPA中提供的`deleteInBatch(Iterable<T> entities)`方法

## 可能原因

一开始根本想不到

## 原因分析

深入源码后，发现该方法很多坑，不仅会栈溢出，还会有慢SQL问题

### 慢SQL问题

查看JPA源码，发现`deleteInBatch(Iterable<T> entities)`
实际上调用的是`SimpleJpaRepository.deleteInBatch(Iterable<T> entities)`

具体代码：

```java

public void deleteInBatch(Iterable<T> entities) {

    Assert.notNull(entities, "Entities must not be null!");

    if (!entities.iterator().hasNext()) {
        return;
    }

    applyAndBind(getQueryString(DELETE_ALL_QUERY_STRING, entityInformation.getEntityName()), entities, em)
            .executeUpdate();
}
```

applyAndBind是关键方法，继续进入

```java
public static <T> Query applyAndBind(String queryString, Iterable<T> entities, EntityManager entityManager) {
    // ...省略
    String alias = detectAlias(queryString);
    StringBuilder builder = new StringBuilder(queryString);
    builder.append(" where");

    int i = 0;

    while (iterator.hasNext()) {

        iterator.next();

        builder.append(String.format(" %s = ?%d", alias, ++i));

        if (iterator.hasNext()) {
            builder.append(" or");
        }
    }

    Query query = entityManager.createQuery(builder.toString());

    // ...省略
}
```

看上面的代码，可以发现是在拼接SQL语句，重点来了，它每个where条件间是用or拼接的，可能会使索引失效，从而产生慢SQL

拼接出来的语句大概是这样`delete from [table_name] where [criteria] = id or [criteria] = id ...`

### StackOverflow栈溢出问题

查看出现栈溢出的堆栈信息，发现一直在调用一个方法`org.hibernate.hql.internal.antlr.HqlSqlBaseWalker.logicalExpr(HqlSqlBaseWalker.java:2088)`

代码如下：

```java
public final void logicalExpr(AST _t) throws RecognitionException {
    // ...省略
    try {      // for error handling
        if (_t==null) _t=ASTNULL;
        switch ( _t.getType()) {
            case AND:
            {
                // ...省略
            }
            case OR:
            {
                AST __t376 = _t;
                AST tmp24_AST = null;
                AST tmp24_AST_in = null;
                tmp24_AST = astFactory.create((AST)_t); // 对应logicalExpr(HqlSqlBaseWalker.java:2080)
                tmp24_AST_in = (AST)_t;
                astFactory.addASTChild(currentAST, tmp24_AST);
                ASTPair __currentAST376 = currentAST.copy();
                currentAST.root = currentAST.child;
                currentAST.child = null;
                match(_t,OR);
                _t = _t.getFirstChild();
                logicalExpr(_t);  // 对应logicalExpr(HqlSqlBaseWalker.java:2088)
                _t = _retTree;
                astFactory.addASTChild(currentAST, returnAST);
                logicalExpr(_t);
                _t = _retTree;
                astFactory.addASTChild(currentAST, returnAST);
                currentAST = __currentAST376;
                _t = __t376;
                _t = _t.getNextSibling();
                logicalExpr_AST = (AST)currentAST.root;
                break;
            }
        }
    }
}
```

上面的代码已经标记了与异常堆栈中对应的行数。**可以发现`logicalExpr(HqlSqlBaseWalker.java:2088)`
这里发生了递归，为什么要用递归呢？JPA的代码水平就这样吗？**

去查阅相关资料后发现这里的递归是有原因的

logicalExpr方法是一个递归下降解析器的一部分，主要用于解析逻辑表达式并构建对应的抽象语法树（AST），递归结构设计用于处理嵌套的逻辑表达式，例如`A
AND B OR C`或`NOT (A > B)`
等。在解析过程中，函数会根据当前遇到的逻辑运算符或比较运算符调用自身来处理子表达式，
**对于解析逻辑表达式这样的场景，递归是一种非常自然且有效的解决方案**，如果使用非递归方式，比如使用栈来模拟递归调用的过程，但这通常会使代码变得更为复杂

所以，当`deleteInBatch(Iterable<T> entities)`的参数过大时，解析逻辑表达式递归的次数也就越多，当超过栈大小时，就会导致栈溢出了

## 问题原因

通过上面的原因分析就可以知道

**慢SQL问题原因：** JPA拼接delete语句时，where条件之间用的是or，可能会使索引失效，出现慢SQL

**StackOverflow栈溢出问题原因：** JPA提供给用户使用的那些方法中是带有占位符与逻辑表达式的。JPA执行那些方法时，会进行解析逻辑表达式的操作，解析逻辑表达式的过程有递归操作，当参数过多时就会导致栈溢出

## 解决方法

* 不要使用JPA提供的方法，自己通过 **@Query** 来写delete语句
* 如果硬要使用JPA提供的delete方法，一次传的参数不要太多，参数量<=1000一般是没问题的（最好别用JPA提供的相关delete方法，哦不，最好别用JPA🫵）
