---
title: Crontab定时任务
author:
category: Linux
tag: Linux
date: 2024-01-16
---

## crontab命令

crontab是Linux系统用来定期执行程序的命令，常用于定时校准时间、备份数据等

常用方式：

```bash
# 查看当前所有定时任务
crontab -l

# 编辑定时任务表
crontab -e

# 清除所有定时任务，慎用！
crontab -r
```

与正常的cron不同，crontab所支持的cron表达式最小单位是分钟，也就是说最快的crontab定时任务也只能1分钟执行一次

## 示例

```bash
# 每15分钟同步一次系统时间
*/15 * * * * ntpdate ntp1.aliyun.com &>/dev/null

# 每天9:00发起一次请求，并将请求结果保存到指定文件
0 9 * * * `curl "www.baidu.com?q=hello" >> /root/info.log`
```

## crontab不生效

### crontab守护线程未开启

使用service、systemctl命令开启服务即可

不同OS的crontab服务名不同，Ubuntu中为cron，CentOS中为crond

### crontab编辑任务表语法错误

一般有语法错误时，在退出编辑表时就会有响应，根据提示修改即可

