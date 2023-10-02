---
title: jps命令
author:
category: JVM
tag: JVM
---

## 原理

jps命令可以显示当前运行的java进程以及相关参数，它的实现机制如下：

java程序在启动以后，会在java.io.tmpdir指定的目录下，就是临时文件夹里，生成一个类似于hsperfdata_User的文件夹，这个文件夹里（在Linux中为/tmp/hsperfdata_
{userName}/），有几个文件，名字就是java进程的pid，因此列出当前运行的java进程，只是把这个目录里的文件名列一下而已。
至于系统的参数什么，就可以解析这几个文件获得。

## 使用

```bash
# 输出应用程序main class的完整package名 或者 应用程序的jar文件完整路径名
jps -l

# 输出传递给JVM的参数
jps -v

# 输出传递给main 方法的参数
jps -m

# 只显示pid，不显示class名称,jar文件名和传递给main 方法的参数
jps -q
```
