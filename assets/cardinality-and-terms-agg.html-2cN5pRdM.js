const e=JSON.parse('{"key":"v-a8aea6f6","path":"/practice-manual/elasticsearch/search/aggregation/cardinality-and-terms-agg.html","title":"Cardinality和Terms结合使用","lang":"zh-CN","frontmatter":{"title":"Cardinality和Terms结合使用","author":null,"category":"Elasticsearch","tag":"Elasticsearch","description":"单独的cardinality和terms聚合已经写过，此处主要讲解两者的嵌套使用 分组数据再去重 例如，我们需要统计参加会议最多的前3个用户，并去除重复参加的会议 可以在terms聚合的sort字段中指定子聚合的名称，那么排序结果就会以子聚合的cardinality的value进行排序 相当于SQL： SELECT username, COUNT(DISTINCT meetingId) AS meeting_count FROM tb_user GROUP BY username ORDER BY meeting_count DESC LIMIT 3;","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/elasticsearch/search/aggregation/cardinality-and-terms-agg.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Cardinality和Terms结合使用"}],["meta",{"property":"og:description","content":"单独的cardinality和terms聚合已经写过，此处主要讲解两者的嵌套使用 分组数据再去重 例如，我们需要统计参加会议最多的前3个用户，并去除重复参加的会议 可以在terms聚合的sort字段中指定子聚合的名称，那么排序结果就会以子聚合的cardinality的value进行排序 相当于SQL： SELECT username, COUNT(DISTINCT meetingId) AS meeting_count FROM tb_user GROUP BY username ORDER BY meeting_count DESC LIMIT 3;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cardinality和Terms结合使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"分组数据再去重","slug":"分组数据再去重","link":"#分组数据再去重","children":[]}],"git":{},"readingTime":{"minutes":0.93,"words":279},"filePathRelative":"practice-manual/elasticsearch/search/aggregation/cardinality-and-terms-agg.md","excerpt":"<p>单独的cardinality和terms聚合已经写过，此处主要讲解两者的嵌套使用</p>\\n<h2> 分组数据再去重</h2>\\n<p>例如，我们需要统计参加会议最多的前3个用户，并去除重复参加的会议</p>\\n<p>可以在terms聚合的sort字段中指定子聚合的名称，那么排序结果就会以子聚合的cardinality的value进行排序</p>\\n<p>相当于SQL：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SELECT</span> username<span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">COUNT</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">DISTINCT</span> meetingId<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">AS</span> meeting_count\\n<span class=\\"token keyword\\">FROM</span> tb_user\\n<span class=\\"token keyword\\">GROUP</span> <span class=\\"token keyword\\">BY</span> username\\n<span class=\\"token keyword\\">ORDER</span> <span class=\\"token keyword\\">BY</span> meeting_count <span class=\\"token keyword\\">DESC</span> <span class=\\"token keyword\\">LIMIT</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
