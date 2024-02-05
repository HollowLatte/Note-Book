---
title: RocketMQMessageListener注解源码解读
author:
category: RocketMQ
tag: RocketMQ
date: 2024-02-04
---

## RocketMQ-Spring

[RocketMQ-Spring官方wiki](https://github.com/apache/rocketmq-spring/wiki)

RocketMQMessageListener使用的是push模式来接收消息

## 源码

此处的依赖是rocketmq-spring-boot-starter的2.2.3，对应的rocketmq的client是5.0版本，与之前的4.x版本的源码有区别，需要注意

> 研究该注解源码的原因是在使用Redis Stream时对监听消息的操作进行设计，因此想参考RocketMQ源码

### RocketMQMessageListenerBeanPostProcessor

```java
public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
    Class<?> targetClass = AopUtils.getTargetClass(bean);
    RocketMQMessageListener ann = targetClass.getAnnotation(RocketMQMessageListener.class);
    if (ann != null) {
        RocketMQMessageListener enhance = enhance(targetClass, ann);
        if (listenerContainerConfiguration != null) {
            // 将 RocketMQMessageListener 注解修饰的Bean都注册进Container
            listenerContainerConfiguration.registerContainer(beanName, bean, enhance);
        }
    }
    return bean;
}
```

```java
public void registerContainer(String beanName, Object bean, RocketMQMessageListener annotation) {
    // ...省略
    DefaultRocketMQListenerContainer container = genericApplicationContext.getBean(containerBeanName,
            DefaultRocketMQListenerContainer.class);
    if (!container.isRunning()) {
        try {
            container.start();
        } catch (Exception e) {
            log.error("Started container failed. {}", container, e);
            throw new RuntimeException(e);
        }
    }
    
    log.info("Register the listener to container, listenerBeanName:{}, containerBeanName:{}", beanName, containerBeanName);
}
```

通过`container.start()`继续往下看

### DefaultRocketMQListenerContainer

```java
public void start() {
    if (this.isRunning()) {
        throw new IllegalStateException("container already running. " + this.toString());
    }

    try {
        consumer.start();
    } catch (MQClientException e) {
        throw new IllegalStateException("Failed to start RocketMQ push consumer", e);
    }
    this.setRunning(true);

    log.info("running container: {}", this.toString());
}
```

从`consumer.start();`继续往下

### DefaultMQPushConsumer

从这里的类名便可以看出RocketMQMessageListener使用的是push模式

```java
public void start() throws MQClientException {
    setConsumerGroup(NamespaceUtil.wrapNamespace(this.getNamespace(), this.consumerGroup));
    this.defaultMQPushConsumerImpl.start();
    if (null != traceDispatcher) {
        try {
            traceDispatcher.start(this.getNamesrvAddr(), this.getAccessChannel());
        } catch (MQClientException e) {
            log.warn("trace dispatcher start failed ", e);
        }
    }
}
```

### DefaultMQPushConsumerImpl

```java
public synchronized void start() throws MQClientException {
    switch (this.serviceState) {
        case CREATE_JUST:
            // ...省略
        
            // 启动RocketMQ的Client
            mQClientFactory.start();
            log.info("the consumer [{}] start OK.", this.defaultMQPushConsumer.getConsumerGroup());
            this.serviceState = ServiceState.RUNNING;
            break;
        case RUNNING:
        case START_FAILED:
        case SHUTDOWN_ALREADY:
            throw new MQClientException("The PushConsumer service state not OK, maybe started once, "
                + this.serviceState
                + FAQUrl.suggestTodo(FAQUrl.CLIENT_SERVICE_NOT_OK),
                null);
        default:
            break;
    }
    
    this.updateTopicSubscribeInfoWhenSubscriptionChanged();
    this.mQClientFactory.checkClientInBroker();
    this.mQClientFactory.sendHeartbeatToAllBrokerWithLock();
    this.mQClientFactory.rebalanceImmediately();
}
```

关键的来了`mQClientFactory.start();`

### MQClientInstance

这个MQClientInstance.start的方法中，可以大致看出Client连接到RocketMQ后进行的实际操作。如启动拉取消息服务、启动推送消息服务

```java
public void start() throws MQClientException {

    synchronized (this) {
        switch (this.serviceState) {
            case CREATE_JUST:
                this.serviceState = ServiceState.START_FAILED;
                // If not specified,looking address from name server
                if (null == this.clientConfig.getNamesrvAddr()) {
                    this.mQClientAPIImpl.fetchNameServerAddr();
                }
                // Start request-response channel
                this.mQClientAPIImpl.start();
                // Start various schedule tasks
                this.startScheduledTask();
                // Start pull service
                this.pullMessageService.start();
                // Start rebalance service
                this.rebalanceService.start();
                // Start push service
                this.defaultMQProducer.getDefaultMQProducerImpl().start(false);
                log.info("the client factory [{}] start OK", this.clientId);
                this.serviceState = ServiceState.RUNNING;
                break;
            case START_FAILED:
                throw new MQClientException("The Factory object[" + this.getClientId() + "] has been created before, and failed.", null);
            default:
                break;
        }
    }
}
```

接收消息的关键就在这里`this.pullMessageService.start();`

但是直接点击start方法会跳转到`ServiceThread`类，这并不是pullMessageService实际执行的逻辑，实际执行的逻辑在PullMessageService.run内

### PullMessageService

```java
public void run() {
    log.info(this.getServiceName() + " service started");

    while (!this.isStopped()) {
        try {
            // 从LinkedBlockingQueue中阻塞获取消息
            MessageRequest messageRequest = this.messageRequestQueue.take();
            // 处理消息
            if (messageRequest.getMessageRequestMode() == MessageRequestMode.POP) {
                this.popMessage((PopRequest)messageRequest);
            } else {
                this.pullMessage((PullRequest)messageRequest);
            }
        } catch (InterruptedException ignored) {
        } catch (Exception e) {
            log.error("Pull Message Service Run Method exception", e);
        }
    }

    log.info(this.getServiceName() + " service end");
}
```

这下便可以清晰看到，拉取消息其实是通过一个while循环进行拉取的
