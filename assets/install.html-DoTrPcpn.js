import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as s,c as i,a as e,d as t,b as n,e as a}from"./app-DmUsX9Nr.js";const c={},p=a('<h2 id="启用wsl2" tabindex="-1"><a class="header-anchor" href="#启用wsl2"><span>启用WSL2</span></a></h2><p>以下命令都需要以管理员身份执行</p><p>1.输入以下命令后重启系统：</p><p><code>dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart</code></p><p>2.输入以下命令后重启系统：</p><p><code>dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart</code></p><p>3.执行以下命令，将WSL默认版本改为WSL2</p><p><code>wsl --set-default-version 2</code></p><blockquote><p>设置 WSL 版本为 WSL2</p></blockquote>',9),d={href:"https://link.zhihu.com/?target=https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel",target:"_blank",rel:"noopener noreferrer"},u=a('<blockquote><p>下载 WSL2 Kernel。</p></blockquote><h2 id="安装linux发行版" tabindex="-1"><a class="header-anchor" href="#安装linux发行版"><span>安装Linux发行版</span></a></h2><p>安装后在 PowerShell 中执行 wsl -l -v 可以看到当前的发行版是否跑在 WSL2 中，如果显示版本是1...请重复上面的安装步骤。</p><h3 id="ubuntu-推荐" tabindex="-1"><a class="header-anchor" href="#ubuntu-推荐"><span>Ubuntu（推荐）</span></a></h3><p>在 Microsoft Store 中搜索并进行安装，推荐使用该方式安装</p><h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>CentOS</span></a></h3>',6),m={href:"https://github.com/mishamosher/CentOS-WSL",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"下载后运行里面的exe文件即可安装",-1),f=e("p",null,"值得注意的是，下载后的CentOS不能使用service或systemctl命令，因此需慎重选择",-1);function w(b,S){const o=r("ExternalLinkIcon");return s(),i("div",null,[p,e("p",null,[t("报错时，请访问 "),e("a",d,[t("https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel"),n(o)])]),u,e("p",null,[t("通过GitHub下载："),e("a",m,[t("mishamosher/CentOS-WSL"),n(o)]),t(" 自己想要的版本")]),h,f])}const L=l(c,[["render",w],["__file","install.html.vue"]]),g=JSON.parse('{"path":"/practice-manual/windows/wsl2/install.html","title":"WSL2安装","lang":"zh-CN","frontmatter":{"title":"WSL2安装","category":"Windows","tag":"WSL2","description":"启用WSL2 以下命令都需要以管理员身份执行 1.输入以下命令后重启系统： dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart 2.输入以下命令后重启系统： dism.exe /online /enable-fea...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/practice-manual/windows/wsl2/install.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"WSL2安装"}],["meta",{"property":"og:description","content":"启用WSL2 以下命令都需要以管理员身份执行 1.输入以下命令后重启系统： dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart 2.输入以下命令后重启系统： dism.exe /online /enable-fea..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"WSL2"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WSL2安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"启用WSL2","slug":"启用wsl2","link":"#启用wsl2","children":[]},{"level":2,"title":"安装Linux发行版","slug":"安装linux发行版","link":"#安装linux发行版","children":[{"level":3,"title":"Ubuntu（推荐）","slug":"ubuntu-推荐","link":"#ubuntu-推荐","children":[]},{"level":3,"title":"CentOS","slug":"centos","link":"#centos","children":[]}]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":0.84,"words":252},"filePathRelative":"practice-manual/windows/wsl2/install.md","localizedDate":"2024年3月28日","excerpt":"<h2>启用WSL2</h2>\\n<p>以下命令都需要以管理员身份执行</p>\\n<p>1.输入以下命令后重启系统：</p>\\n<p><code>dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart</code></p>\\n<p>2.输入以下命令后重启系统：</p>\\n<p><code>dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart</code></p>","autoDesc":true}');export{L as comp,g as data};