import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-DmUsX9Nr.js";const t={},o=e(`<h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程"><span>过程</span></a></h2><p>Bean的创建的过程都依赖于<code>AbstractAutowireCapableBeanFactory</code>这个类，而销毁主要依赖<code>DisposableBeanAdapter</code>这个类</p><p><strong>具体顺序：</strong></p><ol><li><p><strong>实例化Bean：</strong></p><ul><li>Spring容器首先创建Bean实例。</li><li><code>AbstractAutowireCapableBeanFactory.createBeanInstance</code></li></ul></li><li><p><strong>设置属性值:</strong></p><ul><li>Spring容器注入必要的属性到Bean中</li><li><code>AbstractAutowireCapableBeanFactory.populateBean</code></li></ul></li><li><p><strong>检查Aware:</strong></p><ul><li>如果Bean实现了BeanNameAware、BeanClassLoaderAware等这些Aware接口，Spring容器会调用它们。</li><li><code>AbstractAutowireCapableBeanFactory.initializeBean</code></li></ul></li><li><p><strong>用BeanPostProcessor的前置处理方法：</strong></p><ul><li>在Bean初始化之前，允许自定义的BeanPostProcessor对Bean实例进行处理，如修改Bean的状态。 BeanPostProcessor的postProcessBeforeInitialization方法会在此时被调用。</li><li><code>AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsBeforeInitialization</code></li></ul></li><li><p><strong>调用InitializingBean的afterPropertiesSet方法：</strong></p><ul><li>提供一个机会，在所有Bean属性设置完成后进行初始化操作。如果Bean实现了InitializingBean接口，afterPropertiesSet方法会被调用。</li><li><code>AbstractAutowireCapableBeanFactory.invokeInitMethods</code></li></ul></li><li><p><strong>调用自定义init-method方法：</strong></p><ul><li>提供一种配置方式，在配置中指定Bean的初始化方法。如果Bean在配置文件中定义了初始化方法，那么该方法会被调用。</li><li><code>AbstractAutowireCapableBeanFactory.invokeInitMethods</code></li></ul></li><li><p><strong>调用BeanPostProcessor的后置处理方法：</strong></p><ul><li>在Bean初始化之后，再次允许BeanPostProcessor对Bean进行处理。BeanPostProcessor的postProcessAfterInitialization方法会在此时被调用。</li><li><code>AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsAfterInitialization</code></li></ul></li><li><p><strong>注册Destruction回调：</strong></p><ul><li>如果Bean实现了DisposableBean接口或在Bean定义中指定了自定义的销毁方法，Spring容器会为这些Bean注册一个销毁回调，确保在容器关闭时能够正确地清理资源。</li><li><code>AbstractAutowireCapableBeanFactory.registerDisposableBeanIfNecessary</code></li></ul></li><li><p><strong>Bean准备就绪：</strong></p><ul><li>Bean已完全初始化，可以开始处理应用程序的请求了。</li></ul></li><li><p><strong>调用DisposableBean的destroy方法：</strong></p><ul><li>当容器关闭时，如果Bean实现了DisposableBean接口，destroy方法会被调用。</li><li><code>DisposableBeanAdapter.destroy</code></li></ul></li><li><p><strong>调用自定义的destroy-method：</strong></p><ul><li>如果Bean在配置文件中定义了销毁方法，那么该方法会被调用。</li><li><code>DisposableBeanAdapter.destroy</code></li></ul></li></ol><h2 id="主流程docreatebean" tabindex="-1"><a class="header-anchor" href="#主流程docreatebean"><span>主流程doCreateBean</span></a></h2><p>AbstractAutowireCapableBeanFactory.doCreateBean是上面Bean生命周期的入口</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">doCreateBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">RootBeanDefinition</span> mbd<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
         <span class="token keyword">throws</span> <span class="token class-name">BeanCreationException</span> <span class="token punctuation">{</span>

     <span class="token comment">// Instantiate the bean.</span>
     <span class="token class-name">BeanWrapper</span> instanceWrapper <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>instanceWrapper <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         instanceWrapper <span class="token operator">=</span> <span class="token function">createBeanInstance</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> mbd<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token comment">// ...省略</span>

     <span class="token comment">// Initialize the bean instance.</span>
     <span class="token class-name">Object</span> exposedObject <span class="token operator">=</span> bean<span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token function">populateBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> mbd<span class="token punctuation">,</span> instanceWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
         exposedObject <span class="token operator">=</span> <span class="token function">initializeBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> exposedObject<span class="token punctuation">,</span> mbd<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     
     <span class="token comment">// ...省略</span>

     <span class="token comment">// Register bean as disposable.</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token function">registerDisposableBeanIfNecessary</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> bean<span class="token punctuation">,</span> mbd<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">return</span> exposedObject<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键的方法：</p><ul><li>initializeBean</li><li>registerDisposableBeanIfNecessary</li></ul><h3 id="initializebean" tabindex="-1"><a class="header-anchor" href="#initializebean"><span>initializeBean</span></a></h3><p><code>AbstractAutowireCapableBeanFactory.initializeBean</code>中包含了检查Aware、BeanPostProcessor处理、调用afterPropertiesSet</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">initializeBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">RootBeanDefinition</span> mbd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">invokeAwareMethods</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token class-name">Object</span> wrappedBean <span class="token operator">=</span> bean<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>mbd <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>mbd<span class="token punctuation">.</span><span class="token function">isSynthetic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		wrappedBean <span class="token operator">=</span> <span class="token function">applyBeanPostProcessorsBeforeInitialization</span><span class="token punctuation">(</span>wrappedBean<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token function">invokeInitMethods</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> wrappedBean<span class="token punctuation">,</span> mbd<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BeanCreationException</span><span class="token punctuation">(</span>
				<span class="token punctuation">(</span>mbd <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> mbd<span class="token punctuation">.</span><span class="token function">getResourceDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span> beanName<span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>mbd <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>mbd<span class="token punctuation">.</span><span class="token function">isSynthetic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		wrappedBean <span class="token operator">=</span> <span class="token function">applyBeanPostProcessorsAfterInitialization</span><span class="token punctuation">(</span>wrappedBean<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> wrappedBean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="registerdisposablebeanifnecessary" tabindex="-1"><a class="header-anchor" href="#registerdisposablebeanifnecessary"><span>registerDisposableBeanIfNecessary</span></a></h3><p>AbstractAutowireCapableBeanFactory会调用到registerDisposableBeanIfNecessary进行注册销毁回调</p><p>这里其实会创建一个<code>DisposableBeanAdapter</code>对象，该对象实现了Runnable，实现的run方法中调用了一个destroy方法</p><p><strong>DisposableBeanAdapter.destroy：</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...省略</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>invokeDisposableBean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>logger<span class="token punctuation">.</span><span class="token function">isTraceEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            logger<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">&quot;Invoking destroy() on bean with name &#39;&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>beanName <span class="token operator">+</span> <span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">DisposableBean</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bean<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...省略</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>invokeAutoCloseable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...省略</span>
  
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>destroyMethods <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> destroyMethod <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>destroyMethods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">invokeCustomDestroyMethod</span><span class="token punctuation">(</span>destroyMethod<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>destroyMethodNames <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> destroyMethodName <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>destroyMethodNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Method</span> destroyMethod <span class="token operator">=</span> <span class="token function">determineDestroyMethod</span><span class="token punctuation">(</span>destroyMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>destroyMethod <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">invokeCustomDestroyMethod</span><span class="token punctuation">(</span>
                        <span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">getInterfaceMethodIfPossible</span><span class="token punctuation">(</span>destroyMethod<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bean<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>invokeCustomDestroyMethod处会调用在配置中指定的自定义销毁方法</strong></p>`,18),p=[o];function i(l,c){return a(),s("div",null,p)}const d=n(t,[["render",i],["__file","bean-lifecycle.html.vue"]]),k=JSON.parse('{"path":"/notebook/framework/spring-springboot/bean-lifecycle.html","title":"Spring Bean 生命周期","lang":"zh-CN","frontmatter":{"title":"Spring Bean 生命周期","author":null,"category":"Spring","tag":"Spring","date":"2024-03-23T00:00:00.000Z","description":"过程 Bean的创建的过程都依赖于AbstractAutowireCapableBeanFactory这个类，而销毁主要依赖DisposableBeanAdapter这个类 具体顺序： 实例化Bean： Spring容器首先创建Bean实例。 AbstractAutowireCapableBeanFactory.createBeanInstance 设...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/notebook/framework/spring-springboot/bean-lifecycle.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Spring Bean 生命周期"}],["meta",{"property":"og:description","content":"过程 Bean的创建的过程都依赖于AbstractAutowireCapableBeanFactory这个类，而销毁主要依赖DisposableBeanAdapter这个类 具体顺序： 实例化Bean： Spring容器首先创建Bean实例。 AbstractAutowireCapableBeanFactory.createBeanInstance 设..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2024-03-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Bean 生命周期\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"过程","slug":"过程","link":"#过程","children":[]},{"level":2,"title":"主流程doCreateBean","slug":"主流程docreatebean","link":"#主流程docreatebean","children":[{"level":3,"title":"initializeBean","slug":"initializebean","link":"#initializebean","children":[]},{"level":3,"title":"registerDisposableBeanIfNecessary","slug":"registerdisposablebeanifnecessary","link":"#registerdisposablebeanifnecessary","children":[]}]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":2.53,"words":760},"filePathRelative":"notebook/framework/spring-springboot/bean-lifecycle.md","localizedDate":"2024年3月23日","excerpt":"<h2>过程</h2>\\n<p>Bean的创建的过程都依赖于<code>AbstractAutowireCapableBeanFactory</code>这个类，而销毁主要依赖<code>DisposableBeanAdapter</code>这个类</p>\\n<p><strong>具体顺序：</strong></p>\\n<ol>\\n<li>\\n<p><strong>实例化Bean：</strong></p>\\n<ul>\\n<li>Spring容器首先创建Bean实例。</li>\\n<li><code>AbstractAutowireCapableBeanFactory.createBeanInstance</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>设置属性值:</strong></p>\\n<ul>\\n<li>Spring容器注入必要的属性到Bean中</li>\\n<li><code>AbstractAutowireCapableBeanFactory.populateBean</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>检查Aware:</strong></p>\\n<ul>\\n<li>如果Bean实现了BeanNameAware、BeanClassLoaderAware等这些Aware接口，Spring容器会调用它们。</li>\\n<li><code>AbstractAutowireCapableBeanFactory.initializeBean</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>用BeanPostProcessor的前置处理方法：</strong></p>\\n<ul>\\n<li>在Bean初始化之前，允许自定义的BeanPostProcessor对Bean实例进行处理，如修改Bean的状态。\\nBeanPostProcessor的postProcessBeforeInitialization方法会在此时被调用。</li>\\n<li><code>AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsBeforeInitialization</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>调用InitializingBean的afterPropertiesSet方法：</strong></p>\\n<ul>\\n<li>提供一个机会，在所有Bean属性设置完成后进行初始化操作。如果Bean实现了InitializingBean接口，afterPropertiesSet方法会被调用。</li>\\n<li><code>AbstractAutowireCapableBeanFactory.invokeInitMethods</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>调用自定义init-method方法：</strong></p>\\n<ul>\\n<li>提供一种配置方式，在配置中指定Bean的初始化方法。如果Bean在配置文件中定义了初始化方法，那么该方法会被调用。</li>\\n<li><code>AbstractAutowireCapableBeanFactory.invokeInitMethods</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>调用BeanPostProcessor的后置处理方法：</strong></p>\\n<ul>\\n<li>在Bean初始化之后，再次允许BeanPostProcessor对Bean进行处理。BeanPostProcessor的postProcessAfterInitialization方法会在此时被调用。</li>\\n<li><code>AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsAfterInitialization</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>注册Destruction回调：</strong></p>\\n<ul>\\n<li>如果Bean实现了DisposableBean接口或在Bean定义中指定了自定义的销毁方法，Spring容器会为这些Bean注册一个销毁回调，确保在容器关闭时能够正确地清理资源。</li>\\n<li><code>AbstractAutowireCapableBeanFactory.registerDisposableBeanIfNecessary</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>Bean准备就绪：</strong></p>\\n<ul>\\n<li>Bean已完全初始化，可以开始处理应用程序的请求了。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>调用DisposableBean的destroy方法：</strong></p>\\n<ul>\\n<li>当容器关闭时，如果Bean实现了DisposableBean接口，destroy方法会被调用。</li>\\n<li><code>DisposableBeanAdapter.destroy</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>调用自定义的destroy-method：</strong></p>\\n<ul>\\n<li>如果Bean在配置文件中定义了销毁方法，那么该方法会被调用。</li>\\n<li><code>DisposableBeanAdapter.destroy</code></li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}');export{d as comp,k as data};