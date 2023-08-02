---
title: 索引模板Index Template
author:
category: Elasticsearch
tag: Elasticsearch
---

## 索引模板

官方文档：[Elasticsearch Index templates](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-templates.html)

官方文档有以下描述：
Index templates automatically apply settings, mappings, and aliases to new indices. They are most often used to
configure rolling indices for time series data to ensure that each new index has the same configuration as the previous
one. The index template associated with a data stream configures its backing indices. For more information, see Index
Templates.

因此，索引模板通常用于配置按照日期滚动的索引，索引模板结合索引别名就可以实现检索滚动索引。

如，目前有一个user的索引，想要把每天新增的用户存到当天一个新的索引上去，就可以使用索引模板。用来创建user-2023-07-01、user-2023-07-02等等

### 疑问

有人会有疑问，“我不配置索引模板也行啊，每次插入数据的时候定义索引名称不就行了吗？反正插入数据的时候ES会帮我创建索引”

插入数据的时候ES的确会自动创建索引，但是创建出来的索引内字段类型其实并不是我们想要的，例如有些字段需要分词，但是ES自动创建的不会加分词器

所以，索引模板其实就是规定索引字段、索引设置，等插入数据时，ES按照我们预定的模板进行创建。

### 作用

1. 自动创建新索引：当您使用滚动索引或时间序列数据存储时，可能会频繁地创建新索引。使用索引模板可以自动创建新索引，并且新索引会继承模板中的设置和映射规则。
2. 统一索引规则：使用索引模板可以确保所有的索引都遵循相同的设置和映射规则，从而避免了索引配置的不一致性。
3. 简化索引管理：当您需要更改多个索引的设置或映射规则时，使用索引模板可以一次性更改所有的索引。
4. 支持动态映射：索引模板可以使用动态映射规则，可以自动识别新字段并将其添加到映射中，从而减少手动维护映射的工作量。

## Rest API

### 查询模板

```http request
GET /_template/{index_name}
```

### 创建/更新模板

```http request
PUT /_template/{index_name}

{
    "index_patterns": [
        "example-*"
    ],
    // 别名
    "aliases": {
        "example": {},
        "example-new": {}
    },
    "mappings": {
        "properties": {
            "id": {
                "type": "keyword"
            },
            "name": {
                "type": "keyword"
            }
        }
    },
    "settings": {
        "index": {
            "number_of_shards": "5",
            "number_of_replicas": "0"
        }
    }
}
```

其中，`index_patterns`的作用是：当索引名称匹配pattern时，按照当前模板创建索引

## 删除模板

```http request
DELETE /_template/{index_name}
```
