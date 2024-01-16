---
title: WSL2安装
category: Windows
tag: WSL2
---

## 启用WSL2

以下命令都需要以管理员身份执行

1.输入以下命令后重启系统：

`dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`

2.输入以下命令后重启系统：

`dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

3.执行以下命令，将WSL默认版本改为WSL2

`wsl --set-default-version 2`

> 设置 WSL 版本为 WSL2
>
报错时，请访问 [https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel](https://link.zhihu.com/?target=https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel)
> 下载 WSL2 Kernel。

## 安装Linux发行版

安装后在 PowerShell 中执行 wsl -l -v 可以看到当前的发行版是否跑在 WSL2 中，如果显示版本是1...请重复上面的安装步骤。

### Ubuntu（推荐）

在 Microsoft Store 中搜索并进行安装，推荐使用该方式安装

### CentOS

通过GitHub下载：[mishamosher/CentOS-WSL](https://github.com/mishamosher/CentOS-WSL)
自己想要的版本

下载后运行里面的exe文件即可安装

值得注意的是，下载后的CentOS不能使用service或systemctl命令，因此需慎重选择
