---
title: DCL双重检查锁问题
author:
category: Java
tag: Java
date: 2024-03-06
---

有一篇关于该问题的论文：[The "Double-Checked Locking is Broken" Declaration](http://www.cs.umd.edu/~pugh/java/memoryModel/DoubleCheckedLocking.html)

## 双重检查锁

未使用volatile的DCL实现：

```java
public class DoubleCheckLockSingleton {
    private static DoubleCheckLockSingleton instance;

    private DoubleCheckLockSingleton() {
    }

    public static DoubleCheckLockSingleton getInstance() {
        if (instance == null) {
            synchronized (DoubleCheckLockSingleton.class) {
                if (instance == null) {
                    instance = new DoubleCheckLockSingleton();
                }
            }
        }
        return instance;
    }
}
```

上面的DCL代码会有延迟初始化问题

## 双重检查锁延迟初始化问题

上面DCL代码的**synchronized代码块**对应的字节码：

```java
10 monitorenter
11 getstatic #2 <DoubleCheckLockSingleton.instance : LDoubleCheckLockSingleton;>
14 ifnonnull 27 (+13)
17 new #3 <DoubleCheckLockSingleton>
20 dup
21 invokespecial #4 <DoubleCheckLockSingleton.<init> : ()V>
24 putstatic #2 <DoubleCheckLockSingleton.instance : LDoubleCheckLockSingleton;>
27 aload_0
28 monitorexit
```

- 21行invokespecial指令可以看做对象的初始化操作，执行该指令后，对象才算new完成
- 24行putstatic指令可以看做是把对象的内存空间指向了instance字段

**因为指令重排的存在，可能21的`invokespecial`指令和24的`putstatic`指令的执行顺序发生了改变，变成先执行`putstatic`
，再执行`invokespecial`**

在并发量大的情况下，执行到putstatic，还未执行invokespecial，此时instance字段指向的对象内存空间是空的，因为对象还未初始化完毕，如果刚好有其他线程过来获取到的instance字段的值会为null，

> 关于对象的初始化等知识可以去看对象的创建过程

上面说的就是双重检查锁可能出现的延迟初始化问题或者叫半初始化问题

## 解决延迟初始化问题

其实只要给instance字段加上volatile关键字禁止指令重排即可
