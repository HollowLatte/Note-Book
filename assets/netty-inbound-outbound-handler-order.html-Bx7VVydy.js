import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as p,b as s,e as n}from"./app-6eIwu4TL.js";const c={},l=n(`<h2 id="inbound-outboundhandler执行顺序" tabindex="-1"><a class="header-anchor" href="#inbound-outboundhandler执行顺序"><span>Inbound/OutboundHandler执行顺序</span></a></h2><p>关键：InboundHandler顺序执行，OutboundHandler逆序执行。</p><p>以Server端为例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FirstOutbound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SecondOutbound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FirstInbound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SecondInbound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThirdOutbound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=n('<ul><li>当收到数据时，会先执行入站（Inbound）处理器，方向是<code>Head-&gt;Tail</code>，即执行FirstInbound、SecondInbound</li><li>当发送数据时，会执行出站（Outbound）处理器，方向是<code>Tail-&gt;Head</code>，即执行SecondOutbound、FirstOutbound</li></ul><p>Inbound和Outbound谁先执行，还要以不同的视角来看，上面的示例是Server，先读后写所以先Inbound后Outbound。如果是Client端，先写后读所以先Outbound后Inbound</p><h2 id="不同的write影响handler执行顺序" tabindex="-1"><a class="header-anchor" href="#不同的write影响handler执行顺序"><span>不同的write影响Handler执行顺序</span></a></h2><p>在Inbound/OutboundHandler都会看到有两种write数据的方式，<code>ChannelHandlerContext.write</code>和<code>Channel.write</code> ，使用不当时会极大影响Handler的执行顺序，甚至会死循环</p><h3 id="channelhandlercontext的write" tabindex="-1"><a class="header-anchor" href="#channelhandlercontext的write"><span>ChannelHandlerContext的write</span></a></h3>',5),i=n('<h4 id="inboundhandler内使用" tabindex="-1"><a class="header-anchor" href="#inboundhandler内使用"><span>InboundHandler内使用</span></a></h4><p>在InboundHandler内使用<code>ChannelHandlerContext.write</code>时，会以当前为起点，<strong>往Head节点方向寻找OutboundHandler执行</strong></p><p>例如，在SecondInbound内执行，就会往左边也就是Head节点方向寻找出站处理器，那么就会找到SecondOutbound。</p><p>此时就会有问题，ThirdOutbound没有被执行，所以，Inbound和Outbound的放置顺序需要格外小心</p><h4 id="outboundhandler内使用" tabindex="-1"><a class="header-anchor" href="#outboundhandler内使用"><span>OutboundHandler内使用</span></a></h4><p>在OutboundHandler内使用<code>ChannelHandlerContext.write</code>时，同样会以当前为起点，<strong>往Head节点方向寻找OutboundHandler执行</strong></p><p>例如，在SecondOutbound内执行，就会传递到FirstOutbound</p><h3 id="channel的write" tabindex="-1"><a class="header-anchor" href="#channel的write"><span>Channel的write</span></a></h3><p><code>Channel.write</code>与<code>ChannelHandlerContext.write</code>不同，Channel.write不会从当前Handler向Head节点寻找Outbound，而是直接从Tail节点开始</p>',9),d=n(`<h4 id="inboundhandler内使用-1" tabindex="-1"><a class="header-anchor" href="#inboundhandler内使用-1"><span>InboundHandler内使用</span></a></h4><p>在InboundHandler内使用<code>Channel.write</code>时，会直接以Tail为起点，<strong>往Head节点方向寻找OutboundHandler执行</strong></p><p>例如，在SecondInbound内执行，从Tail往左边也就是Head节点方向寻找出站处理器，那么就会找到ThirdOutbound。</p><p>与上面<code>ChannelHandlerContext.write</code>相比，<code>Channel.write</code>会执行ThirdOutbound，它执行的Outbound会相对完整，贯穿了整个pipeline</p><h4 id="outboundhandler内使用-1" tabindex="-1"><a class="header-anchor" href="#outboundhandler内使用-1"><span>OutboundHandler内使用</span></a></h4><p>在OutboundHandler内使用<code>Channel.write</code>时，会直接以Tail为起点，<strong>往Head节点方向寻找OutboundHandler执行</strong></p><p>例如，在SecondOutbound内执行，<strong>如果每次执行SecondOutbound都会执行<code>Channel.write</code>，那么就会发生死循环！</strong></p><p>因为<code>SecondOutbound</code>执行<code>Channel.write</code> 后，会跳到Tail节点，Tail节点往左寻找找到ThirdOutbound，ThirdOutbound再传递给SecondOutbound，<code>SecondOutbound</code> 执行<code>Channel.write</code>又跳到Tail节点，就这样一直循环下去了</p><p><strong>所以在<code>OutboundHandler</code>内使用<code>Channel.write</code>时要格外注意</strong></p><h2 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析"><span>源码分析</span></a></h2><p>基于Netty 4.1.100源码</p><h3 id="channel-write" tabindex="-1"><a class="header-anchor" href="#channel-write"><span>Channel.write</span></a></h3><p>一个简单的自定义InboundHandler：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">channelRead0</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;Channel write&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="abstractchannel-write" tabindex="-1"><a class="header-anchor" href="#abstractchannel-write"><span>AbstractChannel.write</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ChannelFuture</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pipeline<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="defaultchannelpipeline-write" tabindex="-1"><a class="header-anchor" href="#defaultchannelpipeline-write"><span>DefaultChannelPipeline.write</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">ChannelFuture</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tail<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时就可以看到，直接就调用了ChannelPipeline中Tail节点的write</p><h4 id="abstractchannelhandlercontext" tabindex="-1"><a class="header-anchor" href="#abstractchannelhandlercontext"><span>AbstractChannelHandlerContext</span></a></h4><p>经过几次跳转，可以找到下面一些关键代码</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token class-name">Object</span> msg<span class="token punctuation">,</span> <span class="token keyword">boolean</span> flush<span class="token punctuation">,</span> <span class="token class-name">ChannelPromise</span> promise<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......省略</span>
    <span class="token keyword">final</span> <span class="token class-name">AbstractChannelHandlerContext</span> next <span class="token operator">=</span> <span class="token function">findContextOutbound</span><span class="token punctuation">(</span>flush <span class="token operator">?</span>
            <span class="token punctuation">(</span><span class="token constant">MASK_WRITE</span> <span class="token operator">|</span> <span class="token constant">MASK_FLUSH</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token constant">MASK_WRITE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">Object</span> m <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">touch</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">EventExecutor</span> executor <span class="token operator">=</span> next<span class="token punctuation">.</span><span class="token function">executor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>executor<span class="token punctuation">.</span><span class="token function">inEventLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flush<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            next<span class="token punctuation">.</span><span class="token function">invokeWriteAndFlush</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> promise<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            next<span class="token punctuation">.</span><span class="token function">invokeWrite</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> promise<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// ......省略</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">AbstractChannelHandlerContext</span> <span class="token function">findContextOutbound</span><span class="token punctuation">(</span><span class="token keyword">int</span> mask<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">AbstractChannelHandlerContext</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token class-name">EventExecutor</span> currentExecutor <span class="token operator">=</span> <span class="token function">executor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        ctx <span class="token operator">=</span> ctx<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">skipContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> currentExecutor<span class="token punctuation">,</span> mask<span class="token punctuation">,</span> <span class="token constant">MASK_ONLY_OUTBOUND</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ctx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>findContextOutbound</code>的作用是一直向前寻找OutboundHandler，再通过<code>write</code>方法调用找到的OutboundHandler的write</p><h3 id="channelhandlercontext-write" tabindex="-1"><a class="header-anchor" href="#channelhandlercontext-write"><span>ChannelHandlerContext.write</span></a></h3><p>实际调的就是AbstractChannelHandlerContext.write，与上面展示的AbstractChannelHandlerContext.write代码是一样的</p><p>所以过程是：调用ChannelHandlerContext.write后，就会从当前Handler节点向前找OutboundHandler，而不是从Tail节点开始找，是有明显区别的</p>`,27);function r(k,h){const a=t("Mermaid");return o(),p("div",null,[l,s(a,{id:"mermaid-10",code:"eJxLL0osyFDwCeJSAAJHDY/UxBRNBRtdXTsFJw23zKLiEv/SkqT80rwUTbAKJ4ics0ZwanJ+XgqqpDNE0gWi0TMPScoFIuUK1Yci5wqRc9MIycgsQjPSDSLnrhGSmJmjyQUAW5UvQw=="}),u,s(a,{id:"mermaid-35",code:"eJxLL0osyFDwCeJSAAJHDY/UxBRNBRtdXTsFJw23zKLiEv/SkqT80rwUTbAKJ4ics0ZwanJ+XgqqpDNE0gWi0TMPScoFIuUK1Yci5wqRc9MIycgsQjPSDSLnrhGSmJmjyQUAW5UvQw=="}),i,s(a,{id:"mermaid-63",code:"eJxLL0osyFDwCeJSAAJHDY/UxBRNBRtdXTsFJw23zKLiEv/SkqT80rwUTbAKJ4ics0ZwanJ+XgqqpDNE0gWi0TMPScoFIuUK1Yci5wqRc9MIycgsQjPSDSLnrhGSmJmjyQUAW5UvQw=="}),d])}const m=e(c,[["render",r],["__file","netty-inbound-outbound-handler-order.html.vue"]]),w=JSON.parse('{"path":"/notebook/netty/netty-inbound-outbound-handler-order.html","title":"Inbound/OutboundHandler执行顺序","lang":"zh-CN","frontmatter":{"title":"Inbound/OutboundHandler执行顺序","author":null,"category":"Netty","tag":"Netty","date":"2024-03-18T00:00:00.000Z","description":"Inbound/OutboundHandler执行顺序 关键：InboundHandler顺序执行，OutboundHandler逆序执行。 以Server端为例： 当收到数据时，会先执行入站（Inbound）处理器，方向是Head->Tail，即执行FirstInbound、SecondInbound 当发送数据时，会执行出站（Outbound）处理...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/notebook/netty/netty-inbound-outbound-handler-order.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Inbound/OutboundHandler执行顺序"}],["meta",{"property":"og:description","content":"Inbound/OutboundHandler执行顺序 关键：InboundHandler顺序执行，OutboundHandler逆序执行。 以Server端为例： 当收到数据时，会先执行入站（Inbound）处理器，方向是Head->Tail，即执行FirstInbound、SecondInbound 当发送数据时，会执行出站（Outbound）处理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Netty"}],["meta",{"property":"article:published_time","content":"2024-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Inbound/OutboundHandler执行顺序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"Inbound/OutboundHandler执行顺序","slug":"inbound-outboundhandler执行顺序","link":"#inbound-outboundhandler执行顺序","children":[]},{"level":2,"title":"不同的write影响Handler执行顺序","slug":"不同的write影响handler执行顺序","link":"#不同的write影响handler执行顺序","children":[{"level":3,"title":"ChannelHandlerContext的write","slug":"channelhandlercontext的write","link":"#channelhandlercontext的write","children":[]},{"level":3,"title":"Channel的write","slug":"channel的write","link":"#channel的write","children":[]}]},{"level":2,"title":"源码分析","slug":"源码分析","link":"#源码分析","children":[{"level":3,"title":"Channel.write","slug":"channel-write","link":"#channel-write","children":[]},{"level":3,"title":"ChannelHandlerContext.write","slug":"channelhandlercontext-write","link":"#channelhandlercontext-write","children":[]}]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":3.02,"words":906},"filePathRelative":"notebook/netty/netty-inbound-outbound-handler-order.md","localizedDate":"2024年3月18日","excerpt":"<h2>Inbound/OutboundHandler执行顺序</h2>\\n<p>关键：InboundHandler顺序执行，OutboundHandler逆序执行。</p>\\n<p>以Server端为例：</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code>pipeline<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addLast</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">FirstOutbound</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\npipeline<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addLast</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">SecondOutbound</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\npipeline<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addLast</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">FirstInbound</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\npipeline<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addLast</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">SecondInbound</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\npipeline<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addLast</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ThirdOutbound</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{m as comp,w as data};
