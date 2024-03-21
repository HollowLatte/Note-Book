import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as l,c as i,a as n,d as a,b as c,e as t}from"./app-CXUo51sk.js";const p={},r=t(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>在一个AOP切面中有记录日志的逻辑，记录日志时会将对象数据格式化为JSON的格式</p><h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h2><p>在查看日志时发现有栈溢出StackOverflow，可以大致定位到是切面的格式化JSON操作。因为项目中用Hutool JSON的地方不多，主要用的是fastjson</p><p>出现问题的代码为<code>JSONUtil.toJsonStr(meetingInfo)</code></p><p>下面是出现StackOverflowError的堆栈（原本生产环境的日志找不到了）：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>java.lang.StackOverflowError
	at java.base/java.lang.reflect.Executable.getDeclaredAnnotations(Executable.java:620)
	at java.base/java.lang.reflect.Method.getDeclaredAnnotations(Method.java:802)
	at java.base/java.lang.reflect.AccessibleObject.getAnnotations(AccessibleObject.java:589)
	at cn.hutool.core.annotation.CombinationAnnotationElement.init(CombinationAnnotationElement.java:104)
	at cn.hutool.core.annotation.CombinationAnnotationElement.&lt;init&gt;(CombinationAnnotationElement.java:67)
	at cn.hutool.core.annotation.CombinationAnnotationElement.&lt;init&gt;(CombinationAnnotationElement.java:55)
	at cn.hutool.core.annotation.AnnotationUtil.toCombination(AnnotationUtil.java:94)
	at cn.hutool.core.annotation.AnnotationUtil.getAnnotation(AnnotationUtil.java:180)
	at cn.hutool.core.annotation.AnnotationUtil.hasAnnotation(AnnotationUtil.java:192)
	at cn.hutool.core.bean.PropDesc.isTransientForGet(PropDesc.java:375)
	at cn.hutool.core.bean.PropDesc.isReadable(PropDesc.java:136)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可能原因" tabindex="-1"><a class="header-anchor" href="#可能原因"><span>可能原因</span></a></h2><p>Hutool的JSON格式化工具有bug</p><h2 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析"><span>原因分析</span></a></h2><p>第一时间去了hutool的GitHub issue中查询</p>`,11),u={href:"https://github.com/dromara/hutool/issues/3346",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>官方给出的原因： <strong>“在Hutool的JSON中，没有处理循环引用的逻辑。FastJSON中使用$ref来代替循环引用对象，Hutool并不支持这种模式。”</strong></p><p>这就可以说得通了，平时使用fastjson格式并没有出现过该问题，用hutool就出现这个栈溢出问题</p><h3 id="循环引用案例" tabindex="-1"><a class="header-anchor" href="#循环引用案例"><span>循环引用案例</span></a></h3><p>有两个类，两个类的字段中都互相有对方</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dept</span> dept<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dept</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">User</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Dept</span> dept <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dept<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;技术部&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    user<span class="token punctuation">.</span><span class="token function">setDept</span><span class="token punctuation">(</span>dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dept<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 使用fastjson</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用hutool的json工具</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例代码执行后，fastjson的格式化结果可以正常打印，而hutool的则会出现StackOverflowError，至此找到问题所在</p><p>另外出于好奇，也尝试了用Jackson进行了测试，使用<code>objectMapper.writeValueAsString(user)</code></p><p>发现<strong>Jackson也会有循环引用导致栈溢出的问题</strong></p><h2 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因"><span>问题原因</span></a></h2><p>在Hutool的JSON工具中，没有处理循环引用的逻辑。FastJSON中使用$ref来代替循环引用对象，Hutool并不支持这种模式。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><p><strong>工具层面：</strong> 使用支持解析循环引用的JSON工具，即fastjson</p><p><strong>代码层面：</strong> 在编写代码时，应该避免对象与对象之间出现循环引用，这样有助于提高代码的可维护性。但是对于遗留的有循环引用的历史代码来说，改动成本大，要JSON序列化就只能用fastjson了</p>`,13);function v(m,k){const s=o("ExternalLinkIcon");return l(),i("div",null,[r,n("p",null,[a("发现出现有类似的问题"),n("a",u,[a("toJsonStr反序列化产生StackOverflowError"),c(s)])]),d])}const g=e(p,[["render",v],["__file","hutool-json-so.html.vue"]]),f=JSON.parse('{"path":"/problem/backend-problem/product-env-problem/hutool-json-so.html","title":"Hutool JSON序列化工具栈溢出","lang":"zh-CN","frontmatter":{"title":"Hutool JSON序列化工具栈溢出","author":null,"category":"Hutool","tag":"Hutool","date":"2024-03-22T00:00:00.000Z","description":"背景 在一个AOP切面中有记录日志的逻辑，记录日志时会将对象数据格式化为JSON的格式 问题现象 在查看日志时发现有栈溢出StackOverflow，可以大致定位到是切面的格式化JSON操作。因为项目中用Hutool JSON的地方不多，主要用的是fastjson 出现问题的代码为JSONUtil.toJsonStr(meetingInfo) 下面是出...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/problem/backend-problem/product-env-problem/hutool-json-so.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Hutool JSON序列化工具栈溢出"}],["meta",{"property":"og:description","content":"背景 在一个AOP切面中有记录日志的逻辑，记录日志时会将对象数据格式化为JSON的格式 问题现象 在查看日志时发现有栈溢出StackOverflow，可以大致定位到是切面的格式化JSON操作。因为项目中用Hutool JSON的地方不多，主要用的是fastjson 出现问题的代码为JSONUtil.toJsonStr(meetingInfo) 下面是出..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T19:31:22.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Hutool"}],["meta",{"property":"article:published_time","content":"2024-03-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T19:31:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hutool JSON序列化工具栈溢出\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-21T19:31:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":2,"title":"可能原因","slug":"可能原因","link":"#可能原因","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[{"level":3,"title":"循环引用案例","slug":"循环引用案例","link":"#循环引用案例","children":[]}]},{"level":2,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1711049482000,"updatedTime":1711049482000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":2.1,"words":629},"filePathRelative":"problem/backend-problem/product-env-problem/hutool-json-so.md","localizedDate":"2024年3月22日","excerpt":"<h2>背景</h2>\\n<p>在一个AOP切面中有记录日志的逻辑，记录日志时会将对象数据格式化为JSON的格式</p>\\n<h2>问题现象</h2>\\n<p>在查看日志时发现有栈溢出StackOverflow，可以大致定位到是切面的格式化JSON操作。因为项目中用Hutool JSON的地方不多，主要用的是fastjson</p>\\n<p>出现问题的代码为<code>JSONUtil.toJsonStr(meetingInfo)</code></p>\\n<p>下面是出现StackOverflowError的堆栈（原本生产环境的日志找不到了）：</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>java.lang.StackOverflowError\\n\\tat java.base/java.lang.reflect.Executable.getDeclaredAnnotations(Executable.java:620)\\n\\tat java.base/java.lang.reflect.Method.getDeclaredAnnotations(Method.java:802)\\n\\tat java.base/java.lang.reflect.AccessibleObject.getAnnotations(AccessibleObject.java:589)\\n\\tat cn.hutool.core.annotation.CombinationAnnotationElement.init(CombinationAnnotationElement.java:104)\\n\\tat cn.hutool.core.annotation.CombinationAnnotationElement.&lt;init&gt;(CombinationAnnotationElement.java:67)\\n\\tat cn.hutool.core.annotation.CombinationAnnotationElement.&lt;init&gt;(CombinationAnnotationElement.java:55)\\n\\tat cn.hutool.core.annotation.AnnotationUtil.toCombination(AnnotationUtil.java:94)\\n\\tat cn.hutool.core.annotation.AnnotationUtil.getAnnotation(AnnotationUtil.java:180)\\n\\tat cn.hutool.core.annotation.AnnotationUtil.hasAnnotation(AnnotationUtil.java:192)\\n\\tat cn.hutool.core.bean.PropDesc.isTransientForGet(PropDesc.java:375)\\n\\tat cn.hutool.core.bean.PropDesc.isReadable(PropDesc.java:136)\\n</code></pre></div>","autoDesc":true}');export{g as comp,f as data};
