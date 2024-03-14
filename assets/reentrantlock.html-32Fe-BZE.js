const e=JSON.parse('{"key":"v-2b84d805","path":"/java/concurrent/reentrantlock.html","title":"从ReentrantLock的实现看AQS的原理及应用","lang":"zh-CN","frontmatter":{"title":"从ReentrantLock的实现看AQS的原理及应用","category":"Java","tag":["Java并发"],"description":"本文转载自：https://tech.meituan.com/2019/12/05/aqs-theory-and-apply.html 作者：美团技术团队 Java 中的大部分同步类（Semaphore、ReentrantLock 等）都是基于 AbstractQueuedSynchronizer（简称为 AQS）实现的。AQS 是一种提供了原子式管理同步状态、阻塞和唤醒线程功能以及队列模型的简单框架。 本文会从应用层逐渐深入到原理层，并通过 ReentrantLock 的基本特性和 ReentrantLock 与 AQS 的关联，来深入解读 AQS 相关独占锁的知识点，同时采取问答的模式来帮助大家理解 AQS。由于篇幅原因，本篇文章主要阐述 AQS 中独占锁的逻辑和 Sync Queue，不讲述包含共享锁和 Condition Queue 的部分（本篇文章核心为 AQS 原理剖析，只是简单介绍了 ReentrantLock，感兴趣同学可以阅读一下 ReentrantLock 的源码）。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/java/concurrent/reentrantlock.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"从ReentrantLock的实现看AQS的原理及应用"}],["meta",{"property":"og:description","content":"本文转载自：https://tech.meituan.com/2019/12/05/aqs-theory-and-apply.html 作者：美团技术团队 Java 中的大部分同步类（Semaphore、ReentrantLock 等）都是基于 AbstractQueuedSynchronizer（简称为 AQS）实现的。AQS 是一种提供了原子式管理同步状态、阻塞和唤醒线程功能以及队列模型的简单框架。 本文会从应用层逐渐深入到原理层，并通过 ReentrantLock 的基本特性和 ReentrantLock 与 AQS 的关联，来深入解读 AQS 相关独占锁的知识点，同时采取问答的模式来帮助大家理解 AQS。由于篇幅原因，本篇文章主要阐述 AQS 中独占锁的逻辑和 Sync Queue，不讲述包含共享锁和 Condition Queue 的部分（本篇文章核心为 AQS 原理剖析，只是简单介绍了 ReentrantLock，感兴趣同学可以阅读一下 ReentrantLock 的源码）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java并发"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从ReentrantLock的实现看AQS的原理及应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"1 ReentrantLock","slug":"_1-reentrantlock","link":"#_1-reentrantlock","children":[{"level":3,"title":"1.1 ReentrantLock 特性概览","slug":"_1-1-reentrantlock-特性概览","link":"#_1-1-reentrantlock-特性概览","children":[]},{"level":3,"title":"1.2 ReentrantLock 与 AQS 的关联","slug":"_1-2-reentrantlock-与-aqs-的关联","link":"#_1-2-reentrantlock-与-aqs-的关联","children":[]}]},{"level":2,"title":"2 AQS","slug":"_2-aqs","link":"#_2-aqs","children":[{"level":3,"title":"2.1 原理概览","slug":"_2-1-原理概览","link":"#_2-1-原理概览","children":[]},{"level":3,"title":"2.2 AQS 重要方法与 ReentrantLock 的关联","slug":"_2-2-aqs-重要方法与-reentrantlock-的关联","link":"#_2-2-aqs-重要方法与-reentrantlock-的关联","children":[]}]},{"level":2,"title":"3 通过 ReentrantLock 理解 AQS","slug":"_3-通过-reentrantlock-理解-aqs","link":"#_3-通过-reentrantlock-理解-aqs","children":[{"level":3,"title":"3.1 线程加入等待队列","slug":"_3-1-线程加入等待队列","link":"#_3-1-线程加入等待队列","children":[]},{"level":3,"title":"3.2 CANCELLED 状态节点生成","slug":"_3-2-cancelled-状态节点生成","link":"#_3-2-cancelled-状态节点生成","children":[]},{"level":3,"title":"3.3 如何解锁","slug":"_3-3-如何解锁","link":"#_3-3-如何解锁","children":[]},{"level":3,"title":"3.4 中断恢复后的执行流程","slug":"_3-4-中断恢复后的执行流程","link":"#_3-4-中断恢复后的执行流程","children":[]},{"level":3,"title":"3.5 小结","slug":"_3-5-小结","link":"#_3-5-小结","children":[]}]},{"level":2,"title":"4 AQS 应用","slug":"_4-aqs-应用","link":"#_4-aqs-应用","children":[{"level":3,"title":"4.1 ReentrantLock 的可重入应用","slug":"_4-1-reentrantlock-的可重入应用","link":"#_4-1-reentrantlock-的可重入应用","children":[]},{"level":3,"title":"4.2 JUC 中的应用场景","slug":"_4-2-juc-中的应用场景","link":"#_4-2-juc-中的应用场景","children":[]},{"level":3,"title":"4.3 自定义同步工具","slug":"_4-3-自定义同步工具","link":"#_4-3-自定义同步工具","children":[]}]},{"level":2,"title":"5 总结","slug":"_5-总结","link":"#_5-总结","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{},"readingTime":{"minutes":30.34,"words":9103},"filePathRelative":"java/concurrent/reentrantlock.md","excerpt":"<blockquote>\\n<p>本文转载自：https://tech.meituan.com/2019/12/05/aqs-theory-and-apply.html</p>\\n<p>作者：美团技术团队</p>\\n</blockquote>\\n<p>Java 中的大部分同步类（Semaphore、ReentrantLock 等）都是基于 AbstractQueuedSynchronizer（简称为 AQS）实现的。AQS 是一种提供了原子式管理同步状态、阻塞和唤醒线程功能以及队列模型的简单框架。</p>\\n<p>本文会从应用层逐渐深入到原理层，并通过 ReentrantLock 的基本特性和 ReentrantLock 与 AQS 的关联，来深入解读 AQS 相关独占锁的知识点，同时采取问答的模式来帮助大家理解 AQS。由于篇幅原因，本篇文章主要阐述 AQS 中独占锁的逻辑和 Sync Queue，不讲述包含共享锁和 Condition Queue 的部分（本篇文章核心为 AQS 原理剖析，只是简单介绍了 ReentrantLock，感兴趣同学可以阅读一下 ReentrantLock 的源码）。</p>","autoDesc":true}');export{e as data};
