---
title: Excel
author:
category: File
tag: File
---

## Excel写入

注意，Excel不支持并发写入，在并发写入时会产生很多奇怪的问题

## Zip bomb detected问题

Zip炸弹"是一个用于攻击向量的术语，其中一个小的zip文件会扩展为一个非常大的未压缩文件，因此会引起诸如耗尽内存或磁盘空间等问题。

通常，创建此类zip的目的是在从外部来源接收zip文件的系统上引起拒绝服务攻击。

由于`.xlsx`文件实际上是包含XML文件的压缩文件，因此有可能在POI中引起这种zip bomb漏洞。

为了防止这种情况的发生，Apache POI内置了一些防护措施，并且默认情况下启用了这些防护措施。因此，如果您创建的文件包含异常内容，例如如果许多行/列具有相同的内容，则可以使用这些保护措施并出现zip
boom异常。

要去除该防护措施也比较简单：在打开Excel工作簿操作前添加`ZipSecureFile.setMinInflateRatio(0)`
