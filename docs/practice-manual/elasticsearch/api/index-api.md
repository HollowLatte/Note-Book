---
title: 常用Index API
category: ElasticSearch
tag:
  - ElasticSearch
---

## 创建索引

```http request
PUT /{index_name}

{
  "mappings": {
    "properties": {
      "id": {
        "type": "keyword"
      },
      "name": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      }
    }
  }
}
```

## 查询索引相关

```http request
### 查询所有索引
GET /_cat/indices?v

### 查询索引字段
GET /{index_name}/_mapping

### 查询索引设置
GET /{index_name}/_mapping
```
