import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,e as s}from"./app-R-jbemKs.js";const d={},l=s(`<h2 id="无匹配条件查询" tabindex="-1"><a class="header-anchor" href="#无匹配条件查询" aria-hidden="true">#</a> 无匹配条件查询</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /{index_name}/_search

{
    &quot;from&quot;: 10,
    &quot;size&quot;: 20,
    &quot;sort&quot;: [
        {&quot;startTime&quot;: &quot;desc&quot;},
        {&quot;id&quot;: &quot;desc&quot;}
    ],
    // &quot;_source&quot;: false,
    &quot;_source&quot;: {
        &quot;excludes&quot;: [
            &quot;name&quot;
        ],
        &quot;includes&quot;: [
            &quot;id&quot;
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p><ul><li>from：从第几条数据开始查找，默认0，最大10000</li><li>size：返回数据条数，默认10，最大10000</li><li>sort：按照字段排序</li><li>_source：是否查询出数据，如果false，则只返回document的_index、_id、_score、sort字段 <ul><li>excludes：数组，数组内指定返回的数据中不包含哪些字段</li><li>includes：数组，数组内指定返回的数据中要包含哪些字段</li></ul></li></ul><h2 id="term查询" tabindex="-1"><a class="header-anchor" href="#term查询" aria-hidden="true">#</a> Term查询</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),t=[l];function a(u,r){return i(),n("div",null,t)}const v=e(d,[["render",a],["__file","search-api.html.vue"]]);export{v as default};
