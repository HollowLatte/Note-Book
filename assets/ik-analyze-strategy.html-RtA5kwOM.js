import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,e as d}from"./app-R-jbemKs.js";const s={},l=d(`<h2 id="逐字分词和ik分词结合" tabindex="-1"><a class="header-anchor" href="#逐字分词和ik分词结合" aria-hidden="true">#</a> 逐字分词和ik分词结合</h2><p>索引的字段设置如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>PUT mx_index

{
    &quot;mappings&quot;: {
        &quot;_doc&quot;: {
            &quot;properties&quot;: {
                &quot;product_name&quot;: {
                    &quot;type&quot;: &quot;text&quot;,
                    &quot;analyzer&quot;: &quot;ik_max_word&quot;,
                    &quot;fields&quot;: {
                        &quot;standard&quot;: {
                            &quot;type&quot;: &quot;text&quot;,
                            &quot;analyzer&quot;: &quot;standard&quot;
                        },
                        &quot;keyword&quot;: {
                            &quot;type&quot;: &quot;keyword&quot;,
                            &quot;ignore_above&quot;: 256
                        }
                    }
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索示例如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET mx_index/_search

{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;should&quot;: [
        {
          &quot;match_phrase&quot;: {
            &quot;product_name&quot;: &quot;科剃&quot;
          }
        },
        {
          &quot;match_phrase&quot;: {
            &quot;product_name.standard&quot;: &quot;科剃&quot;
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u=[l];function t(a,v){return i(),e("div",null,u)}const c=n(s,[["render",t],["__file","ik-analyze-strategy.html.vue"]]);export{c as default};
