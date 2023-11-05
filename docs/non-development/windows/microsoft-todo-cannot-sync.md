---
title: Microsoft ToDo无法同步
author:
category: Windows
tag: Windows
---

## 问题

在使用proxy的情况下，Microsoft ToDo、邮件、日历等UWP均无法正常同步。

这是因为：
UWP 是微软在 Windows 10 中引入的新概念，由于所有 UWP 应用均运行在被称为 App Container 的虚拟沙箱环境中，其安全性及纯净度远胜于传统的
EXE 应用。但 App Container 机制同时也阻止了网络流量发送到本机（即 loopback）， 使大部分网络抓包调试工具无法对 UWP
应用进行流量分析。同样的，该机制也阻止了 UWP 应用访问 localhost，即使你在系统设置中启用了proxy，也无法令 UWP
应用访问本地proxy服务器。

## 解决

proxy的General->UWP Loopback，会出现一个`AppContainer Loopback Exemption Utility`，然后找到想要使其走proxy的应用，例如Microsoft
ToDo，就找DisplayName中名称匹配的然后勾选并Save Changes即可
