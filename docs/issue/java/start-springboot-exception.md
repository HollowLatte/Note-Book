---
title: SpringBoot启动失败--Snakeyaml
author:
category: SpringBoot
tag: SpringBoot
---

## 问题现象

启动Springboot项目时，报如下错误：

java.lang.NoSuchMethodError: 'void org.yaml.snakeyaml.LoaderOptions.setMaxAliasesForCollections(int)'

## 排查过程

可能与snakeyaml有关，但是snakeyaml是SpringBoot默认使用的，正常来说snakeyaml依赖应该是没问题的，可能是后面引入的依赖中包含snakeyaml导致的

## 实际原因

最后排查是因为引入了javafaker，javafaker依赖了snakeyaml

```xml

<dependency>
    <groupId>com.github.javafaker</groupId>
    <artifactId>javafaker</artifactId>
    <version>1.0.2</version>
</dependency>
```

## 解决方案

排除掉javafaker的snakeyaml依赖

```xml
<dependency>
    <groupId>com.github.javafaker</groupId>
    <artifactId>javafaker</artifactId>
    <version>1.0.2</version>
    <exclusions>
        <exclusion>
            <groupId>org.yaml</groupId>
            <artifactId>snakeyaml</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```
