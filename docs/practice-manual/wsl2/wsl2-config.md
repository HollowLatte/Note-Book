---
title: WSL2的配置
category: Windows
tag: WSL2
---

## 设置默认用户

WSL2的Ubuntu在win登入时，默认不是root用户，可以编辑 /etc/wsl.conf，添加以下配置

```bash
[user]
default=用户名
```

## SSH连接

### 配置SSH

在`/etc/ssh/sshd_config`进行以下配置才能正常使用：

```Bash
port 2222
PermitRootLogin yes
PasswordAuthentication yes
```

> 注意，WSL2的SSH端口不能为22，因为WSL2和Windows共享端口，Windows提前占用了22，因此WSL的22端口会失效的

配置后，需要开启或重启SSH服务

### 开启SSH服务

以Ubuntu为例，执行`service ssh start`开启ssh服务，可能会出现开始失败的提示，如下：

sshd: no hostkeys available -- exiting.

解决：执行`ssh-keygen -A`
