---
title: Cardinality和Terms结合使用
author:
category: Elasticsearch
tag: Elasticsearch
---

单独的cardinality和terms聚合已经写过，此处主要讲解两者的嵌套使用

## 分组数据再去重

例如，我们需要统计参加会议最多的前3个用户，并去除重复参加的会议

可以在terms聚合的sort字段中指定子聚合的名称，那么排序结果就会以子聚合的cardinality的value进行排序

相当于SQL：

```sql
SELECT username, COUNT(DISTINCT meetingId) AS meeting_count
FROM tb_user
GROUP BY username
ORDER BY meeting_count DESC LIMIT 3;
```

请求参数如下：

```json
{
  "aggs": {
    "group-by-username": {
      "terms": {
        "field": "username",
        "size": 3,
        "order": {
          "meeting-count": "desc"
        }
      },
      "aggs": {
        "count-meeting-id": {
          "cardinality": {
            "field": "meetingId"
          }
        }
      }
    }
  }
}
```

请求结果：

```json
{
  "aggregations": {
    "group-by-username": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "wuhu",
          "doc_count": 333,
          "count-meeting-id": {
            "value": 25
          }
        },
        {
          "key": "snk",
          "doc_count": 37,
          "count-meeting-id": {
            "value": 15
          }
        },
        {
          "key": "zdp",
          "doc_count": 18,
          "count-meeting-id": {
            "value": 6
          }
        }
      ]
    }
  }
}
```

可以看到，嵌套聚合返回的聚合结果也是有两层。以wuhu用户为例，333是去重前参加会议的总数，25是去重后参加会议的总数。所以如果想要去重后的数据，直接取内层cardinality聚合的value即可