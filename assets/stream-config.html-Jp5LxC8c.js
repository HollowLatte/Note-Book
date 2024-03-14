import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as r}from"./app-R-jbemKs.js";const t={},n=r(`<p>可以通过stream-node-max-bytes参数修改Stream中每个宏节点（Macro Node）能够占用的最大内存，或者通过stream-node-max-entries参数指定每个宏节点中可存储条目的最大数量。</p><h2 id="redis-streams与宏节点" tabindex="-1"><a class="header-anchor" href="#redis-streams与宏节点" aria-hidden="true">#</a> Redis Streams与宏节点</h2><p>Redis Streams是一些由基数树（Radix Tree）连接在一起的节点经过delta压缩后构成的，这些节点与Stream中的消息条目（Stream Entry）并非一一对应，而是每个节点中都存储着若干Stream条目，因此这些节点也被称为宏节点或大节点。这样的数据结构为访问随机元素、访问指定范围内的多个元素、实现定长Stream等操作提供了高效的支持，同时具有极高的内存利用率。</p><p>宏节点中可储存的Stream条目数可通过stream-node-max-entries自定义，而单个宏节点占用的内存大小则可通过stream-node-max-bytes来限制。</p><p>stream-node-max-entries：默认值为100，即每个宏节点储存100个Stream条目。取值范围：0~ 999,999,999,999,999。0表示无限制。当一个宏节点中存储的Stream条目数达到上限时，新添加的条目将储存到新的宏节点中。 stream-node-max-bytes：单位为Byte，默认值为4096，即每个宏节点占用的内存容量上限为4096 Bytes。取值范围：0~ 999,999,999,999,999。0表示无限制。</p><h2 id="典型应用场景" tabindex="-1"><a class="header-anchor" href="#典型应用场景" aria-hidden="true">#</a> 典型应用场景</h2><p>使用stream-node-max-entries可以调整定长消息队列的队列长度误差值。</p><p>在不需要将消息永久保存的应用中，您可以在使用XADD命令添加Stream数据时借助MAXLEN选项限定每个Stream中消息数量的上限，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在cappedstream的field1中添加一个新的值value5001，队列长度为5000</span>
XADD cappedstream MAXLEN <span class="token number">5000</span> * field value5001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当Stream中的消息数量达到上限，每添加一条新的消息就会同时删除最早的消息。这样无论添加了多少条消息，最大队列长度始终保持不变，失效消息不会继续占用内存空间。</p><blockquote><p>说明：在宏节点中删除消息实际上是将消息标记为已删除，并不会马上释放其占用的内存空间。当一个宏节点中的所有消息都被标记为已删除时，Redis才会删除整个节点并释放内存。</p></blockquote><p>但是，如果想要精确控制这个上限值，例如让队列中只保存5000条消息，1条都不能多，代价会很大：为了尽可能地提高内存利用率，Stream数据其实是由基数树中的多个宏节点组成的，每次删除1条消息都需要检索相应的宏节点，找到目标消息，将其标记为已删除。在高吞吐的Redis服务中，消息的更新频率可能非常高，频繁进行这样的操作将大大提高性能压力。因此，推荐的做法是使用波浪线（~ ）限定队列的大致长度，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在cappedstream的field1中添加一个新的值value5001，队列长度约为5000</span>
XADD cappedstream MAXLEN ~ <span class="token number">5000</span> * field value1 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来，队列的实际长度将是一个大于等于指定值的近似值。在上面的示例代码中，实际队列长度可能是5000、5050或者5060等，超出5000的误差值与Stream中包含了多少个宏节点以及每个宏节点中储存的消息数有关。Redis根据每个宏节点中储存的最大条目数，即stream-node-max-entries参数的值，自动计算得出这个近似值。此时，当Redis Stream中的消息数量超过这个近似值，Redis将删除存储了最早添加的消息的宏节点来完成队列长度的剪切，而不需要进行消息级别的删除操作。</p><p>也就是说，stream-node-max-entries参数的值决定了定长消息队列长度的误差值。如果希望误差值较小，可以适当地将参数值变小。</p>`,15),d=[n];function i(m,c){return a(),s("div",null,d)}const p=e(t,[["render",i],["__file","stream-config.html.vue"]]);export{p as default};
