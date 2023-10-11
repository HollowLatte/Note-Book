---
title: JDK安装
author:
category: Linux
tag: Linux
---

## 安装

1. 将下载的JDK tar.gz文件放在一个目录中（推荐/opt或/usr/local）
2. 解压`tar -xzvf openjdk-8u382.tar.gz`
3. 配置JDK环境变量，打开`~/.bashrc`文件，在空白处加上以下内容：
   ```bash
   JAVA_HOME=/jdk-path
   PATH=$PATH:$JAVA_HOME/bin
   export JAVA_HOME PATH
   ```
4. 重新加载配置文件：`source ~/.bashrc`
