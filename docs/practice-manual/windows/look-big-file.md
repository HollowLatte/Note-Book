---
title: 大文本文件处理
author:
category: Windows
tag: Windows
date: 2023-12-24
---

在打开一些大于1G 左右大小的文件时，一些编辑器通常会显示文件过大，也是如此，因此需要使用一些命令来进行文本的查看操作

## 统计文件行数

```bash
Get-Content -Path "filename.txt" | Measure-Object -Line
```

执行后可能会停顿一定时间后才显示结果

## 查看文件指定行数

### 前100行

```bash
Get-Content -Path "filename.txt" -TotalCount 100
```

### 后100行

```bash
Get-Content -Path "filename.txt" -Tail 100
```

### 编码问题

因为Windows的Powershell默认是GBK编码，如果查看文件时中文出现了乱码，需要手动指定编码，如：

```bash
Get-Content -Path "filename.txt" -TotalCount 100 -Encoding utf8
```
