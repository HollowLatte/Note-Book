const e=JSON.parse('{"key":"v-7c1eff0e","path":"/distributed-system/protocol/cap-and-base-theorem.html","title":"CAP & BASE理论详解","lang":"zh-CN","frontmatter":{"title":"CAP & BASE理论详解","category":"分布式","tag":["分布式理论"],"description":"经历过技术面试的小伙伴想必对 CAP &amp; BASE 这个两个理论已经再熟悉不过了！ 我当年参加面试的时候，不夸张地说，只要问到分布式相关的内容，面试官几乎是必定会问这两个分布式相关的理论。一是因为这两个分布式基础理论是学习分布式知识的必备前置基础，二是因为很多面试官自己比较熟悉这两个理论（方便提问）。 我们非常有必要将这两个理论搞懂，并且能够用自己的理解给别人讲出来。 CAP 理论 CAP 理论/定理起源于 2000 年，由加州大学伯克利分校的 Eric Brewer 教授在分布式计算原理研讨会（PODC）上提出，因此 CAP 定理又被称作 布鲁尔定理（Brewer’s theorem）","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/distributed-system/protocol/cap-and-base-theorem.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"CAP & BASE理论详解"}],["meta",{"property":"og:description","content":"经历过技术面试的小伙伴想必对 CAP &amp; BASE 这个两个理论已经再熟悉不过了！ 我当年参加面试的时候，不夸张地说，只要问到分布式相关的内容，面试官几乎是必定会问这两个分布式相关的理论。一是因为这两个分布式基础理论是学习分布式知识的必备前置基础，二是因为很多面试官自己比较熟悉这两个理论（方便提问）。 我们非常有必要将这两个理论搞懂，并且能够用自己的理解给别人讲出来。 CAP 理论 CAP 理论/定理起源于 2000 年，由加州大学伯克利分校的 Eric Brewer 教授在分布式计算原理研讨会（PODC）上提出，因此 CAP 定理又被称作 布鲁尔定理（Brewer’s theorem）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"分布式理论"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAP & BASE理论详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"CAP 理论","slug":"cap-理论","link":"#cap-理论","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"不是所谓的“3 选 2”","slug":"不是所谓的-3-选-2","link":"#不是所谓的-3-选-2","children":[]},{"level":3,"title":"CAP 实际应用案例","slug":"cap-实际应用案例","link":"#cap-实际应用案例","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":3,"title":"推荐阅读","slug":"推荐阅读","link":"#推荐阅读","children":[]}]},{"level":2,"title":"BASE 理论","slug":"base-理论","link":"#base-理论","children":[{"level":3,"title":"简介","slug":"简介-1","link":"#简介-1","children":[]},{"level":3,"title":"BASE 理论的核心思想","slug":"base-理论的核心思想","link":"#base-理论的核心思想","children":[]},{"level":3,"title":"BASE 理论三要素","slug":"base-理论三要素","link":"#base-理论三要素","children":[]},{"level":3,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]}]}],"git":{},"readingTime":{"minutes":10.76,"words":3229},"filePathRelative":"distributed-system/protocol/cap-and-base-theorem.md","excerpt":"<p>经历过技术面试的小伙伴想必对 CAP &amp; BASE 这个两个理论已经再熟悉不过了！</p>\\n<p>我当年参加面试的时候，不夸张地说，只要问到分布式相关的内容，面试官几乎是必定会问这两个分布式相关的理论。一是因为这两个分布式基础理论是学习分布式知识的必备前置基础，二是因为很多面试官自己比较熟悉这两个理论（方便提问）。</p>\\n<p>我们非常有必要将这两个理论搞懂，并且能够用自己的理解给别人讲出来。</p>\\n<h2> CAP 理论</h2>\\n<p><a href=\\"https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CAP 理论/定理</a>起源于 2000 年，由加州大学伯克利分校的 Eric Brewer 教授在分布式计算原理研讨会（PODC）上提出，因此 CAP 定理又被称作 <strong>布鲁尔定理（Brewer’s theorem）</strong></p>","autoDesc":true}');export{e as data};
