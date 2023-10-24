---
title: Maven引用子工程打包失败问题
author:
category: Maven
tag: Maven
---

## 问题

```bash
springboot-demo
│
├─springboot-cache
├─springboot-database
└─springboot-start
```

如上，有一个父工程springboot-demo，springboot-start是带有SpringBoot启动类的子工程，另外两个是无启动类的基础组件工程，

当springboot-start引用springboot-database或springboot-cache工程时，可以正常启动项目，但是进行maven
package操作时就会报错，找不到引用的springboot-database或springboot-cache

## 解决方法

对springboot-demo父工程执行maven的`clean`、`install`操作，然后再执行import project即可  
