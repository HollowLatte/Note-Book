import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,e as i}from"./app-BtuJf2rB.js";const a={},l=i(`<h2 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引"><span>创建索引</span></a></h2><p>创建索引，并指定索引的字段类型</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>PUT /{index_name}

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询索引相关信息" tabindex="-1"><a class="header-anchor" href="#查询索引相关信息"><span>查询索引相关信息</span></a></h2><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>### 查询所有索引
GET /_cat/indices?v

### 查询索引字段
GET /{index_name}/_mapping

### 查询索引设置
GET /{index_name}/_settings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[l];function d(s,r){return t(),n("div",null,o)}const u=e(a,[["render",d],["__file","index-api.html.vue"]]),m=JSON.parse('{"path":"/practice-manual/elasticsearch/api/index-api.html","title":"常用Index API","lang":"zh-CN","frontmatter":{"title":"常用Index API","category":"ElasticSearch","tag":["ElasticSearch"],"description":"创建索引 创建索引，并指定索引的字段类型 查询索引相关信息","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/elasticsearch/api/index-api.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"常用Index API"}],["meta",{"property":"og:description","content":"创建索引 创建索引，并指定索引的字段类型 查询索引相关信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T11:26:10.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"ElasticSearch"}],["meta",{"property":"article:modified_time","content":"2024-03-26T11:26:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用Index API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T11:26:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"创建索引","slug":"创建索引","link":"#创建索引","children":[]},{"level":2,"title":"查询索引相关信息","slug":"查询索引相关信息","link":"#查询索引相关信息","children":[]}],"git":{"createdTime":1711452370000,"updatedTime":1711452370000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.28,"words":85},"filePathRelative":"practice-manual/elasticsearch/api/index-api.md","localizedDate":"2024年3月26日","excerpt":"<h2>创建索引</h2>\\n<p>创建索引，并指定索引的字段类型</p>\\n<div class=\\"language-http\\" data-ext=\\"http\\" data-title=\\"http\\"><pre class=\\"language-http\\"><code>PUT /{index_name}\\n\\n{\\n  \\"mappings\\": {\\n    \\"properties\\": {\\n      \\"id\\": {\\n        \\"type\\": \\"keyword\\"\\n      },\\n      \\"name\\": {\\n        \\"type\\": \\"text\\",\\n        \\"fields\\": {\\n          \\"keyword\\": {\\n            \\"type\\": \\"keyword\\",\\n            \\"ignore_above\\": 256\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
