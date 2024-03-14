import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c as p,a,d as e,b as t,e as s}from"./app-R-jbemKs.js";const l={},c=s('<blockquote><p>如果没有特殊说明，都是针对的是 HotSpot 虚拟机。</p><p>本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。</p><p>常见面试题：</p><ul><li>介绍下 Java 内存区域（运行时数据区）</li><li>Java 对象的创建过程（五步，建议能默写出来并且要知道每一步虚拟机做了什么）</li><li>对象的访问定位的两种方式（句柄和直接指针两种方式）</li></ul></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>对于 Java 程序员来说，在虚拟机自动内存管理机制下，不再需要像 C/C++程序开发程序员这样为每一个 new 操作去写对应的 delete/free 操作，不容易出现内存泄漏和内存溢出问题。正是因为 Java 程序员把内存控制权利交给 Java 虚拟机，一旦出现内存泄漏和溢出方面的问题，如果不了解虚拟机是怎样使用内存的，那么排查错误将会是一个非常艰巨的任务。</p><h2 id="运行时数据区域" tabindex="-1"><a class="header-anchor" href="#运行时数据区域" aria-hidden="true">#</a> 运行时数据区域</h2><p>Java 虚拟机在执行 Java 程序的过程中会把它管理的内存划分成若干个不同的数据区域。</p><p>JDK 1.8 和之前的版本略有不同，我们这里以 JDK 1.7 和 JDK 1.8 这两个版本为例介绍。</p><p><strong>JDK 1.7</strong>：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/java-runtime-data-areas-jdk1.7.png" alt="Java 运行时数据区域（JDK1.7）" tabindex="0"><figcaption>Java 运行时数据区域（JDK1.7）</figcaption></figure><p><strong>JDK 1.8</strong>：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/java-runtime-data-areas-jdk1.8.png" alt="Java 运行时数据区域（JDK1.8 ）" tabindex="0"><figcaption>Java 运行时数据区域（JDK1.8 ）</figcaption></figure><p><strong>线程私有的：</strong></p><ul><li>程序计数器</li><li>虚拟机栈</li><li>本地方法栈</li></ul><p><strong>线程共享的：</strong></p><ul><li>堆</li><li>方法区</li><li>直接内存 (非运行时数据区的一部分)</li></ul><p>Java 虚拟机规范对于运行时数据区域的规定是相当宽松的。以堆为例：堆可以是连续空间，也可以不连续。堆的大小可以固定，也可以在运行时按需扩展 。虚拟机实现者可以使用任何垃圾回收算法管理堆，甚至完全不进行垃圾收集也是可以的。</p><h3 id="程序计数器" tabindex="-1"><a class="header-anchor" href="#程序计数器" aria-hidden="true">#</a> 程序计数器</h3><p>程序计数器是一块较小的内存空间，可以看作是当前线程所执行的字节码的行号指示器。字节码解释器工作时通过改变这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等功能都需要依赖这个计数器来完成。</p><p>另外，为了线程切换后能恢复到正确的执行位置，每条线程都需要有一个独立的程序计数器，各线程之间计数器互不影响，独立存储，我们称这类内存区域为“线程私有”的内存。</p><p>从上面的介绍中我们知道了程序计数器主要有两个作用：</p><ul><li>字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理。</li><li>在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。</li></ul><p>⚠️ 注意：程序计数器是唯一一个不会出现 <code>OutOfMemoryError</code> 的内存区域，它的生命周期随着线程的创建而创建，随着线程的结束而死亡。</p><h3 id="java-虚拟机栈" tabindex="-1"><a class="header-anchor" href="#java-虚拟机栈" aria-hidden="true">#</a> Java 虚拟机栈</h3><p>与程序计数器一样，Java 虚拟机栈（后文简称栈）也是线程私有的，它的生命周期和线程相同，随着线程的创建而创建，随着线程的死亡而死亡。</p><p>栈绝对算的上是 JVM 运行时数据区域的一个核心，除了一些 Native 方法调用是通过本地方法栈实现的(后面会提到)，其他所有的 Java 方法调用都是通过栈来实现的（也需要和其他运行时数据区域比如程序计数器配合）。</p><p>方法调用的数据需要通过栈进行传递，每一次方法调用都会有一个对应的栈帧被压入栈中，每一个方法调用结束后，都会有一个栈帧被弹出。</p><p>栈由一个个栈帧组成，而每个栈帧中都拥有：局部变量表、操作数栈、动态链接、方法返回地址。和数据结构上的栈类似，两者都是先进后出的数据结构，只支持出栈和入栈两种操作。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/stack-area.png" alt="Java 虚拟机栈" tabindex="0"><figcaption>Java 虚拟机栈</figcaption></figure><p><strong>局部变量表</strong> 主要存放了编译期可知的各种数据类型（boolean、byte、char、short、int、float、long、double）、对象引用（reference 类型，它不同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或其他与此对象相关的位置）。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/local-variables-table.png" alt="局部变量表" tabindex="0"><figcaption>局部变量表</figcaption></figure><p><strong>操作数栈</strong> 主要作为方法调用的中转站使用，用于存放方法执行过程中产生的中间计算结果。另外，计算过程中产生的临时变量也会放在操作数栈中。</p><p><strong>动态链接</strong> 主要服务一个方法需要调用其他方法的场景。Class 文件的常量池里保存有大量的符号引用比如方法引用的符号引用。当一个方法要调用其他方法，需要将常量池中指向方法的符号引用转化为其在内存地址中的直接引用。动态链接的作用就是为了将符号引用转换为调用方法的直接引用，这个过程也被称为 <strong>动态连接</strong> 。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/jvmimage-20220331175738692.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>栈空间虽然不是无限的，但一般正常调用的情况下是不会出现问题的。不过，如果函数调用陷入无限循环的话，就会导致栈中被压入太多栈帧而占用太多空间，导致栈空间过深。那么当线程请求栈的深度超过当前 Java 虚拟机栈的最大深度的时候，就抛出 <code>StackOverFlowError</code> 错误。</p><p>Java 方法有两种返回方式，一种是 return 语句正常返回，一种是抛出异常。不管哪种返回方式，都会导致栈帧被弹出。也就是说， <strong>栈帧随着方法调用而创建，随着方法结束而销毁。无论方法正常完成还是异常完成都算作方法结束。</strong></p><p>除了 <code>StackOverFlowError</code> 错误之外，栈还可能会出现<code>OutOfMemoryError</code>错误，这是因为如果栈的内存大小可以动态扩展， 如果虚拟机在动态扩展栈时无法申请到足够的内存空间，则抛出<code>OutOfMemoryError</code>异常。</p><p>简单总结一下程序运行中栈可能会出现两种错误：</p><ul><li><strong><code>StackOverFlowError</code>：</strong> 若栈的内存大小不允许动态扩展，那么当线程请求栈的深度超过当前 Java 虚拟机栈的最大深度的时候，就抛出 <code>StackOverFlowError</code> 错误。</li><li><strong><code>OutOfMemoryError</code>：</strong> 如果栈的内存大小可以动态扩展， 如果虚拟机在动态扩展栈时无法申请到足够的内存空间，则抛出<code>OutOfMemoryError</code>异常。</li></ul><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/《深入理解虚拟机》第三版的第2章-虚拟机栈.png" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="本地方法栈" tabindex="-1"><a class="header-anchor" href="#本地方法栈" aria-hidden="true">#</a> 本地方法栈</h3><p>和虚拟机栈所发挥的作用非常相似，区别是：<strong>虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。</strong> 在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。</p><p>本地方法被执行的时候，在本地方法栈也会创建一个栈帧，用于存放该本地方法的局部变量表、操作数栈、动态链接、出口信息。</p><p>方法执行完毕后相应的栈帧也会出栈并释放内存空间，也会出现 <code>StackOverFlowError</code> 和 <code>OutOfMemoryError</code> 两种错误。</p><h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h3><p>Java 虚拟机所管理的内存中最大的一块，Java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。<strong>此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。</strong></p><p>Java 世界中“几乎”所有的对象都在堆中分配，但是，随着 JIT 编译器的发展与逃逸分析技术逐渐成熟，栈上分配、标量替换优化技术将会导致一些微妙的变化，所有的对象都分配到堆上也渐渐变得不那么“绝对”了。从 JDK 1.7 开始已经默认开启逃逸分析，如果某些方法中的对象引用没有被返回或者未被外面使用（也就是未逃逸出去），那么对象可以直接在栈上分配内存。</p><p>Java 堆是垃圾收集器管理的主要区域，因此也被称作 <strong>GC 堆（Garbage Collected Heap）</strong>。从垃圾回收的角度，由于现在收集器基本都采用分代垃圾收集算法，所以 Java 堆还可以细分为：新生代和老年代；再细致一点有：Eden、Survivor、Old 等空间。进一步划分的目的是更好地回收内存，或者更快地分配内存。</p><p>在 JDK 7 版本及 JDK 7 版本之前，堆内存被通常分为下面三部分：</p><ol><li>新生代内存(Young Generation)</li><li>老生代(Old Generation)</li><li>永久代(Permanent Generation)</li></ol><p>下图所示的 Eden 区、两个 Survivor 区 S0 和 S1 都属于新生代，中间一层属于老年代，最下面一层属于永久代。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/hotspot-heap-structure.png" alt="堆内存结构" tabindex="0"><figcaption>堆内存结构</figcaption></figure><p><strong>JDK 8 版本之后 PermGen(永久代) 已被 Metaspace(元空间) 取代，元空间使用的是本地内存。</strong> （我会在方法区这部分内容详细介绍到）。</p><p>大部分情况，对象都会首先在 Eden 区域分配，在一次新生代垃圾回收后，如果对象还存活，则会进入 S0 或者 S1，并且对象的年龄还会加 1(Eden 区-&gt;Survivor 区后对象的初始年龄变为 1)，当它的年龄增加到一定程度（默认为 15 岁），就会被晋升到老年代中。对象晋升到老年代的年龄阈值，可以通过参数 <code>-XX:MaxTenuringThreshold</code> 来设置。</p>',52),d={href:"https://github.com/Snailclimb/JavaGuide/issues/552",target:"_blank",rel:"noopener noreferrer"},g=s(`<p><strong>动态年龄计算的代码如下</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>uint ageTable::compute_tenuring_threshold(size_t survivor_capacity) {
	//survivor_capacity是survivor空间的大小
size_t desired_survivor_size = (size_t)((((double) survivor_capacity)*TargetSurvivorRatio)/100);
size_t total = 0;
uint age = 1;
while (age &lt; table_size) {
total += sizes[age];//sizes数组是每个年龄段对象大小
if (total &gt; desired_survivor_size) break;
age++;
}
uint result = age &lt; MaxTenuringThreshold ? age : MaxTenuringThreshold;
	...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=a("p",null,[e("堆这里最容易出现的就是 "),a("code",null,"OutOfMemoryError"),e(" 错误，并且出现这种错误之后的表现形式还会有几种，比如：")],-1),h=a("li",null,[a("strong",null,[a("code",null,"java.lang.OutOfMemoryError: GC Overhead Limit Exceeded")]),e("：当 JVM 花太多时间执行垃圾回收并且只能回收很少的堆空间时，就会发生此错误。")],-1),v=a("strong",null,[a("code",null,"java.lang.OutOfMemoryError: Java heap space")],-1),m=a("code",null,"-Xmx",-1),f={href:"https://stackoverflow.com/questions/28272923/default-xmxsize-in-java-8-max-heap-size",target:"_blank",rel:"noopener noreferrer"},b=a("li",null,"......",-1),J=s(`<h3 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区" aria-hidden="true">#</a> 方法区</h3><p>方法区属于是 JVM 运行时数据区域的一块逻辑区域，是各个线程共享的内存区域。</p><p>《Java 虚拟机规范》只是规定了有方法区这么个概念和它的作用，方法区到底要如何实现那就是虚拟机自己要考虑的事情了。也就是说，在不同的虚拟机实现上，方法区的实现是不同的。</p><p>当虚拟机要使用一个类时，它需要读取并解析 Class 文件获取相关信息，再将信息存入到方法区。方法区会存储已被虚拟机加载的 <strong>类信息、字段信息、方法信息、常量、静态变量、即时编译器编译后的代码缓存等数据</strong>。</p><p><strong>方法区和永久代以及元空间是什么关系呢？</strong> 方法区和永久代以及元空间的关系很像 Java 中接口和类的关系，类实现了接口，这里的类就可以看作是永久代和元空间，接口可以看作是方法区，也就是说永久代以及元空间是 HotSpot 虚拟机对虚拟机规范中方法区的两种实现方式。并且，永久代是 JDK 1.8 之前的方法区实现，JDK 1.8 及以后方法区的实现变成了元空间。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/method-area-implementation.png" alt="HotSpot 虚拟机方法区的两种实现" tabindex="0"><figcaption>HotSpot 虚拟机方法区的两种实现</figcaption></figure><p><strong>为什么要将永久代 (PermGen) 替换为元空间 (MetaSpace) 呢?</strong></p><p>下图来自《深入理解 Java 虚拟机》第 3 版 2.2.5</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/20210425134508117.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>1、整个永久代有一个 JVM 本身设置的固定大小上限，无法进行调整，而元空间使用的是本地内存，受本机可用内存的限制，虽然元空间仍旧可能溢出，但是比原来出现的几率会更小。</p><blockquote><p>当元空间溢出时会得到如下错误：<code>java.lang.OutOfMemoryError: MetaSpace</code></p></blockquote><p>你可以使用 <code>-XX：MaxMetaspaceSize</code> 标志设置最大元空间大小，默认值为 unlimited，这意味着它只受系统内存的限制。<code>-XX：MetaspaceSize</code> 调整标志定义元空间的初始大小如果未指定此标志，则 Metaspace 将根据运行时的应用程序需求动态地重新调整大小。</p><p>2、元空间里面存放的是类的元数据，这样加载多少类的元数据就不由 <code>MaxPermSize</code> 控制了, 而由系统的实际可用空间来控制，这样能加载的类就更多了。</p><p>3、在 JDK8，合并 HotSpot 和 JRockit 的代码时, JRockit 从来没有一个叫永久代的东西, 合并之后就没有必要额外的设置这么一个永久代的地方了。</p><p><strong>方法区常用参数有哪些？</strong></p><p>JDK 1.8 之前永久代还没被彻底移除的时候通常通过下面这些参数来调节方法区大小。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">PermSize</span><span class="token operator">=</span><span class="token class-name">N</span> <span class="token comment">//方法区 (永久代) 初始大小</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxPermSize</span><span class="token operator">=</span><span class="token class-name">N</span> <span class="token comment">//方法区 (永久代) 最大大小,超过这个值将会抛出 OutOfMemoryError 异常:java.lang.OutOfMemoryError: PermGen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>相对而言，垃圾收集行为在这个区域是比较少出现的，但并非数据进入方法区后就“永久存在”了。</p><p>JDK 1.8 的时候，方法区（HotSpot 的永久代）被彻底移除了（JDK1.7 就已经开始了），取而代之是元空间，元空间使用的是本地内存。下面是一些常用参数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MetaspaceSize</span><span class="token operator">=</span><span class="token class-name">N</span> <span class="token comment">//设置 Metaspace 的初始（和最小大小）</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxMetaspaceSize</span><span class="token operator">=</span><span class="token class-name">N</span> <span class="token comment">//设置 Metaspace 的最大大小</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>与永久代很大的不同就是，如果不指定大小的话，随着更多类的创建，虚拟机会耗尽所有可用的系统内存。</p><h3 id="运行时常量池" tabindex="-1"><a class="header-anchor" href="#运行时常量池" aria-hidden="true">#</a> 运行时常量池</h3><p>Class 文件中除了有类的版本、字段、方法、接口等描述信息外，还有用于存放编译期生成的各种字面量（Literal）和符号引用（Symbolic Reference）的 <strong>常量池表(Constant Pool Table)</strong> 。</p><p>字面量是源代码中的固定值的表示法，即通过字面我们就能知道其值的含义。字面量包括整数、浮点数和字符串字面量。常见的符号引用包括类符号引用、字段符号引用、方法符号引用、接口方法符号。</p><p>《深入理解 Java 虚拟机》7.34 节第三版对符号引用和直接引用的解释如下：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/symbol-reference-and-direct-reference.png" alt="符号引用和直接引用" tabindex="0"><figcaption>符号引用和直接引用</figcaption></figure><p>常量池表会在类加载后存放到方法区的运行时常量池中。</p><p>运行时常量池的功能类似于传统编程语言的符号表，尽管它包含了比典型符号表更广泛的数据。</p><p>既然运行时常量池是方法区的一部分，自然受到方法区内存的限制，当常量池无法再申请到内存时会抛出 <code>OutOfMemoryError</code> 错误。</p><h3 id="字符串常量池" tabindex="-1"><a class="header-anchor" href="#字符串常量池" aria-hidden="true">#</a> 字符串常量池</h3><p><strong>字符串常量池</strong> 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 在堆中创建字符串对象”ab“</span>
<span class="token comment">// 将字符串对象”ab“的引用保存在字符串常量池中</span>
<span class="token class-name">String</span> aa <span class="token operator">=</span> <span class="token string">&quot;ab&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 直接返回字符串常量池中字符串对象”ab“的引用</span>
<span class="token class-name">String</span> bb <span class="token operator">=</span> <span class="token string">&quot;ab&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aa<span class="token operator">==</span>bb<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HotSpot 虚拟机中字符串常量池的实现是 <code>src/hotspot/share/classfile/stringTable.cpp</code> ,<code>StringTable</code> 可以简单理解为一个固定大小的<code>HashTable</code> ，容量为 <code>StringTableSize</code>（可以通过 <code>-XX:StringTableSize</code> 参数来设置），保存的是字符串（key）和 字符串对象的引用（value）的映射关系，字符串对象的引用指向堆中的字符串对象。</p><p>JDK1.7 之前，字符串常量池存放在永久代。JDK1.7 字符串常量池和静态变量从永久代移动了 Java 堆中。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/method-area-jdk1.6.png" alt="method-area-jdk1.6" tabindex="0"><figcaption>method-area-jdk1.6</figcaption></figure><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/method-area-jdk1.7.png" alt="method-area-jdk1.7" tabindex="0"><figcaption>method-area-jdk1.7</figcaption></figure><p><strong>JDK 1.7 为什么要将字符串常量池移动到堆中？</strong></p><p>主要是因为永久代（方法区实现）的 GC 回收效率太低，只有在整堆收集 (Full GC)的时候才会被执行 GC。Java 程序中通常会有大量的被创建的字符串等待回收，将字符串常量池放到堆中，能够更高效及时地回收字符串内存。</p>`,38),j={href:"https://www.zhihu.com/question/57109429/answer/151717241",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/fenixsoft/jvm_book",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/fenixsoft/jvm_book/issues/112",target:"_blank",rel:"noopener noreferrer"},x=s('<blockquote><p><strong>运行时常量池、方法区、字符串常量池这些都是不随虚拟机实现而改变的逻辑概念，是公共且抽象的，Metaspace、Heap 是与具体某种虚拟机实现相关的物理概念，是私有且具体的。</strong></p></blockquote><h3 id="直接内存" tabindex="-1"><a class="header-anchor" href="#直接内存" aria-hidden="true">#</a> 直接内存</h3><p>直接内存是一种特殊的内存缓冲区，并不在 Java 堆或方法区中分配的，而是通过 JNI 的方式在本地内存上分配的。</p><p>直接内存并不是虚拟机运行时数据区的一部分，也不是虚拟机规范中定义的内存区域，但是这部分内存也被频繁地使用。而且也可能导致 <code>OutOfMemoryError</code> 错误出现。</p><p>JDK1.4 中新加入的 <strong>NIO（Non-Blocking I/O，也被称为 New I/O）</strong>，引入了一种基于<strong>通道（Channel）<strong>与</strong>缓存区（Buffer）<strong>的 I/O 方式，它可以直接使用 Native 函数库直接分配堆外内存，然后通过一个存储在 Java 堆中的 DirectByteBuffer 对象作为这块内存的引用进行操作。这样就能在一些场景中显著提高性能，因为</strong>避免了在 Java 堆和 Native 堆之间来回复制数据</strong>。</p><p>直接内存的分配不会受到 Java 堆的限制，但是，既然是内存就会受到本机总内存大小以及处理器寻址空间的限制。</p><p>类似的概念还有 <strong>堆外内存</strong> 。在一些文章中将直接内存等价于堆外内存，个人觉得不是特别准确。</p><p>堆外内存就是把内存对象分配在堆（新生代+老年代+永久代）以外的内存，这些内存直接受操作系统管理（而不是虚拟机），这样做的结果就是能够在一定程度上减少垃圾回收对应用程序造成的影响。</p><h2 id="hotspot-虚拟机对象探秘" tabindex="-1"><a class="header-anchor" href="#hotspot-虚拟机对象探秘" aria-hidden="true">#</a> HotSpot 虚拟机对象探秘</h2><p>通过上面的介绍我们大概知道了虚拟机的内存情况，下面我们来详细的了解一下 HotSpot 虚拟机在 Java 堆中对象分配、布局和访问的全过程。</p><h3 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建" aria-hidden="true">#</a> 对象的创建</h3><p>Java 对象的创建过程我建议最好是能默写出来，并且要掌握每一步在做什么。</p><h4 id="step1-类加载检查" tabindex="-1"><a class="header-anchor" href="#step1-类加载检查" aria-hidden="true">#</a> Step1:类加载检查</h4><p>虚拟机遇到一条 new 指令时，首先将去检查这个指令的参数是否能在常量池中定位到这个类的符号引用，并且检查这个符号引用代表的类是否已被加载过、解析和初始化过。如果没有，那必须先执行相应的类加载过程。</p><h4 id="step2-分配内存" tabindex="-1"><a class="header-anchor" href="#step2-分配内存" aria-hidden="true">#</a> Step2:分配内存</h4><p>在<strong>类加载检查</strong>通过后，接下来虚拟机将为新生对象<strong>分配内存</strong>。对象所需的内存大小在类加载完成后便可确定，为对象分配空间的任务等同于把一块确定大小的内存从 Java 堆中划分出来。<strong>分配方式</strong>有 <strong>“指针碰撞”</strong> 和 <strong>“空闲列表”</strong> 两种，<strong>选择哪种分配方式由 Java 堆是否规整决定，而 Java 堆是否规整又由所采用的垃圾收集器是否带有压缩整理功能决定</strong>。</p><p><strong>内存分配的两种方式</strong> （补充内容，需要掌握）：</p><ul><li>指针碰撞： <ul><li>适用场合：堆内存规整（即没有内存碎片）的情况下。</li><li>原理：用过的内存全部整合到一边，没有用过的内存放在另一边，中间有一个分界指针，只需要向着没用过的内存方向将该指针移动对象内存大小位置即可。</li><li>使用该分配方式的 GC 收集器：Serial, ParNew</li></ul></li><li>空闲列表： <ul><li>适用场合：堆内存不规整的情况下。</li><li>原理：虚拟机会维护一个列表，该列表中会记录哪些内存块是可用的，在分配的时候，找一块儿足够大的内存块儿来划分给对象实例，最后更新列表记录。</li><li>使用该分配方式的 GC 收集器：CMS</li></ul></li></ul><p>选择以上两种方式中的哪一种，取决于 Java 堆内存是否规整。而 Java 堆内存是否规整，取决于 GC 收集器的算法是&quot;标记-清除&quot;，还是&quot;标记-整理&quot;（也称作&quot;标记-压缩&quot;），值得注意的是，复制算法内存也是规整的。</p><p><strong>内存分配并发问题（补充内容，需要掌握）</strong></p><p>在创建对象的时候有一个很重要的问题，就是线程安全，因为在实际开发过程中，创建对象是很频繁的事情，作为虚拟机来说，必须要保证线程是安全的，通常来讲，虚拟机采用两种方式来保证线程安全：</p><ul><li><strong>CAS+失败重试：</strong> CAS 是乐观锁的一种实现方式。所谓乐观锁就是，每次不加锁而是假设没有冲突而去完成某项操作，如果因为冲突失败就重试，直到成功为止。<strong>虚拟机采用 CAS 配上失败重试的方式保证更新操作的原子性。</strong></li><li><strong>TLAB：</strong> 为每一个线程预先在 Eden 区分配一块儿内存，JVM 在给线程中的对象分配内存时，首先在 TLAB 分配，当对象大于 TLAB 中的剩余内存或 TLAB 的内存已用尽时，再采用上述的 CAS 进行内存分配</li></ul><h4 id="step3-初始化零值" tabindex="-1"><a class="header-anchor" href="#step3-初始化零值" aria-hidden="true">#</a> Step3:初始化零值</h4><p>内存分配完成后，虚拟机需要将分配到的内存空间都初始化为零值（不包括对象头），这一步操作保证了对象的实例字段在 Java 代码中可以不赋初始值就直接使用，程序能访问到这些字段的数据类型所对应的零值。</p><h4 id="step4-设置对象头" tabindex="-1"><a class="header-anchor" href="#step4-设置对象头" aria-hidden="true">#</a> Step4:设置对象头</h4><p>初始化零值完成之后，<strong>虚拟机要对对象进行必要的设置</strong>，例如这个对象是哪个类的实例、如何才能找到类的元数据信息、对象的哈希码、对象的 GC 分代年龄等信息。 <strong>这些信息存放在对象头中。</strong> 另外，根据虚拟机当前运行状态的不同，如是否启用偏向锁等，对象头会有不同的设置方式。</p><h4 id="step5-执行-init-方法" tabindex="-1"><a class="header-anchor" href="#step5-执行-init-方法" aria-hidden="true">#</a> Step5:执行 init 方法</h4><p>在上面工作都完成之后，从虚拟机的视角来看，一个新的对象已经产生了，但从 Java 程序的视角来看，对象创建才刚开始，<code>&lt;init&gt;</code> 方法还没有执行，所有的字段都还为零。所以一般来说，执行 new 指令之后会接着执行 <code>&lt;init&gt;</code> 方法，把对象按照程序员的意愿进行初始化，这样一个真正可用的对象才算完全产生出来。</p><h3 id="对象的内存布局" tabindex="-1"><a class="header-anchor" href="#对象的内存布局" aria-hidden="true">#</a> 对象的内存布局</h3><p>在 Hotspot 虚拟机中，对象在内存中的布局可以分为 3 块区域：<strong>对象头</strong>、<strong>实例数据</strong>和<strong>对齐填充</strong>。</p><p><strong>Hotspot 虚拟机的对象头包括两部分信息</strong>，<strong>第一部分用于存储对象自身的运行时数据</strong>（哈希码、GC 分代年龄、锁状态标志等等），<strong>另一部分是类型指针</strong>，即对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例。</p><p><strong>实例数据部分是对象真正存储的有效信息</strong>，也是在程序中所定义的各种类型的字段内容。</p><p><strong>对齐填充部分不是必然存在的，也没有什么特别的含义，仅仅起占位作用。</strong> 因为 Hotspot 虚拟机的自动内存管理系统要求对象起始地址必须是 8 字节的整数倍，换句话说就是对象的大小必须是 8 字节的整数倍。而对象头部分正好是 8 字节的倍数（1 倍或 2 倍），因此，当对象实例数据部分没有对齐时，就需要通过对齐填充来补全。</p><h3 id="对象的访问定位" tabindex="-1"><a class="header-anchor" href="#对象的访问定位" aria-hidden="true">#</a> 对象的访问定位</h3><p>建立对象就是为了使用对象，我们的 Java 程序通过栈上的 reference 数据来操作堆上的具体对象。对象的访问方式由虚拟机实现而定，目前主流的访问方式有：<strong>使用句柄</strong>、<strong>直接指针</strong>。</p><h4 id="句柄" tabindex="-1"><a class="header-anchor" href="#句柄" aria-hidden="true">#</a> 句柄</h4><p>如果使用句柄的话，那么 Java 堆中将会划分出一块内存来作为句柄池，reference 中存储的就是对象的句柄地址，而句柄中包含了对象实例数据与对象类型数据各自的具体地址信息。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/access-location-of-object-handle.png" alt="对象的访问定位-使用句柄" tabindex="0"><figcaption>对象的访问定位-使用句柄</figcaption></figure><h4 id="直接指针" tabindex="-1"><a class="header-anchor" href="#直接指针" aria-hidden="true">#</a> 直接指针</h4><p>如果使用直接指针访问，reference 中存储的直接就是对象的地址。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/jvm/access-location-of-object-handle-direct-pointer.png" alt="对象的访问定位-直接指针" tabindex="0"><figcaption>对象的访问定位-直接指针</figcaption></figure><p>这两种对象访问方式各有优势。使用句柄来访问的最大好处是 reference 中存储的是稳定的句柄地址，在对象被移动时只会改变句柄中的实例数据指针，而 reference 本身不需要修改。使用直接指针访问方式最大的好处就是速度快，它节省了一次指针定位的时间开销。</p><p>HotSpot 虚拟机主要使用的就是这种方式来进行对象访问。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',44),S=a("li",null,"《深入理解 Java 虚拟机：JVM 高级特性与最佳实践（第二版》",-1),M=a("li",null,"《自己动手写 Java 虚拟机》",-1),O=a("li",null,"Chapter 2. The Structure of the Java Virtual Machine：https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html",-1),w=a("li",null,"JVM 栈帧内部结构-动态链接：https://chenxitag.com/archives/368",-1),E=a("li",null,'Java 中 new String("字面量") 中 "字面量" 是何时进入字符串常量池的? - 木女孩的回答 - 知乎：https://www.zhihu.com/question/55994121/answer/147296098',-1),y=a("li",null,"JVM 常量池中存储的是对象还是引用呢？ - RednaxelaFX 的回答 - 知乎：https://www.zhihu.com/question/57109429/answer/151717241",-1),z={href:"http://www.pointsoftware.ch/en/under-the-hood-runtime-data-areas-javas-memory-model/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://dzone.com/articles/jvm-permgen-%E2%80%93-where-art-thou",target:"_blank",rel:"noopener noreferrer"},D={href:"https://stackoverflow.com/questions/9095748/method-area-and-permgen",target:"_blank",rel:"noopener noreferrer"};function q(K,T){const n=r("ExternalLinkIcon");return i(),p("div",null,[c,a("blockquote",null,[a("p",null,[a("strong",null,[e("🐛 修正（参见："),a("a",d,[e("issue552"),t(n)]),e("）")]),e("：“Hotspot 遍历所有对象时，按照年龄从小到大对其所占用的大小进行累积，当累积的某个年龄大小超过了 survivor 区的一半时，取这个年龄和 MaxTenuringThreshold 中更小的一个值，作为新的晋升年龄阈值”。")]),g]),u,a("ol",null,[h,a("li",null,[v,e(" :假如在创建新的对象时, 堆内存中的空间不足以存放新创建的对象, 就会引发此错误。(和配置的最大堆内存有关，且受制于物理内存大小。最大堆内存可通过"),m,e("参数配置，若没有特别配置，将会使用默认值，详见："),a("a",f,[e("Default Java 8 max heap size"),t(n)]),e(")")]),b]),J,a("p",null,[e("相关问题："),a("a",j,[e("JVM 常量池中存储的是对象还是引用呢？ - RednaxelaFX - 知乎"),t(n)])]),a("p",null,[e("最后再来分享一段周志明老师在"),a("a",k,[e("《深入理解 Java 虚拟机（第 3 版）》样例代码&勘误"),t(n)]),e(" GitHub 仓库的 "),a("a",_,[e("issue#112"),t(n)]),e(" 中说过的话：")]),x,a("ul",null,[S,M,O,w,E,y,a("li",null,[a("a",z,[e("http://www.pointsoftware.ch/en/under-the-hood-runtime-data-areas-javas-memory-model/"),t(n)])]),a("li",null,[a("a",C,[e("https://dzone.com/articles/jvm-permgen-–-where-art-thou"),t(n)])]),a("li",null,[a("a",D,[e("https://stackoverflow.com/questions/9095748/method-area-and-permgen"),t(n)])])])])}const X=o(l,[["render",q],["__file","memory-area.html.vue"]]);export{X as default};
