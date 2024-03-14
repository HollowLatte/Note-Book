const e=JSON.parse('{"key":"v-6f11378a","path":"/system-design/schedule-task.html","title":"Java 定时任务详解","lang":"zh-CN","frontmatter":{"title":"Java 定时任务详解","category":"系统设计","icon":"time","head":[["meta",{"name":"keywords","content":"定时任务,Quartz,Elastic-Job,XXL-JOB,PowerJob"}],["meta",{"name":"description","content":"XXL-JOB 2015 年推出，已经经过了很多年的考验。XXL-JOB 轻量级，并且使用起来非常简单。虽然存在性能瓶颈，但是，在绝大多数情况下，对于企业的基本需求来说是没有影响的。PowerJob 属于分布式任务调度领域里的新星，其稳定性还有待继续考察。ElasticJob 由于在架构设计上是基于 Zookeeper ，而 XXL-JOB 是基于数据库，性能方面的话，ElasticJob 略胜一筹。"}],["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/system-design/schedule-task.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Java 定时任务详解"}],["meta",{"property":"og:description","content":"为什么需要定时任务？ 我们来看一下几个非常常见的业务场景： 某系统凌晨要进行数据备份。 某电商平台，用户下单半个小时未支付的情况下需要自动取消订单。 某媒体聚合平台，每 10 分钟动态抓取某某网站的数据为自己所用。 某博客平台，支持定时发送文章。 某基金平台，每晚定时计算用户当日收益情况并推送给用户最新的数据。 ...... 这些场景往往都要求我们在某个特定的时间去做某个事情。 单机定时任务技术选型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 定时任务详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]],"description":"为什么需要定时任务？ 我们来看一下几个非常常见的业务场景： 某系统凌晨要进行数据备份。 某电商平台，用户下单半个小时未支付的情况下需要自动取消订单。 某媒体聚合平台，每 10 分钟动态抓取某某网站的数据为自己所用。 某博客平台，支持定时发送文章。 某基金平台，每晚定时计算用户当日收益情况并推送给用户最新的数据。 ...... 这些场景往往都要求我们在某个特定的时间去做某个事情。 单机定时任务技术选型"},"headers":[{"level":2,"title":"为什么需要定时任务？","slug":"为什么需要定时任务","link":"#为什么需要定时任务","children":[]},{"level":2,"title":"单机定时任务技术选型","slug":"单机定时任务技术选型","link":"#单机定时任务技术选型","children":[{"level":3,"title":"Timer","slug":"timer","link":"#timer","children":[]},{"level":3,"title":"ScheduledExecutorService","slug":"scheduledexecutorservice","link":"#scheduledexecutorservice","children":[]},{"level":3,"title":"Spring Task","slug":"spring-task","link":"#spring-task","children":[]},{"level":3,"title":"时间轮","slug":"时间轮","link":"#时间轮","children":[]}]},{"level":2,"title":"分布式定时任务技术选型","slug":"分布式定时任务技术选型","link":"#分布式定时任务技术选型","children":[{"level":3,"title":"Quartz","slug":"quartz","link":"#quartz","children":[]},{"level":3,"title":"Elastic-Job","slug":"elastic-job","link":"#elastic-job","children":[]},{"level":3,"title":"XXL-JOB","slug":"xxl-job","link":"#xxl-job","children":[]},{"level":3,"title":"PowerJob","slug":"powerjob","link":"#powerjob","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":13.41,"words":4024},"filePathRelative":"system-design/schedule-task.md","excerpt":"<h2> 为什么需要定时任务？</h2>\\n<p>我们来看一下几个非常常见的业务场景：</p>\\n<ol>\\n<li>某系统凌晨要进行数据备份。</li>\\n<li>某电商平台，用户下单半个小时未支付的情况下需要自动取消订单。</li>\\n<li>某媒体聚合平台，每 10 分钟动态抓取某某网站的数据为自己所用。</li>\\n<li>某博客平台，支持定时发送文章。</li>\\n<li>某基金平台，每晚定时计算用户当日收益情况并推送给用户最新的数据。</li>\\n<li>......</li>\\n</ol>\\n<p>这些场景往往都要求我们在某个特定的时间去做某个事情。</p>\\n<h2> 单机定时任务技术选型</h2>","autoDesc":true}');export{e as data};
