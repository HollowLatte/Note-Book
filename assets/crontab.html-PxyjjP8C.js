const t=JSON.parse('{"key":"v-635b77bd","path":"/practice-manual/linux/crontab.html","title":"Crontab定时任务","lang":"zh-CN","frontmatter":{"title":"Crontab定时任务","author":null,"category":"Linux","tag":"Linux","date":"2024-01-16T00:00:00.000Z","description":"crontab命令 crontab是Linux系统用来定期执行程序的命令，常用于定时校准时间、备份数据等 常用方式： # 查看当前所有定时任务 crontab -l # 编辑定时任务表 crontab -e # 清除所有定时任务，慎用！ crontab -r","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/linux/crontab.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Crontab定时任务"}],["meta",{"property":"og:description","content":"crontab命令 crontab是Linux系统用来定期执行程序的命令，常用于定时校准时间、备份数据等 常用方式： # 查看当前所有定时任务 crontab -l # 编辑定时任务表 crontab -e # 清除所有定时任务，慎用！ crontab -r"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2024-01-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Crontab定时任务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"crontab命令","slug":"crontab命令","link":"#crontab命令","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"crontab不生效","slug":"crontab不生效","link":"#crontab不生效","children":[{"level":3,"title":"crontab守护线程未开启","slug":"crontab守护线程未开启","link":"#crontab守护线程未开启","children":[]},{"level":3,"title":"crontab编辑任务表语法错误","slug":"crontab编辑任务表语法错误","link":"#crontab编辑任务表语法错误","children":[]}]}],"git":{},"readingTime":{"minutes":0.87,"words":260},"filePathRelative":"practice-manual/linux/crontab.md","localizedDate":"2024年1月16日","excerpt":"<h2> crontab命令</h2>\\n<p>crontab是Linux系统用来定期执行程序的命令，常用于定时校准时间、备份数据等</p>\\n<p>常用方式：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 查看当前所有定时任务</span>\\n<span class=\\"token function\\">crontab</span> <span class=\\"token parameter variable\\">-l</span>\\n\\n<span class=\\"token comment\\"># 编辑定时任务表</span>\\n<span class=\\"token function\\">crontab</span> <span class=\\"token parameter variable\\">-e</span>\\n\\n<span class=\\"token comment\\"># 清除所有定时任务，慎用！</span>\\n<span class=\\"token function\\">crontab</span> <span class=\\"token parameter variable\\">-r</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
