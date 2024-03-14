const e=JSON.parse('{"key":"v-17f884b2","path":"/interview-shorthand/redis/why-use-single-thread.html","title":"为什么使用单线程？","lang":"zh-CN","frontmatter":{"title":"为什么使用单线程？","author":null,"category":"Redis","tag":"Redis","description":"Redis是单线程？ 实际上，Redis中只有网络请求模块和数据操作模块是单线程的。而其他的如持久化存储模块、集群支撑模块等是多线程的。 在6.0后，Redis的网络请求模块也使用了多线程，其实在4.0时对部分命令做了多线程化，如新增命令了unlink，实际上是del的异步版本 为什么数据的操作模块设计成单线程的？ 多线程的目的，就是通过并发的方式来提升I/O的利用率和CPU的利用率。 Redis不需要提升CPU利用率，因为Redis的操作基本都是基于内存的，计算操作较少，CPU资源不是Redis的性能瓶颈。 那么为什么不用多线程来提升I/O利用率呢？ Redis确实是一个I/O操作密集的框架，他的数据操作过程中，会有大量的网络I/O和磁盘I/O的发生。要想提升Redis的性能，是一定要提升Redis的I/O利用率的，这一点毋庸置疑。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/interview-shorthand/redis/why-use-single-thread.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"为什么使用单线程？"}],["meta",{"property":"og:description","content":"Redis是单线程？ 实际上，Redis中只有网络请求模块和数据操作模块是单线程的。而其他的如持久化存储模块、集群支撑模块等是多线程的。 在6.0后，Redis的网络请求模块也使用了多线程，其实在4.0时对部分命令做了多线程化，如新增命令了unlink，实际上是del的异步版本 为什么数据的操作模块设计成单线程的？ 多线程的目的，就是通过并发的方式来提升I/O的利用率和CPU的利用率。 Redis不需要提升CPU利用率，因为Redis的操作基本都是基于内存的，计算操作较少，CPU资源不是Redis的性能瓶颈。 那么为什么不用多线程来提升I/O利用率呢？ Redis确实是一个I/O操作密集的框架，他的数据操作过程中，会有大量的网络I/O和磁盘I/O的发生。要想提升Redis的性能，是一定要提升Redis的I/O利用率的，这一点毋庸置疑。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Redis"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么使用单线程？\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"Redis是单线程？","slug":"redis是单线程","link":"#redis是单线程","children":[]},{"level":2,"title":"为什么数据的操作模块设计成单线程的？","slug":"为什么数据的操作模块设计成单线程的","link":"#为什么数据的操作模块设计成单线程的","children":[]},{"level":2,"title":"为什么单线程也能那么快？","slug":"为什么单线程也能那么快","link":"#为什么单线程也能那么快","children":[]},{"level":2,"title":"6.0为什么引入多线程","slug":"_6-0为什么引入多线程","link":"#_6-0为什么引入多线程","children":[]}],"git":{},"readingTime":{"minutes":3.05,"words":914},"filePathRelative":"interview-shorthand/redis/why-use-single-thread.md","excerpt":"<h2> Redis是单线程？</h2>\\n<p>实际上，Redis中只有网络请求模块和数据操作模块是单线程的。而其他的如持久化存储模块、集群支撑模块等是多线程的。\\n在6.0后，Redis的网络请求模块也使用了多线程，其实在4.0时对部分命令做了多线程化，如新增命令了unlink，实际上是del的异步版本</p>\\n<h2> 为什么数据的操作模块设计成单线程的？</h2>\\n<p>多线程的目的，就是通过并发的方式来提升I/O的利用率和CPU的利用率。\\nRedis不需要提升CPU利用率，因为Redis的操作基本都是基于内存的，计算操作较少，CPU资源不是Redis的性能瓶颈。</p>\\n<p>那么为什么不用多线程来提升I/O利用率呢？\\nRedis确实是一个I/O操作密集的框架，他的数据操作过程中，会有大量的网络I/O和磁盘I/O的发生。要想提升Redis的性能，是一定要提升Redis的I/O利用率的，这一点毋庸置疑。</p>","autoDesc":true}');export{e as data};
