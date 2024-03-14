---
title: Kill命令信号
author:
category: Linux
tag: Linux
---

## kill命令

在Linux中终止一个进程有两种方式，如果是前台进程可以使用Ctrl+C键进行终止（其实Ctrl+C也是kill命令）；如果是后台进程，那么需要使用kill命令来终止。

kill 常见的信号量有：

- INT 2 中断（同 Ctrl + C）
- QUIT 3 退出（同 Ctrl + \）
- TERM 15 终止
- KILL 9 强制终止
- CONT 18 继续（与STOP相反， fg/bg命令）
- STOP 19 暂停（同 Ctrl + Z）

手动使用时，常用的信号就是9和15。kill不带信号量时，默认就是15

## kill -9 和 kill -15的区别

kill命令默认的信号就是15，首先来说一下这个默认的kill -15信号。
当使用kill -15时，系统会发送一个SIGTERM的信号给对应的程序。当程序接收到该信号后，具体要如何处理是自己可以决定的。这时候，应用程序可以选择：

- 立即停止程序
- 释放响应资源后停止程序
- 忽略该信号，继续执行程序

因为kill -15信号只是通知对应的进程要进行”安全、干净的退出”，程序接到信号之后，退出前一般会进行一些”准备工作”，如资源释放、临时文件清理等等，如果准备工作做完了，再进行程序的终止。
但是，如果在”准备工作”进行过程中，遇到阻塞或者其他问题导致无法成功，那么应用程序可以选择忽略该终止信号。
这也就是为什么我们有的时候使用kill命令是没办法”杀死”应用的原因，因为默认的kill信号是SIGTERM（15），而SIGTERM（15）的信号是可以被阻塞和忽略的。

和kill -15相比，kill -9就相对强硬一点，系统会发出SIGKILL信号，他要求接收到该信号的程序应该立即结束运行，不能被阻塞或者忽略。
所以，相比于kill -15命令，kill -9在执行时，应用程序是没有时间进行”准备工作”的，所以这通常会带来一些副作用，数据丢失或者终端无法恢复到正常状态等。

## kill在docker中的使用

docker的stop、restart命令默认使用的也是SIGTERM信号即15

stop、restart命令执行后会发送 SIGTERM 信号（终止信号）给容器的主进程，等待一段时间（默认为 10 秒）后，如果容器未能正常停止，则会发送
SIGKILL 信号（强制终止信号）来强制终止容器。
