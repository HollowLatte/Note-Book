import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as o}from"./app-DlTWK7Vx.js";const n={},r=o('<h2 id="什么是cas" tabindex="-1"><a class="header-anchor" href="#什么是cas"><span>什么是CAS？</span></a></h2><p>CAS是一项乐观锁技术，是Compare And Swap的简称，顾名思义就是先比较再替换。CAS 操作包含三个操作数 —— 内存位置（V）、预期原值（A）和新值(B)。在进行并发修改的时候，会先比较A和V中取出的值是否相等，如果相等，则会把值替换成B，否则就不做任何操作。</p><p>当多个线程尝试使用CAS同时更新同一个变量时，只有其中一个线程能更新变量的值，而其它线程都失败，失败的线程并不会被挂起，而是被告知这次竞争中失败，并可以再次尝试。</p><p>java.util.concurrent(JUC)就是建立在CAS之上的。相对于synchronized这种阻塞算法，CAS是非阻塞算法的一种常见实现。所以JUC在性能上有了很大的提升。而JUC中的CAS操作都是基于unsafe类的</p><p>CAS的主要应用就是实现乐观锁和锁自旋。</p><h2 id="aba-问题" tabindex="-1"><a class="header-anchor" href="#aba-问题"><span>ABA 问题</span></a></h2><p>比如说一个线程1从内存位置V中取出A，这时候另一个线程2也从内存中取出A，并且2进行了一些操作变成了B，然后2又将V位置的数据变成A，这时候线程1进行CAS操作发现内存中仍然是A，然后1操作成功。尽管线程1的CAS操作成功，但是不代表这个过程就是没有问题的。</p><p>举个例子，线程1和线程2同时通过CAS尝试修改用户A余额，线程1和线程2同时查询当前余额为100元，然后线程2因为用户A要把钱借给用户B，先把余额从100改成50。然后又有用户C还给用户A 50元，线程2则又把50改成了100。这是线程1继续修改，把余额从100改成200。</p><p>虽然过程上金额都没问题，都改成功了，但是对于用户余额来说，丢失了两次修改的过程，在修改前用户C欠用户A 50元，但是修改后，用户C不欠钱了，而用户B欠用户A 50元了。而这个过程数据是很重要的。</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h3><p>部分乐观锁的实现是通过版本号（version）的方式来解决ABA问题，乐观锁每次在执行数据的修改操作时，都会带上一个版本号，一旦版本号和数据的版本号一致就可以执行修改操作并对版本号执行+1操作，否则就执行失败。因为每次操作的版本号都会随之增加，所以不会出现ABA问题，因为版本号只会增加不会减少。</p><p>在Java中，<strong>可以借助AtomicStampedReference解决多线程环境下的“ABA”问题</strong>。像AtomicInteger、AtomicLong 和其他原子类并没有解决 CAS 的 ABA 问题。</p><p>AtomicStampedReference 通过同时维护一个引用和一个时间戳，可以解决 ABA 问题。它允许线程在执行 CAS 操作时，不仅检查引用是否发生了变化，还要检查时间戳是否发生了变化。这样，即使一个变量的值被修改后又改回原值，由于时间戳的存在，线程仍然可以检测到这中间的变化。</p><h2 id="cas能保证线程安全吗" tabindex="-1"><a class="header-anchor" href="#cas能保证线程安全吗"><span>CAS能保证线程安全吗？</span></a></h2><p>线程安全有三要素：原子性、可见性、有序性</p><p>CAS只保证了原子性，通常需要结合volatile才能保证线程安全</p>',16),c=[r];function p(l,i){return t(),a("div",null,c)}const h=e(n,[["render",p],["__file","cas.html.vue"]]),d=JSON.parse('{"path":"/notebook/java/concurrence/cas.html","title":"CAS","lang":"zh-CN","frontmatter":{"title":"CAS","author":null,"category":"Java","tag":"Java","date":"2024-01-23T00:00:00.000Z","description":"什么是CAS？ CAS是一项乐观锁技术，是Compare And Swap的简称，顾名思义就是先比较再替换。CAS 操作包含三个操作数 —— 内存位置（V）、预期原值（A）和新值(B)。在进行并发修改的时候，会先比较A和V中取出的值是否相等，如果相等，则会把值替换成B，否则就不做任何操作。 当多个线程尝试使用CAS同时更新同一个变量时，只有其中一个线程...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/notebook/java/concurrence/cas.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"CAS"}],["meta",{"property":"og:description","content":"什么是CAS？ CAS是一项乐观锁技术，是Compare And Swap的简称，顾名思义就是先比较再替换。CAS 操作包含三个操作数 —— 内存位置（V）、预期原值（A）和新值(B)。在进行并发修改的时候，会先比较A和V中取出的值是否相等，如果相等，则会把值替换成B，否则就不做任何操作。 当多个线程尝试使用CAS同时更新同一个变量时，只有其中一个线程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T19:11:00.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-01-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T19:11:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAS\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T19:11:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"什么是CAS？","slug":"什么是cas","link":"#什么是cas","children":[]},{"level":2,"title":"ABA 问题","slug":"aba-问题","link":"#aba-问题","children":[{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}]},{"level":2,"title":"CAS能保证线程安全吗？","slug":"cas能保证线程安全吗","link":"#cas能保证线程安全吗","children":[]}],"git":{"createdTime":1710789060000,"updatedTime":1710789060000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":3.02,"words":907},"filePathRelative":"notebook/java/concurrence/cas.md","localizedDate":"2024年1月23日","excerpt":"<h2>什么是CAS？</h2>\\n<p>CAS是一项乐观锁技术，是Compare And Swap的简称，顾名思义就是先比较再替换。CAS 操作包含三个操作数 ——\\n内存位置（V）、预期原值（A）和新值(B)。在进行并发修改的时候，会先比较A和V中取出的值是否相等，如果相等，则会把值替换成B，否则就不做任何操作。</p>\\n<p>当多个线程尝试使用CAS同时更新同一个变量时，只有其中一个线程能更新变量的值，而其它线程都失败，失败的线程并不会被挂起，而是被告知这次竞争中失败，并可以再次尝试。</p>\\n<p>java.util.concurrent(JUC)就是建立在CAS之上的。相对于synchronized这种阻塞算法，CAS是非阻塞算法的一种常见实现。所以JUC在性能上有了很大的提升。而JUC中的CAS操作都是基于unsafe类的</p>","autoDesc":true}');export{h as comp,d as data};