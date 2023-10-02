---
title: jmap命令
author:
category: JVM
tag: JVM
---

## 作用

主要用于打印指定Java进程的内存细节。也就是说可以使用jmap生成Heap
Dump。如果程序内存不足或者频繁GC，很有可能存在内存泄露情况，这时候就要借助Java堆Dump查看对象的情况。

堆Dump是反应Java堆使用情况的内存镜像，其中主要包括系统信息、虚拟机属性、完整的线程Dump、所有类和对象的状态等。
一般，在内存不足、GC异常等情况下，我们就会怀疑有内存泄露。这个时候我们就可以制作堆Dump来查看具体情况。分析原因。

## 使用

**jmap的帮助信息如下**：

```bash
Usage:
    jmap [option] <pid>
        (to connect to running process)
    jmap [option] <executable <core>
        (to connect to a core file)
    jmap [option] [server_id@]<remote server IP or hostname>
        (to connect to remote debug server)

where <option> is one of:
    <none>               to print same info as Solaris pmap
    -heap                to print java heap summary
    -histo[:live]        to print histogram of java object heap; if the "live"
                         suboption is specified, only count live objects
    -clstats             to print class loader statistics
    -finalizerinfo       to print information on objects awaiting finalization
    -dump:<dump-options> to dump java heap in hprof binary format
                         dump-options:
                           live         dump only live objects; if not specified,
                                        all objects in the heap are dumped.
                           format=b     binary format
                           file=<file>  dump heap to <file>
                         Example: jmap -dump:live,format=b,file=heap.bin <pid>
    -F                   force. Use with -dump:<dump-options> <pid> or -histo
                         to force a heap dump or histogram when <pid> does not
                         respond. The "live" suboption is not supported
                         in this mode.
    -h | -help           to print this help message
    -J<flag>             to pass <flag> directly to the runtime system
```

option的参数是互斥的(不可同时使用)。

- none：如果使用不带选项参数的jmap打印共享对象映射，将会打印目标虚拟机中加载的每个共享对象的起始地址、映射大小以及共享对象文件的路径全称。这与Solaris的pmap工具比较相似。
- dump：以hprof二进制格式转储Java堆到指定filename的文件中。live子选项是可选的。如果指定了live子选项，堆中只有活动的对象会被转储。想要浏览heap
  dump，你可以使用jhat(Java堆分析工具)读取生成的文件。
- heap：打印一个堆的摘要信息，包括使用的GC算法、堆配置信息和generation wise heap usage。
- histo[:live] ：打印堆的柱状图。其中包括每个Java类、对象数量、内存大小(单位：字节)
  、完全限定的类名。打印的虚拟机内部的类名称将会带有一个'*'前缀。如果指定了live子选项，则只计算活动的对象。
- permstat：打印Java堆内存的永久保存区域的类加载器的智能统计信息。对于每个类加载器而言，它的名称、活跃度、地址、父类加载器、它所加载的类的数量和大小都会被打印。此外，包含的字符串数量和大小也会被打印。

常用方式：

- 查看java 堆（heap）使用情况：`jmap -heap <pid>`
- 查看堆内存(histogram)中的对象数量及大小：`jmap -histo <pid>`，如果使用`jmap -histo:live <pid>`，JVM会先触发gc，然后再统计信息。
- 将内存使用的详细情况输出到文件：`jmap -dump:format=b,file=heapDump <pid>`

## 注意

当运行中的Java应用的JDK与使用jmap命令的JDK版本不同时，可能会使jmap命令出现异常。经测试，JDK17运行的应用，用JDK8中的jmap操作时，会抛出异常
