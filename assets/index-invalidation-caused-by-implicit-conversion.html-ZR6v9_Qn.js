const t=JSON.parse('{"key":"v-866ab6aa","path":"/database/mysql/index-invalidation-caused-by-implicit-conversion.html","title":"MySQL隐式转换造成索引失效","lang":"zh-CN","frontmatter":{"title":"MySQL隐式转换造成索引失效","category":"数据库","tag":["MySQL","性能优化"],"description":"本次测试使用的 MySQL 版本是 5.7.26，随着 MySQL 版本的更新某些特性可能会发生改变，本文不代表所述观点和结论于 MySQL 所有版本均准确无误，版本差异请自行甄别。 原文：https://www.guitu18.com/post/2019/11/24/61.html 前言 数据库优化是一个任重而道远的任务，想要做优化必须深入理解数据库的各种特性。在开发过程中我们经常会遇到一些原因很简单但造成的后果却很严重的疑难杂症，这类问题往往还不容易定位，排查费时费力最后发现是一个很小的疏忽造成的，又或者是因为不了解某个技术特性产生的。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/database/mysql/index-invalidation-caused-by-implicit-conversion.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"MySQL隐式转换造成索引失效"}],["meta",{"property":"og:description","content":"本次测试使用的 MySQL 版本是 5.7.26，随着 MySQL 版本的更新某些特性可能会发生改变，本文不代表所述观点和结论于 MySQL 所有版本均准确无误，版本差异请自行甄别。 原文：https://www.guitu18.com/post/2019/11/24/61.html 前言 数据库优化是一个任重而道远的任务，想要做优化必须深入理解数据库的各种特性。在开发过程中我们经常会遇到一些原因很简单但造成的后果却很严重的疑难杂症，这类问题往往还不容易定位，排查费时费力最后发现是一个很小的疏忽造成的，又或者是因为不了解某个技术特性产生的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"性能优化"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL隐式转换造成索引失效\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"数据准备","slug":"数据准备","link":"#数据准备","children":[]},{"level":2,"title":"SQL 测试","slug":"sql-测试","link":"#sql-测试","children":[]},{"level":2,"title":"分析和总结","slug":"分析和总结","link":"#分析和总结","children":[]}],"git":{},"readingTime":{"minutes":8.7,"words":2610},"filePathRelative":"database/mysql/index-invalidation-caused-by-implicit-conversion.md","excerpt":"<blockquote>\\n<p>本次测试使用的 MySQL 版本是 <code>5.7.26</code>，随着 MySQL 版本的更新某些特性可能会发生改变，本文不代表所述观点和结论于 MySQL 所有版本均准确无误，版本差异请自行甄别。</p>\\n<p>原文：https://www.guitu18.com/post/2019/11/24/61.html</p>\\n</blockquote>\\n<h2> 前言</h2>\\n<p>数据库优化是一个任重而道远的任务，想要做优化必须深入理解数据库的各种特性。在开发过程中我们经常会遇到一些原因很简单但造成的后果却很严重的疑难杂症，这类问题往往还不容易定位，排查费时费力最后发现是一个很小的疏忽造成的，又或者是因为不了解某个技术特性产生的。</p>","autoDesc":true}');export{t as data};
