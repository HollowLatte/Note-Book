import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as s,c as d,a as e,d as n,b as r,e as l}from"./app-R-jbemKs.js";const o={},u=e("h2",{id:"索引模板",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#索引模板","aria-hidden":"true"},"#"),n(" 索引模板")],-1),c={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-templates.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>官方文档有以下描述： Index templates automatically apply settings, mappings, and aliases to new indices. They are most often used to configure rolling indices for time series data to ensure that each new index has the same configuration as the previous one. The index template associated with a data stream configures its backing indices. For more information, see Index Templates.</p><p>因此，索引模板通常用于配置按照日期滚动的索引，索引模板结合索引别名就可以实现检索滚动索引。</p><p>如，目前有一个user的索引，想要把每天新增的用户存到当天一个新的索引上去，就可以使用索引模板。用来创建user-2023-07-01、user-2023-07-02等等</p><h3 id="疑问" tabindex="-1"><a class="header-anchor" href="#疑问" aria-hidden="true">#</a> 疑问</h3><p>有人会有疑问，“我不配置索引模板也行啊，每次插入数据的时候定义索引名称不就行了吗？反正插入数据的时候ES会帮我创建索引”</p><p>插入数据的时候ES的确会自动创建索引，但是创建出来的索引内字段类型其实并不是我们想要的，例如有些字段需要分词，但是ES自动创建的不会加分词器</p><p>所以，索引模板其实就是规定索引字段、索引设置，等插入数据时，ES按照我们预定的模板进行创建。</p><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><ol><li>自动创建新索引：当您使用滚动索引或时间序列数据存储时，可能会频繁地创建新索引。使用索引模板可以自动创建新索引，并且新索引会继承模板中的设置和映射规则。</li><li>统一索引规则：使用索引模板可以确保所有的索引都遵循相同的设置和映射规则，从而避免了索引配置的不一致性。</li><li>简化索引管理：当您需要更改多个索引的设置或映射规则时，使用索引模板可以一次性更改所有的索引。</li><li>支持动态映射：索引模板可以使用动态映射规则，可以自动识别新字段并将其添加到映射中，从而减少手动维护映射的工作量。</li></ol><h2 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api" aria-hidden="true">#</a> Rest API</h2><h3 id="查询模板" tabindex="-1"><a class="header-anchor" href="#查询模板" aria-hidden="true">#</a> 查询模板</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /_template/{index_name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建-更新模板" tabindex="-1"><a class="header-anchor" href="#创建-更新模板" aria-hidden="true">#</a> 创建/更新模板</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>PUT /_template/{index_name}

{
    &quot;index_patterns&quot;: [
        &quot;example-*&quot;
    ],
    // 别名
    &quot;aliases&quot;: {
        &quot;example&quot;: {},
        &quot;example-new&quot;: {}
    },
    &quot;mappings&quot;: {
        &quot;properties&quot;: {
            &quot;id&quot;: {
                &quot;type&quot;: &quot;keyword&quot;
            },
            &quot;name&quot;: {
                &quot;type&quot;: &quot;keyword&quot;
            }
        }
    },
    &quot;settings&quot;: {
        &quot;index&quot;: {
            &quot;number_of_shards&quot;: &quot;5&quot;,
            &quot;number_of_replicas&quot;: &quot;0&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>index_patterns</code>的作用是：当索引名称匹配pattern时，按照当前模板创建索引</p><h2 id="删除模板" tabindex="-1"><a class="header-anchor" href="#删除模板" aria-hidden="true">#</a> 删除模板</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>DELETE /_template/{index_name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17);function v(h,p){const i=t("ExternalLinkIcon");return s(),d("div",null,[u,e("p",null,[n("官方文档："),e("a",c,[n("Elasticsearch Index templates"),r(i)])]),m])}const x=a(o,[["render",v],["__file","index-template.html.vue"]]);export{x as default};
