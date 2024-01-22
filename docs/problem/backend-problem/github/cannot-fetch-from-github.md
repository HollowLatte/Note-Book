---
title: GitHub Fetch失败
author:
category: Github
tag: Github
date: 2024-01-22
---

## 问题现象

Fetch在GitHub的repo时，出现以下错误：

```
Fetch Failed github: unable to access 'https://github.com/xxx/xxx.git/': Failed to connect to github.com
port 443 after 21174 ms: Couldn't connect to server
```

## 可能原因

proxy问题

## 原因分析

正确开启proxy后，仍会出现该问题，怀疑是git或github问题

## 问题原因

未知

## 解决方法

1. 开关代理后，刷新dns缓存，使用命令`ipconfig /flushdns`

2. 为Git单独进行proxy配置

查看当前安装的Git是否有配置代理：`git config -l --global`

看显示的Git配置是否有配置如下两项：

```bash
http.proxy=127.0.0.1:7890
https.proxy=127.0.0.1:7890
```

如果有配置这两项，则**检查该配置的IP端口是否与proxy工具**的一致，一般proxy工具会显示proxy端口

如果git没有上面的配置，则可以通过如下命令进行配置：

```bash
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```

配置完成后刷新下dns，使用命令`ipconfig /flushdns`
