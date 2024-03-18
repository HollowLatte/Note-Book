import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as s,a as e,d as o,b as p,e as t}from"./app-6eIwu4TL.js";const c={},l=t('<h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h2><p>引入rocketmq-spring-boot-starter依赖后，配置了RocketMQ相关连接参数后，启动SpringBoot失败，异常信息是：缺失<code>RocketMQTemplate</code> 的Bean</p><h2 id="可能原因" tabindex="-1"><a class="header-anchor" href="#可能原因"><span>可能原因</span></a></h2><p>以为需要自己手动配置RocketMQTemplate的Bean</p><h2 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析"><span>原因分析</span></a></h2><p>排查步骤：</p>',6),g=e("li",null,"当使用SpringBoot3以下版本时是正常的，比如SpringBoot2.7版本，引入依赖配置参数后即可正常启动。因此，应该是SpringBoot3版本某些特性导致的",-1),u={href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide#auto-configuration-files",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Spring Boot 2.7 introduced a new META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports file
for registering auto-configurations, while maintaining backwards compatibility with registration in spring.factories.
With this release, support for registering auto-configurations in spring.factories using the
org.springframework.boot.autoconfigure.EnableAutoConfiguration key has been removed in favor of the imports file. Other
entries in spring.factories under other keys are unaffected.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=e("li",null,[o("上面文档提到的，SpringBoot2.7引入了一个新的imports文件来注册自动配置，并且保持了原本spring.factories的注册自动配置，即两种方式都可以。 但是SpringBoot3中删除了对spring.factories的注册自动配置的支持。所以翻看 rocketmq-spring-boot-starter 具体的包，发现确实只有"),e("code",null,"spring.factories"),o(" 文件，而没有"),e("code",null,"META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports"),o(" 文件")],-1),h=t(`<h2 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因"><span>问题原因</span></a></h2><p>引入的 <code>rocketmq-spring-boot-starter</code> 依赖版本为2.2.3，其中并没有很好地支持SpringBoot3，只带了<code>spring.factories</code> 注册自动配置的方式，而SpringBoot3只支持通过<code>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code> 文件来注册自动配置</p><p><strong>简单来说，就是SpringBoot3的注册自动配置文件的方式变了，而2.2.3版本的RocketMQ starter还未支持</strong></p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><p>在代码的<code>resource</code>目录下创建<code>META-INF/spring</code> 这两级目录，再创建名称为<code>org.springframework.boot.autoconfigure.AutoConfiguration.imports</code>的文件，内容如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span>RocketMQAutoConfiguration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>上面的其实等效于SpringBoot3以前的<code>META-INF/spring.factories</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span>EnableAutoConfiguration</span><span class="token operator">=</span>\\
<span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span>RocketMQAutoConfiguration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,7);function k(f,b){const n=i("ExternalLinkIcon");return r(),s("div",null,[l,e("ol",null,[g,e("li",null,[o("查看SpringBoot3官方文档，在Migration-Guide中找到一个关键的说明： "),e("a",u,[o("Spring-Boot-3.0-Migration-Guide"),p(n)]),d]),m]),h])}const M=a(c,[["render",k],["__file","springboot3-rocketmq-no-bean.html.vue"]]),S=JSON.parse('{"path":"/problem/backend-problem/java/spring/springboot3-rocketmq-no-bean.html","title":"SpringBoot3整合RocketMQ缺失Bean","lang":"zh-CN","frontmatter":{"title":"SpringBoot3整合RocketMQ缺失Bean","author":null,"category":"RocketMQ","tag":"RocketMQ","date":"2024-02-05T00:00:00.000Z","description":"问题现象 引入rocketmq-spring-boot-starter依赖后，配置了RocketMQ相关连接参数后，启动SpringBoot失败，异常信息是：缺失RocketMQTemplate 的Bean 可能原因 以为需要自己手动配置RocketMQTemplate的Bean 原因分析 排查步骤： 当使用SpringBoot3以下版本时是正常的，比...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/problem/backend-problem/java/spring/springboot3-rocketmq-no-bean.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"SpringBoot3整合RocketMQ缺失Bean"}],["meta",{"property":"og:description","content":"问题现象 引入rocketmq-spring-boot-starter依赖后，配置了RocketMQ相关连接参数后，启动SpringBoot失败，异常信息是：缺失RocketMQTemplate 的Bean 可能原因 以为需要自己手动配置RocketMQTemplate的Bean 原因分析 排查步骤： 当使用SpringBoot3以下版本时是正常的，比..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2024-02-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot3整合RocketMQ缺失Bean\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":2,"title":"可能原因","slug":"可能原因","link":"#可能原因","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]},{"level":2,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":1.54,"words":462},"filePathRelative":"problem/backend-problem/java/spring/springboot3-rocketmq-no-bean.md","localizedDate":"2024年2月5日","excerpt":"<h2>问题现象</h2>\\n<p>引入rocketmq-spring-boot-starter依赖后，配置了RocketMQ相关连接参数后，启动SpringBoot失败，异常信息是：缺失<code>RocketMQTemplate</code>\\n的Bean</p>\\n<h2>可能原因</h2>\\n<p>以为需要自己手动配置RocketMQTemplate的Bean</p>\\n<h2>原因分析</h2>\\n<p>排查步骤：</p>\\n<ol>\\n<li>当使用SpringBoot3以下版本时是正常的，比如SpringBoot2.7版本，引入依赖配置参数后即可正常启动。因此，应该是SpringBoot3版本某些特性导致的</li>\\n<li>查看SpringBoot3官方文档，在Migration-Guide中找到一个关键的说明：\\n<a href=\\"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide#auto-configuration-files\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring-Boot-3.0-Migration-Guide</a><div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>Spring Boot 2.7 introduced a new META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports file\\nfor registering auto-configurations, while maintaining backwards compatibility with registration in spring.factories.\\nWith this release, support for registering auto-configurations in spring.factories using the\\norg.springframework.boot.autoconfigure.EnableAutoConfiguration key has been removed in favor of the imports file. Other\\nentries in spring.factories under other keys are unaffected.\\n</code></pre></div></li>\\n<li>上面文档提到的，SpringBoot2.7引入了一个新的imports文件来注册自动配置，并且保持了原本spring.factories的注册自动配置，即两种方式都可以。\\n但是SpringBoot3中删除了对spring.factories的注册自动配置的支持。所以翻看 rocketmq-spring-boot-starter\\n具体的包，发现确实只有<code>spring.factories</code>\\n文件，而没有<code>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code>\\n文件</li>\\n</ol>","autoDesc":true}');export{M as comp,S as data};
