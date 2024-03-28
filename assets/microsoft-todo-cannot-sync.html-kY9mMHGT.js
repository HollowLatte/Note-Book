import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as r,a as o,d as t}from"./app-DmUsX9Nr.js";const a={},i=o("h2",{id:"问题",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#问题"},[o("span",null,"问题")])],-1),c=o("p",null,"在使用proxy的情况下，Microsoft ToDo、邮件、日历等UWP均无法正常同步。",-1),p=o("p",null,"这是因为： UWP 是微软在 Windows 10 中引入的新概念，由于所有 UWP 应用均运行在被称为 App Container 的虚拟沙箱环境中，其安全性及纯净度远胜于传统的 EXE 应用。但 App Container 机制同时也阻止了网络流量发送到本机（即 loopback）， 使大部分网络抓包调试工具无法对 UWP 应用进行流量分析。同样的，该机制也阻止了 UWP 应用访问 localhost，即使你在系统设置中启用了proxy，也无法令 UWP 应用访问本地proxy服务器。",-1),l=o("h2",{id:"解决",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#解决"},[o("span",null,"解决")])],-1),s=o("p",null,[t("proxy的General->UWP Loopback，会出现一个"),o("code",null,"AppContainer Loopback Exemption Utility"),t("，然后找到想要使其走proxy的应用，例如Microsoft ToDo，就找DisplayName中名称匹配的然后勾选并Save Changes即可")],-1),d=[i,c,p,l,s];function m(h,y){return n(),r("div",null,d)}const _=e(a,[["render",m],["__file","microsoft-todo-cannot-sync.html.vue"]]),W=JSON.parse('{"path":"/problem/non-dev/windows/microsoft-todo-cannot-sync.html","title":"Microsoft ToDo无法同步","lang":"zh-CN","frontmatter":{"title":"Microsoft ToDo无法同步","author":null,"category":"Windows","tag":"Windows","description":"问题 在使用proxy的情况下，Microsoft ToDo、邮件、日历等UWP均无法正常同步。 这是因为： UWP 是微软在 Windows 10 中引入的新概念，由于所有 UWP 应用均运行在被称为 App Container 的虚拟沙箱环境中，其安全性及纯净度远胜于传统的 EXE 应用。但 App Container 机制同时也阻止了网络流量发送...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/problem/non-dev/windows/microsoft-todo-cannot-sync.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Microsoft ToDo无法同步"}],["meta",{"property":"og:description","content":"问题 在使用proxy的情况下，Microsoft ToDo、邮件、日历等UWP均无法正常同步。 这是因为： UWP 是微软在 Windows 10 中引入的新概念，由于所有 UWP 应用均运行在被称为 App Container 的虚拟沙箱环境中，其安全性及纯净度远胜于传统的 EXE 应用。但 App Container 机制同时也阻止了网络流量发送..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Microsoft ToDo无法同步\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"解决","slug":"解决","link":"#解决","children":[]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"problem/non-dev/windows/microsoft-todo-cannot-sync.md","localizedDate":"2024年3月28日","excerpt":"<h2>问题</h2>\\n<p>在使用proxy的情况下，Microsoft ToDo、邮件、日历等UWP均无法正常同步。</p>\\n<p>这是因为：\\nUWP 是微软在 Windows 10 中引入的新概念，由于所有 UWP 应用均运行在被称为 App Container 的虚拟沙箱环境中，其安全性及纯净度远胜于传统的\\nEXE 应用。但 App Container 机制同时也阻止了网络流量发送到本机（即 loopback）， 使大部分网络抓包调试工具无法对 UWP\\n应用进行流量分析。同样的，该机制也阻止了 UWP 应用访问 localhost，即使你在系统设置中启用了proxy，也无法令 UWP\\n应用访问本地proxy服务器。</p>","autoDesc":true}');export{_ as comp,W as data};