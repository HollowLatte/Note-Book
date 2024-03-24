---
title: Spring Bean 生命周期
author:
category: Spring
tag: Spring
date: 2024-03-23
---

## 过程

Bean的创建的过程都依赖于`AbstractAutowireCapableBeanFactory`这个类，而销毁主要依赖`DisposableBeanAdapter`这个类

**具体顺序：**

1. **实例化Bean：**
    * Spring容器首先创建Bean实例。
    * `AbstractAutowireCapableBeanFactory.createBeanInstance`
2. **设置属性值:**
    * Spring容器注入必要的属性到Bean中
    * `AbstractAutowireCapableBeanFactory.populateBean`
3. **检查Aware:**
    * 如果Bean实现了BeanNameAware、BeanClassLoaderAware等这些Aware接口，Spring容器会调用它们。
    * `AbstractAutowireCapableBeanFactory.initializeBean`
4. **用BeanPostProcessor的前置处理方法：**
    * 在Bean初始化之前，允许自定义的BeanPostProcessor对Bean实例进行处理，如修改Bean的状态。
      BeanPostProcessor的postProcessBeforeInitialization方法会在此时被调用。
    * `AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsBeforeInitialization`
5. **调用InitializingBean的afterPropertiesSet方法：**
    * 提供一个机会，在所有Bean属性设置完成后进行初始化操作。如果Bean实现了InitializingBean接口，afterPropertiesSet方法会被调用。
    * `AbstractAutowireCapableBeanFactory.invokeInitMethods`
6. **调用自定义init-method方法：**
    * 提供一种配置方式，在配置中指定Bean的初始化方法。如果Bean在配置文件中定义了初始化方法，那么该方法会被调用。
    * `AbstractAutowireCapableBeanFactory.invokeInitMethods`

7. **调用BeanPostProcessor的后置处理方法：**
    * 在Bean初始化之后，再次允许BeanPostProcessor对Bean进行处理。BeanPostProcessor的postProcessAfterInitialization方法会在此时被调用。
    * `AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsAfterInitialization`
8. **注册Destruction回调：**
    * 如果Bean实现了DisposableBean接口或在Bean定义中指定了自定义的销毁方法，Spring容器会为这些Bean注册一个销毁回调，确保在容器关闭时能够正确地清理资源。
    * `AbstractAutowireCapableBeanFactory.registerDisposableBeanIfNecessary`
9. **Bean准备就绪：**
    * Bean已完全初始化，可以开始处理应用程序的请求了。
10. **调用DisposableBean的destroy方法：**
    * 当容器关闭时，如果Bean实现了DisposableBean接口，destroy方法会被调用。
    * `DisposableBeanAdapter.destroy`
11. **调用自定义的destroy-method：**
    * 如果Bean在配置文件中定义了销毁方法，那么该方法会被调用。
    * `DisposableBeanAdapter.destroy`

## 主流程doCreateBean

AbstractAutowireCapableBeanFactory.doCreateBean是上面Bean生命周期的入口

```java
protected Object doCreateBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)
         throws BeanCreationException {

     // Instantiate the bean.
     BeanWrapper instanceWrapper = null;
     if (instanceWrapper == null) {
         instanceWrapper = createBeanInstance(beanName, mbd, args);
     }

     // ...省略

     // Initialize the bean instance.
     Object exposedObject = bean;
     try {
         populateBean(beanName, mbd, instanceWrapper);
         exposedObject = initializeBean(beanName, exposedObject, mbd);
     }
     
     // ...省略

     // Register bean as disposable.
     try {
         registerDisposableBeanIfNecessary(beanName, bean, mbd);
     }

     return exposedObject;
 }
```

关键的方法：

* initializeBean
* registerDisposableBeanIfNecessary

### initializeBean

`AbstractAutowireCapableBeanFactory.initializeBean`中包含了检查Aware、BeanPostProcessor处理、调用afterPropertiesSet

```java
protected Object initializeBean(String beanName, Object bean, @Nullable RootBeanDefinition mbd) {
	invokeAwareMethods(beanName, bean);
	
	Object wrappedBean = bean;
	if (mbd == null || !mbd.isSynthetic()) {
		wrappedBean = applyBeanPostProcessorsBeforeInitialization(wrappedBean, beanName);
	}
	
	try {
		invokeInitMethods(beanName, wrappedBean, mbd);
	}
	catch (Throwable ex) {
		throw new BeanCreationException(
				(mbd != null ? mbd.getResourceDescription() : null), beanName, ex.getMessage(), ex);
	}
	if (mbd == null || !mbd.isSynthetic()) {
		wrappedBean = applyBeanPostProcessorsAfterInitialization(wrappedBean, beanName);
	}
	
	return wrappedBean;
}
```

### registerDisposableBeanIfNecessary

AbstractAutowireCapableBeanFactory会调用到registerDisposableBeanIfNecessary进行注册销毁回调

这里其实会创建一个`DisposableBeanAdapter`对象，该对象实现了Runnable，实现的run方法中调用了一个destroy方法

**DisposableBeanAdapter.destroy：**

```java
public void destroy() {
    // ...省略
  
    if (this.invokeDisposableBean) {
        if (logger.isTraceEnabled()) {
            logger.trace("Invoking destroy() on bean with name '" + this.beanName + "'");
        }
        try {
            ((DisposableBean) this.bean).destroy();
        }
        // ...省略
    }
  
    if (this.invokeAutoCloseable) {
        // ...省略
  
    }
    else if (this.destroyMethods != null) {
        for (Method destroyMethod : this.destroyMethods) {
            invokeCustomDestroyMethod(destroyMethod);
        }
    }
    else if (this.destroyMethodNames != null) {
        for (String destroyMethodName : this.destroyMethodNames) {
            Method destroyMethod = determineDestroyMethod(destroyMethodName);
            if (destroyMethod != null) {
                invokeCustomDestroyMethod(
                        ClassUtils.getInterfaceMethodIfPossible(destroyMethod, this.bean.getClass()));
            }
        }
    }
}
```

**invokeCustomDestroyMethod处会调用在配置中指定的自定义销毁方法**


