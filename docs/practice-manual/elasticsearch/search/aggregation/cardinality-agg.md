---
title: Cardinality聚合
author:
category: Elasticsearch
tag: Elasticsearch
---

官方文档：[Cardinality Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-cardinality-aggregation.html)

cardinality聚合用来统计一个字段中不重复的数目，可以用来计算一个字段的基数，比如统计name字段中不重复姓名的个数，就可以使用cardinality聚合。

例如有一个SQL，`select count(distinct name) from user`，cardinality就相当于count(distinct name)的操作

需要注意的是：**cardinality的结果是一个近似值，不是精确值**

## 准确问题

cardinality聚合的精度问题，主要是因为cardinality聚合是基于hash算法实现的，hash算法的结果是有限的，所以当hash算法的结果不够精确时，cardinality聚合的结果就会不准确。

cardinality聚合的精度问题可以通过设置precision_threshold参数来解决，precision_threshold参数最大值是40000，默认是3000

## 请求示例

例如，现在要统计username字段中不重复的个数，并且忽略空字符串

**请求参数如下：**

> 其中`distinct-username`是一个自定义的聚合名称，可以自行命名

```json
{
  "aggs": {
    "distinct-username": {
      "cardinality": {
        "field": "username",
        "missing": ""
      }
    }
  }
}
```

**请求结果如下：**

```json
{
  "took": 48,
  "timed_out": false,
  "_shards": {
    "total": 4,
    "successful": 4,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": {
      "value": 10000,
      "relation": "gte"
    },
    "max_score": null,
    "hits": []
  },
  "aggregations": {
    "distinct-username": {
      "value": 12345
    }
  }
}
```

通过上述定义的聚合名称，可以从结果的aggregations中获取到distinct-username聚合的结果value，即不重复的username的个数。

**注意：**

- 聚合的字段如果是字符串，必须是keyword类型
