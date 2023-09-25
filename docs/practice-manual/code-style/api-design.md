---
title: API设计
author:
category: Style
tag: Style
---

## URL

URL 路径不使用大写或驼峰，单词如果需要分隔，统一使用中划线分隔符`-`。

## Header

1. 自定义请求头时，以X开头，X代表eXtended。使用`-`
   分隔单词，每个单词的首字母大写。一般第二个单词代表组织、公司、业务，如果没有的话也可以空着，或者使用U，代表Unique。以下是几个例子：腾讯的`X-TC-Timestamp`、`X-TC-Version`
   ，没有组织信息的`X-Cache`
