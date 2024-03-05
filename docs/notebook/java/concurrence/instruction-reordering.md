---
title: 指令重排
author:
category: JMM
tag: JMM
date: 2024-03-06
---

## 指令重排

在 Java 中，指令重排（Instruction Reordering）是编译器和处理器优化的一种技术。它的目的是通过重新排列指令的执行顺序来提高程序的性能。指令重排可以改变指令在计算机中的执行顺序，但不能改变程序的语义。

指令重排会遵循**as-if-serial**与**happens-before**原则

as-if-serial语义保证了指令重排不会改变程序的执行结果，而happens-before关系和同步机制则限制了指令重排的范围，以确保多线程程序的正确性。

### 指令重排示例

```java
public class InstructionReorderingTest {
    static int x = 0, y = 0;
    static int a = 0, b = 0;

    public static void main(String[] args) throws InterruptedException {
        Set<String> hashSet = new HashSet<>();

        for (int i = 0; i < 1000_0000; i++) {
            x = 0;
            y = 0;
            a = 0;
            b = 0;

            Thread thread1 = new Thread(() -> {
                a = y;
                x = 1;
            });

            Thread thread2 = new Thread(() -> {
                b = x;
                y = 1;
            });

            thread1.start();
            thread2.start();

            thread1.join();
            thread2.join();

            hashSet.add("a=" + a + "," + "b=" + b);
            System.out.println(hashSet);
        }
    }
}
```

单从代码来看，打印出的结果应该是`[a=0,b=0]`
，但是实际上，代码执行过程中因为指令重排，每次执行的指令顺序都有可能不同，所以可能会出现结果`[a=0,b=0, a=1,b=0, a=0,b=1, a=1,b=1]`

如果不想发生这样的指令重排应该如何实现？其实只要给变量加上volatile关键字即可

## as-if-serial

As-if-serial 语义是一种保证单线程程序的行为就像代码按顺序执行一样的概念。它允许编译器和处理器进行优化（如指令重排），但优化不能改变程序执行的最终结果。

as-if-serial语义保证了单线程中，指令重排是有一定的限制的，而只要编译器和处理器都遵守了这个语义，那么就可以认为单线程程序是按照顺序执行的。当然，实际上还是有重排的，只不过我们无须关心这种重排的干扰。

## happens-before

happens-before有以下原则：

1. 程序顺序原则：即在一个线程内必须保证语义串行性，也就是说按照代码顺序执行。
2. 锁规则：解锁（unlock）操作必然发生在后续的同一个锁的加锁（lock）之前，也就是说，如果对于一个锁解锁后，再加锁，那么加锁的动作必须在解锁动作之后(同一个锁)
3. volatile规则：volatile变量的写，先发生于读，这保证了volatile变量的可见性，简单的理解就是，volatile变量在每次被线程访问时，都强迫从主内存中读该变量的值，而当该变量发生变化时，又会强迫将最新的值刷新到主内存，任何时刻，不同的线程总是能够看到该变量的最新值。
4. 线程启动规则：线程的start()方法先于它的每一个动作，即如果线程A在执行线程B的start方法之前修改了共享变量的值，那么当线程B执行start方法时，线程A对共享变量的修改对线程B可见
5. 传递性：A先于B，B先于C那么A必然先于C
6. 线程终止规则：线程的所有操作先于线程的终结，Threadjoin()方法的作用是等待当前执行的线程终止。假设在线程B终止之前，修改了共享变量，线程A从线程B的join方法成功返回后，线程B对共享变量的修改将对线程A可见。
7. 线程中断规则：对线程interrupt()方法的调用先行发生于被中断线程的代码检测到中断事件的发生，可以通过Thread.interrupted(）方法检测线程是否中断。
8. 对象终结规则：对象的构造函数执行，结束先于finalize()方法

其实没有必要特意记住这些原则，大致了解即可


