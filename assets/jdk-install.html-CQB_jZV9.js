import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,e as n}from"./app-DmUsX9Nr.js";const s={},o=n(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><ol><li>将下载的JDK tar.gz文件放在一个目录中（推荐/opt或/usr/local）</li><li>解压<code>tar -xzvf openjdk-8u382.tar.gz</code></li><li>配置JDK环境变量，打开<code>~/.bashrc</code>文件，在空白处加上以下内容：<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/jdk-path
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token builtin class-name">export</span> JAVA_HOME <span class="token environment constant">PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>重新加载配置文件：<code>source ~/.bashrc</code></li></ol>`,2),l=[o];function i(r,c){return t(),e("div",null,l)}const m=a(s,[["render",i],["__file","jdk-install.html.vue"]]),u=JSON.parse('{"path":"/practice-manual/linux/install/jdk-install.html","title":"JDK安装","lang":"zh-CN","frontmatter":{"title":"JDK安装","author":null,"category":"Linux","tag":"Linux","description":"安装 将下载的JDK tar.gz文件放在一个目录中（推荐/opt或/usr/local） 解压tar -xzvf openjdk-8u382.tar.gz 配置JDK环境变量，打开~/.bashrc文件，在空白处加上以下内容： 重新加载配置文件：source ~/.bashrc","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/linux/install/jdk-install.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"JDK安装"}],["meta",{"property":"og:description","content":"安装 将下载的JDK tar.gz文件放在一个目录中（推荐/opt或/usr/local） 解压tar -xzvf openjdk-8u382.tar.gz 配置JDK环境变量，打开~/.bashrc文件，在空白处加上以下内容： 重新加载配置文件：source ~/.bashrc"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.28,"words":83},"filePathRelative":"practice-manual/linux/install/jdk-install.md","localizedDate":"2024年3月28日","excerpt":"<h2>安装</h2>\\n<ol>\\n<li>将下载的JDK tar.gz文件放在一个目录中（推荐/opt或/usr/local）</li>\\n<li>解压<code>tar -xzvf openjdk-8u382.tar.gz</code></li>\\n<li>配置JDK环境变量，打开<code>~/.bashrc</code>文件，在空白处加上以下内容：<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token assign-left variable\\">JAVA_HOME</span><span class=\\"token operator\\">=</span>/jdk-path\\n<span class=\\"token assign-left variable\\"><span class=\\"token environment constant\\">PATH</span></span><span class=\\"token operator\\">=</span><span class=\\"token environment constant\\">$PATH</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">$JAVA_HOME</span>/bin\\n<span class=\\"token builtin class-name\\">export</span> JAVA_HOME <span class=\\"token environment constant\\">PATH</span>\\n</code></pre></div></li>\\n<li>重新加载配置文件：<code>source ~/.bashrc</code></li>\\n</ol>","autoDesc":true}');export{m as comp,u as data};