import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e}from"./app-R-jbemKs.js";const t="/Note-Book/assets/threadlocal-1-w7ekQd4j.png",p={},c=e(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>ThreadLocal是用来解决java多线程程序中并发问题的一种途径；通过为每一个线程创建一份共享变量的副本来保证各个线程之间的变量的访问和修改互相不影响；</p><p>ThreadLocal存放的值是线程内共享的，线程间互斥的，主要用于线程内共享一些数据，避免通过参数来传递，这样处理后，能够优雅的解决一些实际问题。</p><p>比如一次用户的页面操作请求，我们可以在最开始的filter中，把用户的信息保存在ThreadLocal中，在同一次请求中，在使用到用户信息，就可以直接到ThreadLocal中获取就可以了。</p><h2 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理" aria-hidden="true">#</a> 实现原理</h2><p>查看Thread类，可以看到其内部维护了两个threadlocal，默认值都是null</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * ThreadLocal values pertaining to this thread. This map is maintained
 * by the ThreadLocal class.
 */</span>
<span class="token class-name">ThreadLocal<span class="token punctuation">.</span>ThreadLocalMap</span> threadLocals<span class="token punctuation">;</span>

<span class="token comment">/*
 * InheritableThreadLocal values pertaining to this thread. This map is
 * maintained by the InheritableThreadLocal class.
 */</span>
<span class="token class-name">ThreadLocal<span class="token punctuation">.</span>ThreadLocalMap</span> inheritableThreadLocals<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看ThreadLocal类，可以看到其有一个内部类ThreadLocalMap，并且该内部类维护了一个数据结构类型为Entry的数组</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ThreadLocalMap</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span> <span class="token keyword">extends</span> <span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ThreadLocal</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/** The value associated with this ThreadLocal. */</span>
        <span class="token class-name">Object</span> value<span class="token punctuation">;</span>
    
        <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k<span class="token punctuation">,</span> <span class="token class-name">Object</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">super</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
          value <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从源码中我们可以看到，Entry结构实际上是继承了一个ThreadLocal类型的弱引用并将其作为key，value为Object类型。</p><p>对于ThreadLocalMap，有以下这些内部的变量：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * The initial capacity -- MUST be a power of two.
 */</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">INITIAL_CAPACITY</span> <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * The table, resized as necessary.
 * table.length MUST always be a power of two.
 */</span>
<span class="token keyword">private</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> table<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * The number of entries in the table.
 */</span>
<span class="token keyword">private</span> <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * The next size value at which to resize. 创建了ThreadLocalMap对象后会被重新设置
 */</span>
<span class="token keyword">private</span> <span class="token keyword">int</span> threshold<span class="token punctuation">;</span> <span class="token comment">// Default to 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ThreadLocalMap的构造方法如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Construct a new map initially containing (firstKey, firstValue).
 * ThreadLocalMaps are constructed lazily, so we only create
 * one when we have at least one entry to put in it.
 */</span>
<span class="token class-name">ThreadLocalMap</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> firstKey<span class="token punctuation">,</span> <span class="token class-name">Object</span> firstValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化Entry数组，大小 16</span>
    table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token constant">INITIAL_CAPACITY</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 用第一个键的哈希值对初始大小取模得到索引，和HashMap的位运算代替取模原理一样</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> firstKey<span class="token punctuation">.</span>threadLocalHashCode <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token constant">INITIAL_CAPACITY</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将Entry对象存入数组指定位置</span>
    table<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">(</span>firstKey<span class="token punctuation">,</span> firstValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    size <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始化扩容阈值，第一次设置为10</span>
    <span class="token function">setThreshold</span><span class="token punctuation">(</span><span class="token constant">INITIAL_CAPACITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从构造方法的注释中可以了解到，该构造方法是懒加载的，只有当我们创建一个Entry对象并需要放入到Entry数组的时候才会去初始化Entry数组。</p><h2 id="内存泄露问题" tabindex="-1"><a class="header-anchor" href="#内存泄露问题" aria-hidden="true">#</a> 内存泄露问题</h2><p>ThreadLocal的引用关系如下：</p><figure><img src="`+t+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>从上面的图中可以看到，ThreadLocal对象，是有两个引用的，一个是栈上的ThreadLocal引用，一个是ThreadLocalMap中的Key对它的引用。</p><p>假如，栈上的ThreadLocal引用不再使用了，即方法结束后这个对象引用就不再用了，那么，就还剩下ThreadLocalMap中的Key对它的引用，所以就会导致他无法被回收，久而久之可能就会对导致OOM。</p><p>这就是ThreadLocal的内存泄露问题，为了解决这个问题，ThreadLocalMap使用了弱引用。</p><h3 id="为什么使用了弱引用还存在内存泄露" tabindex="-1"><a class="header-anchor" href="#为什么使用了弱引用还存在内存泄露" aria-hidden="true">#</a> 为什么使用了弱引用还存在内存泄露？</h3><p>当一个线程调用ThreadLocal的set方法设置变量的时候，当前线程的ThreadLocalMap就会存放一个记录，该记录的key为ThreadLocal的弱引用，value就是通过set设置的值，这个value值被强引用。</p><p>这样做可以很大程度上的避免因为ThreadLocal的使用而导致的OOM问题，但是这个问题却无法彻底避免。</p><p>因为我们可以看到，虽然key是弱引用，但是value的那条引用，还是个强引用呢！ThreadLocalMap是Thread对象的一个成员变量，当线程被销毁时，ThreadLocalMap才会被销毁，value的引用才会被切断，value才会被GC</p><p>那么，什么情况下，Thread会一直在呢？那就是线程池。</p><p>在线程池中，<strong>重复利用线程的时候，就会导致这个引用一直在，而value就一直无法被回收</strong>。</p><p>那么如何解决呢？</p><p>ThreadLocalMap底层使用数组来保存元素，使用“线性探测法”来解决hash冲突的，在每次调用ThreadLocal的get、set、remove等方法的时候，内部会实际调用ThreadLocalMap的get、set、remove等操作。</p><p>而ThreadLocalMap的每次get、set、remove，都会清理过期的Entry。</p><p>所以，<strong>当我们在一个ThreadLocal用完之后，手动调用一下remove</strong>，就可以在下一次GC的时候，把Entry清理掉。</p>',31),l=[c];function o(i,r){return n(),s("div",null,l)}const v=a(p,[["render",o],["__file","threadlocal.html.vue"]]);export{v as default};
