import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,e as n}from"./app-R-jbemKs.js";const i={},r=n(`<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>jps命令可以显示当前运行的java进程以及相关参数，它的实现机制如下：</p><p>java程序在启动以后，会在java.io.tmpdir指定的目录下，就是临时文件夹里，生成一个类似于hsperfdata_User的文件夹，这个文件夹里（在Linux中为/tmp/hsperfdata_ {userName}/），有几个文件，名字就是java进程的pid，因此列出当前运行的java进程，只是把这个目录里的文件名列一下而已。 至于系统的参数什么，就可以解析这几个文件获得。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出应用程序main class的完整package名 或者 应用程序的jar文件完整路径名</span>
jps <span class="token parameter variable">-l</span>

<span class="token comment"># 输出传递给JVM的参数</span>
jps <span class="token parameter variable">-v</span>

<span class="token comment"># 输出传递给main 方法的参数</span>
jps <span class="token parameter variable">-m</span>

<span class="token comment"># 只显示pid，不显示class名称,jar文件名和传递给main 方法的参数</span>
jps <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[r];function d(c,t){return e(),s("div",null,l)}const v=a(i,[["render",d],["__file","jps.html.vue"]]);export{v as default};
