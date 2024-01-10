---
title: MapStruct问题
category: Java
tag:
  - Java
---

## 与Lombok一起使用时不生效

在pom中，当MapStruct依赖在Lombok依赖前面时，在执行注解处理器期间，
由于Lombok还未生成get、set代码，因此在MapStruct看来，这些类并没有公开的成员变量，也就无从生成用于转换的方法。
