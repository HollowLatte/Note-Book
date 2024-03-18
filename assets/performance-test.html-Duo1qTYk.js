import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as a,e as i}from"./app-6eIwu4TL.js";const t={},n=i('<p>性能测试一般情况下都是由测试这个职位去做的，那还需要我们开发学这个干嘛呢？了解性能测试的指标、分类以及工具等知识有助于我们更好地去写出性能更好的程序，另外作为开发这个角色，如果你会性能测试的话，相信也会为你的履历加分不少。</p><p>这篇文章是我会结合自己的实际经历以及在测试这里取的经所得，除此之外，我还借鉴了一些优秀书籍，希望对你有帮助。</p><h2 id="一-不同角色看网站性能" tabindex="-1"><a class="header-anchor" href="#一-不同角色看网站性能"><span>一 不同角色看网站性能</span></a></h2><h3 id="_1-1-用户" tabindex="-1"><a class="header-anchor" href="#_1-1-用户"><span>1.1 用户</span></a></h3><p>当用户打开一个网站的时候，最关注的是什么？当然是网站响应速度的快慢。比如我们点击了淘宝的主页，淘宝需要多久将首页的内容呈现在我的面前，我点击了提交订单按钮需要多久返回结果等等。</p><p>所以，用户在体验我们系统的时候往往根据你的响应速度的快慢来评判你的网站的性能。</p><h3 id="_1-2-开发人员" tabindex="-1"><a class="header-anchor" href="#_1-2-开发人员"><span>1.2 开发人员</span></a></h3><p>用户与开发人员都关注速度，这个速度实际上就是我们的系统<strong>处理用户请求的速度</strong>。</p><p>开发人员一般情况下很难直观的去评判自己网站的性能，我们往往会根据网站当前的架构以及基础设施情况给一个大概的值,比如：</p><ol><li>项目架构是分布式的吗？</li><li>用到了缓存和消息队列没有？</li><li>高并发的业务有没有特殊处理？</li><li>数据库设计是否合理？</li><li>系统用到的算法是否还需要优化？</li><li>系统是否存在内存泄露的问题？</li><li>项目使用的 Redis 缓存多大？服务器性能如何？用的是机械硬盘还是固态硬盘？</li><li>......</li></ol><h3 id="_1-3-测试人员" tabindex="-1"><a class="header-anchor" href="#_1-3-测试人员"><span>1.3 测试人员</span></a></h3><p>测试人员一般会根据性能测试工具来测试，然后一般会做出一个表格。这个表格可能会涵盖下面这些重要的内容：</p><ol><li>响应时间；</li><li>请求成功率；</li><li>吞吐量；</li><li>......</li></ol><h3 id="_1-4-运维人员" tabindex="-1"><a class="header-anchor" href="#_1-4-运维人员"><span>1.4 运维人员</span></a></h3><p>运维人员会倾向于根据基础设施和资源的利用率来判断网站的性能，比如我们的服务器资源使用是否合理、数据库资源是否存在滥用的情况、当然，这是传统的运维人员，现在 Devops 火起来后，单纯干运维的很少了。我们这里暂且还保留有这个角色。</p><h2 id="二-性能测试需要注意的点" tabindex="-1"><a class="header-anchor" href="#二-性能测试需要注意的点"><span>二 性能测试需要注意的点</span></a></h2><p>几乎没有文章在讲性能测试的时候提到这个问题，大家都会讲如何去性能测试，有哪些性能测试指标这些东西。</p><h3 id="_2-1-了解系统的业务场景" tabindex="-1"><a class="header-anchor" href="#_2-1-了解系统的业务场景"><span>2.1 了解系统的业务场景</span></a></h3><p><strong>性能测试之前更需要你了解当前的系统的业务场景。</strong> 对系统业务了解的不够深刻，我们很容易犯测试方向偏执的错误，从而导致我们忽略了对系统某些更需要性能测试的地方进行测试。比如我们的系统可以为用户提供发送邮件的功能，用户配置成功邮箱后只需输入相应的邮箱之后就能发送，系统每天大概能处理上万次发邮件的请求。很多人看到这个可能就直接开始使用相关工具测试邮箱发送接口，但是，发送邮件这个场景可能不是当前系统的性能瓶颈，这么多人用我们的系统发邮件， 还可能有很多人一起发邮件，单单这个场景就这么人用，那用户管理可能才是性能瓶颈吧！</p><h3 id="_2-2-历史数据非常有用" tabindex="-1"><a class="header-anchor" href="#_2-2-历史数据非常有用"><span>2.2 历史数据非常有用</span></a></h3><p>当前系统所留下的历史数据非常重要，一般情况下，我们可以通过相应的些历史数据初步判定这个系统哪些接口调用的比较多、哪些 service 承受的压力最大，这样的话，我们就可以针对这些地方进行更细致的性能测试与分析。</p><p>另外，这些地方也就像这个系统的一个短板一样，优化好了这些地方会为我们的系统带来质的提升。</p><h3 id="三-性能测试的指标" tabindex="-1"><a class="header-anchor" href="#三-性能测试的指标"><span>三 性能测试的指标</span></a></h3><h3 id="_3-1-响应时间" tabindex="-1"><a class="header-anchor" href="#_3-1-响应时间"><span>3.1 响应时间</span></a></h3><p><strong>响应时间就是用户发出请求到用户收到系统处理结果所需要的时间。</strong> 重要吗？实在太重要！</p><p>比较出名的 2-5-8 原则是这样描述的：通常来说，2 到 5 秒，页面体验会比较好，5 到 8 秒还可以接受，8 秒以上基本就很难接受了。另外，据统计当网站慢一秒就会流失十分之一的客户。</p><p>但是，在某些场景下我们也并不需要太看重 2-5-8 原则 ，比如我觉得系统导出导入大数据量这种就不需要，系统生成系统报告这种也不需要。</p><h3 id="_3-2-并发数" tabindex="-1"><a class="header-anchor" href="#_3-2-并发数"><span>3.2 并发数</span></a></h3><p><strong>并发数是系统能同时处理请求的数目即同时提交请求的用户数目。</strong></p><p>不得不说，高并发是现在后端架构中非常非常火热的一个词了，这个与当前的互联网环境以及中国整体的互联网用户量都有很大关系。一般情况下，你的系统并发量越大，说明你的产品做的就越大。但是，并不是每个系统都需要达到像淘宝、12306 这种亿级并发量的。</p><h3 id="_3-3-吞吐量" tabindex="-1"><a class="header-anchor" href="#_3-3-吞吐量"><span>3.3 吞吐量</span></a></h3><p>吞吐量指的是系统单位时间内系统处理的请求数量。衡量吞吐量有几个重要的参数：QPS（TPS）、并发数、响应时间。</p><ol><li>QPS（Query Per Second）：服务器每秒可以执行的查询次数；</li><li>TPS（Transaction Per Second）：服务器每秒处理的事务数（这里的一个事务可以理解为客户发出请求到收到服务器的过程）；</li><li>并发数；系统能同时处理请求的数目即同时提交请求的用户数目。</li><li>响应时间：一般取多次请求的平均响应时间</li></ol><p>理清他们的概念，就很容易搞清楚他们之间的关系了。</p><ul><li><strong>QPS（TPS）</strong> = 并发数/平均响应时间</li><li><strong>并发数</strong> = QPS*平均响应时间</li></ul><p>书中是这样描述 QPS 和 TPS 的区别的。</p><blockquote><p>QPS vs TPS：QPS 基本类似于 TPS，但是不同的是，对于一个页面的一次访问，形成一个 TPS；但一次页面请求，可能产生多次对服务器的请求，服务器对这些请求，就可计入“QPS”之中。如，访问一个页面会请求服务器 2 次，一次访问，产生一个“T”，产生 2 个“Q”。</p></blockquote><h3 id="_3-4-性能计数器" tabindex="-1"><a class="header-anchor" href="#_3-4-性能计数器"><span>3.4 性能计数器</span></a></h3><p><strong>性能计数器是描述服务器或者操作系统的一些数据指标如内存使用、CPU 使用、磁盘与网络 I/O 等情况。</strong></p><h3 id="四-几种常见的性能测试" tabindex="-1"><a class="header-anchor" href="#四-几种常见的性能测试"><span>四 几种常见的性能测试</span></a></h3><h3 id="性能测试" tabindex="-1"><a class="header-anchor" href="#性能测试"><span>性能测试</span></a></h3><p>性能测试方法是通过测试工具模拟用户请求系统，目的主要是为了测试系统的性能是否满足要求。通俗地说，这种方法就是要在特定的运行条件下验证系统的能力状态。</p><p>性能测试是你在对系统性能已经有了解的前提之后进行的，并且有明确的性能指标。</p><h3 id="负载测试" tabindex="-1"><a class="header-anchor" href="#负载测试"><span>负载测试</span></a></h3><p>对被测试的系统继续加大请求压力，直到服务器的某个资源已经达到饱和了，比如系统的缓存已经不够用了或者系统的响应时间已经不满足要求了。</p><p>负载测试说白点就是测试系统的上限。</p><h3 id="压力测试" tabindex="-1"><a class="header-anchor" href="#压力测试"><span>压力测试</span></a></h3><p>不去管系统资源的使用情况，对系统继续加大请求压力，直到服务器崩溃无法再继续提供服务。</p><h3 id="稳定性测试" tabindex="-1"><a class="header-anchor" href="#稳定性测试"><span>稳定性测试</span></a></h3><p>模拟真实场景，给系统一定压力，看看业务是否能稳定运行。</p><h2 id="五-常用性能测试工具" tabindex="-1"><a class="header-anchor" href="#五-常用性能测试工具"><span>五 常用性能测试工具</span></a></h2><p>这里就不多扩展了，有时间的话会单独拎一个熟悉的说一下。</p><h3 id="_5-1-后端常用" tabindex="-1"><a class="header-anchor" href="#_5-1-后端常用"><span>5.1 后端常用</span></a></h3><p>没记错的话，除了 LoadRunner 其他几款性能测试工具都是开源免费的。</p><ol><li>Jmeter：Apache JMeter 是 JAVA 开发的性能测试工具。</li><li>LoadRunner：一款商业的性能测试工具。</li><li>Galtling：一款基于 Scala 开发的高性能服务器性能测试工具。</li><li>ab：全称为 Apache Bench 。Apache 旗下的一款测试工具，非常实用。</li></ol><h3 id="_5-2-前端常用" tabindex="-1"><a class="header-anchor" href="#_5-2-前端常用"><span>5.2 前端常用</span></a></h3><ol><li>Fiddler：抓包工具，它可以修改请求的数据，甚至可以修改服务器返回的数据，功能非常强大，是 Web 调试的利器。</li><li>HttpWatch: 可用于录制 HTTP 请求信息的工具。</li></ol><h2 id="六-常见的性能优化策略" tabindex="-1"><a class="header-anchor" href="#六-常见的性能优化策略"><span>六 常见的性能优化策略</span></a></h2><p>性能优化之前我们需要对请求经历的各个环节进行分析，排查出可能出现性能瓶颈的地方，定位问题。</p><p>下面是一些性能优化时，我经常拿来自问的一些问题：</p><ol><li>系统是否需要缓存？</li><li>系统架构本身是不是就有问题？</li><li>系统是否存在死锁的地方？</li><li>系统是否存在内存泄漏？（Java 的自动回收内存虽然很方便，但是，有时候代码写的不好真的会造成内存泄漏）</li><li>数据库索引使用是否合理？</li><li>......</li></ol>',61),r=[n];function h(s,p){return l(),a("div",null,r)}const d=e(t,[["render",h],["__file","performance-test.html.vue"]]),_=JSON.parse('{"path":"/high-availability/performance-test.html","title":"性能测试入门","lang":"zh-CN","frontmatter":{"title":"性能测试入门","category":"高可用","description":"性能测试一般情况下都是由测试这个职位去做的，那还需要我们开发学这个干嘛呢？了解性能测试的指标、分类以及工具等知识有助于我们更好地去写出性能更好的程序，另外作为开发这个角色，如果你会性能测试的话，相信也会为你的履历加分不少。 这篇文章是我会结合自己的实际经历以及在测试这里取的经所得，除此之外，我还借鉴了一些优秀书籍，希望对你有帮助。 一 不同角色看网站性...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/high-availability/performance-test.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"性能测试入门"}],["meta",{"property":"og:description","content":"性能测试一般情况下都是由测试这个职位去做的，那还需要我们开发学这个干嘛呢？了解性能测试的指标、分类以及工具等知识有助于我们更好地去写出性能更好的程序，另外作为开发这个角色，如果你会性能测试的话，相信也会为你的履历加分不少。 这篇文章是我会结合自己的实际经历以及在测试这里取的经所得，除此之外，我还借鉴了一些优秀书籍，希望对你有帮助。 一 不同角色看网站性..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"性能测试入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"一 不同角色看网站性能","slug":"一-不同角色看网站性能","link":"#一-不同角色看网站性能","children":[{"level":3,"title":"1.1 用户","slug":"_1-1-用户","link":"#_1-1-用户","children":[]},{"level":3,"title":"1.2 开发人员","slug":"_1-2-开发人员","link":"#_1-2-开发人员","children":[]},{"level":3,"title":"1.3 测试人员","slug":"_1-3-测试人员","link":"#_1-3-测试人员","children":[]},{"level":3,"title":"1.4 运维人员","slug":"_1-4-运维人员","link":"#_1-4-运维人员","children":[]}]},{"level":2,"title":"二 性能测试需要注意的点","slug":"二-性能测试需要注意的点","link":"#二-性能测试需要注意的点","children":[{"level":3,"title":"2.1 了解系统的业务场景","slug":"_2-1-了解系统的业务场景","link":"#_2-1-了解系统的业务场景","children":[]},{"level":3,"title":"2.2 历史数据非常有用","slug":"_2-2-历史数据非常有用","link":"#_2-2-历史数据非常有用","children":[]},{"level":3,"title":"三 性能测试的指标","slug":"三-性能测试的指标","link":"#三-性能测试的指标","children":[]},{"level":3,"title":"3.1 响应时间","slug":"_3-1-响应时间","link":"#_3-1-响应时间","children":[]},{"level":3,"title":"3.2 并发数","slug":"_3-2-并发数","link":"#_3-2-并发数","children":[]},{"level":3,"title":"3.3 吞吐量","slug":"_3-3-吞吐量","link":"#_3-3-吞吐量","children":[]},{"level":3,"title":"3.4 性能计数器","slug":"_3-4-性能计数器","link":"#_3-4-性能计数器","children":[]},{"level":3,"title":"四 几种常见的性能测试","slug":"四-几种常见的性能测试","link":"#四-几种常见的性能测试","children":[]},{"level":3,"title":"性能测试","slug":"性能测试","link":"#性能测试","children":[]},{"level":3,"title":"负载测试","slug":"负载测试","link":"#负载测试","children":[]},{"level":3,"title":"压力测试","slug":"压力测试","link":"#压力测试","children":[]},{"level":3,"title":"稳定性测试","slug":"稳定性测试","link":"#稳定性测试","children":[]}]},{"level":2,"title":"五 常用性能测试工具","slug":"五-常用性能测试工具","link":"#五-常用性能测试工具","children":[{"level":3,"title":"5.1 后端常用","slug":"_5-1-后端常用","link":"#_5-1-后端常用","children":[]},{"level":3,"title":"5.2 前端常用","slug":"_5-2-前端常用","link":"#_5-2-前端常用","children":[]}]},{"level":2,"title":"六 常见的性能优化策略","slug":"六-常见的性能优化策略","link":"#六-常见的性能优化策略","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":8.14,"words":2443},"filePathRelative":"high-availability/performance-test.md","localizedDate":"2024年3月18日","excerpt":"<p>性能测试一般情况下都是由测试这个职位去做的，那还需要我们开发学这个干嘛呢？了解性能测试的指标、分类以及工具等知识有助于我们更好地去写出性能更好的程序，另外作为开发这个角色，如果你会性能测试的话，相信也会为你的履历加分不少。</p>\\n<p>这篇文章是我会结合自己的实际经历以及在测试这里取的经所得，除此之外，我还借鉴了一些优秀书籍，希望对你有帮助。</p>\\n<h2>一 不同角色看网站性能</h2>\\n<h3>1.1 用户</h3>\\n<p>当用户打开一个网站的时候，最关注的是什么？当然是网站响应速度的快慢。比如我们点击了淘宝的主页，淘宝需要多久将首页的内容呈现在我的面前，我点击了提交订单按钮需要多久返回结果等等。</p>","autoDesc":true}');export{d as comp,_ as data};
