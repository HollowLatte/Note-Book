import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,a as n,d as s,b as p,e as l}from"./app-R-jbemKs.js";const i={},u=n("h2",{id:"docker-compose-限制容器内存占用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose-限制容器内存占用","aria-hidden":"true"},"#"),s(" Docker Compose 限制容器内存占用")],-1),r={href:"https://docs.docker.com/compose/compose-file/deploy/#resources",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>以RocketMQ的docker compose文件为例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">name-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/rocketmq<span class="token punctuation">:</span>5.1.2
    <span class="token key atrule">command</span><span class="token punctuation">:</span> ./mqnamesrv
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9876:9876&quot;</span>
    <span class="token comment"># 配置资源占用</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 512m
  <span class="token key atrule">broker</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/rocketmq<span class="token punctuation">:</span>5.1.2
    <span class="token key atrule">command</span><span class="token punctuation">:</span> ./mqbroker <span class="token punctuation">-</span>n host.docker.internal<span class="token punctuation">:</span>9876 <span class="token punctuation">-</span>c /home/rocketmq/rocketmq<span class="token punctuation">-</span>5.1.2/conf/broker.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./broker.conf:/home/rocketmq/rocketmq-5.1.2/conf/broker.conf&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9877:9877&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;10909:10909&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;10911:10911&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;10912:10912&quot;</span>
    <span class="token comment"># 配置资源占用</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1g
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> name<span class="token punctuation">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在每个service中加上<code>deploy.resources.limits.memory</code>的配置即可</p>`,3);function d(m,v){const a=t("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("官方文档："),n("a",r,[s("Docker Compose Limit"),p(a)])]),k])}const q=e(i,[["render",d],["__file","limit-memory.html.vue"]]);export{q as default};
