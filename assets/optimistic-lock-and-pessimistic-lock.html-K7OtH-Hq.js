const t=JSON.parse('{"key":"v-6f30f770","path":"/java/concurrent/optimistic-lock-and-pessimistic-lock.html","title":"乐观锁和悲观锁详解","lang":"zh-CN","frontmatter":{"title":"乐观锁和悲观锁详解","category":"Java","tag":["Java并发"],"description":"如果将悲观锁（Pessimistic Lock）和乐观锁（PessimisticLock 或 OptimisticLock）对应到现实生活中来。悲观锁有点像是一位比较悲观（也可以说是未雨绸缪）的人，总是会假设最坏的情况，避免出现问题。乐观锁有点像是一位比较乐观的人，总是会假设最好的情况，在要出现问题之前快速解决问题。 在程序世界中，乐观锁和悲观锁的最终目的都是为了保证线程安全，避免在并发场景下的资源竞争问题。但是，相比于乐观锁，悲观锁对性能的影响更大！ 什么是悲观锁？ 悲观锁总是假设最坏的情况，认为共享资源每次被访问的时候就会出现问题(比如共享数据被修改)，所以每次在获取资源操作的时候都会上锁，这样其他线程想拿到这个资源就会阻塞直到锁被上一个持有者释放。也就是说，共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/java/concurrent/optimistic-lock-and-pessimistic-lock.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"乐观锁和悲观锁详解"}],["meta",{"property":"og:description","content":"如果将悲观锁（Pessimistic Lock）和乐观锁（PessimisticLock 或 OptimisticLock）对应到现实生活中来。悲观锁有点像是一位比较悲观（也可以说是未雨绸缪）的人，总是会假设最坏的情况，避免出现问题。乐观锁有点像是一位比较乐观的人，总是会假设最好的情况，在要出现问题之前快速解决问题。 在程序世界中，乐观锁和悲观锁的最终目的都是为了保证线程安全，避免在并发场景下的资源竞争问题。但是，相比于乐观锁，悲观锁对性能的影响更大！ 什么是悲观锁？ 悲观锁总是假设最坏的情况，认为共享资源每次被访问的时候就会出现问题(比如共享数据被修改)，所以每次在获取资源操作的时候都会上锁，这样其他线程想拿到这个资源就会阻塞直到锁被上一个持有者释放。也就是说，共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java并发"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"乐观锁和悲观锁详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"什么是悲观锁？","slug":"什么是悲观锁","link":"#什么是悲观锁","children":[]},{"level":2,"title":"什么是乐观锁？","slug":"什么是乐观锁","link":"#什么是乐观锁","children":[]},{"level":2,"title":"如何实现乐观锁？","slug":"如何实现乐观锁","link":"#如何实现乐观锁","children":[{"level":3,"title":"版本号机制","slug":"版本号机制","link":"#版本号机制","children":[]},{"level":3,"title":"CAS 算法","slug":"cas-算法","link":"#cas-算法","children":[]}]},{"level":2,"title":"乐观锁存在哪些问题？","slug":"乐观锁存在哪些问题","link":"#乐观锁存在哪些问题","children":[{"level":3,"title":"ABA 问题","slug":"aba-问题","link":"#aba-问题","children":[]},{"level":3,"title":"循环时间长开销大","slug":"循环时间长开销大","link":"#循环时间长开销大","children":[]},{"level":3,"title":"只能保证一个共享变量的原子操作","slug":"只能保证一个共享变量的原子操作","link":"#只能保证一个共享变量的原子操作","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{},"readingTime":{"minutes":10.01,"words":3002},"filePathRelative":"java/concurrent/optimistic-lock-and-pessimistic-lock.md","excerpt":"<p>如果将悲观锁（Pessimistic Lock）和乐观锁（PessimisticLock 或 OptimisticLock）对应到现实生活中来。悲观锁有点像是一位比较悲观（也可以说是未雨绸缪）的人，总是会假设最坏的情况，避免出现问题。乐观锁有点像是一位比较乐观的人，总是会假设最好的情况，在要出现问题之前快速解决问题。</p>\\n<p>在程序世界中，乐观锁和悲观锁的最终目的都是为了保证线程安全，避免在并发场景下的资源竞争问题。但是，相比于乐观锁，悲观锁对性能的影响更大！</p>\\n<h2> 什么是悲观锁？</h2>\\n<p>悲观锁总是假设最坏的情况，认为共享资源每次被访问的时候就会出现问题(比如共享数据被修改)，所以每次在获取资源操作的时候都会上锁，这样其他线程想拿到这个资源就会阻塞直到锁被上一个持有者释放。也就是说，<strong>共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程</strong>。</p>","autoDesc":true}');export{t as data};
