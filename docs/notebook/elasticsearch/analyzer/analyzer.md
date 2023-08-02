---
title: 分词
author:
category: Elasticsearch
tag: Elasticsearch
---

通常我们说的ES分词，在ES中称为analyzer，ES有默认的分词器standard，但是对检索中文不友好

## 索引分词

索引分词是指在建立索引时对文本进行分词处理，并将分词结果保存到索引中。在索引文本时，Elasticsearch
会根据设置的分析器对文本进行分词、过滤、标准化等操作，以便后续的搜索和聚合操作。索引分词通常会对文本进行更加精细的分词处理，以提高搜索结果的准确性。

### 添加/修改索引分词器

已经创建的索引是不可以添加或修改分词器的，需要创建一个新的索引，在新的索引上添加分词器。

添加分词器就是在索引的字段中配置`analyzer`属性。

例如，想给name字段配置ik分词器就可以进行如下配置：

```json
{
  "name": {
    "type": "text",
    "analyzer": "ik_max_word"
  }
}
```

## 搜索分词

搜索分词是指在查询时对**输入的关键词**进行分词处理，并将分词结果与索引中的分词结果进行匹配，以找到匹配的文档。在搜索时，Elasticsearch
会根据设置的分析器对查询语句进行分词、过滤、标准化等操作，以便与索引中的分词结果进行匹配。搜索分词通常会对查询语句进行较为宽松的分词处理，以提高搜索结果的召回率。

## 分词验证

可以通过ES提供的Analyzer API来测试分词情况。

测试ES默认的分词效果：

```http request
POST /_analyze

{
    "analyzer": "standard",
    "text": "[asdklad_lxc_qwekqlwn,jsdaisjd,asdasd]"
}
```

测试ik的分词效果：

```http request
POST /_analyze

{
    "analyzer": "ik_smart",
    "text": "我是一个粉刷匠，粉刷本领强。"
}
```
