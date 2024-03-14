const e=JSON.parse('{"key":"v-56127dd1","path":"/notebook/java/concurrence/instruction-reordering.html","title":"指令重排","lang":"zh-CN","frontmatter":{"title":"指令重排","author":null,"category":"JMM","tag":"JMM","date":"2024-03-06T00:00:00.000Z","description":"指令重排 在 Java 中，指令重排（Instruction Reordering）是编译器和处理器优化的一种技术。它的目的是通过重新排列指令的执行顺序来提高程序的性能。指令重排可以改变指令在计算机中的执行顺序，但不能改变程序的语义。 指令重排会遵循as-if-serial与happens-before原则 as-if-serial语义保证了指令重排不会改变程序的执行结果，而happens-before关系和同步机制则限制了指令重排的范围，以确保多线程程序的正确性。","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/notebook/java/concurrence/instruction-reordering.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"指令重排"}],["meta",{"property":"og:description","content":"指令重排 在 Java 中，指令重排（Instruction Reordering）是编译器和处理器优化的一种技术。它的目的是通过重新排列指令的执行顺序来提高程序的性能。指令重排可以改变指令在计算机中的执行顺序，但不能改变程序的语义。 指令重排会遵循as-if-serial与happens-before原则 as-if-serial语义保证了指令重排不会改变程序的执行结果，而happens-before关系和同步机制则限制了指令重排的范围，以确保多线程程序的正确性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"JMM"}],["meta",{"property":"article:published_time","content":"2024-03-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指令重排\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"指令重排","slug":"指令重排","link":"#指令重排","children":[{"level":3,"title":"指令重排示例","slug":"指令重排示例","link":"#指令重排示例","children":[]}]},{"level":2,"title":"as-if-serial","slug":"as-if-serial","link":"#as-if-serial","children":[]},{"level":2,"title":"happens-before","slug":"happens-before","link":"#happens-before","children":[]}],"git":{},"readingTime":{"minutes":3.38,"words":1014},"filePathRelative":"notebook/java/concurrence/instruction-reordering.md","localizedDate":"2024年3月6日","excerpt":"<h2> 指令重排</h2>\\n<p>在 Java 中，指令重排（Instruction Reordering）是编译器和处理器优化的一种技术。它的目的是通过重新排列指令的执行顺序来提高程序的性能。指令重排可以改变指令在计算机中的执行顺序，但不能改变程序的语义。</p>\\n<p>指令重排会遵循<strong>as-if-serial</strong>与<strong>happens-before</strong>原则</p>\\n<p>as-if-serial语义保证了指令重排不会改变程序的执行结果，而happens-before关系和同步机制则限制了指令重排的范围，以确保多线程程序的正确性。</p>","autoDesc":true}');export{e as data};
