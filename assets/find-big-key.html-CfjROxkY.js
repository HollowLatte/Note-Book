import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as n}from"./app-DmUsX9Nr.js";const i={},s=n(`<h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><p>默认Redis在127.0.0.1:6379上</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># a指定密码,n指定库</span>
redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">--bigkeys</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="couldn-t-determine-dbsize-问题" tabindex="-1"><a class="header-anchor" href="#couldn-t-determine-dbsize-问题"><span>Couldn&#39;t determine DBSIZE!问题</span></a></h3><p>在执行<code>redis-cli --bigkeys</code>时，Redis响应了<code>Couldn&#39;t determine DBSIZE!</code>。</p><p>这个问题很坑。从响应信息看起来像是要指定db，但是加上<code>-n 0</code>后，还是报错或者没有响应值</p><p>最后发现是要带上密码，即加上<code>-a 密码</code></p><p>如果其他redis-cli命令出现类似问题，也可如此解决</p>`,8),o=[s];function r(d,l){return t(),a("div",null,o)}const m=e(i,[["render",r],["__file","find-big-key.html.vue"]]),h=JSON.parse(`{"path":"/practice-manual/redis/command/find-big-key.html","title":"查找BigKey","lang":"zh-CN","frontmatter":{"title":"查找BigKey","author":null,"category":"Redis","tag":"Redis","date":"2024-01-18T00:00:00.000Z","description":"命令 默认Redis在127.0.0.1:6379上 Couldn't determine DBSIZE!问题 在执行redis-cli --bigkeys时，Redis响应了Couldn't determine DBSIZE!。 这个问题很坑。从响应信息看起来像是要指定db，但是加上-n 0后，还是报错或者没有响应值 最后发现是要带上密码，即加上-a...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/redis/command/find-big-key.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"查找BigKey"}],["meta",{"property":"og:description","content":"命令 默认Redis在127.0.0.1:6379上 Couldn't determine DBSIZE!问题 在执行redis-cli --bigkeys时，Redis响应了Couldn't determine DBSIZE!。 这个问题很坑。从响应信息看起来像是要指定db，但是加上-n 0后，还是报错或者没有响应值 最后发现是要带上密码，即加上-a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2024-01-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查找BigKey\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[{"level":3,"title":"Couldn't determine DBSIZE!问题","slug":"couldn-t-determine-dbsize-问题","link":"#couldn-t-determine-dbsize-问题","children":[]}]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"practice-manual/redis/command/find-big-key.md","localizedDate":"2024年1月18日","excerpt":"<h2>命令</h2>\\n<p>默认Redis在127.0.0.1:6379上</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># a指定密码,n指定库</span>\\nredis-cli <span class=\\"token parameter variable\\">-a</span> <span class=\\"token number\\">123456</span> <span class=\\"token parameter variable\\">-n</span> <span class=\\"token number\\">1</span> <span class=\\"token parameter variable\\">--bigkeys</span>\\n</code></pre></div>","autoDesc":true}`);export{m as comp,h as data};