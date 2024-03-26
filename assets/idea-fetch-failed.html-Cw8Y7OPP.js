import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as s}from"./app-BGUJa96a.js";const n={},o=s(`<h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h2><p>点击fetch时，IDEA弹出如下错误：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>unable to <span class="token builtin class-name">read</span> askpass response from <span class="token string">&#39;C:
\\Users\\WUHU\\AppData\\Local\\JetBrains\\IntelliJIdea2023.2\\tmp\\intellij-git-askpass-local.sh&#39;</span> bash: line <span class="token number">1</span>: /dev/tty: No
such
device or address failed to execute prompt script <span class="token punctuation">(</span>exit code <span class="token number">1</span><span class="token punctuation">)</span> could not <span class="token builtin class-name">read</span> Username <span class="token keyword">for</span> <span class="token string">&#39;http://10.50.20.88&#39;</span><span class="token builtin class-name">:</span> No
such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析"><span>原因分析</span></a></h2><p>原因是IDEA的git插件在使用git fetch时，会在本地生成一个临时文件，这个文件会在git fetch结束后被删除。</p><p>这个临时文件是用来获取git的用户名和密码的，如果这个文件被删除了，就会导致IDEA无法获取用户名和密码，从而导致fetch失败。</p><p>为什么该临时文件会被删除还不清除</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>在IDEA的设置中找到Git选项，然后找到<code>Use credential helper</code>，将其勾选即可</p><p>我猜测该配置的作用应该是从Git 内置的凭据助手中获取认证信息</p>`,10),i=[o];function l(c,p){return t(),a("div",null,i)}const h=e(n,[["render",l],["__file","idea-fetch-failed.html.vue"]]),m=JSON.parse(`{"path":"/problem/backend-problem/idea/idea-fetch-failed.html","title":"Fetch失败","lang":"zh-CN","frontmatter":{"title":"Fetch失败","author":null,"category":"IDEA","tag":"IDEA","description":"问题现象 点击fetch时，IDEA弹出如下错误： 原因分析 原因是IDEA的git插件在使用git fetch时，会在本地生成一个临时文件，这个文件会在git fetch结束后被删除。 这个临时文件是用来获取git的用户名和密码的，如果这个文件被删除了，就会导致IDEA无法获取用户名和密码，从而导致fetch失败。 为什么该临时文件会被删除还不清除 ...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/problem/backend-problem/idea/idea-fetch-failed.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Fetch失败"}],["meta",{"property":"og:description","content":"问题现象 点击fetch时，IDEA弹出如下错误： 原因分析 原因是IDEA的git插件在使用git fetch时，会在本地生成一个临时文件，这个文件会在git fetch结束后被删除。 这个临时文件是用来获取git的用户名和密码的，如果这个文件被删除了，就会导致IDEA无法获取用户名和密码，从而导致fetch失败。 为什么该临时文件会被删除还不清除 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T19:10:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"IDEA"}],["meta",{"property":"article:modified_time","content":"2024-03-26T19:10:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fetch失败\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T19:10:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1711480217000,"updatedTime":1711480217000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.8,"words":240},"filePathRelative":"problem/backend-problem/idea/idea-fetch-failed.md","localizedDate":"2024年3月26日","excerpt":"<h2>问题现象</h2>\\n<p>点击fetch时，IDEA弹出如下错误：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>unable to <span class=\\"token builtin class-name\\">read</span> askpass response from <span class=\\"token string\\">'C:\\n\\\\Users\\\\WUHU\\\\AppData\\\\Local\\\\JetBrains\\\\IntelliJIdea2023.2\\\\tmp\\\\intellij-git-askpass-local.sh'</span> bash: line <span class=\\"token number\\">1</span>: /dev/tty: No\\nsuch\\ndevice or address failed to execute prompt script <span class=\\"token punctuation\\">(</span>exit code <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> could not <span class=\\"token builtin class-name\\">read</span> Username <span class=\\"token keyword\\">for</span> <span class=\\"token string\\">'http://10.50.20.88'</span><span class=\\"token builtin class-name\\">:</span> No\\nsuch <span class=\\"token function\\">file</span> or directory\\n</code></pre></div>","autoDesc":true}`);export{h as comp,m as data};
