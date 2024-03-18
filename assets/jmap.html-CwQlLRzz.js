import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e as t}from"./app-6eIwu4TL.js";const e={},p=t(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2><p>主要用于打印指定Java进程的内存细节。也就是说可以使用jmap生成Heap Dump。如果程序内存不足或者频繁GC，很有可能存在内存泄露情况，这时候就要借助Java堆Dump查看对象的情况。</p><p>堆Dump是反应Java堆使用情况的内存镜像，其中主要包括系统信息、虚拟机属性、完整的线程Dump、所有类和对象的状态等。 一般，在内存不足、GC异常等情况下，我们就会怀疑有内存泄露。这个时候我们就可以制作堆Dump来查看具体情况。分析原因。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p><strong>jmap的帮助信息如下</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Usage:
    jmap <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
        <span class="token punctuation">(</span>to connect to running process<span class="token punctuation">)</span>
    jmap <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token operator">&lt;</span>executable <span class="token operator">&lt;</span>core<span class="token operator">&gt;</span>
        <span class="token punctuation">(</span>to connect to a core <span class="token function">file</span><span class="token punctuation">)</span>
    jmap <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token punctuation">[</span>server_id@<span class="token punctuation">]</span><span class="token operator">&lt;</span>remote server IP or hostname<span class="token operator">&gt;</span>
        <span class="token punctuation">(</span>to connect to remote debug server<span class="token punctuation">)</span>

where <span class="token operator">&lt;</span>option<span class="token operator">&gt;</span> is one of:
    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>               to print same info as Solaris pmap
    <span class="token parameter variable">-heap</span>                to print <span class="token function">java</span> heap summary
    -histo<span class="token punctuation">[</span>:live<span class="token punctuation">]</span>        to print histogram of <span class="token function">java</span> object heap<span class="token punctuation">;</span> <span class="token keyword">if</span> the <span class="token string">&quot;live&quot;</span>
                         suboption is specified, only count live objects
    <span class="token parameter variable">-clstats</span>             to print class loader statistics
    <span class="token parameter variable">-finalizerinfo</span>       to print information on objects awaiting finalization
    -dump:<span class="token operator">&lt;</span>dump-options<span class="token operator">&gt;</span> to dump <span class="token function">java</span> heap <span class="token keyword">in</span> hprof binary <span class="token function">format</span>
                         dump-options:
                           live         dump only live objects<span class="token punctuation">;</span> <span class="token keyword">if</span> not specified,
                                        all objects <span class="token keyword">in</span> the heap are dumped.
                           <span class="token assign-left variable">format</span><span class="token operator">=</span>b     binary <span class="token function">format</span>
                           <span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>  dump heap to <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
                         Example: jmap -dump:live,format<span class="token operator">=</span>b,file<span class="token operator">=</span>heap.bin <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
    <span class="token parameter variable">-F</span>                   force. Use with -dump:<span class="token operator">&lt;</span>dump-options<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span> or <span class="token parameter variable">-histo</span>
                         to force a heap dump or histogram when <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span> does not
                         respond. The <span class="token string">&quot;live&quot;</span> suboption is not supported
                         <span class="token keyword">in</span> this mode.
    <span class="token parameter variable">-h</span> <span class="token operator">|</span> <span class="token parameter variable">-help</span>           to print this <span class="token builtin class-name">help</span> message
    -J<span class="token operator">&lt;</span>flag<span class="token operator">&gt;</span>             to pass <span class="token operator">&lt;</span>flag<span class="token operator">&gt;</span> directly to the runtime system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>option的参数是互斥的(不可同时使用)。</p><ul><li>none：如果使用不带选项参数的jmap打印共享对象映射，将会打印目标虚拟机中加载的每个共享对象的起始地址、映射大小以及共享对象文件的路径全称。这与Solaris的pmap工具比较相似。</li><li>dump：以hprof二进制格式转储Java堆到指定filename的文件中。live子选项是可选的。如果指定了live子选项，堆中只有活动的对象会被转储。想要浏览heap dump，你可以使用jhat(Java堆分析工具)读取生成的文件。</li><li>heap：打印一个堆的摘要信息，包括使用的GC算法、堆配置信息和generation wise heap usage。</li><li>histo[:live] ：打印堆的柱状图。其中包括每个Java类、对象数量、内存大小(单位：字节) 、完全限定的类名。打印的虚拟机内部的类名称将会带有一个&#39;*&#39;前缀。如果指定了live子选项，则只计算活动的对象。</li><li>permstat：打印Java堆内存的永久保存区域的类加载器的智能统计信息。对于每个类加载器而言，它的名称、活跃度、地址、父类加载器、它所加载的类的数量和大小都会被打印。此外，包含的字符串数量和大小也会被打印。</li></ul><p>常用方式：</p><ul><li>查看java 堆（heap）使用情况：<code>jmap -heap &lt;pid&gt;</code></li><li>查看堆内存(histogram)中的对象数量及大小：<code>jmap -histo &lt;pid&gt;</code>，如果使用<code>jmap -histo:live &lt;pid&gt;</code>，JVM会先触发gc，然后再统计信息。</li><li>将内存使用的详细情况输出到文件：<code>jmap -dump:format=b,file=heapDump &lt;pid&gt;</code></li></ul><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><p>当运行中的Java应用的JDK与使用jmap命令的JDK版本不同时，可能会使jmap命令出现异常。经测试，JDK17运行的应用，用JDK8中的jmap操作时，会抛出异常</p>`,12),o=[p];function l(i,r){return n(),s("div",null,o)}const m=a(e,[["render",l],["__file","jmap.html.vue"]]),d=JSON.parse('{"path":"/practice-manual/jvm/tool/jmap.html","title":"jmap命令","lang":"zh-CN","frontmatter":{"title":"jmap命令","author":null,"category":"JVM","tag":"JVM","description":"作用 主要用于打印指定Java进程的内存细节。也就是说可以使用jmap生成Heap Dump。如果程序内存不足或者频繁GC，很有可能存在内存泄露情况，这时候就要借助Java堆Dump查看对象的情况。 堆Dump是反应Java堆使用情况的内存镜像，其中主要包括系统信息、虚拟机属性、完整的线程Dump、所有类和对象的状态等。 一般，在内存不足、GC异常等情...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/jvm/tool/jmap.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"jmap命令"}],["meta",{"property":"og:description","content":"作用 主要用于打印指定Java进程的内存细节。也就是说可以使用jmap生成Heap Dump。如果程序内存不足或者频繁GC，很有可能存在内存泄露情况，这时候就要借助Java堆Dump查看对象的情况。 堆Dump是反应Java堆使用情况的内存镜像，其中主要包括系统信息、虚拟机属性、完整的线程Dump、所有类和对象的状态等。 一般，在内存不足、GC异常等情..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jmap命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":2.85,"words":854},"filePathRelative":"practice-manual/jvm/tool/jmap.md","localizedDate":"2024年3月18日","excerpt":"<h2>作用</h2>\\n<p>主要用于打印指定Java进程的内存细节。也就是说可以使用jmap生成Heap\\nDump。如果程序内存不足或者频繁GC，很有可能存在内存泄露情况，这时候就要借助Java堆Dump查看对象的情况。</p>\\n<p>堆Dump是反应Java堆使用情况的内存镜像，其中主要包括系统信息、虚拟机属性、完整的线程Dump、所有类和对象的状态等。\\n一般，在内存不足、GC异常等情况下，我们就会怀疑有内存泄露。这个时候我们就可以制作堆Dump来查看具体情况。分析原因。</p>\\n<h2>使用</h2>\\n<p><strong>jmap的帮助信息如下</strong>：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>Usage:\\n    jmap <span class=\\"token punctuation\\">[</span>option<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span>pid<span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token punctuation\\">(</span>to connect to running process<span class=\\"token punctuation\\">)</span>\\n    jmap <span class=\\"token punctuation\\">[</span>option<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span>executable <span class=\\"token operator\\">&lt;</span>core<span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token punctuation\\">(</span>to connect to a core <span class=\\"token function\\">file</span><span class=\\"token punctuation\\">)</span>\\n    jmap <span class=\\"token punctuation\\">[</span>option<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">[</span>server_id@<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&lt;</span>remote server IP or hostname<span class=\\"token operator\\">&gt;</span>\\n        <span class=\\"token punctuation\\">(</span>to connect to remote debug server<span class=\\"token punctuation\\">)</span>\\n\\nwhere <span class=\\"token operator\\">&lt;</span>option<span class=\\"token operator\\">&gt;</span> is one of:\\n    <span class=\\"token operator\\">&lt;</span>none<span class=\\"token operator\\">&gt;</span>               to print same info as Solaris pmap\\n    <span class=\\"token parameter variable\\">-heap</span>                to print <span class=\\"token function\\">java</span> heap summary\\n    -histo<span class=\\"token punctuation\\">[</span>:live<span class=\\"token punctuation\\">]</span>        to print histogram of <span class=\\"token function\\">java</span> object heap<span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">if</span> the <span class=\\"token string\\">\\"live\\"</span>\\n                         suboption is specified, only count live objects\\n    <span class=\\"token parameter variable\\">-clstats</span>             to print class loader statistics\\n    <span class=\\"token parameter variable\\">-finalizerinfo</span>       to print information on objects awaiting finalization\\n    -dump:<span class=\\"token operator\\">&lt;</span>dump-options<span class=\\"token operator\\">&gt;</span> to dump <span class=\\"token function\\">java</span> heap <span class=\\"token keyword\\">in</span> hprof binary <span class=\\"token function\\">format</span>\\n                         dump-options:\\n                           live         dump only live objects<span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">if</span> not specified,\\n                                        all objects <span class=\\"token keyword\\">in</span> the heap are dumped.\\n                           <span class=\\"token assign-left variable\\">format</span><span class=\\"token operator\\">=</span>b     binary <span class=\\"token function\\">format</span>\\n                           <span class=\\"token assign-left variable\\">file</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>file<span class=\\"token operator\\">&gt;</span>  dump heap to <span class=\\"token operator\\">&lt;</span>file<span class=\\"token operator\\">&gt;</span>\\n                         Example: jmap -dump:live,format<span class=\\"token operator\\">=</span>b,file<span class=\\"token operator\\">=</span>heap.bin <span class=\\"token operator\\">&lt;</span>pid<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token parameter variable\\">-F</span>                   force. Use with -dump:<span class=\\"token operator\\">&lt;</span>dump-options<span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">&lt;</span>pid<span class=\\"token operator\\">&gt;</span> or <span class=\\"token parameter variable\\">-histo</span>\\n                         to force a heap dump or histogram when <span class=\\"token operator\\">&lt;</span>pid<span class=\\"token operator\\">&gt;</span> does not\\n                         respond. The <span class=\\"token string\\">\\"live\\"</span> suboption is not supported\\n                         <span class=\\"token keyword\\">in</span> this mode.\\n    <span class=\\"token parameter variable\\">-h</span> <span class=\\"token operator\\">|</span> <span class=\\"token parameter variable\\">-help</span>           to print this <span class=\\"token builtin class-name\\">help</span> message\\n    -J<span class=\\"token operator\\">&lt;</span>flag<span class=\\"token operator\\">&gt;</span>             to pass <span class=\\"token operator\\">&lt;</span>flag<span class=\\"token operator\\">&gt;</span> directly to the runtime system\\n</code></pre></div>","autoDesc":true}');export{m as comp,d as data};
