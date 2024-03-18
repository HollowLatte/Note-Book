import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as s,a as e,d as t,b as a,e as i}from"./app-6eIwu4TL.js";const h={},c=i('<h2 id="什么是高可用-可用性的判断标准是啥" tabindex="-1"><a class="header-anchor" href="#什么是高可用-可用性的判断标准是啥"><span>什么是高可用？可用性的判断标准是啥？</span></a></h2><p>高可用描述的是一个系统在大部分时间都是可用的，可以为我们提供服务的。高可用代表系统即使在发生硬件故障或者系统升级的时候，服务仍然是可用的。</p><p>一般情况下，我们使用多少个 9 来评判一个系统的可用性，比如 99.9999% 就是代表该系统在所有的运行时间中只有 0.0001% 的时间是不可用的，这样的系统就是非常非常高可用的了！当然，也会有系统如果可用性不太好的话，可能连 9 都上不了。</p><p>除此之外，系统的可用性还可以用某功能的失败次数与总的请求次数之比来衡量，比如对网站请求 1000 次，其中有 10 次请求失败，那么可用性就是 99%。</p><h2 id="哪些情况会导致系统不可用" tabindex="-1"><a class="header-anchor" href="#哪些情况会导致系统不可用"><span>哪些情况会导致系统不可用？</span></a></h2><ol><li>黑客攻击；</li><li>硬件故障，比如服务器坏掉。</li><li>并发量/用户请求量激增导致整个服务宕掉或者部分服务不可用。</li><li>代码中的坏味道导致内存泄漏或者其他问题导致程序挂掉。</li><li>网站架构某个重要的角色比如 Nginx 或者数据库突然不可用。</li><li>自然灾害或者人为破坏。</li><li>......</li></ol><h2 id="有哪些提高系统可用性的方法" tabindex="-1"><a class="header-anchor" href="#有哪些提高系统可用性的方法"><span>有哪些提高系统可用性的方法？</span></a></h2><h3 id="注重代码质量-测试严格把关" tabindex="-1"><a class="header-anchor" href="#注重代码质量-测试严格把关"><span>注重代码质量，测试严格把关</span></a></h3><p>我觉得这个是最最最重要的，代码质量有问题比如比较常见的内存泄漏、循环依赖都是对系统可用性极大的损害。大家都喜欢谈限流、降级、熔断，但是我觉得从代码质量这个源头把关是首先要做好的一件很重要的事情。如何提高代码质量？比较实际可用的就是 CodeReview，不要在乎每天多花的那 1 个小时左右的时间，作用可大着呢！</p><p>另外，安利几个对提高代码质量有实际效果的神器：</p>',10),p={href:"https://www.sonarqube.org/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://arthas.aliyun.com/doc/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/alibaba/p3c",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"IDEA 自带的代码分析等工具。",-1),u=e("h3",{id:"使用集群-减少单点故障",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用集群-减少单点故障"},[e("span",null,"使用集群，减少单点故障")])],-1),b=e("p",null,"先拿常用的 Redis 举个例子！我们如何保证我们的 Redis 缓存高可用呢？答案就是使用集群，避免单点故障。当我们使用一个 Redis 实例作为缓存的时候，这个 Redis 实例挂了之后，整个缓存服务可能就挂了。使用了集群之后，即使一台 Redis 实例挂了，不到一秒就会有另外一台 Redis 实例顶上。",-1),_=e("h3",{id:"限流",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#限流"},[e("span",null,"限流")])],-1),f={href:"https://github.com/alibaba/Sentinel",title:"Sentinel",target:"_blank",rel:"noopener noreferrer"},y=i('<h3 id="超时和重试机制设置" tabindex="-1"><a class="header-anchor" href="#超时和重试机制设置"><span>超时和重试机制设置</span></a></h3><p>一旦用户请求超过某个时间的得不到响应，就抛出异常。这个是非常重要的，很多线上系统故障都是因为没有进行超时设置或者超时设置的方式不对导致的。我们在读取第三方服务的时候，尤其适合设置超时和重试机制。一般我们使用一些 RPC 框架的时候，这些框架都自带的超时重试的配置。如果不进行超时设置可能会导致请求响应速度慢，甚至导致请求堆积进而让系统无法再处理请求。重试的次数一般设为 3 次，再多次的重试没有好处，反而会加重服务器压力（部分场景使用失败重试机制会不太适合）。</p><h3 id="熔断机制" tabindex="-1"><a class="header-anchor" href="#熔断机制"><span>熔断机制</span></a></h3><p>超时和重试机制设置之外，熔断机制也是很重要的。 熔断机制说的是系统自动收集所依赖服务的资源使用情况和性能指标，当所依赖的服务恶化或者调用失败次数达到某个阈值的时候就迅速失败，让当前系统立即切换依赖其他备用服务。 比较常用的流量控制和熔断降级框架是 Netflix 的 Hystrix 和 alibaba 的 Sentinel。</p><h3 id="异步调用" tabindex="-1"><a class="header-anchor" href="#异步调用"><span>异步调用</span></a></h3><p>异步调用的话我们不需要关心最后的结果，这样我们就可以用户请求完成之后就立即返回结果，具体处理我们可以后续再做，秒杀场景用这个还是蛮多的。但是，使用异步之后我们可能需要 <strong>适当修改业务流程进行配合</strong>，比如<strong>用户在提交订单之后，不能立即返回用户订单提交成功，需要在消息队列的订单消费者进程真正处理完该订单之后，甚至出库后，再通过电子邮件或短信通知用户订单成功</strong>。除了可以在程序中实现异步之外，我们常常还使用消息队列，消息队列可以通过异步处理提高系统性能（削峰、减少响应所需时间）并且可以降低系统耦合性。</p><h3 id="使用缓存" tabindex="-1"><a class="header-anchor" href="#使用缓存"><span>使用缓存</span></a></h3><p>如果我们的系统属于并发量比较高的话，如果我们单纯使用数据库的话，当大量请求直接落到数据库可能数据库就会直接挂掉。使用缓存缓存热点数据，因为缓存存储在内存中，所以速度相当地快！</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><ul><li><strong>核心应用和服务优先使用更好的硬件</strong></li><li><strong>监控系统资源使用情况增加报警设置。</strong></li><li><strong>注意备份，必要时候回滚。</strong></li><li><strong>灰度发布：</strong> 将服务器集群分成若干部分，每天只发布一部分机器，观察运行稳定没有故障，第二天继续发布一部分机器，持续几天才把整个集群全部发布完毕，期间如果发现问题，只需要回滚已发布的一部分服务器即可</li><li><strong>定期检查/更换硬件：</strong> 如果不是购买的云服务的话，定期还是需要对硬件进行一波检查的，对于一些需要更换或者升级的硬件，要及时更换或者升级。</li><li>.....</li></ul>',10);function v(k,x){const l=o("ExternalLinkIcon");return r(),s("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[t("Sonarqube"),a(l)]),t("；")]),e("li",null,[t("Alibaba 开源的 Java 诊断工具 "),e("a",d,[t("Arthas"),a(l)]),t("；")]),e("li",null,[e("a",g,[t("阿里巴巴 Java 代码规范"),a(l)]),t("（Alibaba Java Code Guidelines）；")]),m]),u,b,_,e("p",null,[t("流量控制（flow control），其原理是监控应用流量的 QPS 或并发线程数等指标，当达到指定的阈值时对流量进行控制，以避免被瞬时的流量高峰冲垮，从而保障应用的高可用性。——来自 "),e("a",f,[t("alibaba-Sentinel"),a(l)]),t(" 的 wiki。")]),y])}const R=n(h,[["render",v],["__file","high-availability-system-design.html.vue"]]),S=JSON.parse('{"path":"/high-availability/high-availability-system-design.html","title":"高可用系统设计指南","lang":"zh-CN","frontmatter":{"title":"高可用系统设计指南","category":"高可用","description":"什么是高可用？可用性的判断标准是啥？ 高可用描述的是一个系统在大部分时间都是可用的，可以为我们提供服务的。高可用代表系统即使在发生硬件故障或者系统升级的时候，服务仍然是可用的。 一般情况下，我们使用多少个 9 来评判一个系统的可用性，比如 99.9999% 就是代表该系统在所有的运行时间中只有 0.0001% 的时间是不可用的，这样的系统就是非常非常高...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/high-availability/high-availability-system-design.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"高可用系统设计指南"}],["meta",{"property":"og:description","content":"什么是高可用？可用性的判断标准是啥？ 高可用描述的是一个系统在大部分时间都是可用的，可以为我们提供服务的。高可用代表系统即使在发生硬件故障或者系统升级的时候，服务仍然是可用的。 一般情况下，我们使用多少个 9 来评判一个系统的可用性，比如 99.9999% 就是代表该系统在所有的运行时间中只有 0.0001% 的时间是不可用的，这样的系统就是非常非常高..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高可用系统设计指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"什么是高可用？可用性的判断标准是啥？","slug":"什么是高可用-可用性的判断标准是啥","link":"#什么是高可用-可用性的判断标准是啥","children":[]},{"level":2,"title":"哪些情况会导致系统不可用？","slug":"哪些情况会导致系统不可用","link":"#哪些情况会导致系统不可用","children":[]},{"level":2,"title":"有哪些提高系统可用性的方法？","slug":"有哪些提高系统可用性的方法","link":"#有哪些提高系统可用性的方法","children":[{"level":3,"title":"注重代码质量，测试严格把关","slug":"注重代码质量-测试严格把关","link":"#注重代码质量-测试严格把关","children":[]},{"level":3,"title":"使用集群，减少单点故障","slug":"使用集群-减少单点故障","link":"#使用集群-减少单点故障","children":[]},{"level":3,"title":"限流","slug":"限流","link":"#限流","children":[]},{"level":3,"title":"超时和重试机制设置","slug":"超时和重试机制设置","link":"#超时和重试机制设置","children":[]},{"level":3,"title":"熔断机制","slug":"熔断机制","link":"#熔断机制","children":[]},{"level":3,"title":"异步调用","slug":"异步调用","link":"#异步调用","children":[]},{"level":3,"title":"使用缓存","slug":"使用缓存","link":"#使用缓存","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":5.48,"words":1645},"filePathRelative":"high-availability/high-availability-system-design.md","localizedDate":"2024年3月18日","excerpt":"<h2>什么是高可用？可用性的判断标准是啥？</h2>\\n<p>高可用描述的是一个系统在大部分时间都是可用的，可以为我们提供服务的。高可用代表系统即使在发生硬件故障或者系统升级的时候，服务仍然是可用的。</p>\\n<p>一般情况下，我们使用多少个 9 来评判一个系统的可用性，比如 99.9999% 就是代表该系统在所有的运行时间中只有 0.0001% 的时间是不可用的，这样的系统就是非常非常高可用的了！当然，也会有系统如果可用性不太好的话，可能连 9 都上不了。</p>\\n<p>除此之外，系统的可用性还可以用某功能的失败次数与总的请求次数之比来衡量，比如对网站请求 1000 次，其中有 10 次请求失败，那么可用性就是 99%。</p>","autoDesc":true}');export{R as comp,S as data};
