import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as d,a as o,d as e,b as n,w as g,e as a}from"./app-6eIwu4TL.js";const c={},p=a('<blockquote><p>少部分内容参考了 MongoDB 官方文档的描述，在此说明一下。</p></blockquote><h2 id="mongodb-基础" tabindex="-1"><a class="header-anchor" href="#mongodb-基础"><span>MongoDB 基础</span></a></h2><h3 id="mongodb-是什么" tabindex="-1"><a class="header-anchor" href="#mongodb-是什么"><span>MongoDB 是什么？</span></a></h3><p>MongoDB 是一个基于 <strong>分布式文件存储</strong> 的开源 NoSQL 数据库系统，由 <strong>C++</strong> 编写的。MongoDB 提供了 <strong>面向文档</strong> 的存储方式，操作起来比较简单和容易，支持“<strong>无模式</strong>”的数据建模，可以存储比较复杂的数据类型，是一款非常流行的 <strong>文档类型数据库</strong> 。</p><p>在高负载的情况下，MongoDB 天然支持水平扩展和高可用，可以很方便地添加更多的节点/实例，以保证服务性能和可用性。在许多场景下，MongoDB 可以用于代替传统的关系型数据库或键/值存储方式，皆在为 Web 应用提供可扩展的高可用高性能数据存储解决方案。</p><h3 id="mongodb-的存储结构是什么" tabindex="-1"><a class="header-anchor" href="#mongodb-的存储结构是什么"><span>MongoDB 的存储结构是什么？</span></a></h3><p>MongoDB 的存储结构区别于传统的关系型数据库，主要由如下三个单元组成：</p><ul><li><strong>文档（Document）</strong>：MongoDB 中最基本的单元，由 BSON 键值对（key-value）组成，类似于关系型数据库中的行（Row）。</li><li><strong>集合（Collection）</strong>：一个集合可以包含多个文档，类似于关系型数据库中的表（Table）。</li><li><strong>数据库（Database）</strong>：一个数据库中可以包含多个集合，可以在 MongoDB 中创建多个数据库，类似于关系型数据库中的数据库（Database）。</li></ul>',8),u={href:"https://www.mongodb.com/docs/manual/core/document/#std-label-bson-document-format",target:"_blank",rel:"noopener noreferrer"},h=a('<p><strong>SQL 与 MongoDB 常见术语对比</strong>：</p><table><thead><tr><th>SQL</th><th>MongoDB</th></tr></thead><tbody><tr><td>表（Table）</td><td>集合（Collection）</td></tr><tr><td>行（Row）</td><td>文档（Document）</td></tr><tr><td>列（Col）</td><td>字段（Field）</td></tr><tr><td>主键（Primary Key）</td><td>对象 ID（Objectid）</td></tr><tr><td>索引（Index）</td><td>索引（Index）</td></tr><tr><td>嵌套表（Embedded Table）</td><td>嵌入式文档（Embedded Document）</td></tr><tr><td>数组（Array）</td><td>数组（Array）</td></tr></tbody></table><h4 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h4><p>MongoDB 中的记录就是一个 BSON 文档，它是由键值对组成的数据结构，类似于 JSON 对象，是 MongoDB 中的基本数据单元。字段的值可能包括其他文档、数组和文档数组。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/mongodb/crud-annotated-document..png" alt="MongoDB 文档" tabindex="0"><figcaption>MongoDB 文档</figcaption></figure><p>文档的键是字符串。除了少数例外情况，键可以使用任意 UTF-8 字符。</p><ul><li>键不能含有 <code>\\0</code>(空字符）。这个字符用来表示键的结尾。</li><li><code>.</code> 和 <code>$</code> 有特别的意义，只有在特定环境下才能使用。</li><li>以下划线<code>_</code>开头的键是保留的(不是严格要求的)。</li></ul>',7),m=o("strong",null,"BSON [bee·sahn]",-1),b={href:"http://json.org/",target:"_blank",rel:"noopener noreferrer"},B={href:"http://bsonspec.org/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.mongodb.com/docs/manual/reference/bson-types/",target:"_blank",rel:"noopener noreferrer"},M=a('<p>根据维基百科对 BJSON 的介绍，BJSON 的遍历速度优于 JSON，这也是 MongoDB 选择 BSON 的主要原因，但 BJSON 需要更多的存储空间。</p><blockquote><p>与 JSON 相比，BSON 着眼于提高存储和扫描效率。BSON 文档中的大型元素以长度字段为前缀以便于扫描。在某些情况下，由于长度前缀和显式数组索引的存在，BSON 使用的空间会多于 JSON。</p></blockquote><figure><img src="https://oss.javaguide.cn/github/javaguide/database/mongodb/bsonspec.org.png" alt="BSON 官网首页" tabindex="0"><figcaption>BSON 官网首页</figcaption></figure><h4 id="集合" tabindex="-1"><a class="header-anchor" href="#集合"><span>集合</span></a></h4><p>MongoDB 集合存在于数据库中，<strong>没有固定的结构</strong>，也就是 <strong>无模式</strong> 的，这意味着可以往集合插入不同格式和类型的数据。不过，通常情况下，插入集合中的数据都会有一定的关联性。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/mongodb/crud-annotated-collection.png" alt="MongoDB 集合" tabindex="0"><figcaption>MongoDB 集合</figcaption></figure><p>集合不需要事先创建，当第一个文档插入或者第一个索引创建时，如果该集合不存在，则会创建一个新的集合。</p><p>集合名可以是满足下列条件的任意 UTF-8 字符串：</p><ul><li>集合名不能是空字符串<code>&quot;&quot;</code>。</li><li>集合名不能含有 <code>\\0</code> （空字符)，这个字符表示集合名的结尾。</li><li>集合名不能以&quot;system.&quot;开头，这是为系统集合保留的前缀。例如 <code>system.users</code> 这个集合保存着数据库的用户信息，<code>system.namespaces</code> 集合保存着所有数据库集合的信息。</li><li>集合名必须以下划线或者字母符号开始，并且不能包含 <code>$</code>。</li></ul><h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库</span></a></h4><p>数据库用于存储所有集合，而集合又用于存储所有文档。一个 MongoDB 中可以创建多个数据库，每一个数据库都有自己的集合和权限。</p><p>MongoDB 预留了几个特殊的数据库。</p>',12),D=o("li",null,[o("strong",null,"admin"),e(" : admin 数据库主要是保存 root 用户和角色。例如，system.users 表存储用户，system.roles 表存储角色。一般不建议用户直接操作这个数据库。将一个用户添加到这个数据库，且使它拥有 admin 库上的名为 dbAdminAnyDatabase 的角色权限，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如关闭服务器。")],-1),f=o("li",null,[o("strong",null,"local"),e(" : local 数据库是不会被复制到其他分片的，因此可以用来存储本地单台服务器的任意 collection。一般不建议用户直接使用 local 库存储任何数据，也不建议进行 CRUD 操作，因为数据无法被正常备份与恢复。")],-1),k=o("li",null,[o("strong",null,"config"),e(" : 当 MongoDB 使用分片设置时，config 数据库可用来保存分片的相关信息。")],-1),v=o("strong",null,"test",-1),w={href:"https://mongoing.com/docs/reference/program/mongod.html",target:"_blank",rel:"noopener noreferrer"},S=a('<p>数据库名可以是满足以下条件的任意 UTF-8 字符串：</p><ul><li>不能是空字符串<code>&quot;&quot;</code>。</li><li>不得含有<code>&#39; &#39;</code>（空格)、<code>.</code>、<code>$</code>、<code>/</code>、<code>\\</code>和 <code>\\0</code> (空字符)。</li><li>应全部小写。</li><li>最多 64 字节。</li></ul><p>数据库名最终会变成文件系统里的文件，这也就是有如此多限制的原因。</p><h3 id="mongodb-有什么特点" tabindex="-1"><a class="header-anchor" href="#mongodb-有什么特点"><span>MongoDB 有什么特点？</span></a></h3>',4),y=a("<li><strong>数据记录被存储为文档</strong>：MongoDB 中的记录就是一个 BSON 文档，它是由键值对组成的数据结构，类似于 JSON 对象，是 MongoDB 中的基本数据单元。</li><li><strong>模式自由</strong>：集合的概念类似 MySQL 里的表，但它不需要定义任何模式，能够用更少的数据对象表现复杂的领域模型对象。</li><li><strong>支持多种查询方式</strong>：MongoDB 查询 API 支持读写操作 (CRUD)以及数据聚合、文本搜索和地理空间查询。</li><li><strong>支持 ACID 事务</strong>：NoSQL 数据库通常不支持事务，为了可扩展和高性能进行了权衡。不过，也有例外，MongoDB 就支持事务。与关系型数据库一样，MongoDB 事务同样具有 ACID 特性。MongoDB 单文档原生支持原子性，也具备事务的特性。MongoDB 4.0 加入了对多文档事务的支持，但只支持复制集部署模式下的事务，也就是说事务的作用域限制为一个副本集内。MongoDB 4.2 引入了分布式事务，增加了对分片集群上多文档事务的支持，并合并了对副本集上多文档事务的现有支持。</li><li><strong>高效的二进制存储</strong>：存储在集合中的文档，是以键值对的形式存在的。键用于唯一标识一个文档，一般是 ObjectId 类型，值是以 BSON 形式存在的。BSON = Binary JSON， 是在 JSON 基础上加了一些类型及元数据描述的格式。</li><li><strong>自带数据压缩功能</strong>：存储同样的数据所需的资源更少。</li>",6),N=o("strong",null,"支持 mapreduce",-1),T={href:"https://www.mongodb.com/docs/manual/core/aggregation-pipeline/",target:"_blank",rel:"noopener noreferrer"},x=o("li",null,[o("strong",null,"支持多种类型的索引"),e("：MongoDB 支持多种类型的索引，包括单字段索引、复合索引、多键索引、哈希索引、文本索引、 地理位置索引等，每种类型的索引有不同的使用场合。")],-1),q=o("li",null,[o("strong",null,"支持 failover"),e("：提供自动故障恢复的功能，主节点发生故障时，自动从从节点中选举出一个新的主节点，确保集群的正常使用，这对于客户端来说是无感知的。")],-1),O=o("li",null,[o("strong",null,"支持分片集群"),e("：MongoDB 支持集群自动切分数据，让集群存储更多的数据，具备更强的性能。在数据插入和更新时，能够自动路由和存储。")],-1),L=o("li",null,[o("strong",null,"支持存储大文件"),e("：MongoDB 的单文档存储空间要求不超过 16MB。对于超过 16MB 的大文件，MongoDB 提供了 GridFS 来进行存储，通过 GridFS，可以将大型数据进行分块处理，然后将这些切分后的小文档保存在数据库中。")],-1),j=a('<h3 id="mongodb-适合什么应用场景" tabindex="-1"><a class="header-anchor" href="#mongodb-适合什么应用场景"><span>MongoDB 适合什么应用场景？</span></a></h3><p><strong>MongoDB 的优势在于其数据模型和存储引擎的灵活性、架构的可扩展性以及对强大的索引支持。</strong></p><p>选用 MongoDB 应该充分考虑 MongoDB 的优势，结合实际项目的需求来决定：</p><ul><li>随着项目的发展，使用类 JSON 格式（BSON）保存数据是否满足项目需求？MongoDB 中的记录就是一个 BSON 文档，它是由键值对组成的数据结构，类似于 JSON 对象，是 MongoDB 中的基本数据单元。</li><li>是否需要大数据量的存储？是否需要快速水平扩展？MongoDB 支持分片集群，可以很方便地添加更多的节点（实例），让集群存储更多的数据，具备更强的性能。</li><li>是否需要更多类型索引来满足更多应用场景？MongoDB 支持多种类型的索引，包括单字段索引、复合索引、多键索引、哈希索引、文本索引、 地理位置索引等，每种类型的索引有不同的使用场合。</li><li>......</li></ul><h2 id="mongodb-存储引擎" tabindex="-1"><a class="header-anchor" href="#mongodb-存储引擎"><span>MongoDB 存储引擎</span></a></h2><h3 id="mongodb-支持哪些存储引擎" tabindex="-1"><a class="header-anchor" href="#mongodb-支持哪些存储引擎"><span>MongoDB 支持哪些存储引擎？</span></a></h3><p>存储引擎（Storage Engine）是数据库的核心组件，负责管理数据在内存和磁盘中的存储方式。</p><p>与 MySQL 一样，MongoDB 采用的也是 <strong>插件式的存储引擎架构</strong> ，支持不同类型的存储引擎，不同的存储引擎解决不同场景的问题。在创建数据库或集合时，可以指定存储引擎。</p><blockquote><p>插件式的存储引擎架构可以实现 Server 层和存储引擎层的解耦，可以支持多种存储引擎，如 MySQL 既可以支持 B-Tree 结构的 InnoDB 存储引擎，还可以支持 LSM 结构的 RocksDB 存储引擎。</p></blockquote><p>在存储引擎刚出来的时候，默认是使用 MMAPV1 存储引擎，MongoDB4.x 版本不再支持 MMAPv1 存储引擎。</p><p>现在主要有下面这两种存储引擎：</p>',11),W=o("strong",null,"WiredTiger 存储引擎",-1),C={href:"https://www.mongodb.com/docs/manual/core/wiredtiger/",target:"_blank",rel:"noopener noreferrer"},Q=o("strong",null,"In-Memory 存储引擎",-1),I={href:"https://www.mongodb.com/docs/manual/core/inmemory/",target:"_blank",rel:"noopener noreferrer"},$=a(`<p>此外，MongoDB 3.0 提供了 <strong>可插拔的存储引擎 API</strong> ，允许第三方为 MongoDB 开发存储引擎，这点和 MySQL 也比较类似。</p><h3 id="wiredtiger-基于-lsm-tree-还是-b-tree" tabindex="-1"><a class="header-anchor" href="#wiredtiger-基于-lsm-tree-还是-b-tree"><span>WiredTiger 基于 LSM Tree 还是 B+ Tree？</span></a></h3><p>目前绝大部分流行的数据库存储引擎都是基于 B/B+ Tree 或者 LSM(Log Structured Merge) Tree 来实现的。对于 NoSQL 数据库来说，绝大部分（比如 HBase、Cassandra、RocksDB）都是基于 LSM 树，MongoDB 不太一样。</p><p>上面也说了，自 MongoDB 3.2 以后，默认的存储引擎为 WiredTiger 存储引擎。在 WiredTiger 引擎官网上，我们发现 WiredTiger 使用的是 B+ 树作为其存储结构：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>WiredTiger maintains a table&#39;s data in memory using a data structure called a B-Tree ( B+ Tree to be specific), referring to the nodes of a B-Tree as pages. Internal pages carry only keys. The leaf pages store both keys and values.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),A={href:"https://source.wiredtiger.com/3.1.0/lsm.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://mp.weixin.qq.com/s/mMWdpbYRiT6LQcdaj4hgXQ",target:"_blank",rel:"noopener noreferrer"},P=a('<p>使用 B+ 树时，WiredTiger 以 <strong>page</strong> 为基本单位往磁盘读写数据。B+ 树的每个节点为一个 page，共有三种类型的 page：</p><ul><li><strong>root page（根节点）</strong>：B+ 树的根节点。</li><li><strong>internal page（内部节点）</strong>：不实际存储数据的中间索引节点。</li><li><strong>leaf page（叶子节点）</strong>：真正存储数据的叶子节点，包含一个页头（page header）、块头（block header）和真正的数据（key/value），其中页头定义了页的类型、页中实际载荷数据的大小、页中记录条数等信息；块头定义了此页的 checksum、块在磁盘上的寻址位置等信息。</li></ul><p>其整体结构如下图所示：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/database/mongodb/mongodb-b-plus-tree-integral-structure.png" alt="WiredTiger B+树整体结构" tabindex="0"><figcaption>WiredTiger B+树整体结构</figcaption></figure>',4),R={href:"https://mongoing.com/archives/category/wiredtiger%e5%ad%98%e5%82%a8%e5%bc%95%e6%93%8e%e7%b3%bb%e5%88%97",target:"_blank",rel:"noopener noreferrer"},z=a('<h2 id="mongodb-聚合" tabindex="-1"><a class="header-anchor" href="#mongodb-聚合"><span>MongoDB 聚合</span></a></h2><h3 id="mongodb-聚合有什么用" tabindex="-1"><a class="header-anchor" href="#mongodb-聚合有什么用"><span>MongoDB 聚合有什么用？</span></a></h3><p>实际项目中，我们经常需要将多个文档甚至是多个集合汇总到一起计算分析（比如求和、取最大值）并返回计算后的结果，这个过程被称为 <strong>聚合操作</strong> 。</p><p>根据官方文档介绍，我们可以使用聚合操作来：</p><ul><li>将来自多个文档的值组合在一起。</li><li>对集合中的数据进行的一系列运算。</li><li>分析数据随时间的变化。</li></ul><h3 id="mongodb-提供了哪几种执行聚合的方法" tabindex="-1"><a class="header-anchor" href="#mongodb-提供了哪几种执行聚合的方法"><span>MongoDB 提供了哪几种执行聚合的方法？</span></a></h3><p>MongoDB 提供了两种执行聚合的方法：</p><ul><li><strong>聚合管道（Aggregation Pipeline）</strong>：执行聚合操作的首选方法。</li><li><strong>单一目的聚合方法（Single purpose aggregation methods）</strong>：也就是单一作用的聚合函数比如 <code>count()</code>、<code>distinct()</code>、<code>estimatedDocumentCount()</code>。</li></ul>',8),E=o("strong",null,"map-reduce",-1),F={href:"https://www.mongodb.com/docs/manual/core/aggregation-pipeline/",target:"_blank",rel:"noopener noreferrer"},U=a('<p>MongoDB 聚合管道由多个阶段组成，每个阶段在文档通过管道时转换文档。每个阶段接收前一个阶段的输出，进一步处理数据，并将其作为输入数据发送到下一个阶段。</p><p>每个管道的工作流程是：</p><ol><li>接受一系列原始数据文档</li><li>对这些文档进行一系列运算</li><li>结果文档输出给下一个阶段</li></ol><figure><img src="https://oss.javaguide.cn/github/javaguide/database/mongodb/mongodb-aggregation-stage.png" alt="管道的工作流程" tabindex="0"><figcaption>管道的工作流程</figcaption></figure><p><strong>常用阶段操作符</strong>：</p><table><thead><tr><th>操作符</th><th>简述</th></tr></thead><tbody><tr><td>$match</td><td>匹配操作符，用于对文档集合进行筛选</td></tr><tr><td>$project</td><td>投射操作符，用于重构每一个文档的字段，可以提取字段，重命名字段，甚至可以对原有字段进行操作后新增字段</td></tr><tr><td>$sort</td><td>排序操作符，用于根据一个或多个字段对文档进行排序</td></tr><tr><td>$limit</td><td>限制操作符，用于限制返回文档的数量</td></tr><tr><td>$skip</td><td>跳过操作符，用于跳过指定数量的文档</td></tr><tr><td>$count</td><td>统计操作符，用于统计文档的数量</td></tr><tr><td>$group</td><td>分组操作符，用于对文档集合进行分组</td></tr><tr><td>$unwind</td><td>拆分操作符，用于将数组中的每一个值拆分为单独的文档</td></tr><tr><td>$lookup</td><td>连接操作符，用于连接同一个数据库中另一个集合，并获取指定的文档，类似于 populate</td></tr></tbody></table>',6),V={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/",target:"_blank",rel:"noopener noreferrer"},Z=a(`<p>阶段操作符用于 <code>db.collection.aggregate</code> 方法里面，数组参数中的第一层。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>db<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span> <span class="token punctuation">[</span> { 阶段操作符：表述 }<span class="token punctuation">,</span> { 阶段操作符：表述 }<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是 MongoDB 官方文档中的一个例子：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>db<span class="token punctuation">.</span>orders<span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span><span class="token punctuation">[</span>
   <span class="token comment"># 第一阶段：$match阶段按status字段过滤文档，并将status等于&quot;A&quot;的文档传递到下一阶段。</span>
    { $<span class="token keyword">match</span>: { <span class="token keyword">status</span>: <span class="token string">&quot;A&quot;</span> } }<span class="token punctuation">,</span>
  <span class="token comment"># 第二阶段：$group阶段按cust_id字段将文档分组，以计算每个cust_id唯一值的金额总和。</span>
    { $<span class="token keyword">group</span>: { _id: <span class="token string">&quot;$cust_id&quot;</span><span class="token punctuation">,</span> total: { $sum: <span class="token string">&quot;$amount&quot;</span> } } }
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-事务" tabindex="-1"><a class="header-anchor" href="#mongodb-事务"><span>MongoDB 事务</span></a></h2>`,5),H=o("p",null,"MongoDB 事务想要搞懂原理还是比较花费时间的，我自己也没有搞太明白。因此，我这里只是简单介绍一下 MongoDB 事务，想要了解原理的小伙伴，可以自行搜索查阅相关资料。",-1),G=o("p",null,"这里推荐几篇文章，供大家参考：",-1),K={href:"https://mongoing.com/archives/82187",target:"_blank",rel:"noopener noreferrer"},X={href:"https://developer.aliyun.com/article/782494",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://www.mongodb.com/docs/upcoming/core/transactions/",target:"_blank",rel:"noopener noreferrer"},oo=a("<p>我们在介绍 NoSQL 数据的时候也说过，NoSQL 数据库通常不支持事务，为了可扩展和高性能进行了权衡。不过，也有例外，MongoDB 就支持事务。</p><p>与关系型数据库一样，MongoDB 事务同样具有 ACID 特性：</p><ul><li><strong>原子性</strong>（<code>Atomicity</code>）：事务是最小的执行单位，不允许分割。事务的原子性确保动作要么全部完成，要么完全不起作用；</li><li><strong>一致性</strong>（<code>Consistency</code>）：执行事务前后，数据保持一致，例如转账业务中，无论事务是否成功，转账者和收款人的总额应该是不变的；</li><li><strong>隔离性</strong>（<code>Isolation</code>）：并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的。WiredTiger 存储引擎支持读未提交（ read-uncommitted ）、读已提交（ read-committed ）和快照（ snapshot ）隔离，MongoDB 启动时默认选快照隔离。在不同隔离级别下，一个事务的生命周期内，可能出现脏读、不可重复读、幻读等现象。</li><li><strong>持久性</strong>（<code>Durability</code>）：一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。</li></ul>",3),eo=o("p",null,[e("MongoDB 单文档原生支持原子性，也具备事务的特性。当谈论 MongoDB 事务的时候，通常指的是 "),o("strong",null,"多文档"),e(" 。MongoDB 4.0 加入了对多文档 ACID 事务的支持，但只支持复制集部署模式下的 ACID 事务，也就是说事务的作用域限制为一个副本集内。MongoDB 4.2 引入了 "),o("strong",null,"分布式事务"),e(" ，增加了对分片集群上多文档事务的支持，并合并了对副本集上多文档事务的现有支持。")],-1),no=o("p",null,"根据官方文档介绍：",-1),to=o("blockquote",null,[o("p",null,"从 MongoDB 4.2 开始，分布式事务和多文档事务在 MongoDB 中是一个意思。分布式事务是指分片集群和副本集上的多文档事务。从 MongoDB 4.2 开始，多文档事务（无论是在分片集群还是副本集上）也称为分布式事务。")],-1),ao={href:"https://www.mongodb.com/docs/upcoming/core/data-model-design/#std-label-data-modeling-embedding",target:"_blank",rel:"noopener noreferrer"},ro=o("p",null,[o("strong",null,"注意"),e("：")],-1),so=o("li",null,"从 MongoDB 4.2 开始，多文档事务支持副本集和分片集群，其中：主节点使用 WiredTiger 存储引擎，同时从节点使用 WiredTiger 存储引擎或 In-Memory 存储引擎。在 MongoDB 4.0 中，只有使用 WiredTiger 存储引擎的副本集支持事务。",-1),lo={href:"https://www.mongodb.com/docs/upcoming/core/transactions/#std-label-transactions-create-collections-indexes",target:"_blank",rel:"noopener noreferrer"},io=o("h2",{id:"mongodb-数据压缩",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#mongodb-数据压缩"},[o("span",null,"MongoDB 数据压缩")])],-1),go=o("p",null,"借助 WiredTiger 存储引擎（ MongoDB 3.2 后的默认存储引擎），MongoDB 支持对所有集合和索引进行压缩。压缩以额外的 CPU 为代价最大限度地减少存储使用。",-1),co={href:"https://github.com/google/snappy",target:"_blank",rel:"noopener noreferrer"},po=o("p",null,"除了 Snappy 之外，对于集合还有下面这些压缩算法：",-1),uo={href:"https://github.com/madler/zlib",target:"_blank",rel:"noopener noreferrer"},ho={href:"https://github.com/facebook/zstd",target:"_blank",rel:"noopener noreferrer"},mo=o("p",null,"WiredTiger 日志也会被压缩，默认使用的也是 Snappy 压缩算法。如果日志记录小于或等于 128 字节，WiredTiger 不会压缩该记录。",-1),bo=o("h2",{id:"参考",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#参考"},[o("span",null,"参考")])],-1),Bo={href:"https://www.mongodb.com/docs/manual/",target:"_blank",rel:"noopener noreferrer"},_o=o("li",null,"《MongoDB 权威指南》",-1),Mo={href:"https://mongoing.com/archives/82187",target:"_blank",rel:"noopener noreferrer"},Do={href:"https://www.mongodb.com/docs/manual/core/transactions/",target:"_blank",rel:"noopener noreferrer"},fo={href:"https://www.mongodb.com/docs/manual/core/wiredtiger/",target:"_blank",rel:"noopener noreferrer"},ko={href:"https://mongoing.com/topic/archives-35143",target:"_blank",rel:"noopener noreferrer"};function vo(wo,So){const t=r("ExternalLinkIcon"),s=r("RouteLink");return i(),d("div",null,[p,o("p",null,[e("也就是说，MongoDB 将数据记录存储为文档 （更具体来说是"),o("a",u,[e("BSON 文档"),n(t)]),e("），这些文档在集合中聚集在一起，数据库中存储一个或多个文档集合。")]),h,o("p",null,[m,e(" 是 Binary "),o("a",b,[e("JSON"),n(t)]),e("的简称，是 JSON 文档的二进制表示，支持将文档和数组嵌入到其他文档和数组中，还包含允许表示不属于 JSON 规范的数据类型的扩展。有关 BSON 规范的内容，可以参考 "),o("a",B,[e("bsonspec.org"),n(t)]),e("，另见"),o("a",_,[e("BSON 类型"),n(t)]),e("。")]),M,o("ul",null,[D,f,k,o("li",null,[v,e(" : 默认创建的测试库，连接 "),o("a",w,[e("mongod"),n(t)]),e(" 服务时，如果不指定连接的具体数据库，默认就会连接到 test 数据库。")])]),S,o("ul",null,[y,o("li",null,[N,e("：通过分治的方式完成复杂的聚合任务。不过，从 MongoDB 5.0 开始，map-reduce 已经不被官方推荐使用了，替代方案是 "),o("a",T,[e("聚合管道"),n(t)]),e("。聚合管道提供比 map-reduce 更好的性能和可用性。")]),x,q,O,L]),j,o("ul",null,[o("li",null,[W,e("：自 MongoDB 3.2 以后，默认的存储引擎为 "),o("a",C,[e("WiredTiger 存储引擎"),n(t)]),e(" 。非常适合大多数工作负载，建议用于新部署。WiredTiger 提供文档级并发模型、检查点和数据压缩（后文会介绍到）等功能。")]),o("li",null,[Q,e("："),o("a",I,[e("In-Memory 存储引擎"),n(t)]),e("在 MongoDB Enterprise 中可用。它不是将文档存储在磁盘上，而是将它们保留在内存中以获得更可预测的数据延迟。")])]),$,o("p",null,[e("此外，WiredTiger 还支持 "),o("a",A,[e("LSM(Log Structured Merge)"),n(t)]),e(" 树作为存储结构，MongoDB 在使用 WiredTiger 作为存储引擎时，默认使用的是 B+ 树。")]),o("p",null,[e("如果想要了解 MongoDB 使用 B 树的原因，可以看看这篇文章："),o("a",J,[e("为什么 MongoDB 使用 B 树？"),n(t)]),e("。")]),P,o("p",null,[e("如果想要深入研究学习 WiredTiger 存储引擎，推荐阅读 MongoDB 中文社区的 "),o("a",R,[e("WiredTiger 存储引擎系列"),n(t)]),e("。")]),z,o("p",null,[e("绝大部分文章中还提到了 "),E,e(" 这种聚合方法。不过，从 MongoDB 5.0 开始，map-reduce 已经不被官方推荐使用了，替代方案是 "),o("a",F,[e("聚合管道"),n(t)]),e("。聚合管道提供比 map-reduce 更好的性能和可用性。")]),U,o("p",null,[e("更多操作符介绍详见官方文档："),o("a",V,[e("https://docs.mongodb.com/manual/reference/operator/aggregation/"),n(t)])]),Z,o("blockquote",null,[H,G,o("ul",null,[o("li",null,[o("a",K,[e("技术干货| MongoDB 事务原理"),n(t)])]),o("li",null,[o("a",X,[e("MongoDB 一致性模型设计与实现"),n(t)])]),o("li",null,[o("a",Y,[e("MongoDB 官方文档对事务的介绍"),n(t)])])])]),oo,o("p",null,[e("关于事务的详细介绍这篇文章就不多说了，感兴趣的可以看看我写的"),n(s,{to:"/database/mysql/mysql-questions-01.html"},{default:g(()=>[e("MySQL 常见面试题总结")]),_:1}),e("这篇文章，里面有详细介绍到。")]),eo,no,to,o("p",null,[e("在大多数情况下，多文档事务比单文档写入会产生更大的性能成本。对于大部分场景来说， "),o("a",ao,[e("非规范化数据模型（嵌入式文档和数组）"),n(t)]),e(" 依然是最佳选择。也就是说，适当地对数据进行建模可以最大限度地减少对多文档事务的需求。")]),ro,o("ul",null,[so,o("li",null,[e("在 MongoDB 4.2 及更早版本中，你无法在事务中创建集合。从 MongoDB 4.4 开始，您可以在事务中创建集合和索引。有关详细信息，请参阅 "),o("a",lo,[e("在事务中创建集合和索引"),n(t)]),e("。")])]),io,go,o("p",null,[e("默认情况下，WiredTiger 使用 "),o("a",co,[e("Snappy"),n(t)]),e(" 压缩算法（谷歌开源，旨在实现非常高的速度和合理的压缩，压缩比 3 ～ 5 倍）对所有集合使用块压缩，对所有索引使用前缀压缩。")]),po,o("ul",null,[o("li",null,[o("a",uo,[e("zlib"),n(t)]),e("：高度压缩算法，压缩比 5 ～ 7 倍")]),o("li",null,[o("a",ho,[e("Zstandard"),n(t)]),e("（简称 zstd）：Facebook 开源的一种快速无损压缩算法，针对 zlib 级别的实时压缩场景和更好的压缩比，提供更高的压缩率和更低的 CPU 使用率，MongoDB 4.2 开始可用。")])]),mo,bo,o("ul",null,[o("li",null,[e("MongoDB 官方文档（主要参考资料，以官方文档为准）："),o("a",Bo,[e("https://www.mongodb.com/docs/manual/"),n(t)])]),_o,o("li",null,[e("技术干货| MongoDB 事务原理 - MongoDB 中文社区："),o("a",Mo,[e("https://mongoing.com/archives/82187"),n(t)])]),o("li",null,[e("Transactions - MongoDB 官方文档："),o("a",Do,[e("https://www.mongodb.com/docs/manual/core/transactions/"),n(t)])]),o("li",null,[e("WiredTiger Storage Engine - MongoDB 官方文档："),o("a",fo,[e("https://www.mongodb.com/docs/manual/core/wiredtiger/"),n(t)])]),o("li",null,[e("WiredTiger 存储引擎之一：基础数据结构分析："),o("a",ko,[e("https://mongoing.com/topic/archives-35143"),n(t)])])])])}const To=l(c,[["render",vo],["__file","mongodb-questions-01.html.vue"]]),xo=JSON.parse('{"path":"/database/mongodb/mongodb-questions-01.html","title":"MongoDB常见面试题总结（上）","lang":"zh-CN","frontmatter":{"title":"MongoDB常见面试题总结（上）","category":"数据库","tag":["NoSQL","MongoDB"],"description":"少部分内容参考了 MongoDB 官方文档的描述，在此说明一下。 MongoDB 基础 MongoDB 是什么？ MongoDB 是一个基于 分布式文件存储 的开源 NoSQL 数据库系统，由 C++ 编写的。MongoDB 提供了 面向文档 的存储方式，操作起来比较简单和容易，支持“无模式”的数据建模，可以存储比较复杂的数据类型，是一款非常流行的 文...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/database/mongodb/mongodb-questions-01.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"MongoDB常见面试题总结（上）"}],["meta",{"property":"og:description","content":"少部分内容参考了 MongoDB 官方文档的描述，在此说明一下。 MongoDB 基础 MongoDB 是什么？ MongoDB 是一个基于 分布式文件存储 的开源 NoSQL 数据库系统，由 C++ 编写的。MongoDB 提供了 面向文档 的存储方式，操作起来比较简单和容易，支持“无模式”的数据建模，可以存储比较复杂的数据类型，是一款非常流行的 文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/database/mongodb/crud-annotated-document..png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"MongoDB常见面试题总结（上）"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"NoSQL"}],["meta",{"property":"article:tag","content":"MongoDB"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB常见面试题总结（上）\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/database/mongodb/crud-annotated-document..png\\",\\"https://oss.javaguide.cn/github/javaguide/database/mongodb/bsonspec.org.png\\",\\"https://oss.javaguide.cn/github/javaguide/database/mongodb/crud-annotated-collection.png\\",\\"https://oss.javaguide.cn/github/javaguide/database/mongodb/mongodb-b-plus-tree-integral-structure.png\\",\\"https://oss.javaguide.cn/github/javaguide/database/mongodb/mongodb-aggregation-stage.png\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"MongoDB 基础","slug":"mongodb-基础","link":"#mongodb-基础","children":[{"level":3,"title":"MongoDB 是什么？","slug":"mongodb-是什么","link":"#mongodb-是什么","children":[]},{"level":3,"title":"MongoDB 的存储结构是什么？","slug":"mongodb-的存储结构是什么","link":"#mongodb-的存储结构是什么","children":[]},{"level":3,"title":"MongoDB 有什么特点？","slug":"mongodb-有什么特点","link":"#mongodb-有什么特点","children":[]},{"level":3,"title":"MongoDB 适合什么应用场景？","slug":"mongodb-适合什么应用场景","link":"#mongodb-适合什么应用场景","children":[]}]},{"level":2,"title":"MongoDB 存储引擎","slug":"mongodb-存储引擎","link":"#mongodb-存储引擎","children":[{"level":3,"title":"MongoDB 支持哪些存储引擎？","slug":"mongodb-支持哪些存储引擎","link":"#mongodb-支持哪些存储引擎","children":[]},{"level":3,"title":"WiredTiger 基于 LSM Tree 还是 B+ Tree？","slug":"wiredtiger-基于-lsm-tree-还是-b-tree","link":"#wiredtiger-基于-lsm-tree-还是-b-tree","children":[]}]},{"level":2,"title":"MongoDB 聚合","slug":"mongodb-聚合","link":"#mongodb-聚合","children":[{"level":3,"title":"MongoDB 聚合有什么用？","slug":"mongodb-聚合有什么用","link":"#mongodb-聚合有什么用","children":[]},{"level":3,"title":"MongoDB 提供了哪几种执行聚合的方法？","slug":"mongodb-提供了哪几种执行聚合的方法","link":"#mongodb-提供了哪几种执行聚合的方法","children":[]}]},{"level":2,"title":"MongoDB 事务","slug":"mongodb-事务","link":"#mongodb-事务","children":[]},{"level":2,"title":"MongoDB 数据压缩","slug":"mongodb-数据压缩","link":"#mongodb-数据压缩","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":18.14,"words":5441},"filePathRelative":"database/mongodb/mongodb-questions-01.md","localizedDate":"2024年3月18日","excerpt":"<blockquote>\\n<p>少部分内容参考了 MongoDB 官方文档的描述，在此说明一下。</p>\\n</blockquote>\\n<h2>MongoDB 基础</h2>\\n<h3>MongoDB 是什么？</h3>\\n<p>MongoDB 是一个基于 <strong>分布式文件存储</strong> 的开源 NoSQL 数据库系统，由 <strong>C++</strong> 编写的。MongoDB 提供了 <strong>面向文档</strong> 的存储方式，操作起来比较简单和容易，支持“<strong>无模式</strong>”的数据建模，可以存储比较复杂的数据类型，是一款非常流行的 <strong>文档类型数据库</strong> 。</p>","autoDesc":true}');export{To as comp,xo as data};
