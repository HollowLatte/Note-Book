import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,a as n,d as s,b as c,e as i}from"./app-R-jbemKs.js";const l={},r={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-datehistogram-aggregation.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<p>Date histogram 聚合用于将date类型字段转换为时间间隔，然后将这些时间间隔分组。</p><p>例如，现在需要统计每天注册用户的数量，可以用用户注册时间的字段来按天分组。</p><p>需要注意的是，官方文档中说明Date histogram聚合的field字段必须是date类型。</p><blockquote><p>如果需要分组的字段为long类型的时间戳，也可以通过script来实现分组，但是会有些参数不生效。所以最好还是使用date类型吧</p></blockquote><h2 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例" aria-hidden="true">#</a> 请求示例</h2><p>例如，现在需要统计每天注册用户的数量</p><p>请求参数如下：</p><blockquote><p>其中<code>group-by-time</code>是一个自定义的聚合名称，可以自行命名</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;group-by-time&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;date_histogram&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;create_time&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;calendar_interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><code>field</code>：需要分组的字段</li><li><code>format</code>：时间格式</li><li><code>calendar_interval</code>：时间间隔，可选值：<code>year</code>, <code>quarter</code>, <code>month</code>, <code>week</code>, <code>day</code>, <code>hour</code>, <code>minute</code></li><li><code>fixed_interval</code>：如果<code>calendar_interval</code>不满足需求，可以通过该字段自定义时间间隔，如半天，则设为12h；半个月，则设为15d</li></ul><p><strong>请求结果如下：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;group-by-time&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key_as_string&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-11-10&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">1699545600000</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">30</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key_as_string&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-11-11&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">1699632000000</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">18</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求结果说明：</p><ul><li><code>key_as_string</code>：key通过请求参数的format格式化后的值，如没配置format，则无该返回值</li><li><code>key</code>：时间间隔</li><li><code>doc_count</code>：该时间间隔内的文档数量</li></ul><h2 id="long类型的时间戳分组" tabindex="-1"><a class="header-anchor" href="#long类型的时间戳分组" aria-hidden="true">#</a> long类型的时间戳分组</h2><p>如果需要分组的字段为long类型的时间戳，可以通过script来实现分组</p><p>需要注意的是，使用long类型的时间戳分组时，format、time_zone参数无效</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;group-by-time&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;date_histogram&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;create_time&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;calendar_interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Instant.ofEpochMilli(doc[&#39;create_time&#39;].value).toEpochMilli()&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token string">&quot;+8h&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>在script参数中，可以通过<code>doc[&#39;create_time&#39;].value</code>获取需要分组的字段的值，然后通过Java实现自己想要的逻辑，但是最后还是要将结果转为数字类型（int/long都可以）</li><li>如果有时区的问题，可以通过offset参数调整聚合桶的开始时间，或者在script中实现时区转换</li></ul>`,21);function d(k,v){const a=t("ExternalLinkIcon");return o(),p("div",null,[n("p",null,[s("官方文档："),n("a",r,[s("Date histogram aggregation"),c(a)])]),u])}const b=e(l,[["render",d],["__file","date-histogram-agg.html.vue"]]);export{b as default};
