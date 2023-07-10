---
title: Search API
category: ElasticSearch
tag:
  - ElasticSearch
---

## 无匹配条件查询

```http request
GET /{index_name}/_search

{
    "from": 10,
    "size": 20,
    "sort": [
        {"startTime": "desc"},
        {"id": "desc"}
    ],
    // "_source": false,
    "_source": {
        "excludes": [
            "name"
        ],
        "includes": [
            "id"
        ]
    }
}
```

**参数说明：**
- from：从第几条数据开始查找，默认0，最大10000
- size：返回数据条数，默认10，最大10000
- sort：按照字段排序
- _source：是否查询出数据，如果false，则只返回document的_index、_id、_score、sort字段
  - excludes：数组，数组内指定返回的数据中不包含哪些字段
  - includes：数组，数组内指定返回的数据中要包含哪些字段

## Term查询

```http request

```
