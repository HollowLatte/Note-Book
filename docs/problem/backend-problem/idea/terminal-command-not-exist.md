---
title: Terminal中命令不存在
author:
category: IDEA
tag: IDEA
date: 2024-01-07
---

## 问题现象

在IDEA或WebSocket的Terminal中输入命令时，出现类似下面的返回：

```bash
无法将“vue”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
```

但是在Windows中直接打开的Terminal中，输入同样命令就是正常的

## 可能原因

1. 命令没有正确安装
2. IDEA、WebStorm中的Terminal的权限不足

## 解决方案

### 切换为CMD

在设置中找到Terminal，默认的Shell path一般为powershell.exe，将其换为cmd.exe

**缺点：** cmd可能些许丑陋

### 以管理员身份运行

找到IDEA、Webstorm的启动exe，右键进入属性->兼容性->以管理员身份运行此程序

**缺点：** 每次启动Webstorm都要点击确认
