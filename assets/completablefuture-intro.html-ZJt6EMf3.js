const e=JSON.parse('{"key":"v-808f5656","path":"/java/concurrent/completablefuture-intro.html","title":"CompletableFuture 详解","lang":"zh-CN","frontmatter":{"title":"CompletableFuture 详解","category":"Java","tag":["Java并发"],"description":"自己在项目中使用 CompletableFuture 比较多，看到很多开源框架中也大量使用到了 CompletableFuture 。 因此，专门写一篇文章来介绍这个 Java 8 才被引入的一个非常有用的用于异步编程的类。 简单介绍 CompletableFuture 同时实现了 Future 和 CompletionStage 接口。 public class CompletableFuture&lt;T&gt; implements Future&lt;T&gt;, CompletionStage&lt;T&gt; { }","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/java/concurrent/completablefuture-intro.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"CompletableFuture 详解"}],["meta",{"property":"og:description","content":"自己在项目中使用 CompletableFuture 比较多，看到很多开源框架中也大量使用到了 CompletableFuture 。 因此，专门写一篇文章来介绍这个 Java 8 才被引入的一个非常有用的用于异步编程的类。 简单介绍 CompletableFuture 同时实现了 Future 和 CompletionStage 接口。 public class CompletableFuture&lt;T&gt; implements Future&lt;T&gt;, CompletionStage&lt;T&gt; { }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java并发"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CompletableFuture 详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"简单介绍","slug":"简单介绍","link":"#简单介绍","children":[]},{"level":2,"title":"常见操作","slug":"常见操作","link":"#常见操作","children":[{"level":3,"title":"创建 CompletableFuture","slug":"创建-completablefuture","link":"#创建-completablefuture","children":[]},{"level":3,"title":"处理异步结算的结果","slug":"处理异步结算的结果","link":"#处理异步结算的结果","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]},{"level":3,"title":"组合 CompletableFuture","slug":"组合-completablefuture","link":"#组合-completablefuture","children":[]},{"level":3,"title":"并行运行多个 CompletableFuture","slug":"并行运行多个-completablefuture","link":"#并行运行多个-completablefuture","children":[]}]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"git":{},"readingTime":{"minutes":8.66,"words":2598},"filePathRelative":"java/concurrent/completablefuture-intro.md","excerpt":"<p>自己在项目中使用 <code>CompletableFuture</code> 比较多，看到很多开源框架中也大量使用到了 <code>CompletableFuture</code> 。</p>\\n<p>因此，专门写一篇文章来介绍这个 Java 8 才被引入的一个非常有用的用于异步编程的类。</p>\\n<h2> 简单介绍</h2>\\n<p><code>CompletableFuture</code> 同时实现了 <code>Future</code> 和 <code>CompletionStage</code> 接口。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">CompletableFuture</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Future</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">CompletionStage</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
