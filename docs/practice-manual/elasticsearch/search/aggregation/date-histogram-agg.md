---
title: Date Histogram聚合
author:
category: Elasticsearch
tag: Elasticsearch
---

官方文档：[Date histogram aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-datehistogram-aggregation.html)

Date histogram 聚合用于将date类型字段转换为时间间隔，然后将这些时间间隔分组。

例如，现在需要统计每天注册用户的数量，可以用用户注册时间的字段来按天分组。

需要注意的是，官方文档中说明Date histogram聚合的field字段必须是date类型。

> 如果需要分组的字段为long类型的时间戳，也可以通过script来实现分组，但是会有些参数不生效。所以最好还是使用date类型吧

## 请求示例

例如，现在需要统计每天注册用户的数量

请求参数如下：

> 其中`group-by-time`是一个自定义的聚合名称，可以自行命名

```json
{
  "aggs": {
    "group-by-time": {
      "date_histogram": {
        "field": "create_time",
        "calendar_interval": "day",
        "format": "yyyy-MM-dd"
      }
    }
  }
}
```

参数说明：

- `field`：需要分组的字段
- `format`：时间格式
- `calendar_interval`：时间间隔，可选值：`year`, `quarter`, `month`, `week`, `day`, `hour`, `minute`
- `fixed_interval`：如果`calendar_interval`不满足需求，可以通过该字段自定义时间间隔，如半天，则设为12h；半个月，则设为15d

**请求结果如下：**

```json
{
  "aggregations": {
    "group-by-time": {
      "buckets": [
        {
          "key_as_string": "2023-11-10",
          "key": 1699545600000,
          "doc_count": 30
        },
        {
          "key_as_string": "2023-11-11",
          "key": 1699632000000,
          "doc_count": 18
        }
      ]
    }
  }
}
```

请求结果说明：

- `key_as_string`：key通过请求参数的format格式化后的值，如没配置format，则无该返回值
- `key`：时间间隔
- `doc_count`：该时间间隔内的文档数量

## long类型的时间戳分组

如果需要分组的字段为long类型的时间戳，可以通过script来实现分组

需要注意的是，使用long类型的时间戳分组时，format、time_zone参数无效

```json
{
  "aggs": {
    "group-by-time": {
      "date_histogram": {
        "field": "create_time",
        "calendar_interval": "day",
        "script": {
          "source": "Instant.ofEpochMilli(doc['create_time'].value).toEpochMilli()"
        },
        "offset": "+8h"
      }
    }
  }
}
```

注意：

- 在script参数中，可以通过`doc['create_time'].value`获取需要分组的字段的值，然后通过Java实现自己想要的逻辑，但是最后还是要将结果转为数字类型（int/long都可以）
- 如果有时区的问题，可以通过offset参数调整聚合桶的开始时间，或者在script中实现时区转换
