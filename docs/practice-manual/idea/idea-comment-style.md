---
title: 注释的风格
author:
category: IDEA
tag: IDEA
---

## 单行注释

IDEA默认的单行注释风格不太好看，双//会在行首

修改单行注释风格：

Settings -> Editor -> Code Style -> Java -> Code Generation -> Comment Code

* 将`Line comment at first column`选项取消，双//就不会在行首，而会出现在被注释的代码前
* 将`Add a space at line comment start`选项勾选，会在//后加上一个空格，会更美观

> 不止Java，其他语言的单行注释也可进行类似配置
