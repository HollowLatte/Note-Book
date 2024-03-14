const l=JSON.parse('{"key":"v-60dc87cc","path":"/database/mysql/mysql-index.html","title":"MySQL索引详解","lang":"zh-CN","frontmatter":{"title":"MySQL索引详解","category":"数据库","tag":["MySQL"],"description":"感谢WT-AHA对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。 但凡经历过几场面试的小伙伴，应该都清楚，数据库索引这个知识点在面试中出现的频率高到离谱。 除了对于准备面试来说非常重要之外，善用索引对 SQL 的性能提升非常明显，是一个性价比较高的 SQL 优化手段。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/database/mysql/mysql-index.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"MySQL索引详解"}],["meta",{"property":"og:description","content":"感谢WT-AHA对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。 但凡经历过几场面试的小伙伴，应该都清楚，数据库索引这个知识点在面试中出现的频率高到离谱。 除了对于准备面试来说非常重要之外，善用索引对 SQL 的性能提升非常明显，是一个性价比较高的 SQL 优化手段。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"MySQL"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL索引详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"索引介绍","slug":"索引介绍","link":"#索引介绍","children":[]},{"level":2,"title":"索引的优缺点","slug":"索引的优缺点","link":"#索引的优缺点","children":[]},{"level":2,"title":"索引底层数据结构选型","slug":"索引底层数据结构选型","link":"#索引底层数据结构选型","children":[{"level":3,"title":"Hash 表","slug":"hash-表","link":"#hash-表","children":[]},{"level":3,"title":"二叉查找树(BST)","slug":"二叉查找树-bst","link":"#二叉查找树-bst","children":[]},{"level":3,"title":"AVL 树","slug":"avl-树","link":"#avl-树","children":[]},{"level":3,"title":"红黑树","slug":"红黑树","link":"#红黑树","children":[]},{"level":3,"title":"B 树& B+树","slug":"b-树-b-树","link":"#b-树-b-树","children":[]}]},{"level":2,"title":"索引类型总结","slug":"索引类型总结","link":"#索引类型总结","children":[]},{"level":2,"title":"主键索引(Primary Key)","slug":"主键索引-primary-key","link":"#主键索引-primary-key","children":[]},{"level":2,"title":"二级索引","slug":"二级索引","link":"#二级索引","children":[]},{"level":2,"title":"聚簇索引与非聚簇索引","slug":"聚簇索引与非聚簇索引","link":"#聚簇索引与非聚簇索引","children":[{"level":3,"title":"聚簇索引（聚集索引）","slug":"聚簇索引-聚集索引","link":"#聚簇索引-聚集索引","children":[]},{"level":3,"title":"非聚簇索引（非聚集索引）","slug":"非聚簇索引-非聚集索引","link":"#非聚簇索引-非聚集索引","children":[]}]},{"level":2,"title":"覆盖索引和联合索引","slug":"覆盖索引和联合索引","link":"#覆盖索引和联合索引","children":[{"level":3,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":3,"title":"联合索引","slug":"联合索引","link":"#联合索引","children":[]},{"level":3,"title":"最左前缀匹配原则","slug":"最左前缀匹配原则","link":"#最左前缀匹配原则","children":[]}]},{"level":2,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[]},{"level":2,"title":"正确使用索引的一些建议","slug":"正确使用索引的一些建议","link":"#正确使用索引的一些建议","children":[{"level":3,"title":"选择合适的字段创建索引","slug":"选择合适的字段创建索引","link":"#选择合适的字段创建索引","children":[]},{"level":3,"title":"被频繁更新的字段应该慎重建立索引","slug":"被频繁更新的字段应该慎重建立索引","link":"#被频繁更新的字段应该慎重建立索引","children":[]},{"level":3,"title":"限制每张表上的索引数量","slug":"限制每张表上的索引数量","link":"#限制每张表上的索引数量","children":[]},{"level":3,"title":"尽可能的考虑建立联合索引而不是单列索引","slug":"尽可能的考虑建立联合索引而不是单列索引","link":"#尽可能的考虑建立联合索引而不是单列索引","children":[]},{"level":3,"title":"注意避免冗余索引","slug":"注意避免冗余索引","link":"#注意避免冗余索引","children":[]},{"level":3,"title":"字符串类型的字段使用前缀索引代替普通索引","slug":"字符串类型的字段使用前缀索引代替普通索引","link":"#字符串类型的字段使用前缀索引代替普通索引","children":[]},{"level":3,"title":"避免索引失效","slug":"避免索引失效","link":"#避免索引失效","children":[]},{"level":3,"title":"删除长期未使用的索引","slug":"删除长期未使用的索引","link":"#删除长期未使用的索引","children":[]},{"level":3,"title":"知道如何分析语句是否走索引查询","slug":"知道如何分析语句是否走索引查询","link":"#知道如何分析语句是否走索引查询","children":[]}]}],"git":{},"readingTime":{"minutes":25.25,"words":7574},"filePathRelative":"database/mysql/mysql-index.md","excerpt":"<blockquote>\\n<p>感谢<a href=\\"https://github.com/WT-AHA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">WT-AHA</a>对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。</p>\\n</blockquote>\\n<p>但凡经历过几场面试的小伙伴，应该都清楚，数据库索引这个知识点在面试中出现的频率高到离谱。</p>\\n<p>除了对于准备面试来说非常重要之外，善用索引对 SQL 的性能提升非常明显，是一个性价比较高的 SQL 优化手段。</p>","autoDesc":true}');export{l as data};
