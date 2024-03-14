import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,a as n,d as a,b as e,e as i}from"./app-R-jbemKs.js";const l={},u=i(`<p>开始之前，我们先来搞懂下面这两个概念：</p><ul><li>形参&amp;实参</li><li>值传递&amp;引用传递</li></ul><h2 id="形参-实参" tabindex="-1"><a class="header-anchor" href="#形参-实参" aria-hidden="true">#</a> 形参&amp;实参</h2><p>方法的定义可能会用到 <strong>参数</strong>（有参的方法），参数在程序语言中分为：</p><ul><li><strong>实参（实际参数，Arguments）</strong>：用于传递给函数/方法的参数，必须有确定的值。</li><li><strong>形参（形式参数，Parameters）</strong>：用于定义函数/方法，接收实参，不需要有确定的值。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> hello <span class="token operator">=</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// hello 为实参</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// str 为形参</span>
<span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="值传递-引用传递" tabindex="-1"><a class="header-anchor" href="#值传递-引用传递" aria-hidden="true">#</a> 值传递&amp;引用传递</h2><p>程序设计语言将实参传递给方法（或函数）的方式分为两种：</p><ul><li><strong>值传递</strong>：方法接收的是实参值的拷贝，会创建副本。</li><li><strong>引用传递</strong>：方法接收的直接是实参所引用的对象在堆中的地址，不会创建副本，对形参的修改将影响到实参。</li></ul><p>很多程序设计语言（比如 C++、 Pascal )提供了两种参数传递的方式，不过，在 Java 中只有值传递。</p><h2 id="为什么-java-只有值传递" tabindex="-1"><a class="header-anchor" href="#为什么-java-只有值传递" aria-hidden="true">#</a> 为什么 Java 只有值传递？</h2><p><strong>为什么说 Java 只有值传递呢？</strong> 不需要太多废话，我通过 3 个例子来给大家证明。</p><h3 id="案例-1-传递基本类型参数" tabindex="-1"><a class="header-anchor" href="#案例-1-传递基本类型参数" aria-hidden="true">#</a> 案例 1：传递基本类型参数</h3><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num1 = &quot;</span> <span class="token operator">+</span> num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num2 = &quot;</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b = &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = 20
b = 10
num1 = 10
num2 = 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p><p>在 <code>swap()</code> 方法中，<code>a</code>、<code>b</code> 的值进行交换，并不会影响到 <code>num1</code>、<code>num2</code>。因为，<code>a</code>、<code>b</code> 的值，只是从 <code>num1</code>、<code>num2</code> 的复制过来的。也就是说，a、b 相当于 <code>num1</code>、<code>num2</code> 的副本，副本的内容无论怎么修改，都不会影响到原件本身。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/basis/java-value-passing-01.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>通过上面例子，我们已经知道了一个方法不能修改一个基本数据类型的参数，而对象引用作为参数就不一样，请看案例 2。</p><h3 id="案例-2-传递引用类型参数-1" tabindex="-1"><a class="header-anchor" href="#案例-2-传递引用类型参数-1" aria-hidden="true">#</a> 案例 2：传递引用类型参数 1</h3><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">change</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将数组的第一个元素变为0</span>
      array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/basis/java-value-passing-02.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>看了这个案例很多人肯定觉得 Java 对引用类型的参数采用的是引用传递。</p><p>实际上，并不是的，这里传递的还是值，不过，这个值是实参的地址罢了！</p><p>也就是说 <code>change</code> 方法的参数拷贝的是 <code>arr</code> （实参）的地址，因此，它和 <code>arr</code> 指向的是同一个数组对象。这也就说明了为什么方法内部对形参的修改会影响到实参。</p><p>为了更强有力地反驳 Java 对引用类型的参数采用的不是引用传递，我们再来看下面这个案例！</p><h3 id="案例-3-传递引用类型参数-2" tabindex="-1"><a class="header-anchor" href="#案例-3-传递引用类型参数-2" aria-hidden="true">#</a> 案例 3：传递引用类型参数 2</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
   <span class="token comment">// 省略构造函数、Getter&amp;Setter方法</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> xiaoZhang <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;小张&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Person</span> xiaoLi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>xiaoZhang<span class="token punctuation">,</span> xiaoLi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoZhang:&quot;</span> <span class="token operator">+</span> xiaoZhang<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoLi:&quot;</span> <span class="token operator">+</span> xiaoLi<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person1<span class="token punctuation">,</span> <span class="token class-name">Person</span> person2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> temp <span class="token operator">=</span> person1<span class="token punctuation">;</span>
    person1 <span class="token operator">=</span> person2<span class="token punctuation">;</span>
    person2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;person1:&quot;</span> <span class="token operator">+</span> person1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;person2:&quot;</span> <span class="token operator">+</span> person2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>person1:小李
person2:小张
xiaoZhang:小张
xiaoLi:小李
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p><p>怎么回事？？？两个引用类型的形参互换并没有影响实参啊！</p><p><code>swap</code> 方法的参数 <code>person1</code> 和 <code>person2</code> 只是拷贝的实参 <code>xiaoZhang</code> 和 <code>xiaoLi</code> 的地址。因此， <code>person1</code> 和 <code>person2</code> 的互换只是拷贝的两个地址的互换罢了，并不会影响到实参 <code>xiaoZhang</code> 和 <code>xiaoLi</code> 。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/basis/java-value-passing-03.png" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="引用传递是怎么样的" tabindex="-1"><a class="header-anchor" href="#引用传递是怎么样的" aria-hidden="true">#</a> 引用传递是怎么样的？</h2><p>看到这里，相信你已经知道了 Java 中只有值传递，是没有引用传递的。 但是，引用传递到底长什么样呢？下面以 <code>C++</code> 的代码为例，让你看一下引用传递的庐山真面目。</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;

void incr(int&amp; num)
{
    std::cout &lt;&lt; &quot;incr before: &quot; &lt;&lt; num &lt;&lt; &quot;\\n&quot;;
    num++;
    std::cout &lt;&lt; &quot;incr after: &quot; &lt;&lt; num &lt;&lt; &quot;\\n&quot;;
}

int main()
{
    int age = 10;
    std::cout &lt;&lt; &quot;invoke before: &quot; &lt;&lt; age &lt;&lt; &quot;\\n&quot;;
    incr(age);
    std::cout &lt;&lt; &quot;invoke after: &quot; &lt;&lt; age &lt;&lt; &quot;\\n&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>invoke before: 10
incr before: 10
incr after: 11
invoke after: 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：可以看到，在 <code>incr</code> 函数中对形参的修改，可以影响到实参的值。要注意：这里的 <code>incr</code> 形参的数据类型用的是 <code>int&amp;</code> 才为引用传递，如果是用 <code>int</code> 的话还是值传递哦！</p><h2 id="为什么-java-不引入引用传递呢" tabindex="-1"><a class="header-anchor" href="#为什么-java-不引入引用传递呢" aria-hidden="true">#</a> 为什么 Java 不引入引用传递呢？</h2><p>引用传递看似很好，能在方法内就直接把实参的值修改了，但是，为什么 Java 不引入引用传递呢？</p><p><strong>注意：以下为个人观点看法，并非来自于 Java 官方：</strong></p><ol><li>出于安全考虑，方法内部对值进行的操作，对于调用者都是未知的（把方法定义为接口，调用方不关心具体实现）。你也想象一下，如果拿着银行卡去取钱，取的是 100，扣的是 200，是不是很可怕。</li><li>Java 之父 James Gosling 在设计之初就看到了 C、C++ 的许多弊端，所以才想着去设计一门新的语言 Java。在他设计 Java 的时候就遵循了简单易用的原则，摒弃了许多开发者一不留意就会造成问题的“特性”，语言本身的东西少了，开发者要学习的东西也少了。</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Java 中将实参传递给方法（或函数）的方式是 <strong>值传递</strong>：</p><ul><li>如果参数是基本类型的话，很简单，传递的就是基本类型的字面量值的拷贝，会创建副本。</li><li>如果参数是引用类型，传递的就是实参所引用的对象在堆中地址值的拷贝，同样也会创建副本。</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,54),r=n("li",null,"《Java 核心技术卷 Ⅰ》基础知识第十版第四章 4.5 小节",-1),d={href:"https://www.zhihu.com/question/31203609/answer/576030121",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mappingthejourney.com/single-post/2017/06/29/episode-3-interview-with-james-gosling-father-of-java/",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[r,n("li",null,[n("a",d,[a("Java 到底是值传递还是引用传递？ - Hollis 的回答 - 知乎"),e(s)])]),n("li",null,[n("a",k,[a("Oracle Java Tutorials - Passing Information to a Method or a Constructor"),e(s)])]),n("li",null,[n("a",v,[a("Interview with James Gosling, Father of Java"),e(s)])])])])}const x=t(l,[["render",m],["__file","why-there-only-value-passing-in-java.html.vue"]]);export{x as default};
