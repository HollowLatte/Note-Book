---
title: Hutool JSON序列化工具栈溢出
author:
category: Hutool
tag: Hutool
date: 2024-03-22
---

## 背景

在一个AOP切面中有记录日志的逻辑，记录日志时会将对象数据格式化为JSON的格式

## 问题现象

在查看日志时发现有栈溢出StackOverflow，可以大致定位到是切面的格式化JSON操作。因为项目中用Hutool JSON的地方不多，主要用的是fastjson

出现问题的代码为`JSONUtil.toJsonStr(meetingInfo)`

下面是出现StackOverflowError的堆栈（原本生产环境的日志找不到了）：

```text
java.lang.StackOverflowError
	at java.base/java.lang.reflect.Executable.getDeclaredAnnotations(Executable.java:620)
	at java.base/java.lang.reflect.Method.getDeclaredAnnotations(Method.java:802)
	at java.base/java.lang.reflect.AccessibleObject.getAnnotations(AccessibleObject.java:589)
	at cn.hutool.core.annotation.CombinationAnnotationElement.init(CombinationAnnotationElement.java:104)
	at cn.hutool.core.annotation.CombinationAnnotationElement.<init>(CombinationAnnotationElement.java:67)
	at cn.hutool.core.annotation.CombinationAnnotationElement.<init>(CombinationAnnotationElement.java:55)
	at cn.hutool.core.annotation.AnnotationUtil.toCombination(AnnotationUtil.java:94)
	at cn.hutool.core.annotation.AnnotationUtil.getAnnotation(AnnotationUtil.java:180)
	at cn.hutool.core.annotation.AnnotationUtil.hasAnnotation(AnnotationUtil.java:192)
	at cn.hutool.core.bean.PropDesc.isTransientForGet(PropDesc.java:375)
	at cn.hutool.core.bean.PropDesc.isReadable(PropDesc.java:136)
```

## 可能原因

Hutool的JSON格式化工具有bug

## 原因分析

第一时间去了hutool的GitHub issue中查询

发现出现有类似的问题[toJsonStr反序列化产生StackOverflowError](https://github.com/dromara/hutool/issues/3346)

官方给出的原因：
**“在Hutool的JSON中，没有处理循环引用的逻辑。FastJSON中使用$ref来代替循环引用对象，Hutool并不支持这种模式。”**

这就可以说得通了，平时使用fastjson格式并没有出现过该问题，用hutool就出现这个栈溢出问题

### 循环引用案例

有两个类，两个类的字段中都互相有对方

```java
@Data
public class User {
    private String name;
    private Dept dept;
}

@Data
public class Dept {
    private String name;
    private User user;
}

@Test
void test() {
    User user = new User();
    user.setName("张三");

    Dept dept = new Dept();
    dept.setName("技术部");

    user.setDept(dept);
    dept.setUser(user);
    
    // 使用fastjson
    System.out.println(JSON.toJSONString(user));
    // 使用hutool的json工具
    System.out.println(JSONUtil.toJsonStr(user));
}
```

上面的示例代码执行后，fastjson的格式化结果可以正常打印，而hutool的则会出现StackOverflowError，至此找到问题所在

另外出于好奇，也尝试了用Jackson进行了测试，使用`objectMapper.writeValueAsString(user)`

发现**Jackson也会有循环引用导致栈溢出的问题**

## 问题原因

在Hutool的JSON工具中，没有处理循环引用的逻辑。FastJSON中使用$ref来代替循环引用对象，Hutool并不支持这种模式。

## 解决方法

**工具层面：** 使用支持解析循环引用的JSON工具，即fastjson

**代码层面：** 在编写代码时，应该避免对象与对象之间出现循环引用，这样有助于提高代码的可维护性。但是对于遗留的有循环引用的历史代码来说，改动成本大，要JSON序列化就只能用fastjson了
