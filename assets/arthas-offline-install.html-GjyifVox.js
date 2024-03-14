import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as r,a,d as e,b as c,e as l}from"./app-R-jbemKs.js";const i={},d={href:"https://github.com/alibaba/arthas/releases",target:"_blank",rel:"noopener noreferrer"},h=l(`<h2 id="linux安装" tabindex="-1"><a class="header-anchor" href="#linux安装" aria-hidden="true">#</a> Linux安装</h2><p>解压后，修改目录中install-local.sh文件权限：<code>chmod 777 install-local.sh</code>，然后执行该脚本进行本地安装</p><p>安装成功后，会有提示<code>install to local succeeded.</code></p><p>然后就可以使用<code>java -jar /arthas-bin/arthas-boot.jar</code>来启动arthas了。</p><p>注意：不要将arthas-boot.jar移出解压的目录，否则仍需要联网下载依赖。</p><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> Docker安装</h2><p>同样也需要解压修改install-local.sh文件权限</p><p>如果Docker和当前宿主机有挂载目录，可以放在挂载目录中进行运行，没有的话就要复制到docker容器中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 前一个路径是宿主机，后一个路径是容器</span>
<span class="token function">docker</span> <span class="token function">cp</span> ./arthas-bin <span class="token operator">&lt;</span>container-id<span class="token operator">&gt;</span>:/home/arthas-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用即可<code>docker exec -it &lt;container-id&gt; sh -c &quot;java -jar /home/arthas-bin/arthas-boot.jar&quot;</code></p>`,10);function p(u,b){const n=t("ExternalLinkIcon");return o(),r("div",null,[a("p",null,[e("离线安装需要完整的包，下载GitHub仓库中的arthas-bin.zip即可 "),a("a",d,[e("Arthas"),c(n)])]),h])}const f=s(i,[["render",p],["__file","arthas-offline-install.html.vue"]]);export{f as default};
