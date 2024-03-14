const e=JSON.parse('{"key":"v-091bc049","path":"/java/io/nio-basis.html","title":"Java NIO 核心知识总结","lang":"zh-CN","frontmatter":{"title":"Java NIO 核心知识总结","category":"Java","tag":["Java IO","Java基础"],"description":"在学习 NIO 之前，需要先了解一下计算机 I/O模型的基础理论知识。还不了解的话，可以参考我写的这篇文章：Java IO 模型详解。 NIO 简介 在传统的 Java I/O 模型（BIO）中，I/O 操作是以阻塞的方式进行的。也就是说，当一个线程执行一个 I/O 操作时，它会被阻塞直到操作完成。这种阻塞模型在处理多个并发连接时可能会导致性能瓶颈，因为需要为每个连接创建一个线程，而线程的创建和切换都是有开销的。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/java/io/nio-basis.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Java NIO 核心知识总结"}],["meta",{"property":"og:description","content":"在学习 NIO 之前，需要先了解一下计算机 I/O模型的基础理论知识。还不了解的话，可以参考我写的这篇文章：Java IO 模型详解。 NIO 简介 在传统的 Java I/O 模型（BIO）中，I/O 操作是以阻塞的方式进行的。也就是说，当一个线程执行一个 I/O 操作时，它会被阻塞直到操作完成。这种阻塞模型在处理多个并发连接时可能会导致性能瓶颈，因为需要为每个连接创建一个线程，而线程的创建和切换都是有开销的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java IO"}],["meta",{"property":"article:tag","content":"Java基础"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java NIO 核心知识总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"NIO 简介","slug":"nio-简介","link":"#nio-简介","children":[]},{"level":2,"title":"NIO 核心组件","slug":"nio-核心组件","link":"#nio-核心组件","children":[{"level":3,"title":"Buffer（缓冲区）","slug":"buffer-缓冲区","link":"#buffer-缓冲区","children":[]},{"level":3,"title":"Channel（通道）","slug":"channel-通道","link":"#channel-通道","children":[]},{"level":3,"title":"Selector（选择器）","slug":"selector-选择器","link":"#selector-选择器","children":[]}]},{"level":2,"title":"NIO 零拷贝","slug":"nio-零拷贝","link":"#nio-零拷贝","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{},"readingTime":{"minutes":12.98,"words":3894},"filePathRelative":"java/io/nio-basis.md","excerpt":"<p>在学习  NIO 之前，需要先了解一下计算机 I/O模型的基础理论知识。还不了解的话，可以参考我写的这篇文章：<a href=\\"https://javaguide.cn/java/io/io-model.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java IO 模型详解</a>。</p>\\n<h2> NIO 简介</h2>\\n<p>在传统的 Java I/O 模型（BIO）中，I/O 操作是以阻塞的方式进行的。也就是说，当一个线程执行一个 I/O 操作时，它会被阻塞直到操作完成。这种阻塞模型在处理多个并发连接时可能会导致性能瓶颈，因为需要为每个连接创建一个线程，而线程的创建和切换都是有开销的。</p>","autoDesc":true}');export{e as data};
