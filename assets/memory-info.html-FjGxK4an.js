import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as a}from"./app-R-jbemKs.js";const i={},d=a(`<h2 id="info命令" tabindex="-1"><a class="header-anchor" href="#info命令" aria-hidden="true">#</a> info命令</h2><p>info命令可以查看redis实例的各种统计信息，如客户端、服务器、内存、集群等</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有</span>
info

<span class="token comment"># 只查看内存信息</span>
info memory

<span class="token comment"># 只查看key信息</span>
info keyspace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="memory命令" tabindex="-1"><a class="header-anchor" href="#memory命令" aria-hidden="true">#</a> memory命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取Redis实例的整体内存统计信息</span>
memory states

<span class="token comment"># 获取指定键的内存使用量，单位字节</span>
memory usage <span class="token punctuation">[</span>key<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[d];function l(r,o){return n(),s("div",null,c)}const v=e(i,[["render",l],["__file","memory-info.html.vue"]]);export{v as default};
