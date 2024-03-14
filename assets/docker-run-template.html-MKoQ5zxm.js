import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,e}from"./app-R-jbemKs.js";const t={},l=e(`<h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span><span class="token operator">=</span>start-service <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">-m</span> 1g <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /opt/hollowlatte/service/start-service:/home <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> /opt/hollowlatte/log:/opt/system/log <span class="token punctuation">\\</span>
    <span class="token parameter variable">--net</span><span class="token operator">=</span>host <span class="token punctuation">\\</span>
    hollowlatte-openjdk:21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function o(p,c){return s(),n("div",null,r)}const u=a(t,[["render",o],["__file","docker-run-template.html.vue"]]);export{u as default};
