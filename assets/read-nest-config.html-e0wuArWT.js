import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,a as n,d as s,b as c,e as l}from"./app-R-jbemKs.js";const i={},r=l(`<h2 id="读取嵌套配置" tabindex="-1"><a class="header-anchor" href="#读取嵌套配置" aria-hidden="true">#</a> 读取嵌套配置</h2><p>例如现在application.yml中有如下的配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">websocket</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8090</span>
  <span class="token key atrule">boss-group</span><span class="token punctuation">:</span>
    <span class="token key atrule">threads</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">worker-group</span><span class="token punctuation">:</span>
    <span class="token key atrule">threads</span><span class="token punctuation">:</span> <span class="token number">12</span>
  <span class="token key atrule">heartbeat</span><span class="token punctuation">:</span>
    <span class="token key atrule">interval-time</span><span class="token punctuation">:</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么代码中应该如何配置？使用<code>@Value</code>一个个映射过于繁琐，应该使用<code>@ConfigurationProperties</code></p><p>以下是读取上面配置对应的实体类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;websocket&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSocketProperties</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> port<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">BossGroup</span> bossGroup<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">WorkerGroup</span> workerGroup<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">HeartBeat</span> heartBeat<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Data</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">BossGroup</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">Integer</span> threads<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Data</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">WorkerGroup</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">Integer</span> threads<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Data</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">HeartBeat</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">Integer</span> intervalTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用静态内部类来映射带有子参数的配置</p>`,7),u={href:"https://docs.spring.io/spring-boot/docs/3.1.5/reference/html/configuration-metadata.html#appendix.configuration-metadata.annotation-processor.automatic-metadata-generation.nested-properties",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("blockquote",null,[n("p",null,[s("官方文档也有描述该做法："),n("a",u,[s("Spring Boot Configuration Metadata"),c(a)])])])])}const y=e(i,[["render",d],["__file","read-nest-config.html.vue"]]);export{y as default};
