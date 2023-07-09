---
title: UpdateByQuery API
category: ElasticSearch
tag:
  - ElasticSearch
---

## Term查询并更新指定字段

```http request
POST /{index_name}/_update_by_query

{
    "query": {
        "term": {
            "username": "wuhu"
        }
    },
    "script": {
        "source": "ctx._source.status = 1"
    }
}
```

## Term查询并删除

```http request
POST /{index_name}/_update_by_query

{
    "query": {
        "term": {
            "username": "ylz"
        }
    },
    "script": {
        "source": "ctx.op = 'delete'"
    }
}
```
