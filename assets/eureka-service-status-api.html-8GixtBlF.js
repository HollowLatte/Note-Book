import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as o,a,d as n,b as c,e as r}from"./app-R-jbemKs.js";const p={},l=a("h2",{id:"应用场景",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#应用场景","aria-hidden":"true"},"#"),n(" 应用场景")],-1),u=a("p",null,"在某些场景下，需要对系统进行滚动升级（滚动发布），每次只对系统的部分服务进行升级。先将一部分服务下线然后更新完再上线，再更按此方式更新剩下部分",-1),d=a("p",null,"由于Eureka不像Nacos可以在页面上直接控制上下线，但Eureka提供了服务查看服务状态、控制服务上下线的API",-1),k=a("h2",{id:"eureka-api",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#eureka-api","aria-hidden":"true"},"#"),n(" Eureka API")],-1),m={href:"https://github.com/Netflix/eureka/wiki/Eureka-REST-operations",target:"_blank",rel:"noopener noreferrer"},v=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询所有服务状态</span>
GET /eureka/apps

<span class="token comment"># 查看单个服务状态</span>
GET /eureka/apps/<span class="token punctuation">{</span>appID<span class="token punctuation">}</span>

<span class="token comment"># 下线服务</span>
PUT /eureka/apps/<span class="token punctuation">{</span>appID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>instanceID<span class="token punctuation">}</span>/status?value<span class="token operator">=</span>OUT_OF_SERVICE

<span class="token comment"># 上线服务</span>
PUT /eureka/apps/<span class="token punctuation">{</span>appID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>instanceID<span class="token punctuation">}</span>/status?value<span class="token operator">=</span>UP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function _(h,b){const e=t("ExternalLinkIcon");return i(),o("div",null,[l,u,d,k,a("p",null,[n("如果Eureka版本较新，参考官方文档"),a("a",m,[n("Eureka REST operations"),c(e)])]),v])}const x=s(p,[["render",_],["__file","eureka-service-status-api.html.vue"]]);export{x as default};
