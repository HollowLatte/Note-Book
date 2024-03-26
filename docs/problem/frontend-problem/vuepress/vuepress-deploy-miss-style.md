---
title: VuePress部署缺失样式
author:
category: VuePress
tag: VuePress
date: 2024-03-27
---

## 背景

部署VuePress到Vercel平台，之前已经成功部署到GitHub Page

## 问题现象

页面的布局和样式缺失，跟本地打开的完全不同

## 可能原因

Vercel的build过程异常

## 原因分析

查看dist目录的index.html，发现很多资源的前缀为/Note-Book。查看config.ts发现base的配置就是Note-Book，而Note-Book是之前为了部署GitHub
Page而设置的

将base的值改为`/`后，Vercel再次构建，网页就可以正常显示了

## 问题原因

base路径导致样式相关资源加载失败

> 其实在样式加载失败的界面打开开发者工具查看，也能快速发现问题

## 解决方法

将`config.ts`中的`base`的值改为`/`
