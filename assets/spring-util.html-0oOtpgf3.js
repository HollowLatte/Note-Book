import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-R-jbemKs.js";const t={},i=e(`<h2 id="spring内置" tabindex="-1"><a class="header-anchor" href="#spring内置" aria-hidden="true">#</a> Spring内置</h2><h3 id="aoputils" tabindex="-1"><a class="header-anchor" href="#aoputils" aria-hidden="true">#</a> AopUtils</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 判断是不是 Spring 代理对象</span>
<span class="token keyword">boolean</span> <span class="token function">isAopProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 判断是不是 jdk 动态代理对象</span>
<span class="token keyword">boolean</span> <span class="token function">isJdkDynamicProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 判断是不是 CGLIB 代理对象</span>
<span class="token keyword">boolean</span> <span class="token function">isCglibProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 获取被代理的目标 class</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aopcontext" tabindex="-1"><a class="header-anchor" href="#aopcontext" aria-hidden="true">#</a> AopContext</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 获取当前对象的代理对象</span>
<span class="token class-name">Object</span> <span class="token function">currentProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[i];function o(l,p){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","spring-util.html.vue"]]);export{u as default};
