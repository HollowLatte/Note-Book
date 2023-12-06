---
title: Arthas离线安装
author:
category: Linux
tag: Linux
---

离线安装需要完整的包，下载GitHub仓库中的arthas-bin.zip即可
[Arthas](https://github.com/alibaba/arthas/releases)

## Linux安装

解压后，修改目录中install-local.sh文件权限：`chmod 777 install-local.sh`，然后执行该脚本进行本地安装

安装成功后，会有提示`install to local succeeded.`

然后就可以使用`java -jar /arthas-bin/arthas-boot.jar`来启动arthas了。

注意：不要将arthas-boot.jar移出解压的目录，否则仍需要联网下载依赖。

## Docker安装

同样也需要解压修改install-local.sh文件权限

如果Docker和当前宿主机有挂载目录，可以放在挂载目录中进行运行，没有的话就要复制到docker容器中

```bash
# 前一个路径是宿主机，后一个路径是容器
docker cp ./arthas-bin <container-id>:/home/arthas-bin
```

然后使用即可`docker exec -it <container-id> sh -c "java -jar /home/arthas-bin/arthas-boot.jar"`
