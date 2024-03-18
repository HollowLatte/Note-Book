import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as o,e as i}from"./app-6eIwu4TL.js";const l={},n=i('<h2 id="事务特性" tabindex="-1"><a class="header-anchor" href="#事务特性"><span>事务特性</span></a></h2><p>实现事务必须要遵守 4 个特性，即ACID，分别如下：</p><ul><li><strong>原子性(Atomicity)</strong>：一个事务中的所有操作，要么全部完成，要么全部不完成，执行过程中发生错误，会被回滚到事务开始前的状态</li><li><strong>一致性(Consistency)</strong>：是指事务操作前和操作后，数据满足完整性约束，数据库保持一致性状态。</li><li><strong>隔离性(Isolation)</strong>：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致</li><li><strong>持久性(Durability)</strong>：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。</li></ul><h2 id="并行事务引发的问题" tabindex="-1"><a class="header-anchor" href="#并行事务引发的问题"><span>并行事务引发的问题</span></a></h2><ul><li>脏读：读到其他事务未提交的数据。T1修改但未提交，T2读取该值，T1撤销，T2读到无效的数据</li><li>不可重复读：前后读取的数据不一致。T1读取某行数据，T2修改该行数据并提交，T1再次读取该行数据，T1两次读取的数据不一致</li><li>幻读：前后读取的记录数量不一致。T1读取多条数据，T2插入或删除一条数据，T1再次读取，T1两次读取到的结果条数不一致</li></ul><h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别"><span>事务隔离级别</span></a></h2><ul><li>读未提交(read uncommitted)：指一个事务还没提交时，它做的变更就能被其他事务看到；</li><li>读已提交(read committed)：指一个事务提交之后，它做的变更才能被其他事务看到；</li><li>可重复读(repeatable read)：指一个事务执行过程中看到的数据，一直跟这个事务启动时看到的数据是一致的，MySQL InnoDB 引擎的默认隔离级别；</li><li>串行化(serializable)：会对记录加上读写锁，在多个事务对这条记录进行读写操作时，如果发生了读写冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行；</li></ul>',7),a=[n];function r(s,c){return e(),o("div",null,a)}const m=t(l,[["render",r],["__file","transaction-isolation-level.html.vue"]]),d=JSON.parse('{"path":"/interview-shorthand/mysql/transaction/transaction-isolation-level.html","title":"事务隔离级别","lang":"zh-CN","frontmatter":{"title":"事务隔离级别","category":"MySQL","tag":"MySQL","description":"事务特性 实现事务必须要遵守 4 个特性，即ACID，分别如下： 原子性(Atomicity)：一个事务中的所有操作，要么全部完成，要么全部不完成，执行过程中发生错误，会被回滚到事务开始前的状态 一致性(Consistency)：是指事务操作前和操作后，数据满足完整性约束，数据库保持一致性状态。 隔离性(Isolation)：数据库允许多个并发事务同时...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/interview-shorthand/mysql/transaction/transaction-isolation-level.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"事务隔离级别"}],["meta",{"property":"og:description","content":"事务特性 实现事务必须要遵守 4 个特性，即ACID，分别如下： 原子性(Atomicity)：一个事务中的所有操作，要么全部完成，要么全部不完成，执行过程中发生错误，会被回滚到事务开始前的状态 一致性(Consistency)：是指事务操作前和操作后，数据满足完整性约束，数据库保持一致性状态。 隔离性(Isolation)：数据库允许多个并发事务同时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务隔离级别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"事务特性","slug":"事务特性","link":"#事务特性","children":[]},{"level":2,"title":"并行事务引发的问题","slug":"并行事务引发的问题","link":"#并行事务引发的问题","children":[]},{"level":2,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"interview-shorthand/mysql/transaction/transaction-isolation-level.md","localizedDate":"2024年3月18日","excerpt":"<h2>事务特性</h2>\\n<p>实现事务必须要遵守 4 个特性，即ACID，分别如下：</p>\\n<ul>\\n<li><strong>原子性(Atomicity)</strong>：一个事务中的所有操作，要么全部完成，要么全部不完成，执行过程中发生错误，会被回滚到事务开始前的状态</li>\\n<li><strong>一致性(Consistency)</strong>：是指事务操作前和操作后，数据满足完整性约束，数据库保持一致性状态。</li>\\n<li><strong>隔离性(Isolation)</strong>：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致</li>\\n<li><strong>持久性(Durability)</strong>：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。</li>\\n</ul>","autoDesc":true}');export{m as comp,d as data};
