---
title: Terms聚合
author:
category: Elasticsearch
tag: Elasticsearch
---

官方文档：[Terms Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html)

Terms聚合是一种将字段的值作为分组的聚合，它将每个值作为一个桶即bucket，并统计每个桶中document的数量。

例如有一个SQL，`select type, count(distinct type) from user group by type`，terms聚合就相当于group by + count的操作

## 请求示例

例如，现在要统计每种type的用户的数量，并且忽略值为空字符的

**请求参数如下：**

> 其中`group-by-type`是一个自定义的聚合名称，可以自行命名

```json
{
  "aggs": {
    "group-by-type": {
      "terms": {
        "field": "type",
        "missing": "",
        "size": 2,
        "order": {
          "_count": "asc"
        }
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
    "group-by-type": {
      "doc_count_error_upper_bound": 50,
      "sum_other_doc_count": 1000,
      "buckets": [
        {
          "key": "CREATE",
          "doc_count": 300
        },
        {
          "key": "SYNC",
          "doc_count": 400
        }
      ]
    }
  }
}
```

通过上述定义的聚合名称，可以从结果的aggregations中获取到分组的key-count数组。

**注意：**

- 聚合的字段如果是字符串，必须是keyword类型

## doc_count_error_upper_bound误差上限

在terms聚合的结果中，有个特殊字段`doc_count_error_upper_bound`，它代表本次聚合中误差范围的上限

如果`doc_count_error_upper_bound`的值大于0，则表示所有桶中document的数量的总数有误，数量可能比实际的值要大。

在上述返回值中，`doc_count_error_upper_bound`的值为50，即表示`300+400 <= 实际的值 <= 300+400+50`

如果想知道每个bucket中的误差上限，可以在请求参数添加`"show_term_doc_count_error": true`
，则返回结果中每个bucket都会有一个`doc_count_error_upper_bound`字段，表示该bucket中的document数量的误差上限

## sum_other_doc_count

sum_other_doc_count 是一个表示未包含在返回桶中的其他文档数量的值，因为上面的请求中的size为2，所以实际上只会返回2个桶，剩下所有未返回的桶的doc_count总数就是sum_other_doc_count

## 根据多个字段分组

常规terms聚合无法通过字段分组这种复杂操作，所以要加入脚本

例如，要统计name、age、city三个字段的组合，可以理解为统计同一个城市里同名、同年龄的人的数量，可以参考使用以下的脚本：

```json
{
  "terms": {
    "script": "doc['name'].value + '-' + doc['age'].value + '-' +doc['city'].value"
  }
}
```
