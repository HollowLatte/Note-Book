---
title: WSL2与Windows的操作
category: WSL2
tag: WSL2
---

## 网络互通

Windows 访问 WSL2 启动的网络服务，可以直接使用 localhost，但是 Linux 访问 Windows 启动的网络服务这种方式就不行了。
例如：WSL2装了MySQL，Windows可以直接用`localhost:3306`访问，但是Windows装了MySQL，WSL2应该如何访问Windows的MySQL呢？

因此，WSL2访问win需要知道IP，可以使用如下脚本获取 Windows 的 IP：

```bash
ip route | grep default | awk '{print $3}'
```

> 值得注意的是，每次重启Windows后，该IP会变化

## 文件系统互通

WSL2 访问 Windows 文件系统依然通过挂载分区的方式，Windows 下的磁盘会被挂载在 /mnt 下，例如 /mnt/c。

而Windows 可以直接在此电脑中像访问C盘、D盘一样访问 Linux。但是会出现文件刷新不及时的问题，有时需要手动刷新才能看见

### 结合Windows Terminal使用

在WSL2中有一个`explorer.exe <path>`的命令，执行该命令后会使用Windows的文件管理器打开指定的WSL2的目录，传输文件十分方便

## Docker

安装原生Docker服务的方式，对于WSL可能是不太友好的，更加推荐使用Docker Desktop的方式

Windows可以通过Docker Desktop直接管理WSL2内的容器
