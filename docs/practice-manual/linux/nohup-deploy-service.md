---
title: Nohup部署服务
author:
category: Linux
tag: Linux
---

## nohup

nohup可以将进程放在后台运行，特别是不想用docker时，可以用来部署一些简单的服务

```bash
# 运行collect-report.jar，日志将默认输出到当前目录下的nohup.out文件中
nohup java -jar collect-report.jar &

# 运行collect-report.jar，指定日志输出到当前目录下的info.log文件中
nohup java -jar collect-report.jar > info.log 2>&1 &
```

## 结束nohup进程

使用nohup后，如果想要停掉该服务，先要`ps -ef | grep`查出进程号再用kill结束进程，这样操作比较麻烦

可以结合这几个操作，使用一条命令解决
`ps -ef | grep "collect-report" | grep -v grep | awk '{print $2}' | xargs kill -9`

执行上面的命令即可一条命令结束进程

::: warning
当系统中有同名的服务时需要注意grep会查出多个，会导致错误结束其他进程的问题
:::

## 总结

结合上面，可以编写run.sh、stop.sh脚本来启动、结束服务

例如运行jar包为collect-report.jar的SpringBoot服务

**run.sh**：

```bash
nohup java -jar collect-report.jar > info.log 2>&1 &
```

**stop.sh**:

```bash
ps -ef | grep "collect-report" | grep -v grep | awk '{print $2}' | xargs kill -9
```
