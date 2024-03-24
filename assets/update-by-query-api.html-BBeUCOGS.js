import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as i}from"./app-BIdAApvj.js";const n={},r=i(`<h2 id="term查询并更新指定字段" tabindex="-1"><a class="header-anchor" href="#term查询并更新指定字段"><span>Term查询并更新指定字段</span></a></h2><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>POST /{index_name}/_update_by_query

{
    &quot;query&quot;: {
        &quot;term&quot;: {
            &quot;username&quot;: &quot;wuhu&quot;
        }
    },
    &quot;script&quot;: {
        &quot;source&quot;: &quot;ctx._source.status = 1&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="term查询并删除" tabindex="-1"><a class="header-anchor" href="#term查询并删除"><span>Term查询并删除</span></a></h2><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>POST /{index_name}/_update_by_query

{
    &quot;query&quot;: {
        &quot;term&quot;: {
            &quot;username&quot;: &quot;ylz&quot;
        }
    },
    &quot;script&quot;: {
        &quot;source&quot;: &quot;ctx.op = &#39;delete&#39;&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[r];function o(s,d){return t(),a("div",null,l)}const m=e(n,[["render",o],["__file","update-by-query-api.html.vue"]]),p=JSON.parse('{"path":"/practice-manual/elasticsearch/api/update-by-query-api.html","title":"UpdateByQuery API","lang":"zh-CN","frontmatter":{"title":"UpdateByQuery API","category":"ElasticSearch","tag":["ElasticSearch"],"description":"Term查询并更新指定字段 Term查询并删除","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/elasticsearch/api/update-by-query-api.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"UpdateByQuery API"}],["meta",{"property":"og:description","content":"Term查询并更新指定字段 Term查询并删除"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-24T07:11:51.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"ElasticSearch"}],["meta",{"property":"article:modified_time","content":"2024-03-24T07:11:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UpdateByQuery API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-24T07:11:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"Term查询并更新指定字段","slug":"term查询并更新指定字段","link":"#term查询并更新指定字段","children":[]},{"level":2,"title":"Term查询并删除","slug":"term查询并删除","link":"#term查询并删除","children":[]}],"git":{"createdTime":1711264311000,"updatedTime":1711264311000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.17,"words":51},"filePathRelative":"practice-manual/elasticsearch/api/update-by-query-api.md","localizedDate":"2024年3月24日","excerpt":"<h2>Term查询并更新指定字段</h2>\\n<div class=\\"language-http\\" data-ext=\\"http\\" data-title=\\"http\\"><pre class=\\"language-http\\"><code>POST /{index_name}/_update_by_query\\n\\n{\\n    \\"query\\": {\\n        \\"term\\": {\\n            \\"username\\": \\"wuhu\\"\\n        }\\n    },\\n    \\"script\\": {\\n        \\"source\\": \\"ctx._source.status = 1\\"\\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,p as data};
