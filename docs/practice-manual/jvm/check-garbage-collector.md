---
title: 查看垃圾收集器
author:
category: JVM
tag: JVM
date: 2023-12-12
---

## 查看当前JVM使用垃圾收集器

```bash
java -XX:+PrintCommandLineFlags -version
```

如JDK21，会输出以下信息：

```bash
-XX:ConcGCThreads=3 
-XX:G1ConcRefinementThreads=10 
-XX:GCDrainStackTargetSize=64 
-XX:InitialHeapSize=535119296 
-XX:MarkStackSize=4194304 
-XX:MaxHeapSize=8561908736 
-XX:MinHeapSize=6815736 
-XX:+PrintCommandLineFlags 
-XX:ReservedCodeCacheSize=251658240 
-XX:+SegmentedCodeCache 
-XX:+UseCompressedOops 
-XX:+UseG1GC 
-XX:-UseLargePagesIndividualAllocation
openjdk version "21.0.1" 2023-10-17 LTS
OpenJDK Runtime Environment Zulu21.30+15-CA (build 21.0.1+12-LTS)
OpenJDK 64-Bit Server VM Zulu21.30+15-CA (build 21.0.1+12-LTS, mixed mode, sharing)
```

其中`-XX:+UseG1GC`就表明JDK21默认的垃圾收集器是G1

## 默认垃圾收集器

JDK8：默认垃圾收集器是 Parallel Scavenge（新生代）和 Parallel Old（老年代）。
JDK9~JDK21：默认垃圾收集器是G1


