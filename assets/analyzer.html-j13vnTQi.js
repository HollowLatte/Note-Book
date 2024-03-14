import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,e as s}from"./app-R-jbemKs.js";const t={},i=s(`<p>通常我们说的ES分词，在ES中称为analyzer，ES有默认的分词器standard，但是对检索中文不友好</p><h2 id="索引分词" tabindex="-1"><a class="header-anchor" href="#索引分词" aria-hidden="true">#</a> 索引分词</h2><p>索引分词是指在建立索引时对文本进行分词处理，并将分词结果保存到索引中。在索引文本时，Elasticsearch 会根据设置的分析器对文本进行分词、过滤、标准化等操作，以便后续的搜索和聚合操作。索引分词通常会对文本进行更加精细的分词处理，以提高搜索结果的准确性。</p><h3 id="添加-修改索引分词器" tabindex="-1"><a class="header-anchor" href="#添加-修改索引分词器" aria-hidden="true">#</a> 添加/修改索引分词器</h3><p>已经创建的索引是不可以添加或修改分词器的，需要创建一个新的索引，在新的索引上添加分词器。</p><p>添加分词器就是在索引的字段中配置<code>analyzer</code>属性。</p><p>例如，想给name字段配置ik分词器就可以进行如下配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索分词" tabindex="-1"><a class="header-anchor" href="#搜索分词" aria-hidden="true">#</a> 搜索分词</h2><p>搜索分词是指在查询时对<strong>输入的关键词</strong>进行分词处理，并将分词结果与索引中的分词结果进行匹配，以找到匹配的文档。在搜索时，Elasticsearch 会根据设置的分析器对查询语句进行分词、过滤、标准化等操作，以便与索引中的分词结果进行匹配。搜索分词通常会对查询语句进行较为宽松的分词处理，以提高搜索结果的召回率。</p><h2 id="分词验证" tabindex="-1"><a class="header-anchor" href="#分词验证" aria-hidden="true">#</a> 分词验证</h2><p>可以通过ES提供的Analyzer API来测试分词情况。</p><p>测试ES默认的分词效果：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /_analyze

{
    &quot;analyzer&quot;: &quot;standard&quot;,
    &quot;text&quot;: &quot;[asdklad_lxc_qwekqlwn,jsdaisjd,asdasd]&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试ik的分词效果：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /_analyze

{
    &quot;analyzer&quot;: &quot;ik_smart&quot;,
    &quot;text&quot;: &quot;我是一个粉刷匠，粉刷本领强。&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),d=[i];function r(l,o){return n(),e("div",null,d)}const p=a(t,[["render",r],["__file","analyzer.html.vue"]]);export{p as default};
