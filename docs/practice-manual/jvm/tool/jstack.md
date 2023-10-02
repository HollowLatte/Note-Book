---
title: jstack命令
author:
category: JVM
tag: JVM
---

## 应用场景

jstack用于生成java虚拟机当前时刻的线程快照。

生成线程快照的主要目的是定位线程出现长时间停顿的原因，如线程间死锁、死循环、请求外部资源导致的长时间等待等。

线程出现停顿的时候通过jstack来查看各个线程的调用堆栈，就可以知道没有响应的线程到底在后台做什么事情，或者等待什么资源。

## 使用

**jstack的帮助信息如下**：

```bash
Usage:
    jstack [-l] <pid>
        (to connect to running process)
    jstack -F [-m] [-l] <pid>
        (to connect to a hung process)
    jstack [-m] [-l] <executable> <core>
        (to connect to a core file)
    jstack [-m] [-l] [server_id@]<remote server IP or hostname>
        (to connect to a remote debug server)

Options:
    -F  to force a thread dump. Use when jstack <pid> does not respond (process is hung)
    -m  to print both java and native frames (mixed mode)
    -l  long listing. Prints additional information about locks
    -h or -help to print this help message
```

一般先用jps找出对应应用的pid，然后在通过jstack进行操作

对于运行中的应用，使用`jstack -l [pid]`

- l：长列表. 打印关于锁的附加信息,例如属于java.util.concurrent的ownable synchronizers列表.
- m：打印java和native c/c++框架的所有栈信息
- F：当`jstack -l pid`没有响应的时候强制打印栈信息
