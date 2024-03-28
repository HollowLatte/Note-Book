import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as o,a,d as e,b as s,e as l}from"./app-DmUsX9Nr.js";const p={},d=a("blockquote",null,[a("p",null,"这部分内容主要根据 Gradle 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。")],-1),c=a("p",null,"Gradle 这部分内容属于可选内容，可以根据自身需求决定是否学习，目前国内还是使用 Maven 普遍一些。",-1),u=a("h2",{id:"gradle-介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#gradle-介绍"},[a("span",null,"Gradle 介绍")])],-1),g=a("p",null,"Gradle 官方文档是这样介绍的 Gradle 的：",-1),v={href:"https://en.wikipedia.org/wiki/Build_automation",target:"_blank",rel:"noopener noreferrer"},k=a("p",null,"Gradle 是一个开源的构建自动化工具，它足够灵活，可以构建几乎任何类型的软件。Gradle 对你要构建什么或者如何构建它做了很少的假设。这使得 Gradle 特别灵活。",-1),h=l('<p>简单来说，Gradle 就是一个运行在 JVM 上的自动化的项目构建工具，用来帮助我们自动构建项目。</p><p>对于开发者来说，Gradle 的主要作用主要有 3 个：</p><ol><li><strong>项目构建</strong>：提供标准的、跨平台的自动化项目构建方式。</li><li><strong>依赖管理</strong>：方便快捷的管理项目依赖的资源（jar 包），避免资源间的版本冲突问题。</li><li><strong>统一开发结构</strong>：提供标准的、统一的项目结构。</li></ol><p>Gradle 构建脚本是使用 Groovy 或 Kotlin 语言编写的，表达能力非常强，也足够灵活。</p><h2 id="groovy-介绍" tabindex="-1"><a class="header-anchor" href="#groovy-介绍"><span>Groovy 介绍</span></a></h2><p>Gradle 是运行在 JVM 上的一个程序，它可以使用 Groovy 来编写构建脚本。</p><p>Groovy 是运行在 JVM 上的脚本语言，是基于 Java 扩展的动态语言，它的语法和 Java 非常的相似，可以使用 Java 的类库。Groovy 可以用于面向对象编程，也可以用作纯粹的脚本语言。在语言的设计上它吸纳了 Java、Python、Ruby 和 Smalltalk 语言的优秀特性，比如动态类型转换、闭包和元编程支持。</p><p>我们可以用学习 Java 的方式去学习 Groovy ，学习成本相对来说还是比较低的，即使开发过程中忘记 Groovy 语法，也可以用 Java 语法继续编码。</p><p>基于 JVM 的语言有很多种比如 Groovy，Kotlin，Java，Scala，他们最终都会编译生成 Java 字节码文件并在 JVM 上运行。</p><h2 id="gradle-优势" tabindex="-1"><a class="header-anchor" href="#gradle-优势"><span>Gradle 优势</span></a></h2><p>Gradle 是新一代的构建系统，具有高效和灵活等诸多优势，广泛用于 Java 开发。不仅 Android 将其作为官方构建系统, 越来越多的 Java 项目比如 Spring Boot 也慢慢迁移到 Gradle。</p><ul><li>在灵活性上，Gradle 支持基于 Groovy 语言编写脚本，侧重于构建过程的灵活性，适合于构建复杂度较高的项目，可以完成非常复杂的构建。</li><li>在粒度性上，Gradle 构建的粒度细化到了每一个 task 之中。并且它所有的 Task 源码都是开源的，在我们掌握了这一整套打包流程后，我们就可以通过去修改它的 Task 去动态改变其执行流程。</li><li>在扩展性上，Gradle 支持插件机制，所以我们可以复用这些插件，就如同复用库一样简单方便。</li></ul><h2 id="gradle-wrapper-介绍" tabindex="-1"><a class="header-anchor" href="#gradle-wrapper-介绍"><span>Gradle Wrapper 介绍</span></a></h2><p>Gradle 官方文档是这样介绍的 Gradle Wrapper 的：</p><blockquote><p>The recommended way to execute any Gradle build is with the help of the Gradle Wrapper (in short just “Wrapper”). The Wrapper is a script that invokes a declared version of Gradle, downloading it beforehand if necessary. As a result, developers can get up and running with a Gradle project quickly without having to follow manual installation processes saving your company time and money.</p><p>执行 Gradle 构建的推荐方法是借助 Gradle Wrapper(简而言之就是“Wrapper”)。Wrapper 它是一个脚本，调用了已经声明的 Gradle 版本，如果需要的话，可以预先下载它。因此，开发人员可以快速启动并运行 Gradle 项目，而不必遵循手动安装过程，从而为公司节省时间和金钱。</p></blockquote><p>我们可以称 Gradle Wrapper 为 Gradle 包装器，它将 Gradle 再次包装，让所有的 Gradle 构建方法在 Gradle 包装器的帮助下运行。</p>',16),m={href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html",target:"_blank",rel:"noopener noreferrer"},b=l(`<figure><img src="https://oss.javaguide.cn/github/javaguide/csdn/efa7a0006b04051e2b84cd116c6ccdfc.png" alt="包装器工作流程" tabindex="0"><figcaption>包装器工作流程</figcaption></figure><p>整个流程主要分为下面 3 步：</p><ol><li>首先当我们刚创建的时候，如果指定的版本没有被下载，就先会去 Gradle 的服务器中下载对应版本的压缩包；</li><li>下载完成后需要先进行解压缩并且执行批处理文件；</li><li>后续项目每次构建都会重用这个解压过的 Gradle 版本。</li></ol><p>Gradle Wrapper 会给我们带来下面这些好处：</p><ol><li>在给定的 Gradle 版本上标准化项目，从而实现更可靠和健壮的构建。</li><li>可以让我们的电脑中不安装 Gradle 环境也可以运行 Gradle 项目。</li><li>为不同的用户和执行环境（例如 IDE 或持续集成服务器）提供新的 Gradle 版本就像更改 Wrapper 定义一样简单。</li></ol><h3 id="生成-gradle-wrapper" tabindex="-1"><a class="header-anchor" href="#生成-gradle-wrapper"><span>生成 Gradle Wrapper</span></a></h3><p>如果想要生成 Gradle Wrapper 的话，需要本地配置好 Gradle 环境变量。Gradle 中已经内置了内置了 Wrapper Task，在项目根目录执行执行<code>gradle wrapper</code>命令即可帮助我们生成 Gradle Wrapper。</p><p>执行命令 <code>gradle wrapper</code> 命令时可以指定一些参数来控制 wrapper 的生成。具体有如下两个配置参数：</p><ul><li><code>--gradle-version</code> 用于指定使用的 Gradle 的版本</li><li><code>--gradle-distribution-url</code> 用于指定下载 Gradle 版本的 URL，该值的规则是 <code>http://services.gradle.org/distributions/gradle-\${gradleVersion}-bin.zip</code></li></ul><p>执行<code>gradle wrapper</code>命令之后，Gradle Wrapper 就生成完成了，项目根目录中生成如下文件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
└── gradlew.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个文件的含义如下：</p><ul><li><code>gradle-wrapper.jar</code>：包含了 Gradle 运行时的逻辑代码。</li><li><code>gradle-wrapper.properties</code>：定义了 Gradle 的版本号和 Gradle 运行时的行为属性。</li><li><code>gradlew</code>：Linux 平台下，用于执行 Gralde 命令的包装器脚本。</li><li><code>gradlew.bat</code>：Windows 平台下，用于执行 Gralde 命令的包装器脚本。</li></ul><p><code>gradle-wrapper.properties</code> 文件的内容如下：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">distributionBase</span><span class="token punctuation">=</span><span class="token value attr-value">GRADLE_USER_HOME</span>
<span class="token key attr-name">distributionPath</span><span class="token punctuation">=</span><span class="token value attr-value">wrapper/dists</span>
<span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">https\\://services.gradle.org/distributions/gradle-6.0.1-bin.zip</span>
<span class="token key attr-name">zipStoreBase</span><span class="token punctuation">=</span><span class="token value attr-value">GRADLE_USER_HOME</span>
<span class="token key attr-name">zipStorePath</span><span class="token punctuation">=</span><span class="token value attr-value">wrapper/dists</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>distributionBase</code>：Gradle 解包后存储的父目录。</li><li><code>distributionPath</code>：<code>distributionBase</code>指定目录的子目录。<code>distributionBase+distributionPath</code>就是 Gradle 解包后的存放的具体目录。</li><li><code>distributionUrl</code>：Gradle 指定版本的压缩包下载地址。</li><li><code>zipStoreBase</code>：Gradle 压缩包下载后存储父目录。</li><li><code>zipStorePath</code>：<code>zipStoreBase</code>指定目录的子目录。<code>zipStoreBase+zipStorePath</code>就是 Gradle 压缩包的存放位置。</li></ul><h3 id="更新-gradle-wrapper" tabindex="-1"><a class="header-anchor" href="#更新-gradle-wrapper"><span>更新 Gradle Wrapper</span></a></h3><p>更新 Gradle Wrapper 有 2 种方式：</p><ol><li>接修改<code>distributionUrl</code>字段，然后执行 Gradle 命令。</li><li>执行 gradlew 命令<code>gradlew wrapper –-gradle-version [version]</code>。</li></ol><p>下面的命令会将 Gradle 版本升级为 7.6。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gradlew wrapper --gradle-version <span class="token number">7.6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>gradle-wrapper.properties</code> 文件中的 <code>distributionUrl</code> 属性也发生了改变。</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">https\\://services.gradle.org/distributions/gradle-7.6-all.zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义-gradle-wrapper" tabindex="-1"><a class="header-anchor" href="#自定义-gradle-wrapper"><span>自定义 Gradle Wrapper</span></a></h3><p>Gradle 已经内置了 Wrapper Task，因此构建 Gradle Wrapper 会生成 Gradle Wrapper 的属性文件，这个属性文件可以通过自定义 Wrapper Task 来设置。比如我们想要修改要下载的 Gralde 版本为 7.6，可以这么设置：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>task <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> Wrapper</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    gradleVersion <span class="token operator">=</span> <span class="token string">&#39;7.6&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以设置 Gradle 发行版压缩包的下载地址和 Gradle 解包后的本地存储路径等配置。</p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>task <span class="token function">wrapper</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> Wrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    gradleVersion <span class="token operator">=</span> <span class="token string">&#39;7.6&#39;</span>
    distributionUrl <span class="token operator">=</span> <span class="token string">&#39;../../gradle-7.6-bin.zip&#39;</span>
    distributionPath<span class="token operator">=</span>wrapper<span class="token operator">/</span>dists
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>distributionUrl</code> 属性可以设置为本地的项目目录，你也可以设置为网络地址。</p><h2 id="gradle-任务" tabindex="-1"><a class="header-anchor" href="#gradle-任务"><span>Gradle 任务</span></a></h2><p>在 Gradle 中，任务(Task)是构建执行的单个工作单元。</p><p>Gradle 的构建是基于 Task 进行的，当你运行项目的时候，实际就是在执行了一系列的 Task 比如编译 Java 源码的 Task、生成 jar 文件的 Task。</p><p>Task 的声明方式如下（还有其他几种声明方式）：</p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="token comment">// 声明一个名字为 helloTask 的 Task</span>
task helloTask<span class="token punctuation">{</span>
     doLast<span class="token punctuation">{</span>
       println <span class="token interpolation-string"><span class="token string">&quot;Hello&quot;</span></span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个 Task 后，可以根据需要给 Task 添加不同的 Action，上面的“doLast”就是给队列尾增加一个 Action。</p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code> <span class="token comment">//在Action 队列头部添加Action</span>
 Task <span class="token function">doFirst</span><span class="token punctuation">(</span>Action<span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> Task<span class="token operator">&gt;</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
 Task <span class="token function">doFirst</span><span class="token punctuation">(</span>Closure action<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">//在Action 队列尾部添加Action</span>
 Task <span class="token function">doLast</span><span class="token punctuation">(</span>Action<span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> Task<span class="token operator">&gt;</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
 Task <span class="token function">doLast</span><span class="token punctuation">(</span>Closure action<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">//删除所有的Action</span>
 Task <span class="token function">deleteAllActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 Task 中可以有多个 Acton，从队列头部开始向队列尾部执行 Acton。</p><p>Action 代表的是一个个函数、方法，每个 Task 都是一堆 Action 按序组成的执行图。</p><p>Task 声明依赖的关键字是<code>dependsOn</code>，支持声明一个或多个依赖：</p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>task first <span class="token punctuation">{</span>
 doLast <span class="token punctuation">{</span>
        println <span class="token interpolation-string"><span class="token string">&quot;+++++first+++++&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
task second <span class="token punctuation">{</span>
 doLast <span class="token punctuation">{</span>
        println <span class="token interpolation-string"><span class="token string">&quot;+++++second+++++&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 指定多个 task 依赖</span>
task <span class="token function">print</span><span class="token punctuation">(</span>dependsOn <span class="token punctuation">:</span><span class="token punctuation">[</span>second<span class="token punctuation">,</span>first<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 doLast <span class="token punctuation">{</span>
      logger<span class="token punctuation">.</span>quiet <span class="token interpolation-string"><span class="token string">&quot;指定多个task依赖&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 指定一个 task 依赖</span>
task <span class="token function">third</span><span class="token punctuation">(</span>dependsOn <span class="token punctuation">:</span> print<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 doLast <span class="token punctuation">{</span>
      println <span class="token string">&#39;+++++third+++++&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 Task 之前，会先执行它的依赖 Task。</p><p>我们还可以设置默认 Task，脚本中我们不调用默认 Task ，也会执行。</p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>defaultTasks <span class="token string">&#39;clean&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;run&#39;</span>

task clean <span class="token punctuation">{</span>
    doLast <span class="token punctuation">{</span>
        println <span class="token string">&#39;Default Cleaning!&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

task run <span class="token punctuation">{</span>
    doLast <span class="token punctuation">{</span>
        println <span class="token string">&#39;Default Running!&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gradle 本身也内置了很多 Task 比如 copy（复制文件）、delete（删除文件）。</p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>task <span class="token function">deleteFile</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> Delete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    delete <span class="token interpolation-string"><span class="token string">&quot;C:\\\\Users\\\\guide\\\\Desktop\\\\test&quot;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gradle-插件" tabindex="-1"><a class="header-anchor" href="#gradle-插件"><span>Gradle 插件</span></a></h2><p>Gradle 提供的是一套核心的构建机制，而 Gradle 插件则是运行在这套机制上的一些具体构建逻辑，其本质上和 <code>.gradle</code> 文件是相同。你可以将 Gradle 插件看作是封装了一系列 Task 并执行的工具。</p><p>Gradle 插件主要分为两类：</p><ul><li>脚本插件：脚本插件就是一个普通的脚本文件，它可以被导入都其他构建脚本中。</li><li>二进制插件 / 对象插件：在一个单独的插件模块中定义，其他模块通过 Plugin ID 应用插件。因为这种方式发布和复用更加友好，我们一般接触到的 Gradle 插件都是指二进制插件的形式。</li></ul><p>虽然 Gradle 插件与 .gradle 文件本质上没有区别，<code>.gradle</code> 文件也能实现 Gradle 插件类似的功能。但是，Gradle 插件使用了独立模块封装构建逻辑，无论是从开发开始使用来看，Gradle 插件的整体体验都更友好。</p><ul><li><strong>逻辑复用：</strong> 将相同的逻辑提供给多个相似项目复用，减少重复维护类似逻辑开销。当然 .gradle 文件也能做到逻辑复用，但 Gradle 插件的封装性更好；</li><li><strong>组件发布：</strong> 可以将插件发布到 Maven 仓库进行管理，其他项目可以使用插件 ID 依赖。当然 .gradle 文件也可以放到一个远程路径被其他项目引用；</li><li><strong>构建配置：</strong> Gradle 插件可以声明插件扩展来暴露可配置的属性，提供定制化能力。当然 .gradle 文件也可以做到，但实现会麻烦些。</li></ul><h2 id="gradle-构建生命周期" tabindex="-1"><a class="header-anchor" href="#gradle-构建生命周期"><span>Gradle 构建生命周期</span></a></h2><p>Gradle 构建的生命周期有三个阶段：<strong>初始化阶段，配置阶段</strong>和<strong>运行阶段</strong>。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/csdn/dadbdf59fccd9a2ebf60a2d018541e52.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>在初始化阶段与配置阶段之间、配置阶段结束之后、执行阶段结束之后，我们都可以加一些定制化的 Hook。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/csdn/5c297ccc4dac83229ff3e19caee9d1d2.png" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="初始化阶段" tabindex="-1"><a class="header-anchor" href="#初始化阶段"><span>初始化阶段</span></a></h3>`,57),G={href:"https://docs.gradle.org/current/dsl/org.gradle.api.Project.html",target:"_blank",rel:"noopener noreferrer"},f=a("code",null,"settings.gradle",-1),y=l('<h3 id="配置阶段" tabindex="-1"><a class="header-anchor" href="#配置阶段"><span>配置阶段</span></a></h3><p>在配置阶段，Gradle 会解析每个工程的 <code>build.gradle</code> 文件，创建要执行的任务子集和确定各种任务之间的关系，以供执行阶段按照顺序执行，并对任务的做一些初始化配置。</p><p>每个 <code>build.gradle</code> 对应一个 Project 对象，配置阶段执行的代码包括 <code>build.gradle</code> 中的各种语句、闭包以及 Task 中的配置语句。</p><p>在配置阶段结束后，Gradle 会根据 Task 的依赖关系会创建一个 <strong>有向无环图</strong> 。</p><h3 id="运行阶段" tabindex="-1"><a class="header-anchor" href="#运行阶段"><span>运行阶段</span></a></h3><p>在运行阶段，Gradle 根据配置阶段创建和配置的要执行的任务子集，执行任务。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>',7),w={href:"https://docs.gradle.org/current/userguide/userguide.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.imooc.com/wiki/gradlebase",target:"_blank",rel:"noopener noreferrer"},x={href:"https://cloud.tencent.com/developer/article/1358357",target:"_blank",rel:"noopener noreferrer"},T={href:"https://juejin.cn/post/7067719629874921508",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.cnblogs.com/pengxurui/p/16281537.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://juejin.cn/post/6889090530593112077",target:"_blank",rel:"noopener noreferrer"};function q(A,B){const n=r("ExternalLinkIcon");return i(),o("div",null,[d,c,u,g,a("blockquote",null,[a("p",null,[e("Gradle is an open-source "),a("a",v,[e("build automation"),s(n)]),e(" tool flexible enough to build almost any type of software. Gradle makes few assumptions about what you’re trying to build or how to build it. This makes Gradle particularly flexible.")]),k]),h,a("p",null,[e("Gradle Wrapper 的工作流程图如下（图源"),a("a",m,[e("Gradle Wrapper 官方文档介绍"),s(n)]),e("）：")]),b,a("p",null,[e("Gradle 支持单项目和多项目构建。在初始化阶段，Gradle 确定哪些项目将参与构建，并为每个项目创建一个 "),a("a",G,[e("Project 实例"),s(n)]),e(" 。本质上也就是执行 "),f,e(" 脚本，从而读取整个项目中有多少个 Project 实例。")]),y,a("ul",null,[a("li",null,[e("Gradle 官方文档："),a("a",w,[e("https://docs.gradle.org/current/userguide/userguide.html"),s(n)])]),a("li",null,[e("Gradle 入门教程："),a("a",_,[e("https://www.imooc.com/wiki/gradlebase"),s(n)])]),a("li",null,[e("Groovy 快速入门看这篇就够了："),a("a",x,[e("https://cloud.tencent.com/developer/article/1358357"),s(n)])]),a("li",null,[e("【Gradle】Gradle 的生命周期详解："),a("a",T,[e("https://juejin.cn/post/7067719629874921508"),s(n)])]),a("li",null,[e("手把手带你自定义 Gradle 插件 —— Gradle 系列(2)："),a("a",j,[e("https://www.cnblogs.com/pengxurui/p/16281537.html"),s(n)])]),a("li",null,[e("Gradle 爬坑指南 -- 理解 Plugin、Task、构建流程："),a("a",W,[e("https://juejin.cn/post/6889090530593112077"),s(n)])])])])}const P=t(p,[["render",q],["__file","gradle-core-concepts.html.vue"]]),z=JSON.parse('{"path":"/tools/gradle/gradle-core-concepts.html","title":"Gradle核心概念总结","lang":"zh-CN","frontmatter":{"title":"Gradle核心概念总结","category":"开发工具","head":[["meta",{"name":"keywords","content":"Gradle,Groovy,Gradle Wrapper,Gradle 包装器,Gradle 插件"}],["meta",{"name":"description","content":"Gradle 就是一个运行在 JVM 上的自动化的项目构建工具，用来帮助我们自动构建项目。"}],["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/tools/gradle/gradle-core-concepts.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Gradle核心概念总结"}],["meta",{"property":"og:description","content":"这部分内容主要根据 Gradle 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。 Gradle 这部分内容属于可选内容，可以根据自身需求决定是否学习，目前国内还是使用 Maven 普遍一些。 Gradle 介绍 Gradle 官方文档是这样介绍的 Gradle 的： Gradle is an open-so..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/csdn/efa7a0006b04051e2b84cd116c6ccdfc.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-28T19:26:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Gradle核心概念总结"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:modified_time","content":"2024-03-28T19:26:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gradle核心概念总结\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/csdn/efa7a0006b04051e2b84cd116c6ccdfc.png\\",\\"https://oss.javaguide.cn/github/javaguide/csdn/dadbdf59fccd9a2ebf60a2d018541e52.png\\",\\"https://oss.javaguide.cn/github/javaguide/csdn/5c297ccc4dac83229ff3e19caee9d1d2.png\\"],\\"dateModified\\":\\"2024-03-28T19:26:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]],"description":"这部分内容主要根据 Gradle 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。 Gradle 这部分内容属于可选内容，可以根据自身需求决定是否学习，目前国内还是使用 Maven 普遍一些。 Gradle 介绍 Gradle 官方文档是这样介绍的 Gradle 的： Gradle is an open-so..."},"headers":[{"level":2,"title":"Gradle 介绍","slug":"gradle-介绍","link":"#gradle-介绍","children":[]},{"level":2,"title":"Groovy 介绍","slug":"groovy-介绍","link":"#groovy-介绍","children":[]},{"level":2,"title":"Gradle 优势","slug":"gradle-优势","link":"#gradle-优势","children":[]},{"level":2,"title":"Gradle Wrapper 介绍","slug":"gradle-wrapper-介绍","link":"#gradle-wrapper-介绍","children":[{"level":3,"title":"生成 Gradle Wrapper","slug":"生成-gradle-wrapper","link":"#生成-gradle-wrapper","children":[]},{"level":3,"title":"更新 Gradle Wrapper","slug":"更新-gradle-wrapper","link":"#更新-gradle-wrapper","children":[]},{"level":3,"title":"自定义 Gradle Wrapper","slug":"自定义-gradle-wrapper","link":"#自定义-gradle-wrapper","children":[]}]},{"level":2,"title":"Gradle 任务","slug":"gradle-任务","link":"#gradle-任务","children":[]},{"level":2,"title":"Gradle 插件","slug":"gradle-插件","link":"#gradle-插件","children":[]},{"level":2,"title":"Gradle 构建生命周期","slug":"gradle-构建生命周期","link":"#gradle-构建生命周期","children":[{"level":3,"title":"初始化阶段","slug":"初始化阶段","link":"#初始化阶段","children":[]},{"level":3,"title":"配置阶段","slug":"配置阶段","link":"#配置阶段","children":[]},{"level":3,"title":"运行阶段","slug":"运行阶段","link":"#运行阶段","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1711653967000,"updatedTime":1711653967000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":10.46,"words":3138},"filePathRelative":"tools/gradle/gradle-core-concepts.md","localizedDate":"2024年3月28日","excerpt":"<blockquote>\\n<p>这部分内容主要根据 Gradle 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。</p>\\n</blockquote>\\n<p>Gradle 这部分内容属于可选内容，可以根据自身需求决定是否学习，目前国内还是使用 Maven 普遍一些。</p>\\n<h2>Gradle 介绍</h2>\\n<p>Gradle 官方文档是这样介绍的 Gradle 的：</p>\\n<blockquote>\\n<p>Gradle is an open-source <a href=\\"https://en.wikipedia.org/wiki/Build_automation\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">build automation</a> tool flexible enough to build almost any type of software. Gradle makes few assumptions about what you’re trying to build or how to build it. This makes Gradle particularly flexible.</p>\\n<p>Gradle 是一个开源的构建自动化工具，它足够灵活，可以构建几乎任何类型的软件。Gradle 对你要构建什么或者如何构建它做了很少的假设。这使得 Gradle 特别灵活。</p>\\n</blockquote>","autoDesc":true}');export{P as comp,z as data};