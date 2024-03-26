import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as a,c as r,a as e,d as c,b as s,e as i}from"./app-BGUJa96a.js";const l={},p=i(`<h2 id="配置docker镜像源" tabindex="-1"><a class="header-anchor" href="#配置docker镜像源"><span>配置Docker镜像源</span></a></h2><p>找到Docker配置文件daemon.json的位置：<code>/etc/docker/daemon.json</code>， 若文件不存在则新建一个</p><p>加上以下配置：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 镜像地址</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取阿里个人镜像源" tabindex="-1"><a class="header-anchor" href="#获取阿里个人镜像源"><span>获取阿里个人镜像源</span></a></h2>`,5),d={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"容器镜像服务->镜像工具->镜像加速器->加速器地址",-1),k=e("p",null,"将加速器地址配置到Docker的daemon文件中即可",-1);function u(h,g){const o=n("ExternalLinkIcon");return a(),r("div",null,[p,e("p",null,[e("a",d,[c("阿里容器镜像服务"),s(o)])]),m,k])}const D=t(l,[["render",u],["__file","docker-mirror-config.html.vue"]]),f=JSON.parse('{"path":"/practice-manual/docker/docker-mirror-config.html","title":"Docker镜像配置","lang":"zh-CN","frontmatter":{"title":"Docker镜像配置","author":null,"category":"Docker","tag":"Docker","description":"配置Docker镜像源 找到Docker配置文件daemon.json的位置：/etc/docker/daemon.json， 若文件不存在则新建一个 加上以下配置： 获取阿里个人镜像源 阿里容器镜像服务 容器镜像服务->镜像工具->镜像加速器->加速器地址 将加速器地址配置到Docker的daemon文件中即可","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/docker/docker-mirror-config.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Docker镜像配置"}],["meta",{"property":"og:description","content":"配置Docker镜像源 找到Docker配置文件daemon.json的位置：/etc/docker/daemon.json， 若文件不存在则新建一个 加上以下配置： 获取阿里个人镜像源 阿里容器镜像服务 容器镜像服务->镜像工具->镜像加速器->加速器地址 将加速器地址配置到Docker的daemon文件中即可"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T19:10:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:modified_time","content":"2024-03-26T19:10:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker镜像配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T19:10:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"配置Docker镜像源","slug":"配置docker镜像源","link":"#配置docker镜像源","children":[]},{"level":2,"title":"获取阿里个人镜像源","slug":"获取阿里个人镜像源","link":"#获取阿里个人镜像源","children":[]}],"git":{"createdTime":1711480217000,"updatedTime":1711480217000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.37,"words":111},"filePathRelative":"practice-manual/docker/docker-mirror-config.md","localizedDate":"2024年3月26日","excerpt":"<h2>配置Docker镜像源</h2>\\n<p>找到Docker配置文件daemon.json的位置：<code>/etc/docker/daemon.json</code>， 若文件不存在则新建一个</p>\\n<p>加上以下配置：</p>\\n<div class=\\"language-json\\" data-ext=\\"json\\" data-title=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"registry-mirrors\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token comment\\">// 镜像地址</span>\\n  <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{D as comp,f as data};
