---
title: Zset实现--跳表
author:
category: Redis
tag: Redis
---

## Zset是怎么实现的？

Redis中的ZSet在实现中，有多种结构，大类的话有两种，分别是ziplist(压缩列表)和skiplist(跳跃表)，但是这只是以前，在Redis
5.0中新增了一个listpack（紧凑列表）的数据结构，这种数据结构就是为了替代ziplist的，而在之后Redis
7.0的发布中，在Zset的实现中，已经彻底不在使用zipList了。

当ZSet的元素数量比较少时，Redis会采用ZipList（ListPack）来存储ZSet的数据。
ZipList（ListPack）是一种紧凑的列表结构，它通过连续存储元素来节约内存空间。
当ZSet的元素数量增多时，Redis会自动将ZipList（ListPack）转换为SkipList，以保持元素的有序性和支持范围查询操作。

在这个过程中，Redis会遍历ZipList（ListPack）中的所有元素，按照元素的分数值依次将它们插入到SkipList中，这样就可以保持元素的有序性。

其中，SkipList用来实现有序集合，其中每个元素按照其分值大小在跳表中进行排序。跳表的插入、删除和查找操作的时间复杂度都是 O(log
n)，可以保证较好的性能。

dict用来实现元素到分值的映射关系，其中元素作为键，分值作为值。哈希表的插入、删除和查找操作的时间复杂度都是 O(1)，具有非常高的性能。

## 跳表

跳表也是一个有序链表，相当于在链表的基础上加了索引，例如每隔2个元素建立一个索引，每隔3个元素建立一个索引，以此类推

通过比较大小的方式快速查询到元素

## 为什么ZSet支持高效的范围查询？还可以 O(1) 复杂度获取元素权重值？

支持范围查询，是因为使用了跳表；支持 O(1) 复杂度获取元素权重值，是因为用了哈希表

zset结构体定义如下：

```c
typedef struct zset 
{ 
    dict *dict; 
    zskiplist *zsl;
} zset;
```

- dict存储 member->score 之间的映射关系，所以 ZSCORE 的时间复杂度为 O(1)。
- skiplist 是一个「有序链表 + 多层索引」的结构，查询元素的复杂度是 O(logN)，所以他的查询效率很高。