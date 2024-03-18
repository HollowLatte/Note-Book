import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c,a as e,d as t,b as i,e as p}from"./app-6eIwu4TL.js";const l={},g=p(`<h2 id="什么是-cdn" tabindex="-1"><a class="header-anchor" href="#什么是-cdn"><span>什么是 CDN ？</span></a></h2><p><strong>CDN</strong> 全称是 Content Delivery Network/Content Distribution Network，翻译过的意思是 <strong>内容分发网络</strong> 。</p><p>我们可以将内容分发网络拆开来看：</p><ul><li>内容：指的是静态资源比如图片、视频、文档、JS、CSS、HTML。</li><li>分发网络：指的是将这些静态资源分发到位于多个不同的地理位置机房中的服务器上，这样，就可以实现静态资源的就近访问比如北京的用户直接访问北京机房的数据。</li></ul><p>所以，简单来说，<strong>CDN 就是将静态资源分发到多个不同的地方以实现就近访问，进而加快静态资源的访问速度，减轻服务器以及带宽的负担。</strong></p><p>类似于京东建立的庞大的仓储运输体系，京东物流在全国拥有非常多的仓库，仓储网络几乎覆盖全国所有区县。这样的话，用户下单的第一时间，商品就从距离用户最近的仓库，直接发往对应的配送站，再由京东小哥送到你家。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/jingdong-wuliu-cangpei.png" alt="京东仓配系统" tabindex="0"><figcaption>京东仓配系统</figcaption></figure><p>你可以将 CDN 看作是服务上一层的特殊缓存服务，分布在全国各地，主要用来处理静态资源的请求。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-101.png" alt="CDN 简易示意图" tabindex="0"><figcaption>CDN 简易示意图</figcaption></figure><p>我们经常拿全站加速和内容分发网络做对比，不要把两者搞混了！全站加速（不同云服务商叫法不同，腾讯云叫 ECDN、阿里云叫 DCDN）既可以加速静态资源又可以加速动态资源，内容分发网络（CDN）主要针对的是 <strong>静态资源</strong> 。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-aliyun-dcdn.png" alt="阿里云文档：https://help.aliyun.com/document_detail/64836.html" tabindex="0"><figcaption>阿里云文档：https://help.aliyun.com/document_detail/64836.html</figcaption></figure><p>绝大部分公司都会在项目开发中交使用 CDN 服务，但很少会有自建 CDN 服务的公司。基于成本、稳定性和易用性考虑，建议直接选择专业的云厂商（比如阿里云、腾讯云、华为云、青云）或者 CDN 厂商（比如网宿、蓝汛）提供的开箱即用的 CDN 服务。</p><p>很多朋友可能要问了：<strong>既然是就近访问，为什么不直接将服务部署在多个不同的地方呢？</strong></p><ul><li>成本太高，需要部署多份相同的服务。</li><li>静态资源通常占用空间比较大且经常会被访问到，如果直接使用服务器或者缓存来处理静态资源请求的话，对系统资源消耗非常大，可能会影响到系统其他服务的正常运行。</li></ul><p>同一个服务在在多个不同的地方部署多份（比如同城灾备、异地灾备、同城多活、异地多活）是为了实现系统的高可用而不是就近访问。</p><h2 id="cdn-工作原理是什么" tabindex="-1"><a class="header-anchor" href="#cdn-工作原理是什么"><span>CDN 工作原理是什么？</span></a></h2><p>搞懂下面 3 个问题也就搞懂了 CDN 的工作原理：</p><ol><li>静态资源是如何被缓存到 CDN 节点中的？</li><li>如何找到最合适的 CDN 节点？</li><li>如何防止静态资源被盗用？</li></ol><h3 id="静态资源是如何被缓存到-cdn-节点中的" tabindex="-1"><a class="header-anchor" href="#静态资源是如何被缓存到-cdn-节点中的"><span>静态资源是如何被缓存到 CDN 节点中的？</span></a></h3><p>你可以通过 <strong>预热</strong> 的方式将源站的资源同步到 CDN 的节点中。这样的话，用户首次请求资源可以直接从 CDN 节点中取，无需回源。这样可以降低源站压力，提升用户体验。</p><p>如果不预热的话，你访问的资源可能不在 CDN 节点中，这个时候 CDN 节点将请求源站获取资源，这个过程是大家经常说的 <strong>回源</strong>。</p><blockquote><ul><li>回源：当 CDN 节点上没有用户请求的资源或该资源的缓存已经过期时，CDN 节点需要从原始服务器获取最新的资源内容，这个过程就是回源。当用户请求发生回源的话，会导致该请求的响应速度比未使用 CDN 还慢，因为相比于未使用 CDN 还多了一层 CDN 的调用流程。</li><li>预热：预热是指在 CDN 上提前将内容缓存到 CDN 节点上。这样当用户在请求这些资源时，能够快速地从最近的 CDN 节点获取到而不需要回源，进而减少了对源站的访问压力，提高了访问速度。</li></ul></blockquote><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-back-to-source.png" alt="CDN 回源" tabindex="0"><figcaption>CDN 回源</figcaption></figure><p>如果资源有更新的话，你也可以对其 <strong>刷新</strong> ，删除 CDN 节点上缓存的旧资源，并强制 CDN 节点回源站获取最新资源。</p><p>几乎所有云厂商提供的 CDN 服务都具备缓存的刷新和预热功能（下图是阿里云 CDN 服务提供的相应功能）：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-refresh-warm-up.png" alt="CDN 缓存的刷新和预热" tabindex="0"><figcaption>CDN 缓存的刷新和预热</figcaption></figure><p><strong>命中率</strong> 和 <strong>回源率</strong> 是衡量 CDN 服务质量两个重要指标。命中率越高越好，回源率越低越好。</p><h3 id="如何找到最合适的-cdn-节点" tabindex="-1"><a class="header-anchor" href="#如何找到最合适的-cdn-节点"><span>如何找到最合适的 CDN 节点？</span></a></h3><p>GSLB （Global Server Load Balance，全局负载均衡）是 CDN 的大脑，负责多个 CDN 节点之间相互协作，最常用的是基于 DNS 的 GSLB。</p><p>CDN 会通过 GSLB 找到最合适的 CDN 节点，更具体点来说是下面这样的：</p><ol><li>浏览器向 DNS 服务器发送域名请求；</li><li>DNS 服务器向根据 CNAME( Canonical Name ) 别名记录向 GSLB 发送请求；</li><li>GSLB 返回性能最好（通常距离请求地址最近）的 CDN 节点（边缘服务器，真正缓存内容的地方）的地址给浏览器；</li><li>浏览器直接访问指定的 CDN 节点。</li></ol><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-overview.png" alt="CDN 原理示意图" tabindex="0"><figcaption>CDN 原理示意图</figcaption></figure><p>为了方便理解，上图其实做了一点简化。GSLB 内部可以看作是 CDN 专用 DNS 服务器和负载均衡系统组合。CDN 专用 DNS 服务器会返回负载均衡系统 IP 地址给浏览器，浏览器使用 IP 地址请求负载均衡系统进而找到对应的 CDN 节点。</p><p><strong>GSLB 是如何选择出最合适的 CDN 节点呢？</strong> GSLB 会根据请求的 IP 地址、CDN 节点状态（比如负载情况、性能、响应时间、带宽）等指标来综合判断具体返回哪一个 CDN 节点的地址。</p><h3 id="如何防止资源被盗刷" tabindex="-1"><a class="header-anchor" href="#如何防止资源被盗刷"><span>如何防止资源被盗刷？</span></a></h3><p>如果我们的资源被其他用户或者网站非法盗刷的话，将会是一笔不小的开支。</p><p>解决这个问题最常用最简单的办法设置 <strong>Referer 防盗链</strong>，具体来说就是根据 HTTP 请求的头信息里面的 Referer 字段对请求进行限制。我们可以通过 Referer 字段获取到当前请求页面的来源页面的网站地址，这样我们就能确定请求是否来自合法的网站。</p><p>CDN 服务提供商几乎都提供了这种比较基础的防盗链机制。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cnd-tencent-cloud-anti-theft.png" alt="腾讯云 CDN Referer 防盗链配置" tabindex="0"><figcaption>腾讯云 CDN Referer 防盗链配置</figcaption></figure><p>不过，如果站点的防盗链配置允许 Referer 为空的话，通过隐藏 Referer，可以直接绕开防盗链。</p><p>通常情况下，我们会配合其他机制来确保静态资源被盗用，一种常用的机制是 <strong>时间戳防盗链</strong> 。相比之下，<strong>时间戳防盗链</strong> 的安全性更强一些。时间戳防盗链加密的 URL 具有时效性，过期之后就无法再被允许访问。</p><p>时间戳防盗链的 URL 通常会有两个参数一个是签名字符串，一个是过期时间。签名字符串一般是通过对用户设定的加密字符串、请求路径、过期时间通过 MD5 哈希算法取哈希的方式获得。</p><p>时间戳防盗链 URL 示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>http://cdn.wangsu.com/4/123.mp3? wsSecret=79aead3bd7b5db4adeffb93a010298b5&amp;wsTime=1601026312
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>wsSecret</code>：签名字符串。</li><li><code>wsTime</code>: 过期时间。</li></ul><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/timestamp-anti-theft.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>时间戳防盗链的实现也比较简单，并且可靠性较高，推荐使用。并且，绝大部分 CDN 服务提供商都提供了开箱即用的时间戳防盗链机制。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/cdn/qiniuyun-timestamp-anti-theft.png" alt="七牛云时间戳防盗链配置" tabindex="0"><figcaption>七牛云时间戳防盗链配置</figcaption></figure><p>除了 Referer 防盗链和时间戳防盗链之外，你还可以 IP 黑白名单配置、IP 访问限频配置等机制来防盗刷。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ul><li>CDN 就是将静态资源分发到多个不同的地方以实现就近访问，进而加快静态资源的访问速度，减轻服务器以及带宽的负担。</li><li>基于成本、稳定性和易用性考虑，建议直接选择专业的云厂商（比如阿里云、腾讯云、华为云、青云）或者 CDN 厂商（比如网宿、蓝汛）提供的开箱即用的 CDN 服务。</li><li>GSLB （Global Server Load Balance，全局负载均衡）是 CDN 的大脑，负责多个 CDN 节点之间相互协作，最常用的是基于 DNS 的 GSLB。CDN 会通过 GSLB 找到最合适的 CDN 节点。</li><li>为了防止静态资源被盗用，我们可以利用 <strong>Referer 防盗链</strong> + <strong>时间戳防盗链</strong> 。</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,52),s={href:"https://developer.qiniu.com/fusion/kb/1670/timestamp-hotlinking-prevention",target:"_blank",rel:"noopener noreferrer"},d={href:"https://mp.weixin.qq.com/s/Pp0C8ALUXsmYCUkM5QnkQw",target:"_blank",rel:"noopener noreferrer"},h={href:"http://gk.link/a/11yOG",target:"_blank",rel:"noopener noreferrer"};function u(m,N){const n=o("ExternalLinkIcon");return r(),c("div",null,[g,e("ul",null,[e("li",null,[t("时间戳防盗链 - 七牛云 CDN："),e("a",s,[t("https://developer.qiniu.com/fusion/kb/1670/timestamp-hotlinking-prevention"),i(n)])]),e("li",null,[t("CDN 是个啥玩意？一文说个明白："),e("a",d,[t("https://mp.weixin.qq.com/s/Pp0C8ALUXsmYCUkM5QnkQw"),i(n)])]),e("li",null,[t("《透视 HTTP 协议》- 37 | CDN：加速我们的网络服务："),e("a",h,[t("http://gk.link/a/11yOG"),i(n)])])])])}const D=a(l,[["render",u],["__file","cdn.html.vue"]]),v=JSON.parse('{"path":"/high-performance/cdn.html","title":"CDN常见问题总结","lang":"zh-CN","frontmatter":{"title":"CDN常见问题总结","category":"高性能","head":[["meta",{"name":"keywords","content":"CDN,内容分发网络"}],["meta",{"name":"description","content":"CDN 就是将静态资源分发到多个不同的地方以实现就近访问，进而加快静态资源的访问速度，减轻服务器以及带宽的负担。"}],["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/high-performance/cdn.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"CDN常见问题总结"}],["meta",{"property":"og:description","content":"什么是 CDN ？ CDN 全称是 Content Delivery Network/Content Distribution Network，翻译过的意思是 内容分发网络 。 我们可以将内容分发网络拆开来看： 内容：指的是静态资源比如图片、视频、文档、JS、CSS、HTML。 分发网络：指的是将这些静态资源分发到位于多个不同的地理位置机房中的服务器上..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/jingdong-wuliu-cangpei.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"CDN常见问题总结"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CDN常见问题总结\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/jingdong-wuliu-cangpei.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-101.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-aliyun-dcdn.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-back-to-source.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-refresh-warm-up.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cdn-overview.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/cnd-tencent-cloud-anti-theft.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/timestamp-anti-theft.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/cdn/qiniuyun-timestamp-anti-theft.png\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]],"description":"什么是 CDN ？ CDN 全称是 Content Delivery Network/Content Distribution Network，翻译过的意思是 内容分发网络 。 我们可以将内容分发网络拆开来看： 内容：指的是静态资源比如图片、视频、文档、JS、CSS、HTML。 分发网络：指的是将这些静态资源分发到位于多个不同的地理位置机房中的服务器上..."},"headers":[{"level":2,"title":"什么是 CDN ？","slug":"什么是-cdn","link":"#什么是-cdn","children":[]},{"level":2,"title":"CDN 工作原理是什么？","slug":"cdn-工作原理是什么","link":"#cdn-工作原理是什么","children":[{"level":3,"title":"静态资源是如何被缓存到 CDN 节点中的？","slug":"静态资源是如何被缓存到-cdn-节点中的","link":"#静态资源是如何被缓存到-cdn-节点中的","children":[]},{"level":3,"title":"如何找到最合适的 CDN 节点？","slug":"如何找到最合适的-cdn-节点","link":"#如何找到最合适的-cdn-节点","children":[]},{"level":3,"title":"如何防止资源被盗刷？","slug":"如何防止资源被盗刷","link":"#如何防止资源被盗刷","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":7.99,"words":2396},"filePathRelative":"high-performance/cdn.md","localizedDate":"2024年3月18日","excerpt":"<h2>什么是 CDN ？</h2>\\n<p><strong>CDN</strong> 全称是 Content Delivery Network/Content Distribution Network，翻译过的意思是 <strong>内容分发网络</strong> 。</p>\\n<p>我们可以将内容分发网络拆开来看：</p>\\n<ul>\\n<li>内容：指的是静态资源比如图片、视频、文档、JS、CSS、HTML。</li>\\n<li>分发网络：指的是将这些静态资源分发到位于多个不同的地理位置机房中的服务器上，这样，就可以实现静态资源的就近访问比如北京的用户直接访问北京机房的数据。</li>\\n</ul>","autoDesc":true}');export{D as comp,v as data};
