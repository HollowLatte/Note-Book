import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as t,e as i}from"./app-QXbWND43.js";const n="/assets/GeForceExperience-skip-login-1-DEZUtcdj.png",r="/assets/GeForceExperience-skip-login-2-BXn8AEkB.png",c={},p=i('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>3.27.0.112版本成功</p></div><ol><li><p>使用VS Code(或其它代码编辑器)打开文件<code>C:\\Program Files\\NVIDIA Corporation\\NVIDIA GeForce Experience\\www\\app.js</code></p><blockquote><p>注意，不要格式化代码！ 本文提供的正则表达式适用于，从未格式化过的代码中搜索关键代码。</p></blockquote></li><li><p>使用正则表达式<code>&quot;choose&quot;===\\w\\.nvActiveAuthView[\\D]*\\)\\}</code>搜索代码，其中的<code>[\\D]*</code>考虑到了兼容GFE旧版本代码的细微变化。</p></li><li><p>替换内容为<br><code>&quot;choose&quot;===this.nvActiveAuthView)};this.handleLoggedIn({sessionToken:&quot;&quot;,userToken:&quot;&quot;,user: {core: {displayName:&quot;匿名用户&quot;,primaryEmailVerified: true}}});</code><br><br><strong>代码替换前：</strong></p><p><img src="'+n+'" alt=""><strong>代码替换后：</strong></p><figure><img src="'+r+'" alt="" tabindex="0"><figcaption></figcaption></figure></li></ol>',2),s=[p];function a(l,d){return o(),t("div",null,s)}const h=e(c,[["render",a],["__file","GeForceExperience-skip-login.html.vue"]]),u=JSON.parse('{"path":"/problem/non-dev/windows/GeForceExperience-skip-login.html","title":"GeForce Experience 绕过登录","lang":"zh-CN","frontmatter":{"title":"GeForce Experience 绕过登录","category":"Windows","icon":"windows","description":"提示 3.27.0.112版本成功 使用VS Code(或其它代码编辑器)打开文件C:\\\\Program Files\\\\NVIDIA Corporation\\\\NVIDIA GeForce Experience\\\\www\\\\app.js 注意，不要格式化代码！ 本文提供的正则表达式适用于，从未格式化过的代码中搜索关键代码。 使用正则表达式\\"choose\\"===\\\\...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/problem/non-dev/windows/GeForceExperience-skip-login.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"GeForce Experience 绕过登录"}],["meta",{"property":"og:description","content":"提示 3.27.0.112版本成功 使用VS Code(或其它代码编辑器)打开文件C:\\\\Program Files\\\\NVIDIA Corporation\\\\NVIDIA GeForce Experience\\\\www\\\\app.js 注意，不要格式化代码！ 本文提供的正则表达式适用于，从未格式化过的代码中搜索关键代码。 使用正则表达式\\"choose\\"===\\\\..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T17:48:20.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:modified_time","content":"2024-03-26T17:48:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GeForce Experience 绕过登录\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T17:48:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[],"git":{"createdTime":1711475300000,"updatedTime":1711475300000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"problem/non-dev/windows/GeForceExperience-skip-login.md","localizedDate":"2024年3月26日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>3.27.0.112版本成功</p>\\n</div>\\n<ol>\\n<li>\\n<p>使用VS Code(或其它代码编辑器)打开文件<code>C:\\\\Program Files\\\\NVIDIA Corporation\\\\NVIDIA GeForce Experience\\\\www\\\\app.js</code></p>\\n<blockquote>\\n<p>注意，不要格式化代码！ 本文提供的正则表达式适用于，从未格式化过的代码中搜索关键代码。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>使用正则表达式<code>\\"choose\\"===\\\\w\\\\.nvActiveAuthView[\\\\D]*\\\\)\\\\}</code>搜索代码，其中的<code>[\\\\D]*</code>考虑到了兼容GFE旧版本代码的细微变化。</p>\\n</li>\\n<li>\\n<p>替换内容为<br>\\n<code>\\"choose\\"===this.nvActiveAuthView)};this.handleLoggedIn({sessionToken:\\"\\",userToken:\\"\\",user: {core: {displayName:\\"匿名用户\\",primaryEmailVerified: true}}});</code>\\n<br><br>\\n<strong>代码替换前：</strong></p>\\n<p>\\n<strong>代码替换后：</strong></p>\\n<figure><figcaption></figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}');export{h as comp,u as data};
