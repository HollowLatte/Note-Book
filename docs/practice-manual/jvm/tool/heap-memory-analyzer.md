---
title: 堆内存分析工具MAT
author:
category: JVM
tag: JVM
date: 2024-03-21
---

## MAT

[Eclipse Memory Analyzer](https://eclipse.dev/mat/) 是一个快速且功能丰富的堆分析器，可以帮助发现内存泄漏并减少内存消耗。

MAT对JDK版本有要求，最低需要JDK17，如果环境变量中的配的JDK版本低于17则无法启动

## 配置

配置文件为`MemoryAnalyzer.ini`

**自定义使用JDK版本：**

```bash
-vm
C:\Program Files\Java\jdk-zulu-21\bin
```

**指定MAT的堆大小：**

```bash
-Xms2048m
-Xmx2048m
```

> 如果要打开的hprof文件很大，需要将MAT的堆内存也调大，否则可能无法解析成功

## 使用

### Leak Suspects内存泄露分析

具备自动检测内存泄漏功能，罗列可能存在内存泄漏的问题点。

一般在分析完Dump文件后就会展现，也可以在 MAT 主页 → Leak Suspects

关键是它在分析完后，可以点击它显示的Problem中，找到Keywords下的Details，里面会标记出具体哪些对象、线程可能导致内存泄露

### Dominator Tree查看大对象

展现对象的支配关系图，并给出对象支配内存的大小（支配内存等同于 Retained Heap，即其被 GC 回收可释放的内存大小）

在`Overview->Dominator Tree`中可以显示大对象的树形结构

可以选择分组条件，例如：点击工具栏的Group by result选择Group by class

### Histogram直方图

在`Overview->Histogram`中可以查看直方图

一般在Histogram中`Integer、String、Object[]`会在前几，但是它们3个一般不直接导致内存问题，所以一般忽略这3个

**使用场景：**

有些情况 Dominator tree 无法展现出热点对象，例如Dominator tree 支配内存排名前20的占比均不高，或者按 class 聚合也无明显热点对象，此时
Dominator tree 很难做关联分析判断哪类对象占比高。这时可以使用 Histogram 查看所有对象所属类的分布，快速定位占据 Retained
Heap 大头的类。




