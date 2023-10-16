---
title: Stream排序
author:
category: Java
tag: Java
---

## 方法

sorted方法有两个重载：

- `Stream<T> sorted()`：默认使用自然序排序， 被排序的元素必须实现Comparable接口
- `Stream<T> sorted(Comparator<? super T> comparator)`：通过Comparator进行排序

## Comparable排序

```java
// 根据实现的Comparable排序一个list
list.stream().sorted()

// 根据实现的Comparable逆序排序一个list
list.stream().sorted(Comparator.reverseOrder())
```

## 单字段排序

```java
// 通过Comparator来指定字段排序
list.stream().sorted(Comparator.comparing(Student::getAge))

// 通过Comparator来指定字段逆序排序
list.stream().sorted(Comparator.comparing(Student::getAge).reversed())
```

## 多字段排序

通过`Comparator<T> thenComparing(Comparator<? super T> other)`实现

```java
// 先以年龄升序，再以id升序
list.stream().sorted(Comparator.comparing(Student::getAge).thenComparing(Student::getId))

// 先以年龄升序，再以id降序
list.stream().sorted(Comparator.comparing(Student::getAge).thenComparing(Student::getId, Comparator.reverseOrder()))
```

## Map排序

```java
Map<String, Integer> map = Map.of("Python", 2435, "Java", 35, "Go", 792);

Map<String, Integer> sortedMap = map.entrySet()
        .stream()
        // 按value升序
        .sorted(Map.Entry.comparingByValue())
        // 按value降序
        .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
        .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (oldValue, newValue) -> oldValue, LinkedHashMap::new));
```

排序后的Map一定要用LinkedHashMap，用HashMap无法保证有序
