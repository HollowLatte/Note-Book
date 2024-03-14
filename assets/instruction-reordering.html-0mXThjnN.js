import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-R-jbemKs.js";const t={},e=p(`<h2 id="指令重排" tabindex="-1"><a class="header-anchor" href="#指令重排" aria-hidden="true">#</a> 指令重排</h2><p>在 Java 中，指令重排（Instruction Reordering）是编译器和处理器优化的一种技术。它的目的是通过重新排列指令的执行顺序来提高程序的性能。指令重排可以改变指令在计算机中的执行顺序，但不能改变程序的语义。</p><p>指令重排会遵循<strong>as-if-serial</strong>与<strong>happens-before</strong>原则</p><p>as-if-serial语义保证了指令重排不会改变程序的执行结果，而happens-before关系和同步机制则限制了指令重排的范围，以确保多线程程序的正确性。</p><h3 id="指令重排示例" tabindex="-1"><a class="header-anchor" href="#指令重排示例" aria-hidden="true">#</a> 指令重排示例</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InstructionReorderingTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> hashSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000_0000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

            <span class="token class-name">Thread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                a <span class="token operator">=</span> y<span class="token punctuation">;</span>
                x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Thread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                b <span class="token operator">=</span> x<span class="token punctuation">;</span>
                y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            thread1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            thread2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            hashSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;a=&quot;</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;b=&quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hashSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单从代码来看，打印出的结果应该是<code>[a=0,b=0]</code> ，但是实际上，代码执行过程中因为指令重排，每次执行的指令顺序都有可能不同，所以可能会出现结果<code>[a=0,b=0, a=1,b=0, a=0,b=1, a=1,b=1]</code></p><p>如果不想发生这样的指令重排应该如何实现？其实只要给变量加上volatile关键字即可</p><h2 id="as-if-serial" tabindex="-1"><a class="header-anchor" href="#as-if-serial" aria-hidden="true">#</a> as-if-serial</h2><p>As-if-serial 语义是一种保证单线程程序的行为就像代码按顺序执行一样的概念。它允许编译器和处理器进行优化（如指令重排），但优化不能改变程序执行的最终结果。</p><p>as-if-serial语义保证了单线程中，指令重排是有一定的限制的，而只要编译器和处理器都遵守了这个语义，那么就可以认为单线程程序是按照顺序执行的。当然，实际上还是有重排的，只不过我们无须关心这种重排的干扰。</p><h2 id="happens-before" tabindex="-1"><a class="header-anchor" href="#happens-before" aria-hidden="true">#</a> happens-before</h2><p>happens-before有以下原则：</p><ol><li>程序顺序原则：即在一个线程内必须保证语义串行性，也就是说按照代码顺序执行。</li><li>锁规则：解锁（unlock）操作必然发生在后续的同一个锁的加锁（lock）之前，也就是说，如果对于一个锁解锁后，再加锁，那么加锁的动作必须在解锁动作之后(同一个锁)</li><li>volatile规则：volatile变量的写，先发生于读，这保证了volatile变量的可见性，简单的理解就是，volatile变量在每次被线程访问时，都强迫从主内存中读该变量的值，而当该变量发生变化时，又会强迫将最新的值刷新到主内存，任何时刻，不同的线程总是能够看到该变量的最新值。</li><li>线程启动规则：线程的start()方法先于它的每一个动作，即如果线程A在执行线程B的start方法之前修改了共享变量的值，那么当线程B执行start方法时，线程A对共享变量的修改对线程B可见</li><li>传递性：A先于B，B先于C那么A必然先于C</li><li>线程终止规则：线程的所有操作先于线程的终结，Threadjoin()方法的作用是等待当前执行的线程终止。假设在线程B终止之前，修改了共享变量，线程A从线程B的join方法成功返回后，线程B对共享变量的修改将对线程A可见。</li><li>线程中断规则：对线程interrupt()方法的调用先行发生于被中断线程的代码检测到中断事件的发生，可以通过Thread.interrupted(）方法检测线程是否中断。</li><li>对象终结规则：对象的构造函数执行，结束先于finalize()方法</li></ol><p>其实没有必要特意记住这些原则，大致了解即可</p>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","instruction-reordering.html.vue"]]);export{k as default};
