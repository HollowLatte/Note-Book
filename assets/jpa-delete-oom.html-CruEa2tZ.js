import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as a}from"./app-CjdU_M7_.js";const n={},r=a(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>系统定时会清空一个存放日志信息的表，数据平时十几万条，最高时达百万条</p><blockquote><p><strong>JDK版本：</strong> 21</p></blockquote><blockquote><p><strong>JPA的版本：</strong> <code>org.springframework.boot:spring-boot-starter-data-jpa:3.2.3</code></p></blockquote><h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h2><p>服务宕机，生产日志出现OOM信息</p><p>模拟的堆栈如下（原本生产环境的OOM日志找不到了）：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>java.lang.RuntimeException: java.lang.OutOfMemoryError: Java heap space

	at org.springframework.data.repository.core.support.RepositoryMethodInvoker$RepositoryFragmentMethodInvoker.lambda$new$0(RepositoryMethodInvoker.java:281)
	at org.springframework.data.repository.core.support.RepositoryMethodInvoker.doInvoke(RepositoryMethodInvoker.java:170)
	at org.springframework.data.repository.core.support.RepositoryMethodInvoker.invoke(RepositoryMethodInvoker.java:158)
	at org.springframework.data.repository.core.support.RepositoryComposition$RepositoryFragments.invoke(RepositoryComposition.java:516)
	at org.springframework.data.repository.core.support.RepositoryComposition.invoke(RepositoryComposition.java:285)
	at org.springframework.data.repository.core.support.RepositoryFactorySupport$ImplementationMethodExecutionInterceptor.invoke(RepositoryFactorySupport.java:628)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.doInvoke(QueryExecutorMethodInterceptor.java:168)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.invoke(QueryExecutorMethodInterceptor.java:143)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.data.projection.DefaultMethodInvokingMethodInterceptor.invoke(DefaultMethodInvokingMethodInterceptor.java:70)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:123)
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:385)
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:137)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.data.jpa.repository.support.CrudMethodMetadataPostProcessor$CrudMethodMetadataPopulatingMethodInterceptor.invoke(CrudMethodMetadataPostProcessor.java:164)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:97)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:220)
	at jdk.proxy2/jdk.proxy2.$Proxy111.deleteAll(Unknown Source)
	at org.example.hijpa.DeleteTest.deleteAllTest(DeleteTest.java:24)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at java.base/java.util.ArrayList.forEach(ArrayList.java:1596)
	at java.base/java.util.ArrayList.forEach(ArrayList.java:1596)
Caused by: java.lang.OutOfMemoryError: Java heap space
	at com.mysql.cj.util.StringUtils.toString(StringUtils.java:1370)
	at com.mysql.cj.result.StringValueFactory.createFromBytes(StringValueFactory.java:149)
	at com.mysql.cj.result.StringValueFactory.createFromBytes(StringValueFactory.java:47)
	at com.mysql.cj.protocol.a.MysqlTextValueDecoder.decodeByteArray(MysqlTextValueDecoder.java:159)
	at com.mysql.cj.protocol.result.AbstractResultsetRow.decodeAndCreateReturnValue(AbstractResultsetRow.java:136)
	at com.mysql.cj.protocol.result.AbstractResultsetRow.getValueFromBytes(AbstractResultsetRow.java:244)
	at com.mysql.cj.protocol.a.result.ByteArrayRow.getValue(ByteArrayRow.java:91)
	at com.mysql.cj.jdbc.result.ResultSetImpl.getString(ResultSetImpl.java:879)
	at com.zaxxer.hikari.pool.HikariProxyResultSet.getString(HikariProxyResultSet.java)
	at org.hibernate.type.descriptor.jdbc.VarcharJdbcType$2.doExtract(VarcharJdbcType.java:118)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现代码中调用了<code>logRepo.deleteAll()</code>来删除所有表记录</p><h2 id="可能原因" tabindex="-1"><a class="header-anchor" href="#可能原因"><span>可能原因</span></a></h2><p>没想到删除操作也能OOM</p><h2 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析"><span>原因分析</span></a></h2><p><code>logRepo.deleteAll()</code>中，进入源码后发现调用的实际是<code>CrudRepository.deleteAll()</code></p><p><code>CrudRepository.deleteAll()</code>调的又是<code>SimpleJpaRepository.deleteAll()</code></p><p><code>SimpleJpaRepository.deleteAll()</code>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">T</span> element <span class="token operator">:</span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">delete</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到一个<code>findAll()</code>，震惊，删除全部数据前还会全部查出来，数据量一大，当然OOM啊</p><h2 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因"><span>问题原因</span></a></h2><p>JPA提供的deleteAll方法会先查出所有数据，然后一条一条删。如果表数据很多，查全部数据的时候就会OOM了</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><p>不要使用JPA提供的方法，自己通过 <strong>@Query</strong> 来写delete语句</p>`,21),i=[r];function s(l,c){return t(),o("div",null,i)}const v=e(n,[["render",s],["__file","jpa-delete-oom.html.vue"]]),u=JSON.parse('{"path":"/problem/backend-problem/product-env-problem/jpa-delete-oom.html","title":"JPA批量删除导致OOM","lang":"zh-CN","frontmatter":{"title":"JPA批量删除导致OOM","author":null,"category":"JPA","tag":"JPA","date":"2024-03-21T00:00:00.000Z","description":"背景 系统定时会清空一个存放日志信息的表，数据平时十几万条，最高时达百万条 JDK版本： 21 JPA的版本： org.springframework.boot:spring-boot-starter-data-jpa:3.2.3 问题现象 服务宕机，生产日志出现OOM信息 模拟的堆栈如下（原本生产环境的OOM日志找不到了）： 发现代码中调用了logR...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/problem/backend-problem/product-env-problem/jpa-delete-oom.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"JPA批量删除导致OOM"}],["meta",{"property":"og:description","content":"背景 系统定时会清空一个存放日志信息的表，数据平时十几万条，最高时达百万条 JDK版本： 21 JPA的版本： org.springframework.boot:spring-boot-starter-data-jpa:3.2.3 问题现象 服务宕机，生产日志出现OOM信息 模拟的堆栈如下（原本生产环境的OOM日志找不到了）： 发现代码中调用了logR..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T08:07:11.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"JPA"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T08:07:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JPA批量删除导致OOM\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-21T08:07:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":2,"title":"可能原因","slug":"可能原因","link":"#可能原因","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]},{"level":2,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1711008431000,"updatedTime":1711008431000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":1.49,"words":448},"filePathRelative":"problem/backend-problem/product-env-problem/jpa-delete-oom.md","localizedDate":"2024年3月21日","excerpt":"<h2>背景</h2>\\n<p>系统定时会清空一个存放日志信息的表，数据平时十几万条，最高时达百万条</p>\\n<blockquote>\\n<p><strong>JDK版本：</strong> 21</p>\\n</blockquote>\\n<blockquote>\\n<p><strong>JPA的版本：</strong> <code>org.springframework.boot:spring-boot-starter-data-jpa:3.2.3</code></p>\\n</blockquote>\\n<h2>问题现象</h2>\\n<p>服务宕机，生产日志出现OOM信息</p>\\n<p>模拟的堆栈如下（原本生产环境的OOM日志找不到了）：</p>","autoDesc":true}');export{v as comp,u as data};
