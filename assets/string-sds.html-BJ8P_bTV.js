import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as o,e as r}from"./app-DmUsX9Nr.js";const n={},i=r('<h2 id="为什么要自己定义sds" tabindex="-1"><a class="header-anchor" href="#为什么要自己定义sds"><span>为什么要自己定义SDS？</span></a></h2><p>SDS（Simple Dynamic Strings），即简单动态字符串。第一就是要支持任意字符的存储，第二就是各种操作需要高效。</p><p>C语言中，字符串是通过字符数组实现的，为了表示字符串的结束，他会在字符数组的最后一个字符处记录<code>\\0</code></p><p><strong>这样实现的字符串中就不能保存任意内容了，至少<code>\\0</code>就不行</strong></p><p>C中的字符串以\\0作为识别字符串结束的方式，所以他的字符串长度判断、字符串追加等操作，都需要从头开始遍历，一直遍历到\\0的时候再返回长度或者做追加。这就使得字符串相关的操作效率都很低。</p><p>在用字符数组表示字符串的同时，在这个字符串中增加一个表示分配给该字符数组的总长度的alloc字段， 和一个表示字符串现有长度的len字段。这样在获取长度的时候就不依赖\\0了，直接返回len的值就行了。</p>',6),a=[i];function s(c,p){return e(),o("div",null,a)}const m=t(n,[["render",s],["__file","string-sds.html.vue"]]),h=JSON.parse('{"path":"/interview-shorthand/redis/data-structure/string-sds.html","title":"String使用的SDS","lang":"zh-CN","frontmatter":{"title":"String使用的SDS","author":null,"category":"Redis","tag":"Redis","description":"为什么要自己定义SDS？ SDS（Simple Dynamic Strings），即简单动态字符串。第一就是要支持任意字符的存储，第二就是各种操作需要高效。 C语言中，字符串是通过字符数组实现的，为了表示字符串的结束，他会在字符数组的最后一个字符处记录\\\\0 这样实现的字符串中就不能保存任意内容了，至少\\\\0就不行 C中的字符串以\\\\0作为识别字符串结束的方...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/interview-shorthand/redis/data-structure/string-sds.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"String使用的SDS"}],["meta",{"property":"og:description","content":"为什么要自己定义SDS？ SDS（Simple Dynamic Strings），即简单动态字符串。第一就是要支持任意字符的存储，第二就是各种操作需要高效。 C语言中，字符串是通过字符数组实现的，为了表示字符串的结束，他会在字符数组的最后一个字符处记录\\\\0 这样实现的字符串中就不能保存任意内容了，至少\\\\0就不行 C中的字符串以\\\\0作为识别字符串结束的方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"String使用的SDS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"为什么要自己定义SDS？","slug":"为什么要自己定义sds","link":"#为什么要自己定义sds","children":[]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.99,"words":297},"filePathRelative":"interview-shorthand/redis/data-structure/string-sds.md","localizedDate":"2024年3月28日","excerpt":"<h2>为什么要自己定义SDS？</h2>\\n<p>SDS（Simple Dynamic Strings），即简单动态字符串。第一就是要支持任意字符的存储，第二就是各种操作需要高效。</p>\\n<p>C语言中，字符串是通过字符数组实现的，为了表示字符串的结束，他会在字符数组的最后一个字符处记录<code>\\\\0</code></p>\\n<p><strong>这样实现的字符串中就不能保存任意内容了，至少<code>\\\\0</code>就不行</strong></p>\\n<p>C中的字符串以\\\\0作为识别字符串结束的方式，所以他的字符串长度判断、字符串追加等操作，都需要从头开始遍历，一直遍历到\\\\0的时候再返回长度或者做追加。这就使得字符串相关的操作效率都很低。</p>","autoDesc":true}');export{m as comp,h as data};