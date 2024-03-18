import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,e as i}from"./app-6eIwu4TL.js";const a={},l=i(`<h2 id="逐字分词和ik分词结合" tabindex="-1"><a class="header-anchor" href="#逐字分词和ik分词结合"><span>逐字分词和ik分词结合</span></a></h2><p>索引的字段设置如下：</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>PUT mx_index

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索示例如下：</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>GET mx_index/_search

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[l];function s(d,r){return t(),n("div",null,o)}const m=e(a,[["render",s],["__file","ik-analyze-strategy.html.vue"]]),v=JSON.parse('{"path":"/practice-manual/elasticsearch/analyzer/ik-analyze-strategy.html","title":"ik分词策略","lang":"zh-CN","frontmatter":{"title":"ik分词策略","author":null,"category":"Elasticsearch","tag":"Elasticsearch","description":"逐字分词和ik分词结合 索引的字段设置如下： 搜索示例如下：","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/elasticsearch/analyzer/ik-analyze-strategy.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"ik分词策略"}],["meta",{"property":"og:description","content":"逐字分词和ik分词结合 索引的字段设置如下： 搜索示例如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ik分词策略\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"逐字分词和ik分词结合","slug":"逐字分词和ik分词结合","link":"#逐字分词和ik分词结合","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.25,"words":74},"filePathRelative":"practice-manual/elasticsearch/analyzer/ik-analyze-strategy.md","localizedDate":"2024年3月18日","excerpt":"<h2>逐字分词和ik分词结合</h2>\\n<p>索引的字段设置如下：</p>\\n<div class=\\"language-http\\" data-ext=\\"http\\" data-title=\\"http\\"><pre class=\\"language-http\\"><code>PUT mx_index\\n\\n{\\n    \\"mappings\\": {\\n        \\"_doc\\": {\\n            \\"properties\\": {\\n                \\"product_name\\": {\\n                    \\"type\\": \\"text\\",\\n                    \\"analyzer\\": \\"ik_max_word\\",\\n                    \\"fields\\": {\\n                        \\"standard\\": {\\n                            \\"type\\": \\"text\\",\\n                            \\"analyzer\\": \\"standard\\"\\n                        },\\n                        \\"keyword\\": {\\n                            \\"type\\": \\"keyword\\",\\n                            \\"ignore_above\\": 256\\n                        }\\n                    }\\n                }\\n            }\\n        }\\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,v as data};
