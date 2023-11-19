---
title: Hutool导致StackOverflow
author:
category: Troubleshoot
tag: Troubleshoot
---

## 问题症状

日志中显示线程池的一条线程调用栈非常长，并且显示StackOverflow

## 问题排查

1. 栈信息中未找到相应的业务代码调用信息，所以无法定位到具体是哪行源码出了问题，只能通过日志中的上下文大概定位
2. 发现关键字JSONUtil，是hutool包中的JSON序列化工具，初步判断是JSON序列化的问题

去hutool的GitHub仓库，查找JSONUtil的相关issue，看见了关键信息“JSONUtil不支持循环引用”，因此写了段循环引用的代码，也出现了StackOverflow，并且发现业务代码中也有循环引用的代码，破案！

## 解决问题

将所有用到hutool的JSONUtil的地方都替换为fastjson

## 防范措施

1. JSON序列化工具使用成熟稳定的
2. 优化业务的逻辑，避免对象间的循环引用
