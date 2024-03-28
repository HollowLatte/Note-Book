import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e as t}from"./app-DmUsX9Nr.js";const e={},p=t(`<h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h2><p>启动Springboot项目时，报如下错误：</p><p>java.lang.NoSuchMethodError: &#39;void org.yaml.snakeyaml.LoaderOptions.setMaxAliasesForCollections(int)&#39;</p><h2 id="排查过程" tabindex="-1"><a class="header-anchor" href="#排查过程"><span>排查过程</span></a></h2><p>可能与snakeyaml有关，但是snakeyaml是SpringBoot默认使用的，正常来说snakeyaml依赖应该是没问题的，可能是后面引入的依赖中包含snakeyaml导致的</p><h2 id="实际原因" tabindex="-1"><a class="header-anchor" href="#实际原因"><span>实际原因</span></a></h2><p>最后排查是因为引入了javafaker，javafaker依赖了snakeyaml</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.javafaker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javafaker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>排除掉javafaker的snakeyaml依赖</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.javafaker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javafaker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.yaml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>snakeyaml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function l(c,i){return n(),s("div",null,o)}const k=a(e,[["render",l],["__file","springboot-start-fail-snakeyaml.html.vue"]]),g=JSON.parse(`{"path":"/problem/backend-problem/java/spring/springboot-start-fail-snakeyaml.html","title":"SpringBoot启动失败--Snakeyaml","lang":"zh-CN","frontmatter":{"title":"SpringBoot启动失败--Snakeyaml","author":null,"category":"SpringBoot","tag":"SpringBoot","description":"问题现象 启动Springboot项目时，报如下错误： java.lang.NoSuchMethodError: 'void org.yaml.snakeyaml.LoaderOptions.setMaxAliasesForCollections(int)' 排查过程 可能与snakeyaml有关，但是snakeyaml是SpringBoot默认使用的...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/problem/backend-problem/java/spring/springboot-start-fail-snakeyaml.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"SpringBoot启动失败--Snakeyaml"}],["meta",{"property":"og:description","content":"问题现象 启动Springboot项目时，报如下错误： java.lang.NoSuchMethodError: 'void org.yaml.snakeyaml.LoaderOptions.setMaxAliasesForCollections(int)' 排查过程 可能与snakeyaml有关，但是snakeyaml是SpringBoot默认使用的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot启动失败--Snakeyaml\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":2,"title":"排查过程","slug":"排查过程","link":"#排查过程","children":[]},{"level":2,"title":"实际原因","slug":"实际原因","link":"#实际原因","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"problem/backend-problem/java/spring/springboot-start-fail-snakeyaml.md","localizedDate":"2024年3月28日","excerpt":"<h2>问题现象</h2>\\n<p>启动Springboot项目时，报如下错误：</p>\\n<p>java.lang.NoSuchMethodError: 'void org.yaml.snakeyaml.LoaderOptions.setMaxAliasesForCollections(int)'</p>\\n<h2>排查过程</h2>\\n<p>可能与snakeyaml有关，但是snakeyaml是SpringBoot默认使用的，正常来说snakeyaml依赖应该是没问题的，可能是后面引入的依赖中包含snakeyaml导致的</p>\\n<h2>实际原因</h2>\\n<p>最后排查是因为引入了javafaker，javafaker依赖了snakeyaml</p>","autoDesc":true}`);export{k as comp,g as data};