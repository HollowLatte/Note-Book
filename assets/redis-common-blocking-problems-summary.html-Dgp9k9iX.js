import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as t,c,a as e,d as i,b as o,w as r,e as a}from"./app-6eIwu4TL.js";const p={},h=a('<blockquote><p>本文整理完善自：https://mp.weixin.qq.com/s/0Nqfq_eQrUb12QH6eBbHXA ，作者：阿 Q 说代码</p></blockquote><p>这篇文章会详细总结一下可能导致 Redis 阻塞的情况，这些情况也是影响 Redis 性能的关键因素，使用 Redis 的时候应该格外注意！</p><h2 id="o-n-命令" tabindex="-1"><a class="header-anchor" href="#o-n-命令"><span>O(n) 命令</span></a></h2><p>Redis 中的大部分命令都是 O(1)时间复杂度，但也有少部分 O(n) 时间复杂度的命令，例如：</p><ul><li><code>KEYS *</code>：会返回所有符合规则的 key。</li><li><code>HGETALL</code>：会返回一个 Hash 中所有的键值对。</li><li><code>LRANGE</code>：会返回 List 中指定范围内的元素。</li><li><code>SMEMBERS</code>：返回 Set 中的所有元素。</li><li><code>SINTER</code>/<code>SUNION</code>/<code>SDIFF</code>：计算多个 Set 的交集/并集/差集。</li><li>......</li></ul><p>由于这些命令时间复杂度是 O(n)，有时候也会全表扫描，随着 n 的增大，执行耗时也会越长，从而导致客户端阻塞。不过， 这些命令并不是一定不能使用，但是需要明确 N 的值。另外，有遍历的需求可以使用 <code>HSCAN</code>、<code>SSCAN</code>、<code>ZSCAN</code> 代替。</p><p>除了这些 O(n)时间复杂度的命令可能会导致阻塞之外， 还有一些时间复杂度可能在 O(N) 以上的命令，例如：</p><ul><li><code>ZRANGE</code>/<code>ZREVRANGE</code>：返回指定 Sorted Set 中指定排名范围内的所有元素。时间复杂度为 O(log(n)+m)，n 为所有元素的数量， m 为返回的元素数量，当 m 和 n 相当大时，O(n) 的时间复杂度更小。</li><li><code>ZREMRANGEBYRANK</code>/<code>ZREMRANGEBYSCORE</code>：移除 Sorted Set 中指定排名范围/指定 score 范围内的所有元素。时间复杂度为 O(log(n)+m)，n 为所有元素的数量， m 被删除元素的数量，当 m 和 n 相当大时，O(n) 的时间复杂度更小。</li><li>......</li></ul><h2 id="save-创建-rdb-快照" tabindex="-1"><a class="header-anchor" href="#save-创建-rdb-快照"><span>SAVE 创建 RDB 快照</span></a></h2><p>Redis 提供了两个命令来生成 RDB 快照文件：</p><ul><li><code>save</code> : 同步保存操作，会阻塞 Redis 主线程；</li><li><code>bgsave</code> : fork 出一个子进程，子进程执行，不会阻塞 Redis 主线程，默认选项。</li></ul><p>默认情况下，Redis 默认配置会使用 <code>bgsave</code> 命令。如果手动使用 <code>save</code> 命令生成 RDB 快照文件的话，就会阻塞主线程。</p><h2 id="aof" tabindex="-1"><a class="header-anchor" href="#aof"><span>AOF</span></a></h2><h3 id="aof-日志记录阻塞" tabindex="-1"><a class="header-anchor" href="#aof-日志记录阻塞"><span>AOF 日志记录阻塞</span></a></h3><p>Redis AOF 持久化机制是在执行完命令之后再记录日志，这和关系型数据库（如 MySQL）通常都是执行命令之前记录日志（方便故障恢复）不同。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/redis/redis-aof-write-log-disc.png" alt="AOF 记录日志过程" tabindex="0"><figcaption>AOF 记录日志过程</figcaption></figure><p><strong>为什么是在执行完命令之后记录日志呢？</strong></p><ul><li>避免额外的检查开销，AOF 记录日志不会对命令进行语法检查；</li><li>在命令执行完之后再记录，不会阻塞当前的命令执行。</li></ul><p>这样也带来了风险（我在前面介绍 AOF 持久化的时候也提到过）：</p><ul><li>如果刚执行完命令 Redis 就宕机会导致对应的修改丢失；</li><li><strong>可能会阻塞后续其他命令的执行（AOF 记录日志是在 Redis 主线程中进行的）</strong>。</li></ul><h3 id="aof-刷盘阻塞" tabindex="-1"><a class="header-anchor" href="#aof-刷盘阻塞"><span>AOF 刷盘阻塞</span></a></h3><p>开启 AOF 持久化后每执行一条会更改 Redis 中的数据的命令，Redis 就会将该命令写入到 AOF 缓冲区 <code>server.aof_buf</code> 中，然后再根据 <code>appendfsync</code> 配置来决定何时将其同步到硬盘中的 AOF 文件。</p><p>在 Redis 的配置文件中存在三种不同的 AOF 持久化方式（ <code>fsync</code>策略），它们分别是：</p><ol><li><code>appendfsync always</code>：主线程调用 <code>write</code> 执行写操作后，后台线程（ <code>aof_fsync</code> 线程）立即会调用 <code>fsync</code> 函数同步 AOF 文件（刷盘），<code>fsync</code> 完成后线程返回，这样会严重降低 Redis 的性能（<code>write</code> + <code>fsync</code>）。</li><li><code>appendfsync everysec</code>：主线程调用 <code>write</code> 执行写操作后立即返回，由后台线程（ <code>aof_fsync</code> 线程）每秒钟调用 <code>fsync</code> 函数（系统调用）同步一次 AOF 文件（<code>write</code>+<code>fsync</code>，<code>fsync</code>间隔为 1 秒）</li><li><code>appendfsync no</code>：主线程调用 <code>write</code> 执行写操作后立即返回，让操作系统决定何时进行同步，Linux 下一般为 30 秒一次（<code>write</code>但不<code>fsync</code>，<code>fsync</code> 的时机由操作系统决定）。</li></ol><p>当后台线程（ <code>aof_fsync</code> 线程）调用 <code>fsync</code> 函数同步 AOF 文件时，需要等待，直到写入完成。当磁盘压力太大的时候，会导致 <code>fsync</code> 操作发生阻塞，主线程调用 <code>write</code> 函数时也会被阻塞。<code>fsync</code> 完成后，主线程执行 <code>write</code> 才能成功返回。</p>',25),u=e("h3",{id:"aof-重写阻塞",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aof-重写阻塞"},[e("span",null,"AOF 重写阻塞")])],-1),m=e("ol",null,[e("li",null,[i("fork 出一条子线程来将文件重写，在执行 "),e("code",null,"BGREWRITEAOF"),i(" 命令时，Redis 服务器会维护一个 AOF 重写缓冲区，该缓冲区会在子线程创建新 AOF 文件期间，记录服务器执行的所有写命令。")]),e("li",null,"当子线程完成创建新 AOF 文件的工作之后，服务器会将重写缓冲区中的所有内容追加到新 AOF 文件的末尾，使得新的 AOF 文件保存的数据库状态与现有的数据库状态一致。"),e("li",null,"最后，服务器用新的 AOF 文件替换旧的 AOF 文件，以此来完成 AOF 文件重写操作。")],-1),g=e("p",null,[i("阻塞就是出现在第 2 步的过程中，将缓冲区中新数据写到新文件的过程中会产生"),e("strong",null,"阻塞"),i("。")],-1),R={href:"https://cloud.tencent.com/developer/article/1633077",target:"_blank",rel:"noopener noreferrer"},f=a(`<h2 id="大-key" tabindex="-1"><a class="header-anchor" href="#大-key"><span>大 Key</span></a></h2><p>如果一个 key 对应的 value 所占用的内存比较大，那这个 key 就可以看作是 bigkey。具体多大才算大呢？有一个不是特别精确的参考标准：string 类型的 value 超过 10 kb，复合类型的 value 包含的元素超过 5000 个（对于复合类型的 value 来说，不一定包含的元素越多，占用的内存就越多）。</p><p>大 key 造成的阻塞问题如下：</p><ul><li>客户端超时阻塞：由于 Redis 执行命令是单线程处理，然后在操作大 key 时会比较耗时，那么就会阻塞 Redis，从客户端这一视角看，就是很久很久都没有响应。</li><li>引发网络阻塞：每次获取大 key 产生的网络流量较大，如果一个 key 的大小是 1 MB，每秒访问量为 1000，那么每秒会产生 1000MB 的流量，这对于普通千兆网卡的服务器来说是灾难性的。</li><li>阻塞工作线程：如果使用 del 删除大 key 时，会阻塞工作线程，这样就没办法处理后续的命令。</li></ul><h3 id="查找大-key" tabindex="-1"><a class="header-anchor" href="#查找大-key"><span>查找大 key</span></a></h3><p>当我们在使用 Redis 自带的 <code>--bigkeys</code> 参数查找大 key 时，最好选择在从节点上执行该命令，因为主节点上执行时，会<strong>阻塞</strong>主节点。</p><ul><li><p>我们还可以使用 SCAN 命令来查找大 key；</p></li><li><p>通过分析 RDB 文件来找出 big key，这种方案的前提是 Redis 采用的是 RDB 持久化。网上有现成的工具：</p></li><li><ul><li>redis-rdb-tools：Python 语言写的用来分析 Redis 的 RDB 快照文件用的工具</li><li>rdb_bigkeys：Go 语言写的用来分析 Redis 的 RDB 快照文件用的工具，性能更好。</li></ul></li></ul><h3 id="删除大-key" tabindex="-1"><a class="header-anchor" href="#删除大-key"><span>删除大 key</span></a></h3><p>删除操作的本质是要释放键值对占用的内存空间。</p><p>释放内存只是第一步，为了更加高效地管理内存空间，在应用程序释放内存时，<strong>操作系统需要把释放掉的内存块插入一个空闲内存块的链表</strong>，以便后续进行管理和再分配。这个过程本身需要一定时间，而且会<strong>阻塞</strong>当前释放内存的应用程序。</p><p>所以，如果一下子释放了大量内存，空闲内存块链表操作时间就会增加，相应地就会造成 Redis 主线程的阻塞，如果主线程发生了阻塞，其他所有请求可能都会超时，超时越来越多，会造成 Redis 连接耗尽，产生各种异常。</p><p>删除大 key 时建议采用分批次删除和异步删除的方式进行。</p><h2 id="清空数据库" tabindex="-1"><a class="header-anchor" href="#清空数据库"><span>清空数据库</span></a></h2><p>清空数据库和上面 bigkey 删除也是同样道理，<code>flushdb</code>、<code>flushall</code> 也涉及到删除和释放所有的键值对，也是 Redis 的阻塞点。</p><h2 id="集群扩容" tabindex="-1"><a class="header-anchor" href="#集群扩容"><span>集群扩容</span></a></h2><p>Redis 集群可以进行节点的动态扩容缩容，这一过程目前还处于半自动状态，需要人工介入。</p><p>在扩缩容的时候，需要进行数据迁移。而 Redis 为了保证迁移的一致性，迁移所有操作都是同步操作。</p><p>执行迁移时，两端的 Redis 均会进入时长不等的阻塞状态，对于小 Key，该时间可以忽略不计，但如果一旦 Key 的内存使用过大，严重的时候会触发集群内的故障转移，造成不必要的切换。</p><h2 id="swap-内存交换" tabindex="-1"><a class="header-anchor" href="#swap-内存交换"><span>Swap（内存交换）</span></a></h2><p><strong>什么是 Swap？</strong> Swap 直译过来是交换的意思，Linux 中的 Swap 常被称为内存交换或者交换分区。类似于 Windows 中的虚拟内存，就是当内存不足的时候，把一部分硬盘空间虚拟成内存使用，从而解决内存容量不足的情况。因此，Swap 分区的作用就是牺牲硬盘，增加内存，解决 VPS 内存不够用或者爆满的问题。</p><p>Swap 对于 Redis 来说是非常致命的，Redis 保证高性能的一个重要前提是所有的数据在内存中。如果操作系统把 Redis 使用的部分内存换出硬盘，由于内存与硬盘读写的速度并几个数量级，会导致发生交换后的 Redis 性能急剧下降。</p><p>识别 Redis 发生 Swap 的检查方法如下：</p><p>1、查询 Redis 进程号</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>reids-cli <span class="token parameter variable">-p</span> <span class="token number">6383</span> info server <span class="token operator">|</span> <span class="token function">grep</span> process_id
process_id: <span class="token number">4476</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、根据进程号查询内存交换信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/4476/smaps <span class="token operator">|</span> <span class="token function">grep</span> Swap
Swap: 0kB
Swap: 0kB
Swap: 4kB
Swap: 0kB
Swap: 0kB
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果交换量都是 0KB 或者个别的是 4KB，则正常。</p><p>预防内存交换的方法：</p><ul><li>保证机器充足的可用内存</li><li>确保所有 Redis 实例设置最大可用内存(maxmemory)，防止极端情况 Redis 内存不可控的增长</li><li>降低系统使用 swap 优先级，如<code>echo 10 &gt; /proc/sys/vm/swappiness</code></li></ul><h2 id="cpu-竞争" tabindex="-1"><a class="header-anchor" href="#cpu-竞争"><span>CPU 竞争</span></a></h2><p>Redis 是典型的 CPU 密集型应用，不建议和其他多核 CPU 密集型服务部署在一起。当其他进程过度消耗 CPU 时，将严重影响 Redis 的吞吐量。</p><p>可以通过<code>reids-cli --stat</code>获取当前 Redis 使用情况。通过<code>top</code>命令获取进程对 CPU 的利用率等信息 通过<code>info commandstats</code>统计信息分析出命令不合理开销时间，查看是否是因为高算法复杂度或者过度的内存优化问题。</p><h2 id="网络问题" tabindex="-1"><a class="header-anchor" href="#网络问题"><span>网络问题</span></a></h2><p>连接拒绝、网络延迟，网卡软中断等网络问题也可能会导致 Redis 阻塞。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li>Redis 阻塞的 6 大类场景分析与总结：https://mp.weixin.qq.com/s/eaZCEtTjTuEmXfUubVHjew</li><li>Redis 开发与运维笔记-Redis 的噩梦-阻塞：https://mp.weixin.qq.com/s/TDbpz9oLH6ifVv6ewqgSgA</li></ul>`,36);function b(k,y){const d=s("RouteLink"),n=s("ExternalLinkIcon");return t(),c("div",null,[h,e("p",null,[i("关于 AOF 工作流程的详细介绍可以查看："),o(d,{to:"/database/redis/redis-persistence.html"},{default:r(()=>[i("Redis 持久化机制详解")]),_:1}),i("，有助于理解 AOF 刷盘阻塞。")]),u,m,g,e("p",null,[i("相关阅读："),e("a",R,[i("Redis AOF 重写阻塞问题分析"),o(n)]),i("。")]),f])}const A=l(p,[["render",b],["__file","redis-common-blocking-problems-summary.html.vue"]]),w=JSON.parse('{"path":"/database/redis/redis-common-blocking-problems-summary.html","title":"Redis常见阻塞原因总结","lang":"zh-CN","frontmatter":{"title":"Redis常见阻塞原因总结","category":"数据库","tag":["Redis"],"description":"本文整理完善自：https://mp.weixin.qq.com/s/0Nqfq_eQrUb12QH6eBbHXA ，作者：阿 Q 说代码 这篇文章会详细总结一下可能导致 Redis 阻塞的情况，这些情况也是影响 Redis 性能的关键因素，使用 Redis 的时候应该格外注意！ O(n) 命令 Redis 中的大部分命令都是 O(1)时间复杂度，但也...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/database/redis/redis-common-blocking-problems-summary.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Redis常见阻塞原因总结"}],["meta",{"property":"og:description","content":"本文整理完善自：https://mp.weixin.qq.com/s/0Nqfq_eQrUb12QH6eBbHXA ，作者：阿 Q 说代码 这篇文章会详细总结一下可能导致 Redis 阻塞的情况，这些情况也是影响 Redis 性能的关键因素，使用 Redis 的时候应该格外注意！ O(n) 命令 Redis 中的大部分命令都是 O(1)时间复杂度，但也..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/database/redis/redis-aof-write-log-disc.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis常见阻塞原因总结"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis常见阻塞原因总结\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/database/redis/redis-aof-write-log-disc.png\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"O(n) 命令","slug":"o-n-命令","link":"#o-n-命令","children":[]},{"level":2,"title":"SAVE 创建 RDB 快照","slug":"save-创建-rdb-快照","link":"#save-创建-rdb-快照","children":[]},{"level":2,"title":"AOF","slug":"aof","link":"#aof","children":[{"level":3,"title":"AOF 日志记录阻塞","slug":"aof-日志记录阻塞","link":"#aof-日志记录阻塞","children":[]},{"level":3,"title":"AOF 刷盘阻塞","slug":"aof-刷盘阻塞","link":"#aof-刷盘阻塞","children":[]},{"level":3,"title":"AOF 重写阻塞","slug":"aof-重写阻塞","link":"#aof-重写阻塞","children":[]}]},{"level":2,"title":"大 Key","slug":"大-key","link":"#大-key","children":[{"level":3,"title":"查找大 key","slug":"查找大-key","link":"#查找大-key","children":[]},{"level":3,"title":"删除大 key","slug":"删除大-key","link":"#删除大-key","children":[]}]},{"level":2,"title":"清空数据库","slug":"清空数据库","link":"#清空数据库","children":[]},{"level":2,"title":"集群扩容","slug":"集群扩容","link":"#集群扩容","children":[]},{"level":2,"title":"Swap（内存交换）","slug":"swap-内存交换","link":"#swap-内存交换","children":[]},{"level":2,"title":"CPU 竞争","slug":"cpu-竞争","link":"#cpu-竞争","children":[]},{"level":2,"title":"网络问题","slug":"网络问题","link":"#网络问题","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":9.31,"words":2793},"filePathRelative":"database/redis/redis-common-blocking-problems-summary.md","localizedDate":"2024年3月18日","excerpt":"<blockquote>\\n<p>本文整理完善自：https://mp.weixin.qq.com/s/0Nqfq_eQrUb12QH6eBbHXA ，作者：阿 Q 说代码</p>\\n</blockquote>\\n<p>这篇文章会详细总结一下可能导致 Redis 阻塞的情况，这些情况也是影响 Redis 性能的关键因素，使用 Redis 的时候应该格外注意！</p>\\n<h2>O(n) 命令</h2>\\n<p>Redis 中的大部分命令都是 O(1)时间复杂度，但也有少部分 O(n) 时间复杂度的命令，例如：</p>\\n<ul>\\n<li><code>KEYS *</code>：会返回所有符合规则的 key。</li>\\n<li><code>HGETALL</code>：会返回一个 Hash 中所有的键值对。</li>\\n<li><code>LRANGE</code>：会返回 List 中指定范围内的元素。</li>\\n<li><code>SMEMBERS</code>：返回 Set 中的所有元素。</li>\\n<li><code>SINTER</code>/<code>SUNION</code>/<code>SDIFF</code>：计算多个 Set 的交集/并集/差集。</li>\\n<li>......</li>\\n</ul>","autoDesc":true}');export{A as comp,w as data};
