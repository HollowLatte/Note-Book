import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-R-jbemKs.js";const t={},c=e(`<h2 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h2><p>Function 是一个接受一个参数并产生一个结果的函数式接口。它定义了一个名为 apply(T) 的抽象方法，该方法接受一个参数类型为 T 的输入，并返回类型为 R 的结果。可以将 Function 用于将一个值转换为另一个值，或者进行任何需要输入和输出的转换操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">R</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supplier" tabindex="-1"><a class="header-anchor" href="#supplier" aria-hidden="true">#</a> Supplier</h2><p>Supplier 是一个不接受参数但生成一个结果的函数式接口。它定义了一个名为 get() 的抽象方法，该方法不接受参数并返回类型为 T 的结果。Supplier 通常用于延迟计算或提供无参构造函数的实例化操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="consumer" tabindex="-1"><a class="header-anchor" href="#consumer" aria-hidden="true">#</a> Consumer</h2><p>Consumer 是一个接受一个参数并执行某些操作但不返回结果的函数式接口。它定义了一个名为 accept(T) 的抽象方法，该方法接受一个参数类型为 T 的输入，并在内部执行一些操作。Consumer 通常用于需要对输入进行处理而不需要返回结果的情况。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="predicate" tabindex="-1"><a class="header-anchor" href="#predicate" aria-hidden="true">#</a> Predicate</h2><p>Predicate 是一个接受一个参数并返回一个布尔值结果的函数式接口。它定义了一个名为 test(T) 的抽象方法，该方法接受一个参数类型为 T 的输入，并返回一个 boolean 值，表示输入是否符合特定条件。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[c];function i(o,l){return a(),s("div",null,p)}const r=n(t,[["render",i],["__file","common-functional-interface.html.vue"]]);export{r as default};
