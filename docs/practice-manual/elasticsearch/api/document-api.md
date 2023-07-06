---
title: 常用Document API
category: ElasticSearch
tag:
  - ElasticSearch
---

## 新增Document并指定_id

```http request
POST /{index_name}/_doc/{_id}
Content-Type: application/json

{
    "id": "ff000",
    "name": "John"
    ...
}
```

## 修改Document部分字段

```http request
POST /{index_name}/_doc/{_id}
Content-Type: application/json

{
    "doc": {
        "name": "Mike"
    }
}
```

## 删除

```http request
DELETE /{index_name}/_doc/{_id}
```

## 查询

```http request
GET /{index_name}/_doc/{_id}
```

## 查询(仅数据)

```http request
GET /{index_name}/_source/{_id}
```

