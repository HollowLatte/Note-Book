---
title: GItHub Push失败
author:
category: Github
tag: Github
---

## 非科学操作

如果proxy无效，也可以使用该方式

通过查询IP地址的网站[ipaddress](https://www.ipaddress.com)，查询下面三个域名的IP，如果有多个IP取一个即可

```text
github.com
github.global.ssl.fastly.net
codeload.Github.com
```

然后将结果写到hosts文件，例如：

```text
140.82.112.4 github.com
151.101.1.194 github.global.ssl.fastly.net
140.82.113.10 codeload.Github.com
```