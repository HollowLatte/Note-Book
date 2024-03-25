---
title: AOP的底层实现过程
author:
category: Spring
tag: Spring
date: 2024-03-23
---

大致分析Spring AOP的实现源码

> 版本：Spring：6.0.13 | SpringBoot：3.1.5

## AbstractAutowireCapableBeanFactory.initializeBean

AOP会在bean实例化已完成后，调用`applyBeanPostProcessorsAfterInitialization`时创建代理对象

```java
protected Object initializeBean(String beanName, Object bean, @Nullable RootBeanDefinition mbd) {
    // 调用Aware相关方法
	invokeAwareMethods(beanName, bean);
	
	Object wrappedBean = bean;
	if (mbd == null || !mbd.isSynthetic()) {
	    // 调用BeanPostProcessor的前置处理方法
		wrappedBean = applyBeanPostProcessorsBeforeInitialization(wrappedBean, beanName);
	}
	
	try {
	    // 调用初始化相关方法
		invokeInitMethods(beanName, wrappedBean, mbd);
	}
	catch (Throwable ex) {
		throw new BeanCreationException(
				(mbd != null ? mbd.getResourceDescription() : null), beanName, ex.getMessage(), ex);
	}
	if (mbd == null || !mbd.isSynthetic()) {
	    // 调用BeanPostProcessor的后置处理方法
		wrappedBean = applyBeanPostProcessorsAfterInitialization(wrappedBean, beanName);
	}
	
	return wrappedBean;
}
```

## AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsAfterInitialization

`applyBeanPostProcessorsAfterInitialization`中会遍历所有`BeanPostProcessor`， 然后调用其
`postProcessAfterInitialization`

```java
public Object applyBeanPostProcessorsAfterInitialization(Object existingBean, String beanName)
			throws BeansException {

    Object result = existingBean;
    for (BeanPostProcessor processor : getBeanPostProcessors()) {
        Object current = processor.postProcessAfterInitialization(result, beanName);
        if (current == null) {
            return result;
        }
        result = current;
    }
    return result;
}
```

## AbstractAutoProxyCreator.postProcessAfterInitialization

AOP代理对象的创建就是在AbstractAutoProxyCreator.postProcessAfterInitialization

```java
public Object postProcessAfterInitialization(@Nullable Object bean, String beanName) {
    if (bean != null) {
        Object cacheKey = getCacheKey(bean.getClass(), beanName);
        if (this.earlyProxyReferences.remove(cacheKey) != bean) {
            return wrapIfNecessary(bean, beanName, cacheKey);
        }
    }
    return bean;
}
```

## AbstractAutoProxyCreator.wrapIfNecessary

wrapIfNecessary对传入的bean对象进行判断，如果满足一系列条件，将会调用`AbstractAutoProxyCreator.createProxy`方法来创建代理对象

```java
protected Object wrapIfNecessary(Object bean, String beanName, Object cacheKey) {
    if (StringUtils.hasLength(beanName) && this.targetSourcedBeans.contains(beanName)) {
        return bean;
    }
    // 如果缓存键对应的值为Boolean.FALSE，则直接返回原始对象
    if (Boolean.FALSE.equals(this.advisedBeans.get(cacheKey))) {
        return bean;
    }
    // 如果bean的类型为基础设施类，或者应跳过该类型的代理，则将缓存键对应的值设置为Boolean.FALSE并返回原始对象
    if (isInfrastructureClass(bean.getClass()) || shouldSkip(bean.getClass(), beanName)) {
        this.advisedBeans.put(cacheKey, Boolean.FALSE);
        return bean;
    }

    // 如果存在advice，为bean创建代理对象
    Object[] specificInterceptors = getAdvicesAndAdvisorsForBean(bean.getClass(), beanName, null);
    if (specificInterceptors != DO_NOT_PROXY) {
        // 将缓存键对应的值设置为Boolean.TRUE
        this.advisedBeans.put(cacheKey, Boolean.TRUE);
        // 创建代理对象
        Object proxy = createProxy(
                bean.getClass(), beanName, specificInterceptors, new SingletonTargetSource(bean));
        // 将代理对象的类型与缓存键关联起来
        this.proxyTypes.put(cacheKey, proxy.getClass());
        return proxy;
    }

    // 如果没有advice，将缓存键对应的值设置为Boolean.FALSE并返回原始对象
    this.advisedBeans.put(cacheKey, Boolean.FALSE);
    return bean;
}
```

## AbstractAutoProxyCreator.createProxy

```java
protected Object createProxy(Class<?> beanClass, @Nullable String beanName,
			@Nullable Object[] specificInterceptors, TargetSource targetSource) {
    return buildProxy(beanClass, beanName, specificInterceptors, targetSource, false);
}

private Object buildProxy(Class<?> beanClass, @Nullable String beanName,
			@Nullable Object[] specificInterceptors, TargetSource targetSource, boolean classOnly) {

    if (this.beanFactory instanceof ConfigurableListableBeanFactory clbf) {
        AutoProxyUtils.exposeTargetClass(clbf, beanName, beanClass);
    }

    // 创建ProxyFactory实例，并从当前代理创建器复制配置
    ProxyFactory proxyFactory = new ProxyFactory();
    proxyFactory.copyFrom(this);

    // 如果不强制使用CGLIB代理目标类，根据条件决定是否使用CGLIB代理
    if (proxyFactory.isProxyTargetClass()) {
        // Explicit handling of JDK proxy targets and lambdas (for introduction advice scenarios)
        if (Proxy.isProxyClass(beanClass) || ClassUtils.isLambdaClass(beanClass)) {
            // Must allow for introductions; can't just set interfaces to the proxy's interfaces only.
            for (Class<?> ifc : beanClass.getInterfaces()) {
                proxyFactory.addInterface(ifc);
            }
        }
    }
    else {
        // No proxyTargetClass flag enforced, let's apply our default checks...
        if (shouldProxyTargetClass(beanClass, beanName)) {
            proxyFactory.setProxyTargetClass(true);
        }
        else {
            evaluateProxyInterfaces(beanClass, proxyFactory);
        }
    }

    Advisor[] advisors = buildAdvisors(beanName, specificInterceptors);
    proxyFactory.addAdvisors(advisors);
    proxyFactory.setTargetSource(targetSource);
    customizeProxyFactory(proxyFactory);

    proxyFactory.setFrozen(this.freezeProxy);
    if (advisorsPreFiltered()) {
        proxyFactory.setPreFiltered(true);
    }

    // Use original ClassLoader if bean class not locally loaded in overriding class loader
    ClassLoader classLoader = getProxyClassLoader();
    if (classLoader instanceof SmartClassLoader smartClassLoader && classLoader != beanClass.getClassLoader()) {
        classLoader = smartClassLoader.getOriginalClassLoader();
    }
    return (classOnly ? proxyFactory.getProxyClass(classLoader) : proxyFactory.getProxy(classLoader));
}
```

Spring AOP 是通过代理模式实现的，具体有两种实现方式，
一种是基于Java原生的动态代理，一种是基于cglib的动态代理。对应到代码中就是，分别是`CglibAopProxy`和`JdkDynamicAopProxy`。

Spring AOP 默认使用标准的JDK动态代理进行AOP代理

## 为什么使用类也可以正常实现切面

在平时实现切面时，通常是用类来实现，而不是通过接口。Spring AOP默认用的又是JDK动态代理，需要接口

那么，默认配置下为什么AOP可以正常创建切面呢？

研究后发现，AOP内部做了判断和默认配置

### SpringBoot AOP默认配置

在创建AOP切面时一般需要引入AOP starter `org.springframework.boot:spring-boot-starter-web`

该starter内做了默认配置：`spring.aop.proxy-target-class=true`，为true时使用cglib代理，false使用JDK代理

### 代码处理

在创建代理对象时AbstractAutoProxyCreator.createProxy中调用了buildProxy，在buildProxy中对代理方式进行了判断

```java
if (proxyFactory.isProxyTargetClass()) {
    // Explicit handling of JDK proxy targets and lambdas (for introduction advice scenarios)
    if (Proxy.isProxyClass(beanClass) || ClassUtils.isLambdaClass(beanClass)) {
        // Must allow for introductions; can't just set interfaces to the proxy's interfaces only.
        for (Class<?> ifc : beanClass.getInterfaces()) {
            proxyFactory.addInterface(ifc);
        }
    }
}
else {
    // No proxyTargetClass flag enforced, let's apply our default checks...
    if (shouldProxyTargetClass(beanClass, beanName)) {
        proxyFactory.setProxyTargetClass(true);
    }
    else {
        evaluateProxyInterfaces(beanClass, proxyFactory);
    }
}
```

当`spring.aop.proxy-target-class`为true时会进入if，即使将配置改为false后。else内的shouldProxyTargetClass方法会再判断是否需要用cglib代理
