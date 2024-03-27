---
title: MySQL事务相关命令
author:
category: MySQL
tag: MySQL
date: 2024-03-28
---

## 查看隔离级别

**MySQL8：**

* **查看当前会话隔离级别：**`select @@session.transaction_isolation;`或者`select @@transaction_isolation;`

* **查看系统当前隔离级别：**`select @@global.transaction_isolation;`

**MySQL5：**

* **查看当前会话隔离级别：**`select @@tx_isolation;`

* **查看系统当前隔离级别：**`select @@global.tx_isolation;`

## 设置隔离级别

**设置当前会话隔离级别：**
`set session transaction isolation level [read uncommitted | read committed | repeatable read | serializable];`

## 开启/关闭事务

* **关闭自动提交：**`set autocommit=0;`或`set autocommit=off;`

* **开启自动提交：**`set autocommit=1;`或`set autocommit=on;`

* **查看自动提交状态：**`select @@autocommit;`

## 事务执行示例：

基于MySQL8

```sql
-- 开启事务
SET AUTOCOMMIT=0;

-- 插入一条数据
INSERT INTO table (name, age) VALUES ('John Doe', 30);

-- 更新一条数据
UPDATE table SET age = 31 WHERE name = 'John Doe';

-- 提交事务
COMMIT;

-- 回滚事务
ROLLBACK;

-- 设置事务隔离级别
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- 查看事务隔离级别
SELECT @@SESSION.TRANSACTION_ISOLATION;
```
