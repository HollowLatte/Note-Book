import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as t,c as p,a as n,d as s,b as c,e as r}from"./app-R-jbemKs.js";const u={},l={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html",target:"_blank",rel:"noopener noreferrer"},i=r(`<p>Terms聚合是一种将字段的值作为分组的聚合，它将每个值作为一个桶即bucket，并统计每个桶中document的数量。</p><p>例如有一个SQL，<code>select type, count(distinct type) from user group by type</code>，terms聚合就相当于group by + count的操作</p><h2 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例" aria-hidden="true">#</a> 请求示例</h2><p>例如，现在要统计每种type的用户的数量，并且忽略值为空字符的</p><p><strong>请求参数如下：</strong></p><blockquote><p>其中<code>group-by-type</code>是一个自定义的聚合名称，可以自行命名</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;group-by-type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;missing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;_count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请求结果如下：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gte&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;group-by-type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CREATE&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">300</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SYNC&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">400</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述定义的聚合名称，可以从结果的aggregations中获取到分组的key-count数组。</p><p><strong>注意：</strong></p><ul><li>聚合的字段如果是字符串，必须是keyword类型</li></ul><h2 id="doc-count-error-upper-bound误差上限" tabindex="-1"><a class="header-anchor" href="#doc-count-error-upper-bound误差上限" aria-hidden="true">#</a> doc_count_error_upper_bound误差上限</h2><p>在terms聚合的结果中，有个特殊字段<code>doc_count_error_upper_bound</code>，它代表本次聚合中误差范围的上限</p><p>如果<code>doc_count_error_upper_bound</code>的值大于0，则表示所有桶中document的数量的总数有误，数量可能比实际的值要大。</p><p>在上述返回值中，<code>doc_count_error_upper_bound</code>的值为50，即表示<code>300+400 &lt;= 实际的值 &lt;= 300+400+50</code></p><p>如果想知道每个bucket中的误差上限，可以在请求参数添加<code>&quot;show_term_doc_count_error&quot;: true</code> ，则返回结果中每个bucket都会有一个<code>doc_count_error_upper_bound</code>字段，表示该bucket中的document数量的误差上限</p><h2 id="sum-other-doc-count" tabindex="-1"><a class="header-anchor" href="#sum-other-doc-count" aria-hidden="true">#</a> sum_other_doc_count</h2><p>sum_other_doc_count 是一个表示未包含在返回桶中的其他文档数量的值，因为上面的请求中的size为2，所以实际上只会返回2个桶，剩下所有未返回的桶的doc_count总数就是sum_other_doc_count</p><h2 id="根据多个字段分组" tabindex="-1"><a class="header-anchor" href="#根据多个字段分组" aria-hidden="true">#</a> 根据多个字段分组</h2><p>常规terms聚合无法通过字段分组这种复杂操作，所以要加入脚本</p><p>例如，要统计name、age、city三个字段的组合，可以理解为统计同一个城市里同名、同年龄的人的数量，可以参考使用以下的脚本：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;doc[&#39;name&#39;].value + &#39;-&#39; + doc[&#39;age&#39;].value + &#39;-&#39; +doc[&#39;city&#39;].value&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function d(k,v){const a=o("ExternalLinkIcon");return t(),p("div",null,[n("p",null,[s("官方文档："),n("a",l,[s("Terms Aggregation"),c(a)])]),i])}const q=e(u,[["render",d],["__file","terms-agg.html.vue"]]);export{q as default};
