import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t}from"./app-BGUJa96a.js";const e={},o=t(`<h2 id="spring内置" tabindex="-1"><a class="header-anchor" href="#spring内置"><span>Spring内置</span></a></h2><h3 id="aoputils" tabindex="-1"><a class="header-anchor" href="#aoputils"><span>AopUtils</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 判断是不是 Spring 代理对象</span>
<span class="token keyword">boolean</span> <span class="token function">isAopProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 判断是不是 jdk 动态代理对象</span>
<span class="token keyword">boolean</span> <span class="token function">isJdkDynamicProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 判断是不是 CGLIB 代理对象</span>
<span class="token keyword">boolean</span> <span class="token function">isCglibProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 获取被代理的目标 class</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aopcontext" tabindex="-1"><a class="header-anchor" href="#aopcontext"><span>AopContext</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 获取当前对象的代理对象</span>
<span class="token class-name">Object</span> <span class="token function">currentProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[o];function l(i,c){return a(),s("div",null,p)}const d=n(e,[["render",l],["__file","spring-util.html.vue"]]),m=JSON.parse('{"path":"/practice-manual/java/spring-util.html","title":"Spring工具类","lang":"zh-CN","frontmatter":{"title":"Spring工具类","author":null,"category":"Java","tag":"Java","description":"Spring内置 AopUtils AopContext","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/java/spring-util.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Spring工具类"}],["meta",{"property":"og:description","content":"Spring内置 AopUtils AopContext"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T19:10:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2024-03-26T19:10:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring工具类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T19:10:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"Spring内置","slug":"spring内置","link":"#spring内置","children":[{"level":3,"title":"AopUtils","slug":"aoputils","link":"#aoputils","children":[]},{"level":3,"title":"AopContext","slug":"aopcontext","link":"#aopcontext","children":[]}]}],"git":{"createdTime":1711480217000,"updatedTime":1711480217000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.28,"words":84},"filePathRelative":"practice-manual/java/spring-util.md","localizedDate":"2024年3月26日","excerpt":"<h2>Spring内置</h2>\\n<h3>AopUtils</h3>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 判断是不是 Spring 代理对象</span>\\n<span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isAopProxy</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 判断是不是 jdk 动态代理对象</span>\\n<span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isJdkDynamicProxy</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 判断是不是 CGLIB 代理对象</span>\\n<span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">isCglibProxy</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 获取被代理的目标 class</span>\\n<span class=\\"token class-name\\">Class</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">getTargetClass</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,m as data};
