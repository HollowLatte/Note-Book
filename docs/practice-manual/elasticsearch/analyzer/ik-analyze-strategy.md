---
title: ik分词策略
author:
category: Elasticsearch
tag: Elasticsearch
---

## 逐字分词和ik分词结合

索引的字段设置如下：

```http request
PUT mx_index

{
    "mappings": {
        "_doc": {
            "properties": {
                "product_name": {
                    "type": "text",
                    "analyzer": "ik_max_word",
                    "fields": {
                        "standard": {
                            "type": "text",
                            "analyzer": "standard"
                        },
                        "keyword": {
                            "type": "keyword",
                            "ignore_above": 256
                        }
                    }
                }
            }
        }
    }
}
```

搜索示例如下：

```http request
GET mx_index/_search

{
  "query": {
    "bool": {
      "should": [
        {
          "match_phrase": {
            "product_name": "科剃"
          }
        },
        {
          "match_phrase": {
            "product_name.standard": "科剃"
          }
        }
      ]
    }
  }
}
```
