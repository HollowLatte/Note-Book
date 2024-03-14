import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as r,e as i}from"./app-R-jbemKs.js";const d={},n=i(`<h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象" aria-hidden="true">#</a> 问题现象</h2><p>在IDEA或WebSocket的Terminal中输入命令时，出现类似下面的返回：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>无法将“vue”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是在Windows中直接打开的Terminal中，输入同样命令就是正常的</p><h2 id="可能原因" tabindex="-1"><a class="header-anchor" href="#可能原因" aria-hidden="true">#</a> 可能原因</h2><ol><li>命令没有正确安装</li><li>IDEA、WebStorm中的Terminal的权限不足</li></ol><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><h3 id="切换为cmd" tabindex="-1"><a class="header-anchor" href="#切换为cmd" aria-hidden="true">#</a> 切换为CMD</h3><p>在设置中找到Terminal，默认的Shell path一般为powershell.exe，将其换为cmd.exe</p><p><strong>缺点：</strong> cmd可能些许丑陋</p><h3 id="以管理员身份运行" tabindex="-1"><a class="header-anchor" href="#以管理员身份运行" aria-hidden="true">#</a> 以管理员身份运行</h3><p>找到IDEA、Webstorm的启动exe，右键进入属性-&gt;兼容性-&gt;以管理员身份运行此程序</p><p><strong>缺点：</strong> 每次启动Webstorm都要点击确认</p>`,13),t=[n];function s(h,o){return a(),r("div",null,t)}const m=e(d,[["render",s],["__file","terminal-command-not-exist.html.vue"]]);export{m as default};
