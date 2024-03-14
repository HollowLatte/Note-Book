import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-R-jbemKs.js";const t={},o=e(`<h2 id="search常用参数" tabindex="-1"><a class="header-anchor" href="#search常用参数" aria-hidden="true">#</a> Search常用参数</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /index_name/_search

<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;meetingCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;109654855&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;startTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;excludes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;host&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;includes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;id&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数解析：</strong></p><ul><li>query：search中的查询条件，相当于SQL中的where，也是以后实现多种查询逻辑的地方，此处不展开写</li><li>from：从第几条数据开始查找，默认0，最大值10000（可进行配置）</li><li>size：返回数据条数，默认10，最大值10000（可进行配置）</li><li>sort：按照字段排序，asc升序/desc降序。加上该参数后，查询的返回结果中会带有一个排序字段值的数组</li><li>_source：是否查询出数据，如果false，则只返回document的_index、_id、_score、sort字段 <ul><li>excludes：数组，数组内指定返回的数据中不包含哪些字段</li><li>includes：数组，数组内指定返回的数据中要包含哪些字段</li></ul></li></ul>`,4),p=[o];function i(c,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","search-param.html.vue"]]);export{d as default};
