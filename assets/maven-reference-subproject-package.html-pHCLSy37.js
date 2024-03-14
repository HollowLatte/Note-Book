import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as o}from"./app-R-jbemKs.js";const s={},r=o(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>springboot-demo
│
├─springboot-cache
├─springboot-database
└─springboot-start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，有一个父工程springboot-demo，springboot-start是带有SpringBoot启动类的子工程，另外两个是无启动类的基础组件工程，</p><p>当springboot-start引用springboot-database或springboot-cache工程时，可以正常启动项目，但是进行maven package操作时就会报错，找不到引用的springboot-database或springboot-cache</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>对springboot-demo父工程执行maven的<code>clean</code>、<code>install</code>操作，然后再执行import project即可</p>`,6),i=[r];function t(c,d){return a(),n("div",null,i)}const b=e(s,[["render",t],["__file","maven-reference-subproject-package.html.vue"]]);export{b as default};
