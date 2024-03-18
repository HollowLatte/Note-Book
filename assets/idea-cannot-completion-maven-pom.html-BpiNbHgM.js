import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as a}from"./app-6eIwu4TL.js";const n="/Note-Book/assets/cannot-completion-maven-pom-B7auFfai.png",i={},l=a('<h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h2><p>平时pom文件都可以根据输入的依赖关键词进行依赖引入的补全，但是突然输入关键词后怎样都无法补全</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>可以正常运行Maven项目，说明Maven没问题，所以是IDEA设置的问题</p><h2 id="分析原因" tabindex="-1"><a class="header-anchor" href="#分析原因"><span>分析原因</span></a></h2><p>检查IDEA的Maven相关配置，<code>Settings -&gt; Build, Execution, Deployment -&gt; Build Tools -&gt; Maven</code></p><p>最后发现<code>Settings -&gt; Build, Execution, Deployment -&gt; Build Tools -&gt; Maven -&gt; Repositories</code>中，Local仓库的Updated状态为error</p><p>选择Local仓库后点击旁边的Update按钮，IDEA刷新对本地Maven仓库的索引</p><figure><img src="'+n+'" alt="示例" tabindex="0"><figcaption>示例</figcaption></figure>',9),p=[l];function c(r,m){return t(),o("div",null,p)}const h=e(i,[["render",c],["__file","idea-cannot-completion-maven-pom.html.vue"]]),g=JSON.parse('{"path":"/problem/backend-problem/idea/idea-cannot-completion-maven-pom.html","title":"Maven Pom依赖无法自动补全","lang":"zh-CN","frontmatter":{"title":"Maven Pom依赖无法自动补全","author":null,"category":"IDEA","tag":"IDEA","description":"问题现象 平时pom文件都可以根据输入的依赖关键词进行依赖引入的补全，但是突然输入关键词后怎样都无法补全 问题 可以正常运行Maven项目，说明Maven没问题，所以是IDEA设置的问题 分析原因 检查IDEA的Maven相关配置，Settings -> Build, Execution, Deployment -> Build Tools -> Ma...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/problem/backend-problem/idea/idea-cannot-completion-maven-pom.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Maven Pom依赖无法自动补全"}],["meta",{"property":"og:description","content":"问题现象 平时pom文件都可以根据输入的依赖关键词进行依赖引入的补全，但是突然输入关键词后怎样都无法补全 问题 可以正常运行Maven项目，说明Maven没问题，所以是IDEA设置的问题 分析原因 检查IDEA的Maven相关配置，Settings -> Build, Execution, Deployment -> Build Tools -> Ma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"IDEA"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maven Pom依赖无法自动补全\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"分析原因","slug":"分析原因","link":"#分析原因","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.55,"words":164},"filePathRelative":"problem/backend-problem/idea/idea-cannot-completion-maven-pom.md","localizedDate":"2024年3月18日","excerpt":"<h2>问题现象</h2>\\n<p>平时pom文件都可以根据输入的依赖关键词进行依赖引入的补全，但是突然输入关键词后怎样都无法补全</p>\\n<h2>问题</h2>\\n<p>可以正常运行Maven项目，说明Maven没问题，所以是IDEA设置的问题</p>\\n<h2>分析原因</h2>\\n<p>检查IDEA的Maven相关配置，<code>Settings -&gt; Build, Execution, Deployment -&gt; Build Tools -&gt; Maven</code></p>\\n<p>最后发现<code>Settings -&gt; Build, Execution, Deployment -&gt; Build Tools -&gt; Maven -&gt; Repositories</code>中，Local仓库的Updated状态为error</p>","autoDesc":true}');export{h as comp,g as data};
