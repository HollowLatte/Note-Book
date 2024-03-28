import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t}from"./app-DmUsX9Nr.js";const e={},p=t(`<p>获取Spring容器的Bean就要先拿到ApplicationContext</p><h2 id="通过aware获取-常用" tabindex="-1"><a class="header-anchor" href="#通过aware获取-常用"><span>通过Aware获取（常用）</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringContextHolder</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringContextHolder</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> requiredType<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>requiredType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="annotationconfigapplicationcontext-测试用" tabindex="-1"><a class="header-anchor" href="#annotationconfigapplicationcontext-测试用"><span>AnnotationConfigApplicationContext（测试用）</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>AnnotationConfigApplicationContext</code>的构造函数可以传递包扫描路径</p>`,6),o=[p];function c(i,l){return a(),s("div",null,o)}const k=n(e,[["render",c],["__file","spring-application-context.html.vue"]]),d=JSON.parse('{"path":"/practice-manual/framework/spring/spring-application-context.html","title":"获取ApplicationContext","lang":"zh-CN","frontmatter":{"title":"获取ApplicationContext","author":null,"category":"Spring","tag":"Spring","date":"2024-03-27T00:00:00.000Z","description":"获取Spring容器的Bean就要先拿到ApplicationContext 通过Aware获取（常用） AnnotationConfigApplicationContext（测试用） AnnotationConfigApplicationContext的构造函数可以传递包扫描路径","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/framework/spring/spring-application-context.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"获取ApplicationContext"}],["meta",{"property":"og:description","content":"获取Spring容器的Bean就要先拿到ApplicationContext 通过Aware获取（常用） AnnotationConfigApplicationContext（测试用） AnnotationConfigApplicationContext的构造函数可以传递包扫描路径"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2024-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"获取ApplicationContext\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"通过Aware获取（常用）","slug":"通过aware获取-常用","link":"#通过aware获取-常用","children":[]},{"level":2,"title":"AnnotationConfigApplicationContext（测试用）","slug":"annotationconfigapplicationcontext-测试用","link":"#annotationconfigapplicationcontext-测试用","children":[]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.34,"words":103},"filePathRelative":"practice-manual/framework/spring/spring-application-context.md","localizedDate":"2024年3月27日","excerpt":"<p>获取Spring容器的Bean就要先拿到ApplicationContext</p>\\n<h2>通过Aware获取（常用）</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Component</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">SpringContextHolder</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">ApplicationContextAware</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">ApplicationContext</span> applicationContext<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">setApplicationContext</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ApplicationContext</span> applicationContext<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">BeansException</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">SpringContextHolder</span><span class=\\"token punctuation\\">.</span>applicationContext <span class=\\"token operator\\">=</span> applicationContext<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">Object</span> <span class=\\"token function\\">getBean</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">BeansException</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> applicationContext<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getBean</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token class-name\\">T</span> <span class=\\"token function\\">getBean</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Class</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> requiredType<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">BeansException</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> applicationContext<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getBean</span><span class=\\"token punctuation\\">(</span>requiredType<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};