import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o,c as r,a as e,d as c,b as t,e as i}from"./app-R-jbemKs.js";const d={},l=i(`<h2 id="配置docker镜像源" tabindex="-1"><a class="header-anchor" href="#配置docker镜像源" aria-hidden="true">#</a> 配置Docker镜像源</h2><p>找到Docker配置文件daemon.json的位置：<code>/etc/docker/daemon.json</code>， 若文件不存在则新建一个</p><p>加上以下配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 镜像地址</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取阿里个人镜像源" tabindex="-1"><a class="header-anchor" href="#获取阿里个人镜像源" aria-hidden="true">#</a> 获取阿里个人镜像源</h2>`,5),p={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"容器镜像服务->镜像工具->镜像加速器->加速器地址",-1),m=e("p",null,"将加速器地址配置到Docker的daemon文件中即可",-1);function h(_,k){const n=s("ExternalLinkIcon");return o(),r("div",null,[l,e("p",null,[e("a",p,[c("阿里容器镜像服务"),t(n)])]),u,m])}const b=a(d,[["render",h],["__file","docker-mirror-config.html.vue"]]);export{b as default};
