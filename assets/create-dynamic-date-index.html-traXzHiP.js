import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as s}from"./app-R-jbemKs.js";const i={},d=s(`<h2 id="动态日期索引" tabindex="-1"><a class="header-anchor" href="#动态日期索引" aria-hidden="true">#</a> 动态日期索引</h2><p>按照日期的变化创建带有相应日期后缀的索引，例如user-202305、user-202306</p><p>这样的索引有利于数据的归档与处理</p><h2 id="实现动态日期索引" tabindex="-1"><a class="header-anchor" href="#实现动态日期索引" aria-hidden="true">#</a> 实现动态日期索引</h2><p>步骤如下：</p><ol><li>创建索引的template 例如：<div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>PUT /_template/meeting

{
    &quot;index_patterns&quot;: [
        &quot;meeting-*&quot;
    ],
    &quot;aliases&quot;: {
        &quot;meeting&quot;: {}
    },
    &quot;mappings&quot;: {
        &quot;properties&quot;: {
            // keyword=====================================
            &quot;id&quot;: {
                &quot;type&quot;: &quot;keyword&quot;
            },
            &quot;meetingCode&quot;: {
                &quot;type&quot;: &quot;keyword&quot;
            },
            // 分词=======================================
            &quot;name&quot;: {
                &quot;type&quot;: &quot;text&quot;,
                &quot;analyzer&quot;: &quot;ik_max_word&quot;
            }
        }
    },
    &quot;settings&quot;: {
        &quot;number_of_shards&quot;: 1,
        &quot;number_of_replicas&quot;: 0
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>获取当前日期，在<code>meeting-</code>拼接上日期，如按照月份分索引，则为<code>meeting-202307</code> ，当使用插入API插入数据时，设置索引为<code>meeting-202307</code>，那么ES就会根据匹配到的索引模板来创建索引</li></ol><h2 id="document-api无法使用索引别名进行操作" tabindex="-1"><a class="header-anchor" href="#document-api无法使用索引别名进行操作" aria-hidden="true">#</a> Document API无法使用索引别名进行操作</h2><p>值得注意的是，使用<code>/{index_name}/_doc/{_id}</code>的Document操作时，<code>{index_name}</code>不能为索引别名。因为它属于单索引操作</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>alias <span class="token punctuation">[</span>meeting<span class="token punctuation">]</span> has more than one index associated <span class="token keyword">with</span> <span class="token namespace">it</span> <span class="token punctuation">[</span>meeting<span class="token operator">-</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> meeting<span class="token operator">-</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">11</span><span class="token punctuation">,</span> meeting<span class="token operator">-</span><span class="token number">202308</span><span class="token punctuation">,</span> meeting_v2<span class="token punctuation">]</span><span class="token punctuation">,</span> 
can&#39;t execute a single index op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如下的操作都属于单索引操作，因此<code>{index_name}</code>都不可为索引别名</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /{index_name}/_doc/{_id}

POST /{index_name}/_doc/{_id}

DELETE /{index_name}/_doc/{_id}

GET /{index_name}/_doc/{_id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改与删除操作" tabindex="-1"><a class="header-anchor" href="#修改与删除操作" aria-hidden="true">#</a> 修改与删除操作</h2><p>如果无法使用Document API进行操作,那么应该如何修改或删除动态日期索引的数据呢？</p><h3 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h3><p>可以使用DeleteByQuery API进行数据的删除</p><h3 id="修改操作" tabindex="-1"><a class="header-anchor" href="#修改操作" aria-hidden="true">#</a> 修改操作</h3><ol><li>使用UpdateByQuery API进行数据的删除，由于UpdateByQuery API常常需要用到script脚本，当涉及到Document多个字段的修改时，script较为复杂</li><li>使用Search和Update Document，先Search查出数据所在的真实索引，再使用真实索引用Update Document操作修改数据</li></ol>`,17),t=[d];function o(l,c){return n(),a("div",null,t)}const p=e(i,[["render",o],["__file","create-dynamic-date-index.html.vue"]]);export{p as default};
