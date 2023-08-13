---
title: 创建动态日期索引
author:
category: Elasticsearch
tag: Elasticsearch
---

## 动态日期索引

按照日期的变化创建带有相应日期后缀的索引，例如user-202305、user-202306

这样的索引有利于数据的归档与处理

## 实现动态日期索引

步骤如下：

1. 创建索引的template
   例如：
    ```http request
    PUT /_template/meeting
   
    {
        "index_patterns": [
            "meeting-*"
        ],
        "aliases": {
            "meeting": {}
        },
        "mappings": {
            "properties": {
                // keyword=====================================
                "id": {
                    "type": "keyword"
                },
                "meetingCode": {
                    "type": "keyword"
                },
                // 分词=======================================
                "name": {
                    "type": "text",
                    "analyzer": "ik_max_word"
                }
            }
        },
        "settings": {
            "number_of_shards": 1,
            "number_of_replicas": 0
        }
    }
    ```
2. 获取当前日期，在`meeting-`拼接上日期，如按照月份分索引，则为`meeting-202307`
   ，当使用插入API插入数据时，设置索引为`meeting-202307`，那么ES就会根据匹配到的索引模板来创建索引

## Document API无法使用索引别名进行操作

值得注意的是，使用`/{index_name}/_doc/{_id}`的Document操作时，`{index_name}`不能为索引别名。因为它属于单索引操作

```java
alias [meeting] has more than one index associated with it [meeting-2023-08-10, meeting-2023-08-11, meeting-202308, meeting_v2], 
can't execute a single index op
```

如下的操作都属于单索引操作，因此`{index_name}`都不可为索引别名

```http request
POST /{index_name}/_doc/{_id}

POST /{index_name}/_doc/{_id}

DELETE /{index_name}/_doc/{_id}

GET /{index_name}/_doc/{_id}
```

## 修改与删除操作

如果无法使用Document API进行操作,那么应该如何修改或删除动态日期索引的数据呢？

### 删除操作

可以使用DeleteByQuery API进行数据的删除

### 修改操作

1. 使用UpdateByQuery API进行数据的删除，由于UpdateByQuery API常常需要用到script脚本，当涉及到Document多个字段的修改时，script较为复杂
2. 使用Search和Update Document，先Search查出数据所在的真实索引，再使用真实索引用Update Document操作修改数据
