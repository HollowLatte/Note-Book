---
title: SpringBoot连接数据库失败
author:
category: MySQL
tag: MySQL
---

## 异常信息

当SpringBoot启动时，出现以下的堆栈信息：

```bash
com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure
	at com.mysql.cj.jdbc.exceptions.SQLError.createCommunicationsException(SQLError.java:174) ~[mysql-connector-java-8.0.18.jar:8.0.18]
	at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:64) ~[mysql-connector-java-8.0.18.jar:8.0.18]
	at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:836) ~[mysql-connector-java-8.0.18.jar:8.0.18]
	at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:456) ~[mysql-connector-java-8.0.18.jar:8.0.18]
	at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:246) ~[mysql-connector-java-8.0.18.jar:8.0.18]
```

```bash
Caused by: javax.net.ssl.SSLHandshakeException: No appropriate protocol (protocol is disabled or cipher suites are inappropriate)
	at sun.security.ssl.HandshakeContext.<init>(HandshakeContext.java:172) ~[?:?]
	at sun.security.ssl.ClientHandshakeContext.<init>(ClientHandshakeContext.java:103) ~[?:?]
	at sun.security.ssl.TransportContext.kickstart(TransportContext.java:222) ~[?:?]
	at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:439) ~[?:?]
	at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:417) ~[?:?]
	at com.mysql.cj.protocol.ExportControlled.performTlsHandshake(ExportControlled.java:316) ~[mysql-connector-java-8.0.18.jar:8.0.18]
	at com.mysql.cj.protocol.StandardSocketFactory.performTlsHandshake(StandardSocketFactory.java:188) ~[mysql-connector-java-8.0.18.jar:8.0.18]
```

关键信息其实是：`javax.net.ssl.SSLHandshakeException: No appropriate protocol (protocol is disabled or cipher suites are inappropriate)`

原因：运行的JDK中支持的TLS算法与连接的数据库支持的TLS算法不匹配，或者运行的JDK中支持的TLS算法与数据库所在的服务器支持的TLS算法不匹配

## 排查问题

### 查看JDK支持的TLS协议版本

```java
public static void main(String[] args) throws IOException {
    // 获取默认的 SSLSocketFactory
    SSLSocketFactory socketFactory = (SSLSocketFactory) SSLSocketFactory.getDefault();
    
    // 创建一个临时的 SSLSocket，不连接到任何服务器
    SSLSocket socket = (SSLSocket) socketFactory.createSocket();
    
    // 获取当前 JDK 支持的 TLS 协议版本
    System.out.println("当前 JDK 支持的 TLS 协议版本:");
    Arrays.stream(socket.getSupportedProtocols()).forEach(System.out::println);
}
```

### 查看MySQL支持的TLS协议版本

```sql
SHOW GLOBAL VARIABLES LIKE 'tls_version';
```

### 查看Linux支持的TLS协议版本

```bash
openssl ciphers -v | awk '{print $2}' | sort | uniq
```

## 解决方法

1. 给连接MySQL的jdbc url后面加上`&useSSL=false`（或者`&enabledTLSProtocols=TLSv1.2`）
2. 调整各个端支持的TLS版本
