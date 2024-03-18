import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as a,c as l,a as e,d as t,b as o,e as n}from"./app-6eIwu4TL.js";const g={},p=e("blockquote",null,[e("p",null,"本文授权转载自：https://ken.io/note/sso-design-implement 作者：ken.io")],-1),c=e("h2",{id:"sso-介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sso-介绍"},[e("span",null,"SSO 介绍")])],-1),d=e("h3",{id:"什么是-sso",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是-sso"},[e("span",null,"什么是 SSO？")])],-1),h=e("p",null,"SSO 英文全称 Single Sign On，单点登录。SSO 是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。",-1),u=e("p",null,"例如你登录网易账号中心（https://reg.163.com/ ）之后访问以下站点都是登录状态。",-1),m={href:"https://v.163.com/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://blog.163.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://love.163.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.kaola.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.lofter.com/",target:"_blank",rel:"noopener noreferrer"},y=n('<h3 id="sso-有什么好处" tabindex="-1"><a class="header-anchor" href="#sso-有什么好处"><span>SSO 有什么好处？</span></a></h3><ol><li><strong>用户角度</strong> :用户能够做到一次登录多次使用，无需记录多套用户名和密码，省心。</li><li><strong>系统管理员角度</strong> : 管理员只需维护好一个统一的账号中心就可以了，方便。</li><li><strong>新系统开发角度:</strong> 新系统开发时只需直接对接统一的账号中心即可，简化开发流程，省时。</li></ol><h2 id="sso-设计与实现" tabindex="-1"><a class="header-anchor" href="#sso-设计与实现"><span>SSO 设计与实现</span></a></h2><p>本篇文章也主要是为了探讨如何设计&amp;实现一个 SSO 系统</p><p>以下为需要实现的核心功能：</p><ul><li>单点登录</li><li>单点登出</li><li>支持跨域单点登录</li><li>支持跨域单点登出</li></ul><h3 id="核心应用与依赖" tabindex="-1"><a class="header-anchor" href="#核心应用与依赖"><span>核心应用与依赖</span></a></h3><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-system.png-kblb.png" alt="单点登录（SSO）设计" tabindex="0"><figcaption>单点登录（SSO）设计</figcaption></figure><table><thead><tr><th>应用/模块/对象</th><th>说明</th></tr></thead><tbody><tr><td>前台站点</td><td>需要登录的站点</td></tr><tr><td>SSO 站点-登录</td><td>提供登录的页面</td></tr><tr><td>SSO 站点-登出</td><td>提供注销登录的入口</td></tr><tr><td>SSO 服务-登录</td><td>提供登录服务</td></tr><tr><td>SSO 服务-登录状态</td><td>提供登录状态校验/登录信息查询的服务</td></tr><tr><td>SSO 服务-登出</td><td>提供用户注销登录的服务</td></tr><tr><td>数据库</td><td>存储用户账户信息</td></tr><tr><td>缓存</td><td>存储用户的登录信息，通常使用 Redis</td></tr></tbody></table><h3 id="用户登录状态的存储与校验" tabindex="-1"><a class="header-anchor" href="#用户登录状态的存储与校验"><span>用户登录状态的存储与校验</span></a></h3>',10),_={href:"https://ken.io/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://ken.io/note/session-principle-skill",target:"_blank",rel:"noopener noreferrer"},v=n('<p>用户登录成功之后，生成 AuthToken 交给客户端保存。如果是浏览器，就保存在 Cookie 中。如果是手机 App 就保存在 App 本地缓存中。本篇主要探讨基于 Web 站点的 SSO。</p><p>用户在浏览需要登录的页面时，客户端将 AuthToken 提交给 SSO 服务校验登录状态/获取用户登录信息</p><p>对于登录信息的存储，建议采用 Redis，使用 Redis 集群来存储登录信息，既可以保证高可用，又可以线性扩充。同时也可以让 SSO 服务满足负载均衡/可伸缩的需求。</p><table><thead><tr><th>对象</th><th>说明</th></tr></thead><tbody><tr><td>AuthToken</td><td>直接使用 UUID/GUID 即可，如果有验证 AuthToken 合法性需求，可以将 UserName+时间戳加密生成，服务端解密之后验证合法性</td></tr><tr><td>登录信息</td><td>通常是将 UserId，UserName 缓存起来</td></tr></tbody></table><h3 id="用户登录-登录校验" tabindex="-1"><a class="header-anchor" href="#用户登录-登录校验"><span>用户登录/登录校验</span></a></h3><p><strong>登录时序图</strong></p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-login-sequence.png-kbrb.png" alt="SSO系统设计-登录时序图" tabindex="0"><figcaption>SSO系统设计-登录时序图</figcaption></figure><p>按照上图，用户登录后 AuthToken 保存在 Cookie 中。 domain=test.com 浏览器会将 domain 设置成 .test.com，</p><p>这样访问所有 *.test.com 的 web 站点，都会将 AuthToken 携带到服务器端。 然后通过 SSO 服务，完成对用户状态的校验/用户登录信息的获取</p><p><strong>登录信息获取/登录状态校验</strong></p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-logincheck-sequence.png-kbrb.png" alt="SSO系统设计-登录信息获取/登录状态校验" tabindex="0"><figcaption>SSO系统设计-登录信息获取/登录状态校验</figcaption></figure><h3 id="用户登出" tabindex="-1"><a class="header-anchor" href="#用户登出"><span>用户登出</span></a></h3><p>用户登出时要做的事情很简单：</p><ol><li>服务端清除缓存（Redis）中的登录状态</li><li>客户端清除存储的 AuthToken</li></ol><p><strong>登出时序图</strong></p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-logout-sequence.png-kbrb.png" alt="SSO系统设计-用户登出" tabindex="0"><figcaption>SSO系统设计-用户登出</figcaption></figure><h3 id="跨域登录、登出" tabindex="-1"><a class="header-anchor" href="#跨域登录、登出"><span>跨域登录、登出</span></a></h3><p>前面提到过，核心思路是客户端存储 AuthToken，服务器端通过 Redis 存储登录信息。由于客户端是将 AuthToken 存储在 Cookie 中的。所以跨域要解决的问题，就是如何解决 Cookie 的跨域读写问题。</p><p>解决跨域的核心思路就是：</p><ul><li>登录完成之后通过回调的方式，将 AuthToken 传递给主域名之外的站点，该站点自行将 AuthToken 保存在当前域下的 Cookie 中。</li><li>登出完成之后通过回调的方式，调用非主域名站点的登出页面，完成设置 Cookie 中的 AuthToken 过期的操作。</li></ul><p><strong>跨域登录（主域名已登录）</strong></p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-crossdomain-login-loggedin-sequence.png-kbrb.png" alt="SSO系统设计-跨域登录（主域名已登录）" tabindex="0"><figcaption>SSO系统设计-跨域登录（主域名已登录）</figcaption></figure><p><strong>跨域登录（主域名未登录）</strong></p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-crossdomain-login-unlogin-sequence.png-kbrb.png" alt="SSO系统设计-跨域登录（主域名未登录）" tabindex="0"><figcaption>SSO系统设计-跨域登录（主域名未登录）</figcaption></figure><p><strong>跨域登出</strong></p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-crossdomain-logout-sequence.png-kbrb.png" alt="SSO系统设计-跨域登出" tabindex="0"><figcaption>SSO系统设计-跨域登出</figcaption></figure><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><ul><li>关于方案：这次设计方案更多是提供实现思路。如果涉及到 APP 用户登录等情况，在访问 SSO 服务时，增加对 APP 的签名验证就好了。当然，如果有无线网关，验证签名不是问题。</li><li>关于时序图：时序图中并没有包含所有场景，只列举了核心/主要场景，另外对于一些不影响理解思路的消息能省就省了。</li></ul>',28);function w(j,x){const s=r("ExternalLinkIcon");return a(),l("div",null,[p,c,d,h,u,e("ul",null,[e("li",null,[t("网易直播 "),e("a",m,[t("https://v.163.com"),o(s)])]),e("li",null,[t("网易博客 "),e("a",S,[t("https://blog.163.com"),o(s)])]),e("li",null,[t("网易花田 "),e("a",b,[t("https://love.163.com"),o(s)])]),e("li",null,[t("网易考拉 "),e("a",k,[t("https://www.kaola.com"),o(s)])]),e("li",null,[t("网易 Lofter "),e("a",f,[t("http://www.lofter.com"),o(s)])])]),y,e("p",null,[t("常见的 Web 框架对于 Session 的实现都是生成一个 SessionId 存储在浏览器 Cookie 中。然后将 Session 内容存储在服务器端内存中，这个 "),e("a",_,[t("ken.io"),o(s)]),t(" 在之前"),e("a",O,[t("Session 工作原理"),o(s)]),t("中也提到过。整体也是借鉴这个思路。")]),v])}const q=i(g,[["render",w],["__file","sso-intro.html.vue"]]),N=JSON.parse('{"path":"/system-design/security/sso-intro.html","title":"SSO 单点登录详解","lang":"zh-CN","frontmatter":{"title":"SSO 单点登录详解","category":"系统设计","tag":["安全"],"description":"本文授权转载自：https://ken.io/note/sso-design-implement 作者：ken.io SSO 介绍 什么是 SSO？ SSO 英文全称 Single Sign On，单点登录。SSO 是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。 例如你登录网易账号中心（https://reg.163.com/...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/system-design/security/sso-intro.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"SSO 单点登录详解"}],["meta",{"property":"og:description","content":"本文授权转载自：https://ken.io/note/sso-design-implement 作者：ken.io SSO 介绍 什么是 SSO？ SSO 英文全称 Single Sign On，单点登录。SSO 是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。 例如你登录网易账号中心（https://reg.163.com/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-system.png-kblb.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SSO 单点登录详解"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SSO 单点登录详解\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-system.png-kblb.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-login-sequence.png-kbrb.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-logincheck-sequence.png-kbrb.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-logout-sequence.png-kbrb.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-crossdomain-login-loggedin-sequence.png-kbrb.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-crossdomain-login-unlogin-sequence.png-kbrb.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/security/sso/sso-crossdomain-logout-sequence.png-kbrb.png\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"SSO 介绍","slug":"sso-介绍","link":"#sso-介绍","children":[{"level":3,"title":"什么是 SSO？","slug":"什么是-sso","link":"#什么是-sso","children":[]},{"level":3,"title":"SSO 有什么好处？","slug":"sso-有什么好处","link":"#sso-有什么好处","children":[]}]},{"level":2,"title":"SSO 设计与实现","slug":"sso-设计与实现","link":"#sso-设计与实现","children":[{"level":3,"title":"核心应用与依赖","slug":"核心应用与依赖","link":"#核心应用与依赖","children":[]},{"level":3,"title":"用户登录状态的存储与校验","slug":"用户登录状态的存储与校验","link":"#用户登录状态的存储与校验","children":[]},{"level":3,"title":"用户登录/登录校验","slug":"用户登录-登录校验","link":"#用户登录-登录校验","children":[]},{"level":3,"title":"用户登出","slug":"用户登出","link":"#用户登出","children":[]},{"level":3,"title":"跨域登录、登出","slug":"跨域登录、登出","link":"#跨域登录、登出","children":[]}]},{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":4.51,"words":1352},"filePathRelative":"system-design/security/sso-intro.md","localizedDate":"2024年3月18日","excerpt":"<blockquote>\\n<p>本文授权转载自：https://ken.io/note/sso-design-implement 作者：ken.io</p>\\n</blockquote>\\n<h2>SSO 介绍</h2>\\n<h3>什么是 SSO？</h3>\\n<p>SSO 英文全称 Single Sign On，单点登录。SSO 是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。</p>\\n<p>例如你登录网易账号中心（https://reg.163.com/ ）之后访问以下站点都是登录状态。</p>\\n<ul>\\n<li>网易直播 <a href=\\"https://v.163.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://v.163.com</a></li>\\n<li>网易博客 <a href=\\"https://blog.163.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.163.com</a></li>\\n<li>网易花田 <a href=\\"https://love.163.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://love.163.com</a></li>\\n<li>网易考拉 <a href=\\"https://www.kaola.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.kaola.com</a></li>\\n<li>网易 Lofter <a href=\\"http://www.lofter.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://www.lofter.com</a></li>\\n</ul>","autoDesc":true}');export{q as comp,N as data};
