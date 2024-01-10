---
title: 无法启动SpringBoot工程
author:
category: IDEA
tag:
  - IDEA
  - SpringBoot
---

## 问题现象

在服务器上运行jar的SpringBoot一切正常，但是在本地用IDEA运行SpringBoot会一直卡在某个地方无法正常启动

## 问题

可能在源码上打了断点，例如，在Spring Data相关源码中打了断点

## 分析原因

如果在Spring Data相关源码中打了断点，SpringBoot启动时，运行到断点处时可能不会弹出Debug界面，而是一直卡在断点处且无任何提示

## 解决方案

取消断点
