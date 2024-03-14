import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,e as d}from"./app-R-jbemKs.js";const s={},t=d(`<h2 id="term查询并更新指定字段" tabindex="-1"><a class="header-anchor" href="#term查询并更新指定字段" aria-hidden="true">#</a> Term查询并更新指定字段</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /{index_name}/_update_by_query

{
    &quot;query&quot;: {
        &quot;term&quot;: {
            &quot;username&quot;: &quot;wuhu&quot;
        }
    },
    &quot;script&quot;: {
        &quot;source&quot;: &quot;ctx._source.status = 1&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="term查询并删除" tabindex="-1"><a class="header-anchor" href="#term查询并删除" aria-hidden="true">#</a> Term查询并删除</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /{index_name}/_update_by_query

{
    &quot;query&quot;: {
        &quot;term&quot;: {
            &quot;username&quot;: &quot;ylz&quot;
        }
    },
    &quot;script&quot;: {
        &quot;source&quot;: &quot;ctx.op = &#39;delete&#39;&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=[t];function a(r,l){return i(),n("div",null,u)}const v=e(s,[["render",a],["__file","update-by-query-api.html.vue"]]);export{v as default};
