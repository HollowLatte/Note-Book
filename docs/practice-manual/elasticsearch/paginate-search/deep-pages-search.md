---
title: 深分页查询
author:
category: Elasticsearch
tag: Elasticsearch
---

## 什么是深分页？

深分页是指在搜索结果中获取大量数据时所遇到的性能问题和解决方案。ES默认情况下，对于大型结果集，使用传统的偏移量(from)和限制(
limit)方式进行分页查询可能会导致性能下降。

并且默认情况下，ES的from和size最大值都为10000，即默认情况下最多查询2万的数据

## 深分页解决方案

ES的深分页问题可以通过使用游标（scroll）或搜索后深度分页（search after）来解决。其中，ES官方已不推荐使用scroll的方式，目前推荐的是search
after的方式

[Search After官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/paginate-search-results.html#search-after)

## Search After

Search After的本质其实是将数据排序，然后根据每页最后一条数据的排序值去获取下一页的数据。

因此，使用Search After时，排序字段的选择很关键，需要区分度高，并且排序值不重复。通常可以选择数据的创建时间与数据id共同作为排序值

