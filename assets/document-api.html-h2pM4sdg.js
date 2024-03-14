import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as i,e as n}from"./app-R-jbemKs.js";const a={},s=n(`<h2 id="新增document并指定-id" tabindex="-1"><a class="header-anchor" href="#新增document并指定-id" aria-hidden="true">#</a> 新增Document并指定_id</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /{index_name}/_doc/{_id}

{
    &quot;id&quot;: &quot;ff000&quot;,
    &quot;name&quot;: &quot;John&quot;
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改document部分字段" tabindex="-1"><a class="header-anchor" href="#修改document部分字段" aria-hidden="true">#</a> 修改Document部分字段</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /{index_name}/_doc/{_id}

{
    &quot;doc&quot;: {
        &quot;name&quot;: &quot;Mike&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>DELETE /{index_name}/_doc/{_id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /{index_name}/_doc/{_id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查询-仅数据" tabindex="-1"><a class="header-anchor" href="#查询-仅数据" aria-hidden="true">#</a> 查询(仅数据)</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /{index_name}/_source/{_id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),t=[s];function r(c,l){return d(),i("div",null,t)}const h=e(a,[["render",r],["__file","document-api.html.vue"]]);export{h as default};
