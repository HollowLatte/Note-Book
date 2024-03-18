import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as s,e as a}from"./app-DlTWK7Vx.js";const n={},l=a(`<h2 id="修改内核参数" tabindex="-1"><a class="header-anchor" href="#修改内核参数"><span>修改内核参数</span></a></h2><h3 id="sysctl-命令" tabindex="-1"><a class="header-anchor" href="#sysctl-命令"><span><code>sysctl</code> 命令</span></a></h3><p>sysctl 是一个用于在 Linux 系统中运行时修改内核参数的工具。这些参数控制着系统的各种行为，例如网络配置、文件系统缓存、进程调度等。通过 sysctl，你可以动态地调整这些参数，而无需重新启动系统。</p><p>你可以使用 sysctl 来查看当前的内核参数值、修改参数值，以及加载自定义的参数配置文件。这对于优化系统性能、调试和适应不同的工作负载非常有用。</p><p>优点：</p><ul><li>可以查看指定参数以及所有参数的值</li><li>无需重启系统，立即生效。</li><li>可以临时修改参数，方便测试。</li></ul><p>缺点：</p><ul><li>修改的参数仅在当前系统会话中有效，重启后失效。</li></ul><h3 id="etc-sysctl-conf-文件" tabindex="-1"><a class="header-anchor" href="#etc-sysctl-conf-文件"><span><code>/etc/sysctl.conf</code> 文件</span></a></h3><p>在/etc/sysctl.conf文件中，可以设置内核参数的默认值。</p><p>缺点：</p><ul><li>需要重启系统才能生效。</li><li>修改错误可能导致系统无法启动。</li></ul><h2 id="常见内核参数优化" tabindex="-1"><a class="header-anchor" href="#常见内核参数优化"><span>常见内核参数优化</span></a></h2><blockquote><p>参考阿里巴巴Java开发手册 工程结构-&gt;服务器</p></blockquote><h3 id="tcp-超时时间" tabindex="-1"><a class="header-anchor" href="#tcp-超时时间"><span>TCP 超时时间</span></a></h3><p><strong>高并发服务器建议调小 TCP 协议的 time_wait 超时时间</strong></p><p><strong>说明：</strong> 操作系统默认 240 秒后（不同Linux发行版默认值不同），才会关闭处于 time_wait 状态的连接，在高并发访问下，服务器端会因为 处于 time_wait 的连接数太多，可能无法建立新的连接，所以需要在服务器上调小此等待值。</p><p>修改 TCP 超时时间：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 数值仅供参考</span>
net.ipv4.tcp_fin_timeout <span class="token operator">=</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最大文件句柄数" tabindex="-1"><a class="header-anchor" href="#最大文件句柄数"><span>最大文件句柄数</span></a></h3><p><strong>调大服务器所支持的最大文件句柄数（File Descriptor，简写为 fd）</strong></p><p><strong>说明：</strong> 主流操作系统的设计是将 TCP/UDP 连接采用与文件一样的方式去管理，即一个连接对应于一个 fd。 主流的linux服务器默认所支持最大fd数量为1024，当并发连接数很大时很容易因为fd不足而出现<code>open too many files</code> 错误，导致新的连接无法建立。建议将 linux 服务器所支持的最大句柄数调高数倍（与服务器的内存数量相关）。</p><p>进程级配置： 修改<code>/etc/security/limits.conf</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 限制单个进程最大文件句柄数（到达此限制时系统报警）</span>
* soft nofile <span class="token number">65536</span>
<span class="token comment"># 限制单个进程最大文件句柄数（到达此限制时系统报错）</span>
* hard nofile <span class="token number">65536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系统级配置： 修改<code>/etc/sysctl.conf</code>或sysctl修改</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 限制整个系统最大文件句柄数</span>
fs.file-max <span class="token operator">=</span> <span class="token number">655350</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),i=[l];function c(o,r){return t(),s("div",null,i)}const m=e(n,[["render",c],["__file","kernel-param-optimize.html.vue"]]),h=JSON.parse('{"path":"/practice-manual/linux/kernel-param-optimize.html","title":"内核参数优化","lang":"zh-CN","frontmatter":{"title":"内核参数优化","author":null,"category":"Linux","tag":"Linux","date":"2024-03-19T00:00:00.000Z","description":"修改内核参数 sysctl 命令 sysctl 是一个用于在 Linux 系统中运行时修改内核参数的工具。这些参数控制着系统的各种行为，例如网络配置、文件系统缓存、进程调度等。通过 sysctl，你可以动态地调整这些参数，而无需重新启动系统。 你可以使用 sysctl 来查看当前的内核参数值、修改参数值，以及加载自定义的参数配置文件。这对于优化系统性能...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/linux/kernel-param-optimize.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"内核参数优化"}],["meta",{"property":"og:description","content":"修改内核参数 sysctl 命令 sysctl 是一个用于在 Linux 系统中运行时修改内核参数的工具。这些参数控制着系统的各种行为，例如网络配置、文件系统缓存、进程调度等。通过 sysctl，你可以动态地调整这些参数，而无需重新启动系统。 你可以使用 sysctl 来查看当前的内核参数值、修改参数值，以及加载自定义的参数配置文件。这对于优化系统性能..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T19:11:00.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2024-03-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T19:11:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内核参数优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T19:11:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"修改内核参数","slug":"修改内核参数","link":"#修改内核参数","children":[{"level":3,"title":"sysctl 命令","slug":"sysctl-命令","link":"#sysctl-命令","children":[]},{"level":3,"title":"/etc/sysctl.conf 文件","slug":"etc-sysctl-conf-文件","link":"#etc-sysctl-conf-文件","children":[]}]},{"level":2,"title":"常见内核参数优化","slug":"常见内核参数优化","link":"#常见内核参数优化","children":[{"level":3,"title":"TCP 超时时间","slug":"tcp-超时时间","link":"#tcp-超时时间","children":[]},{"level":3,"title":"最大文件句柄数","slug":"最大文件句柄数","link":"#最大文件句柄数","children":[]}]}],"git":{"createdTime":1710789060000,"updatedTime":1710789060000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":2.22,"words":666},"filePathRelative":"practice-manual/linux/kernel-param-optimize.md","localizedDate":"2024年3月19日","excerpt":"<h2>修改内核参数</h2>\\n<h3><code>sysctl</code> 命令</h3>\\n<p>sysctl 是一个用于在 Linux 系统中运行时修改内核参数的工具。这些参数控制着系统的各种行为，例如网络配置、文件系统缓存、进程调度等。通过\\nsysctl，你可以动态地调整这些参数，而无需重新启动系统。</p>\\n<p>你可以使用 sysctl 来查看当前的内核参数值、修改参数值，以及加载自定义的参数配置文件。这对于优化系统性能、调试和适应不同的工作负载非常有用。</p>\\n<p>优点：</p>\\n<ul>\\n<li>可以查看指定参数以及所有参数的值</li>\\n<li>无需重启系统，立即生效。</li>\\n<li>可以临时修改参数，方便测试。</li>\\n</ul>","autoDesc":true}');export{m as comp,h as data};