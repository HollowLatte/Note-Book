import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,e as d}from"./app-R-jbemKs.js";const s={},a=d(`<h2 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h2><p>创建索引，并指定索引的字段类型</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>PUT /{index_name}

{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;id&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;,
        &quot;fields&quot;: {
          &quot;keyword&quot;: {
            &quot;type&quot;: &quot;keyword&quot;,
            &quot;ignore_above&quot;: 256
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询索引相关信息" tabindex="-1"><a class="header-anchor" href="#查询索引相关信息" aria-hidden="true">#</a> 查询索引相关信息</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>### 查询所有索引
GET /_cat/indices?v

### 查询索引字段
GET /{index_name}/_mapping

### 查询索引设置
GET /{index_name}/_settings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[a];function t(u,r){return i(),n("div",null,l)}const o=e(s,[["render",t],["__file","index-api.html.vue"]]);export{o as default};
