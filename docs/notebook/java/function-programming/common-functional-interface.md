---
title: 常见的函数式接口
author:
category: Java
tag: Java
---

## Function

Function 是一个接受一个参数并产生一个结果的函数式接口。它定义了一个名为 apply(T) 的抽象方法，该方法接受一个参数类型为 T
的输入，并返回类型为 R 的结果。可以将 Function 用于将一个值转换为另一个值，或者进行任何需要输入和输出的转换操作。

```java
@FunctionalInterface
public interface Function<T, R> {
    R apply(T t);
}
```

## Supplier

Supplier 是一个不接受参数但生成一个结果的函数式接口。它定义了一个名为 get() 的抽象方法，该方法不接受参数并返回类型为 T
的结果。Supplier 通常用于延迟计算或提供无参构造函数的实例化操作。

```java
@FunctionalInterface
public interface Supplier<T> {
    T get();
}
```

## Consumer

Consumer 是一个接受一个参数并执行某些操作但不返回结果的函数式接口。它定义了一个名为 accept(T) 的抽象方法，该方法接受一个参数类型为
T 的输入，并在内部执行一些操作。Consumer 通常用于需要对输入进行处理而不需要返回结果的情况。

```java
@FunctionalInterface
public interface Consumer<T> {
    void accept(T t);
}
```

## Predicate

Predicate 是一个接受一个参数并返回一个布尔值结果的函数式接口。它定义了一个名为 test(T) 的抽象方法，该方法接受一个参数类型为
T 的输入，并返回一个 boolean 值，表示输入是否符合特定条件。

```java
@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);
}
```
