---
title: AQS
author:
category: Java
tag: Java
date: 2024-01-14
---

## 简介

AQS(AbstractQueuedSynchronizer) 抽象队列同步器，AQS 是很多同步器的基础框架，比如 ReentrantLock、CountDownLatch 和 Semaphore
等都是基于 AQS 实现的。除此之外，我们还可以基于 AQS，定制出我们所需要的同步器。

**关键点：**

- 在AQS内部，维护了一个FIFO队列和一个volatile的int类型的state变量。
- 在state=1的时候表示当前对象锁已经被占有了，state变量的值修改的动作通过CAS来完成。
- FIFO队列用来实现多线程的排队工作，当线程加锁失败时，该线程会被封装成一个Node节点来置于队列尾部。
- 当持有锁的线程释放锁时，AQS会将等待队列中的第一个线程唤醒，并让其重新尝试获取锁。
