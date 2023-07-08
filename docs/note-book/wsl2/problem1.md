---
title: 参考的对象类型不支持尝试的操作问题
category: Windows
tag:
  - Windows
  - WSL2
---

有时重启电脑后打开WSL2时，会出现**参考的对象类型不支持尝试的操作**的提示

## 原因

如果Winsock LSP DLL被加载到其进程中，则wsl.exe将显示此错误。
最简单的解决方案是对wsl.exe使用WSCSetApplicationCategory WinAPI调用来防止这种情况。
在幕后，该调用在HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WinSock2\Parameters\AppId_Catalog中为wsl.exe创建一个条目。
这告诉Windows不要将LSP DLL加载到wsl.exe进程中。

## 解决方法

### 方法一(临时解决)

```shell
netsh winsock reset
```

### 方法二(永久解决)

下载一个NoLsp.exe的工具，多个链接都可以

```shell
https://github.com/dyingsu/nolsp
https://www.proxifier.com/tmp/Test20200228/NoLsp.exe
http://file2.happyjava.cn/NoLsp.exe
```

下载完成后，以管理员权限打开PowerShell，执行如下命令：

```shell
.\NoLsp.exe {wsl.exe所在目录}

# 例如
.\NoLsp.exe C:\windows\system32\wsl.exe
```




