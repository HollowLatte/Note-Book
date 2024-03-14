import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as s}from"./app-R-jbemKs.js";const d={},i=s(`<h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p>默认Redis在127.0.0.1:6379上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># a指定密码,n指定库</span>
redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">--bigkeys</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="couldn-t-determine-dbsize-问题" tabindex="-1"><a class="header-anchor" href="#couldn-t-determine-dbsize-问题" aria-hidden="true">#</a> Couldn&#39;t determine DBSIZE!问题</h3><p>在执行<code>redis-cli --bigkeys</code>时，Redis响应了<code>Couldn&#39;t determine DBSIZE!</code>。</p><p>这个问题很坑。从响应信息看起来像是要指定db，但是加上<code>-n 0</code>后，还是报错或者没有响应值</p><p>最后发现是要带上密码，即加上<code>-a 密码</code></p><p>如果其他redis-cli命令出现类似问题，也可如此解决</p>`,8),r=[i];function c(t,o){return a(),n("div",null,r)}const m=e(d,[["render",c],["__file","find-big-key.html.vue"]]);export{m as default};
