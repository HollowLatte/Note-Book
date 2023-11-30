---
title: 当前读和快照读
author:
category: MySQL
tag: MySQL
---

## 快照读

普通的SELECT语句在不加锁情况下就是快照读。

```sql
select * from tb where;
```

## 当前读

加锁的 SELECT，或者对数据进行增删改都会进行当前读

```sql
select * from tb LOCK IN SHARE MODE;

select * from tb FOR UPDATE;

insert from tb ...

delete from tb ...

update tb ...
```

## 什么时候会快照读？

- 在 RR 中，快照会在事务中第一次select语句执行时生成，只有在本事务中对数据进行更改才会更新快照。
- 在 RC 中，每次读取都会重新生成一个快照，总是读取行的最新版本。
