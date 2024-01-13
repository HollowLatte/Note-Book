---
title: 引入彩色的icon变黑白
author:
category: VuePress
tag: VuePress
date: 2024-01-13
---

## 问题现象

配置在iconfont的icon是彩色的，但是显示在VuePress上，icon的颜色就是黑白的

## 可能原因

icon资源问题

## 问题原因

VuePress是使用Font Class方式引入icon，该方式不支持彩色图标。如果要显示彩色icon，需要Symbol方式，但是VuePress似乎不支持

## 解决方案

待VuePress官方支持
[VuePress icon](https://theme-hope.vuejs.press/zh/guide/interface/icon.html)
