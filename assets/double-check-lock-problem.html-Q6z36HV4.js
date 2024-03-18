import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as p,a as n,d as a,b as c,e as l}from"./app-6eIwu4TL.js";const i={},u={href:"http://www.cs.umd.edu/~pugh/java/memoryModel/DoubleCheckedLocking.html",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="双重检查锁" tabindex="-1"><a class="header-anchor" href="#双重检查锁"><span>双重检查锁</span></a></h2><p>未使用volatile的DCL实现：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DoubleCheckLockSingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">DoubleCheckLockSingleton</span> instance<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">DoubleCheckLockSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DoubleCheckLockSingleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">DoubleCheckLockSingleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleCheckLockSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的DCL代码会有延迟初始化问题</p><h2 id="双重检查锁延迟初始化问题" tabindex="-1"><a class="header-anchor" href="#双重检查锁延迟初始化问题"><span>双重检查锁延迟初始化问题</span></a></h2><p>上面DCL代码的<strong>synchronized代码块</strong>对应的字节码：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">10</span> monitorenter
<span class="token number">11</span> getstatic #<span class="token number">2</span> <span class="token operator">&lt;</span><span class="token class-name">DoubleCheckLockSingleton</span><span class="token punctuation">.</span>instance <span class="token operator">:</span> <span class="token class-name">LDoubleCheckLockSingleton</span><span class="token punctuation">;</span><span class="token operator">&gt;</span>
<span class="token number">14</span> ifnonnull <span class="token number">27</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">13</span><span class="token punctuation">)</span>
<span class="token number">17</span> <span class="token keyword">new</span> #<span class="token number">3</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DoubleCheckLockSingleton</span><span class="token punctuation">&gt;</span></span>
<span class="token number">20</span> dup
<span class="token number">21</span> invokespecial #<span class="token number">4</span> <span class="token operator">&lt;</span><span class="token class-name">DoubleCheckLockSingleton</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span>init<span class="token punctuation">&gt;</span></span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">V</span><span class="token operator">&gt;</span>
<span class="token number">24</span> putstatic #<span class="token number">2</span> <span class="token operator">&lt;</span><span class="token class-name">DoubleCheckLockSingleton</span><span class="token punctuation">.</span>instance <span class="token operator">:</span> <span class="token class-name">LDoubleCheckLockSingleton</span><span class="token punctuation">;</span><span class="token operator">&gt;</span>
<span class="token number">27</span> aload_0
<span class="token number">28</span> monitorexit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>21行invokespecial指令可以看做对象的初始化操作，执行该指令后，对象才算new完成</li><li>24行putstatic指令可以看做是把对象的内存空间指向了instance字段</li></ul><p><strong>因为指令重排的存在，可能21的<code>invokespecial</code>指令和24的<code>putstatic</code>指令的执行顺序发生了改变，变成先执行<code>putstatic</code> ，再执行<code>invokespecial</code></strong></p><p>在并发量大的情况下，执行到putstatic，还未执行invokespecial，此时instance字段指向的对象内存空间是空的，因为对象还未初始化完毕，如果刚好有其他线程过来获取到的instance字段的值会为null，</p><blockquote><p>关于对象的初始化等知识可以去看对象的创建过程</p></blockquote><p>上面说的就是双重检查锁可能出现的延迟初始化问题或者叫半初始化问题</p><h2 id="解决延迟初始化问题" tabindex="-1"><a class="header-anchor" href="#解决延迟初始化问题"><span>解决延迟初始化问题</span></a></h2><p>其实只要给instance字段加上volatile关键字禁止指令重排即可</p>`,14);function r(d,m){const s=t("ExternalLinkIcon");return o(),p("div",null,[n("p",null,[a("有一篇关于该问题的论文："),n("a",u,[a('The "Double-Checked Locking is Broken" Declaration'),c(s)])]),k])}const h=e(i,[["render",r],["__file","double-check-lock-problem.html.vue"]]),g=JSON.parse('{"path":"/notebook/java/concurrence/double-check-lock-problem.html","title":"DCL双重检查锁问题","lang":"zh-CN","frontmatter":{"title":"DCL双重检查锁问题","author":null,"category":"Java","tag":"Java","date":"2024-03-06T00:00:00.000Z","description":"有一篇关于该问题的论文：The \\"Double-Checked Locking is Broken\\" Declaration 双重检查锁 未使用volatile的DCL实现： 上面的DCL代码会有延迟初始化问题 双重检查锁延迟初始化问题 上面DCL代码的synchronized代码块对应的字节码： 21行invokespecial指令可以看做对象的初始...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/notebook/java/concurrence/double-check-lock-problem.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"DCL双重检查锁问题"}],["meta",{"property":"og:description","content":"有一篇关于该问题的论文：The \\"Double-Checked Locking is Broken\\" Declaration 双重检查锁 未使用volatile的DCL实现： 上面的DCL代码会有延迟初始化问题 双重检查锁延迟初始化问题 上面DCL代码的synchronized代码块对应的字节码： 21行invokespecial指令可以看做对象的初始..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-03-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DCL双重检查锁问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"双重检查锁","slug":"双重检查锁","link":"#双重检查锁","children":[]},{"level":2,"title":"双重检查锁延迟初始化问题","slug":"双重检查锁延迟初始化问题","link":"#双重检查锁延迟初始化问题","children":[]},{"level":2,"title":"解决延迟初始化问题","slug":"解决延迟初始化问题","link":"#解决延迟初始化问题","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"notebook/java/concurrence/double-check-lock-problem.md","localizedDate":"2024年3月6日","excerpt":"<p>有一篇关于该问题的论文：<a href=\\"http://www.cs.umd.edu/~pugh/java/memoryModel/DoubleCheckedLocking.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">The \\"Double-Checked Locking is Broken\\" Declaration</a></p>\\n<h2>双重检查锁</h2>\\n<p>未使用volatile的DCL实现：</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">DoubleCheckLockSingleton</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">DoubleCheckLockSingleton</span> instance<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">DoubleCheckLockSingleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">DoubleCheckLockSingleton</span> <span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>instance <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">synchronized</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">DoubleCheckLockSingleton</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>instance <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    instance <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">DoubleCheckLockSingleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> instance<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{h as comp,g as data};
