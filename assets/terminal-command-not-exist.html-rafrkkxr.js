import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as l}from"./app-QXbWND43.js";const o={},n=l(`<h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h2><p>在IDEA或WebSocket的Terminal中输入命令时，出现类似下面的返回：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>无法将“vue”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是在Windows中直接打开的Terminal中，输入同样命令就是正常的</p><h2 id="可能原因" tabindex="-1"><a class="header-anchor" href="#可能原因"><span>可能原因</span></a></h2><ol><li>命令没有正确安装</li><li>IDEA、WebStorm中的Terminal的权限不足</li></ol><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><h3 id="切换为cmd" tabindex="-1"><a class="header-anchor" href="#切换为cmd"><span>切换为CMD</span></a></h3><p>在设置中找到Terminal，默认的Shell path一般为powershell.exe，将其换为cmd.exe</p><p><strong>缺点：</strong> cmd可能些许丑陋</p><h3 id="以管理员身份运行" tabindex="-1"><a class="header-anchor" href="#以管理员身份运行"><span>以管理员身份运行</span></a></h3><p>找到IDEA、Webstorm的启动exe，右键进入属性-&gt;兼容性-&gt;以管理员身份运行此程序</p><p><strong>缺点：</strong> 每次启动Webstorm都要点击确认</p>`,13),r=[n];function i(s,m){return t(),a("div",null,r)}const p=e(o,[["render",i],["__file","terminal-command-not-exist.html.vue"]]),h=JSON.parse('{"path":"/problem/backend-problem/idea/terminal-command-not-exist.html","title":"Terminal中命令不存在","lang":"zh-CN","frontmatter":{"title":"Terminal中命令不存在","author":null,"category":"IDEA","tag":"IDEA","date":"2024-01-07T00:00:00.000Z","description":"问题现象 在IDEA或WebSocket的Terminal中输入命令时，出现类似下面的返回： 但是在Windows中直接打开的Terminal中，输入同样命令就是正常的 可能原因 命令没有正确安装 IDEA、WebStorm中的Terminal的权限不足 解决方案 切换为CMD 在设置中找到Terminal，默认的Shell path一般为powers...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/problem/backend-problem/idea/terminal-command-not-exist.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Terminal中命令不存在"}],["meta",{"property":"og:description","content":"问题现象 在IDEA或WebSocket的Terminal中输入命令时，出现类似下面的返回： 但是在Windows中直接打开的Terminal中，输入同样命令就是正常的 可能原因 命令没有正确安装 IDEA、WebStorm中的Terminal的权限不足 解决方案 切换为CMD 在设置中找到Terminal，默认的Shell path一般为powers..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T17:48:20.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"IDEA"}],["meta",{"property":"article:published_time","content":"2024-01-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T17:48:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Terminal中命令不存在\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-26T17:48:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":2,"title":"可能原因","slug":"可能原因","link":"#可能原因","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[{"level":3,"title":"切换为CMD","slug":"切换为cmd","link":"#切换为cmd","children":[]},{"level":3,"title":"以管理员身份运行","slug":"以管理员身份运行","link":"#以管理员身份运行","children":[]}]}],"git":{"createdTime":1711475300000,"updatedTime":1711475300000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"problem/backend-problem/idea/terminal-command-not-exist.md","localizedDate":"2024年1月7日","excerpt":"<h2>问题现象</h2>\\n<p>在IDEA或WebSocket的Terminal中输入命令时，出现类似下面的返回：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>无法将“vue”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。\\n</code></pre></div><p>但是在Windows中直接打开的Terminal中，输入同样命令就是正常的</p>\\n<h2>可能原因</h2>\\n","autoDesc":true}');export{p as comp,h as data};
