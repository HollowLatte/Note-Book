import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,e as a}from"./app-DlTWK7Vx.js";const o={},i=a(`<h2 id="info命令" tabindex="-1"><a class="header-anchor" href="#info命令"><span>info命令</span></a></h2><p>info命令可以查看redis实例的各种统计信息，如客户端、服务器、内存、集群等</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有</span>
info

<span class="token comment"># 只查看内存信息</span>
info memory

<span class="token comment"># 只查看key信息</span>
info keyspace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="memory命令" tabindex="-1"><a class="header-anchor" href="#memory命令"><span>memory命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 获取Redis实例的整体内存统计信息</span>
memory states

<span class="token comment"># 获取指定键的内存使用量，单位字节</span>
memory usage <span class="token punctuation">[</span>key<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[i];function l(r,m){return n(),t("div",null,s)}const p=e(o,[["render",l],["__file","memory-info.html.vue"]]),h=JSON.parse('{"path":"/practice-manual/redis/command/memory-info.html","title":"查看内存使用","lang":"zh-CN","frontmatter":{"title":"查看内存使用","author":null,"category":"Redis","tag":"Redis","date":"2024-01-18T00:00:00.000Z","description":"info命令 info命令可以查看redis实例的各种统计信息，如客户端、服务器、内存、集群等 memory命令","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/redis/command/memory-info.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"查看内存使用"}],["meta",{"property":"og:description","content":"info命令 info命令可以查看redis实例的各种统计信息，如客户端、服务器、内存、集群等 memory命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T19:11:00.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2024-01-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T19:11:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查看内存使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T19:11:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"info命令","slug":"info命令","link":"#info命令","children":[]},{"level":2,"title":"memory命令","slug":"memory命令","link":"#memory命令","children":[]}],"git":{"createdTime":1710789060000,"updatedTime":1710789060000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.36,"words":109},"filePathRelative":"practice-manual/redis/command/memory-info.md","localizedDate":"2024年1月18日","excerpt":"<h2>info命令</h2>\\n<p>info命令可以查看redis实例的各种统计信息，如客户端、服务器、内存、集群等</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 查看所有</span>\\ninfo\\n\\n<span class=\\"token comment\\"># 只查看内存信息</span>\\ninfo memory\\n\\n<span class=\\"token comment\\"># 只查看key信息</span>\\ninfo keyspace\\n</code></pre></div>","autoDesc":true}');export{p as comp,h as data};