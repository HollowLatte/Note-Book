---
title: Fetch失败
author:
category: IDEA
tag: IDEA
---

## 问题现象

点击fetch时，IDEA弹出如下错误：

```bash
unable to read askpass response from 'C:
\Users\WUHU\AppData\Local\JetBrains\IntelliJIdea2023.2\tmp\intellij-git-askpass-local.sh' bash: line 1: /dev/tty: No
such
device or address failed to execute prompt script (exit code 1) could not read Username for 'http://10.50.20.88': No
such file or directory
```

## 原因分析

原因是IDEA的git插件在使用git fetch时，会在本地生成一个临时文件，这个文件会在git fetch结束后被删除。

这个临时文件是用来获取git的用户名和密码的，如果这个文件被删除了，就会导致IDEA无法获取用户名和密码，从而导致fetch失败。

为什么该临时文件会被删除还不清除

## 解决方案

在IDEA的设置中找到Git选项，然后找到`Use credential helper`，将其勾选即可

我猜测该配置的作用应该是从Git 内置的凭据助手中获取认证信息
