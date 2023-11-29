---
title: 覆盖索引和索引下推
author:
category: MySQL
tag: MySQL
---

## 覆盖索引

覆盖索引（covering index）指一个查询语句的执行只用从索引中就能够取得，不必从数据表中读取。也可以称之为实现了索引覆盖。

### 如何知道是否使用了覆盖索引？

查看EXPLAIN的输出。如果Extra列显示为“Using index”，那么就表示查询使用了覆盖索引

## 索引下推

索引下推(index push down)是 MySQL 5.6引入了一种优化技术，默认开启，索引下推可以认为是解决索引失效带来的效率低的问题的一种手段。

### 举例

现在t_user表有联合索引(name,age)

```sql
select *  from t_user where name like 'L%' and age = 17;
```

根据最左前缀原则。如果查询中的第一个条件（在这里是name字段）使用了范围查询（LIKE '
L%'就是一个范围查询），那么它后面的所有索引字段（在这里是age字段）都无法被利用。所以是使用了索引，但是没有利用好索引

**不用索引下推的执行过程：**

1. 利用索引找出name带'L'的数据行：LiLei、Lili、Lisa、Lucy 这四条索引数据
2. 再根据这四条索引数据中的 id 值，逐一进行回表扫描，从聚簇索引中找到相应的行数据，将找到的行数据返回给MySQL服务端。
3. 在MySQL服务端判断age = 17,进行筛选，最终只留下 Lucy 用户的数据信息。

**使用索引下推的执行过程：**

1. 利用索引找出name带'L'的数据行：LiLei、Lili、Lisa、Lucy 这四条索引数据
2. 根据 age = 17 这个条件，对四条索引数据进行判断筛选，最终只留下 Lucy 用户的数据信息。
   （注意：这一步不是直接进行回表操作，而是根据 age = 17 这个条件，对四条索引数据进行判断筛选）
3. 将符合条件的索引对应的 id 进行回表扫描，最终将找到的行数据返回给MySQL服务端。

比较两种执行过程，可以发现索引下推的方式极大的减少了回表次数

### 如何知道是否使用了索引下推？

当一条SQL使用到索引下推时，explain的执行计划中的extra字段中内容为：Using index condition

### 如何开启/关闭

```sql
-- 关闭索引下推
set optimizer_switch='index_condition_pushdown=off'; 
-- 开启索引下推
set optimizer_switch='index_condition_pushdown=on';		
```
