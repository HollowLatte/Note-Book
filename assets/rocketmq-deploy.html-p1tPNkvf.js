import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-R-jbemKs.js";const t={},o=e(`<h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">name-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/rocketmq<span class="token punctuation">:</span>5.1.2
    <span class="token key atrule">command</span><span class="token punctuation">:</span> ./mqnamesrv
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9876:9876&quot;</span>
  <span class="token key atrule">broker</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/rocketmq<span class="token punctuation">:</span>5.1.2
    <span class="token key atrule">mem_reservation</span><span class="token punctuation">:</span> 1g
    <span class="token key atrule">command</span><span class="token punctuation">:</span> ./mqbroker <span class="token punctuation">-</span>n host.docker.internal<span class="token punctuation">:</span>9876 <span class="token punctuation">-</span>c /home/rocketmq/rocketmq<span class="token punctuation">-</span>5.1.2/conf/broker.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./broker.conf:/home/rocketmq/rocketmq-5.1.2/conf/broker.conf&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9877:9877&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;10909:10909&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;10911:10911&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;10912:10912&quot;</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> name<span class="token punctuation">-</span>server
  <span class="token key atrule">dashboard</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apacherocketmq/rocketmq<span class="token punctuation">-</span>dashboard<span class="token punctuation">:</span>1.0.0
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> JAVA_OPTS=<span class="token punctuation">-</span>Drocketmq.namesrv.addr=host.docker.internal<span class="token punctuation">:</span><span class="token number">9876</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9880:8080&quot;</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> name<span class="token punctuation">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>listenPort：broker的监听端口号，是remotingServer服务组件使用，作为对Producer和Consumer提供服务的端口号，默认为10911</p><p>fastListenPort：fastRemotingServer服务组件使用，监听端口值为<code>listenPort - 2</code>，即默认为10909</p><p>haListenPort：HAService服务组件使用，用于Broker的主从同步，监听端口值为<code>listenPort + 1</code>，即默认为10912</p></div><h2 id="broker-conf" tabindex="-1"><a class="header-anchor" href="#broker-conf" aria-hidden="true">#</a> broker.conf</h2><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">brokerClusterName</span> <span class="token punctuation">=</span> <span class="token value attr-value">DefaultCluster</span>
<span class="token key attr-name">brokerName</span> <span class="token punctuation">=</span> <span class="token value attr-value">broker-a</span>
<span class="token key attr-name">brokerId</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">deleteWhen</span> <span class="token punctuation">=</span> <span class="token value attr-value">04</span>
<span class="token key attr-name">fileReservedTime</span> <span class="token punctuation">=</span> <span class="token value attr-value">48</span>
<span class="token key attr-name">brokerRole</span> <span class="token punctuation">=</span> <span class="token value attr-value">ASYNC_MASTER</span>
<span class="token key attr-name">flushDiskType</span> <span class="token punctuation">=</span> <span class="token value attr-value">ASYNC_FLUSH</span>


<span class="token comment"># Custom config</span>
<span class="token key attr-name">brokerIP1</span> <span class="token punctuation">=</span> <span class="token value attr-value">host.docker.internal</span>
<span class="token key attr-name">brokerIP2</span> <span class="token punctuation">=</span> <span class="token value attr-value">host.docker.internal</span>
<span class="token key attr-name">autoCreateTopicEnable</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[o];function c(l,i){return s(),a("div",null,p)}const k=n(t,[["render",c],["__file","rocketmq-deploy.html.vue"]]);export{k as default};
