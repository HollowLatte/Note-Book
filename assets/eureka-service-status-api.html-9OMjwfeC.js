import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o,c as r,a as e,d as a,b as i,e as p}from"./app-DmUsX9Nr.js";const l={},c=e("h2",{id:"应用场景",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#应用场景"},[e("span",null,"应用场景")])],-1),u=e("p",null,"在某些场景下，需要对系统进行滚动升级（滚动发布），每次只对系统的部分服务进行升级。先将一部分服务下线然后更新完再上线，再更按此方式更新剩下部分",-1),d=e("p",null,"由于Eureka不像Nacos可以在页面上直接控制上下线，但Eureka提供了服务查看服务状态、控制服务上下线的API",-1),k=e("h2",{id:"eureka-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eureka-api"},[e("span",null,"Eureka API")])],-1),m={href:"https://github.com/Netflix/eureka/wiki/Eureka-REST-operations",target:"_blank",rel:"noopener noreferrer"},h=p(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查询所有服务状态</span>
GET /eureka/apps

<span class="token comment"># 查看单个服务状态</span>
GET /eureka/apps/<span class="token punctuation">{</span>appID<span class="token punctuation">}</span>

<span class="token comment"># 下线服务</span>
PUT /eureka/apps/<span class="token punctuation">{</span>appID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>instanceID<span class="token punctuation">}</span>/status?value<span class="token operator">=</span>OUT_OF_SERVICE

<span class="token comment"># 上线服务</span>
PUT /eureka/apps/<span class="token punctuation">{</span>appID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>instanceID<span class="token punctuation">}</span>/status?value<span class="token operator">=</span>UP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(v,g){const t=s("ExternalLinkIcon");return o(),r("div",null,[c,u,d,k,e("p",null,[a("如果Eureka版本较新，参考官方文档"),e("a",m,[a("Eureka REST operations"),i(t)])]),h])}const I=n(l,[["render",E],["__file","eureka-service-status-api.html.vue"]]),f=JSON.parse('{"path":"/practice-manual/distributed/springcloud/eureka-service-status-api.html","title":"Eureka服务状态API","lang":"zh-CN","frontmatter":{"title":"Eureka服务状态API","author":null,"category":"SpringCloud","tag":"SpringCloud","description":"应用场景 在某些场景下，需要对系统进行滚动升级（滚动发布），每次只对系统的部分服务进行升级。先将一部分服务下线然后更新完再上线，再更按此方式更新剩下部分 由于Eureka不像Nacos可以在页面上直接控制上下线，但Eureka提供了服务查看服务状态、控制服务上下线的API Eureka API 如果Eureka版本较新，参考官方文档Eureka RES...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/distributed/springcloud/eureka-service-status-api.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Eureka服务状态API"}],["meta",{"property":"og:description","content":"应用场景 在某些场景下，需要对系统进行滚动升级（滚动发布），每次只对系统的部分服务进行升级。先将一部分服务下线然后更新完再上线，再更按此方式更新剩下部分 由于Eureka不像Nacos可以在页面上直接控制上下线，但Eureka提供了服务查看服务状态、控制服务上下线的API Eureka API 如果Eureka版本较新，参考官方文档Eureka RES..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"SpringCloud"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Eureka服务状态API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":2,"title":"Eureka API","slug":"eureka-api","link":"#eureka-api","children":[]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"practice-manual/distributed/springcloud/eureka-service-status-api.md","localizedDate":"2024年3月28日","excerpt":"<h2>应用场景</h2>\\n<p>在某些场景下，需要对系统进行滚动升级（滚动发布），每次只对系统的部分服务进行升级。先将一部分服务下线然后更新完再上线，再更按此方式更新剩下部分</p>\\n<p>由于Eureka不像Nacos可以在页面上直接控制上下线，但Eureka提供了服务查看服务状态、控制服务上下线的API</p>\\n<h2>Eureka API</h2>\\n<p>如果Eureka版本较新，参考官方文档<a href=\\"https://github.com/Netflix/eureka/wiki/Eureka-REST-operations\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Eureka REST operations</a></p>","autoDesc":true}');export{I as comp,f as data};