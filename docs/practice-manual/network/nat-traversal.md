---
title: 内网穿透
author:
category: Network
tag: Network
date: 2024-01-17
---

## 常用工具

国内（需实名认证）：natapp、花生壳

国外（注册即用）：ngrok

## natapp 使用示例

先在官网注册账号，实名认证开通隧道，获取到authtoken

### Windows

从官网下载官方包natapp.exe后，在该文件目录下创建配置文件config.ini：

```text
# 将本文件放置于natapp同级目录 程序将读取 [default] 段
# 在命令行参数模式如 natapp -authtoken=xxx 等相同参数将会覆盖掉此配置
# 命令行参数 -config= 可以指定任意config.ini文件
[default]
authtoken=41b3ccd5b28e2cc1
log=stdout
loglevel=INFO
```

写好配置文件后，直接运行natapp.exe即可

### Linux

与Windows类似，需要在官网下载natapp包，然后创建 config.ini 文件，将配置信息写入即可。

通过nohup命令启动natapp，将进程挂起，防止进程退出。

在nohup的日志文件中便可以找到分配的外网域名

## ngrok 使用示例

注册账号后，获取到token。根据平台不同，下载不同的包，然后运行即可。