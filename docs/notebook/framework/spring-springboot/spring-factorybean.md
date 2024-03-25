---
title: Spring FactoryBean
author:
category: Spring
tag: Spring
date: 2024-03-26
---

## 什么是FactoryBean？

`FactoryBean`
是一个接口，用于定义一个工厂Bean，它可以产生某种类型的对象。当在Spring配置文件中定义一个Bean时，如果这个Bean实现了FactoryBean接口，那么Spring容器不直接返回这个Bean实例，而是返回FactoryBean#getObject()
方法所返回的对象。

FactoryBean通常用于创建和管理那些通过普通的bean定义很难或者无法直接创建的对象

以下是几个在源码中的使用案例：

* AOP的ProxyFactoryBean：用于创建基于CGLIB或JDK动态代理的AOP代理对象。这个FactoryBean隐藏了创建代理对象的复杂性，使得开发者可以轻松地通过Spring容器获取到代理后的对象。
* MyBatis的SqlSessionFactoryBean：用于创建SqlSessionFactory实例。这个实例通常用于创建数据库连接和管理SQL映射。
* Dubbo的ReferenceBean：ReferenceBean会给要调用的服务创建一个动态代理对象。这个代理对象负责与远程服务进行通信，封装了网络调用的细节
* Spring的JndiObjectFactoryBean：用于从JNDI上下文中检索和创建对象。

通过实现 FactoryBean，能够很好地与Spring框架集成。这意味着它可以利用Spring的依赖注入，生命周期管理等特性，并且能够被Spring容器所管理。

## 为什么不使用@Bean？

1. FactoryBean可以更深入地与Spring容器集成，例如通过FactoryBean可以实现对象的延迟初始化、单例管理、作用域控制等。而@Bean注解则更多地被用于简化配置。
2. 当需要集成的第三方库不能直接注册到Spring容器中时，可以通过实现FactoryBean接口，将第三方库的实例化代码封装在FactoryBean中，从而使得第三方库的对象可以像普通的Spring
   Bean一样被管理。@Bean注解通常不涉及第三方库的复杂集成逻辑。

## 使用案例

使用`ConnectionFactoryBean`作为FactoryBean，通过它获取到`ConnectionFactory`，然后再通过ConnectionFactory创建Connection

假设每个Connection都需要配置KeepAlive、Timeout，就可以在ConnectionFactory进行直接配置，也可以从配置文件中读取

### ConnectionFactoryBean

实现FactoryBean的类要放入Spring容器才会生效

当从Spring容器获取ConnectionFactory对象时，Spring会调用ConnectionFactoryBean的getObject来创建ConnectionFactory并放入Spring容器

```java
@Component
public class ConnectionFactoryBean implements FactoryBean<ConnectionFactory> {
    @Override
    public ConnectionFactory getObject() throws Exception {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setKeepAlive(true);
        connectionFactory.setTimeout(60);
        return connectionFactory;
    }

    @Override
    public Class<?> getObjectType() {
        return ConnectionFactory.class;
    }
}
```

### ConnectionFactory

```java
@Data
public class ConnectionFactory {
    private Integer timeout;
    private Boolean keepAlive;

    public Connection buildConnection(String name, String url) {
        Connection connection = new Connection();
        // 创建Connection时有默认值的参数
        connection.setKeepAlive(this.keepAlive);
        connection.setTimeout(this.timeout);

        connection.setName(name);
        connection.setUrl(url);
        return connection;
    }
}
```

### Connection

```java
@Data
public class Connection {
    private Integer timeout;
    private Boolean keepAlive;
    private String url;
    private String name;
}
```

### 测试

```java
@Test
void factoryBeanTest() {
   // 使用hutool spring工具
   ConnectionFactory factory = SpringUtil.getBean(ConnectionFactory.class);
   System.out.println(factory);
   
   // 创建Connection
   Connection connection = factory.buildConnection("新连接", "localhost:8080");
   System.out.println(connection);
}
```

输出的结果为：

```text
ConnectionFactory(timeout=60, keepAlive=true)
Connection(timeout=60, keepAlive=true, url=localhost:8080, name=新连接)
```

从输出结果看，发现ConnectionFactory确实是通过ConnectionFactoryBean创建出来了

查看Spring容器内的ConnectionFactoryBean的Bean名称，发现不是`connectionFactoryBean`而是`&connectionFactoryBean`
，这是因为Spring使用`&`符号用于区分 FactoryBean 本身和它所创建的对象

## SqlSessionFactoryBean源码解析

在MyBatis源码中，使用`SqlSessionFactoryBean`读取Spring配置文件中的参数来配置MyBatis的`SqlSessionFactory`

```text
mybatis.config-location=classpath:mybatis-config.xml
mybatis.mapper-locations=classpath:mapper/*.xml
```

// TODO


