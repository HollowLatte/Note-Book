---
title: 索引别名alias
author:
category: Elasticsearch
tag: Elasticsearch
---

## 索引别名特点

- 一个别名可以指向一个或多个索引,一个索引也可以被多个别名指向。
- 别名被设计用来应对索引的创建、删除和重命名,使引用变得更方便。
- 别名可以动态地指向不同的索引,也就是说即使索引名称改变,使用别名的代码不需要修改。

## 使用场景

当需要按照日期变更创建索引时，使用template和别名结合便可以轻松实现。

## 别名无法使用的情况

例如现在有两个索引user-202305、user-202306，两个索引的别名都是user

当查询数据时设置查询的索引名称为user时是没有问题的，ES会去user-202305、user-202306中查询数据

但是，当使用别名user去新增、修改、删除Document时，默认情况下会有以下异常

```java
no write index is defined for alias [user]. The write index may be explicitly disabled using is_write_index=false or the alias points to multiple indices without one being designated as a write index
```

因此，默认情况下是不可以使用索引的别名进行写数据等操作的。不过大部分情况下索引的别名都只用来搜索，所以不用特别设置
