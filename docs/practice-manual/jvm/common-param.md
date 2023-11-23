---
title: JVM常用参数
author:
category: JVM
tag: JVM
---

## 参数分类

- -D参数是用于设置Java应用程序系统属性(System Properties),会通过System.getProperty()来获取。它不影响JVM本身的行为,主要用于在运行期配置应用程序。
- -X参数主要用于配置JVM自身的行为,比如GC算法、JIT编译器设置等。它直接影响JVM内核层面的设置

-D参数可以在Java程序中通过Properties获取读写,而-X参数实际上改变了JVM的内部实现,不太适合在代码中直接访问。
-D参数会将值传给Properties,生效规则较宽松;而-X参数必须按JVM规定的格式和值范围。

## -D参数

```bash
-Djava.awt.headless=true
-Dfile.encoding=UTF-8
-Duser.language=zh
-Duser.region=CN
-Duser.timezone=Asia/Shanghai
# 开启Proxy，浏览器、POSTMAN可以请求，但是Java去请求的话会报connect timeout，可以尝试使用该参数解决 
-Djava.net.preferIPv4Stack=true
# 指定随机数生成器，避免因为随机数源阻塞的情况导致程序卡死
-Djava.security.egd=file:/dev/./urandom
```

## -X参数

```bash
-Xms1g
-Xmx1g
-XX:+HeapDumpOnOutOfMemoryError
```
