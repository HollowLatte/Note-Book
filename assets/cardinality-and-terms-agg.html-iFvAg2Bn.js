import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-R-jbemKs.js";const t={},p=e(`<p>单独的cardinality和terms聚合已经写过，此处主要讲解两者的嵌套使用</p><h2 id="分组数据再去重" tabindex="-1"><a class="header-anchor" href="#分组数据再去重" aria-hidden="true">#</a> 分组数据再去重</h2><p>例如，我们需要统计参加会议最多的前3个用户，并去除重复参加的会议</p><p>可以在terms聚合的sort字段中指定子聚合的名称，那么排序结果就会以子聚合的cardinality的value进行排序</p><p>相当于SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> username<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> meetingId<span class="token punctuation">)</span> <span class="token keyword">AS</span> meeting_count
<span class="token keyword">FROM</span> tb_user
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> username
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> meeting_count <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求参数如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;group-by-username&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;meeting-count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;count-meeting-id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;cardinality&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meetingId&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求结果：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;group-by-username&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wuhu&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">333</span><span class="token punctuation">,</span>
          <span class="token property">&quot;count-meeting-id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snk&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>
          <span class="token property">&quot;count-meeting-id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">15</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zdp&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
          <span class="token property">&quot;count-meeting-id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，嵌套聚合返回的聚合结果也是有两层。以wuhu用户为例，333是去重前参加会议的总数，25是去重后参加会议的总数。所以如果想要去重后的数据，直接取内层cardinality聚合的value即可</p>`,11),o=[p];function c(u,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","cardinality-and-terms-agg.html.vue"]]);export{d as default};
