---
title: ik分词使用
author:
category: Elasticsearch
tag: Elasticsearch
---

## 索引最大化分词，搜索智能分词

索引时用ik_max_word，在搜索时用ik_smart。 这是常见的分词策略 ,可以应对大部分场景

## 添加自定义分词

自定义分词配置文件：

在ES的plugins目录下，`plugins->ik->config->IKAnalyzer.cfg.xml`

该xml应该会有以下内容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
<properties>
    <comment>IK Analyzer 扩展配置</comment>
    <!--用户可以在这里配置自己的扩展字典 -->
    <entry key="ext_dict">custom1.dic;custom2.dic</entry>
    <!--用户可以在这里配置自己的扩展停止词字典-->
    <entry key="ext_stopwords"></entry>
    <!--用户可以在这里配置远程扩展字典 -->
    <!-- <entry key="remote_ext_dict">words_location</entry> -->
    <!--用户可以在这里配置远程扩展停止词字典-->
    <!-- <entry key="remote_ext_stopwords">words_location</entry> -->
</properties>
```

例如，我在` <entry key="ext_dict">`处配置了两个自定义的词库custom1.dic和custom2.dic，多个词库用分号分隔

配置了之后，在`IKAnalyzer.cfg.xml`的同级目录下就要创建custom1.dic和custom2.dic两个词库了

词库内就写入想要的词，格式如下：

```plain
词语1
词语2
```
