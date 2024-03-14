import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-R-jbemKs.js";const t={},p=e(`<h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token comment"># 表示该实例是否应向 eureka 服务器注册信息，以便其他服务发现。在某些情况下，你不希望自己的实例被发现，而只希望发现其他实例。</span>
    <span class="token comment"># 该配置在本地调试时常用，可以通过Eureka调用到其他服务，而其他服务的的请求不会过来</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># Eureka服务的url</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.29.137<span class="token punctuation">:</span>6199/eureka
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token comment"># 表示在猜测主机名时，应优先使用服务器的 IP 地址，而不是操作系统报告的主机名。</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># 声明的IP地址，告知其他服务如果要请求过来，应该请求该ip</span>
    <span class="token key atrule">ip-address</span><span class="token punctuation">:</span> 192.168.8.190
    <span class="token comment"># 声明当前注册的实例id</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>eureka.instance.ip<span class="token punctuation">-</span>address<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>server.port<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","eureka-config.html.vue"]]);export{d as default};
