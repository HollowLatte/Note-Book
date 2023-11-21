---
title: Search相关参数
author:
category: Elasticsearch
tag: Elasticsearch
---

## Search常用参数

```json
POST /index_name/_search

{
  "query": {
    "term": {
      "meetingCode": "109654855"
    }
  },
  "from": 1,
  "size": 20,
  "sort": [
    {
      "startTime": "desc"
    },
    {
      "id": "asc"
    }
  ],
  "_source": {
    "excludes": [
      "name",
      "host"
    ],
    "includes": [
      "id"
    ]
  }
}
```

**参数解析：**

- query：search中的查询条件，相当于SQL中的where，也是以后实现多种查询逻辑的地方，此处不展开写
- from：从第几条数据开始查找，默认0，最大值10000（可进行配置）
- size：返回数据条数，默认10，最大值10000（可进行配置）
- sort：按照字段排序，asc升序/desc降序。加上该参数后，查询的返回结果中会带有一个排序字段值的数组
- _source：是否查询出数据，如果false，则只返回document的_index、_id、_score、sort字段
    - excludes：数组，数组内指定返回的数据中不包含哪些字段
    - includes：数组，数组内指定返回的数据中要包含哪些字段
