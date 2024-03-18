import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as p,c as r,a as l,d as i,b as t,e as o}from"./app-6eIwu4TL.js";const s={},h=o('<blockquote><p><strong>推荐语</strong>：从面试官和面试者两个角度探讨了技术面试！非常不错！</p><br><p><strong>内容概览：</strong></p><ul><li>实战与理论结合。比如，候选人叙述 JVM 内存模型布局之后，可以接着问：有哪些原因可能会导致 OOM , 有哪些预防措施? 你是否遇到过内存泄露的问题? 如何排查和解决这类问题?</li><li>项目经历考察不宜超过两个。因为要深入考察一个项目的详情，所占用的时间还是比较大的。一般来说，会让候选人挑选一个他或她觉得最有收获的/最有挑战的/印象最深刻的/自己觉得特有意思的项目。然后围绕这个项目进行发问。通常是从项目背景出发，考察项目的技术栈、项目模块及交互的整体理解、项目中遇到的有挑战性的技术问题及解决方案、排查和解决问题、代码可维护性问题、工程质量保障等。</li><li>多问少说，让候选者多表现。根据候选者的回答适当地引导或递进或横向移动。</li></ul><br><p><strong>原文地址</strong>：https://www.cnblogs.com/lovesqcc/p/15169365.html</p></blockquote><h2 id="灵魂三连问" tabindex="-1"><a class="header-anchor" href="#灵魂三连问"><span>灵魂三连问</span></a></h2><ol><li>你觉得人怎么样？ 【表达能力、沟通能力、学习能力、总结能力、自省改进能力、抗压能力、情绪管理能力、影响力、团队管理能力】</li><li>如果让他独立完成项目的设计和实现，你觉得他能胜任吗？ 【系统设计能力、项目管理能力】</li><li>他的分析和解决问题的能力，你的评价是啥？【原理理解能力、实战应用能力】</li></ol><h2 id="考察目标和思路" tabindex="-1"><a class="header-anchor" href="#考察目标和思路"><span>考察目标和思路</span></a></h2><p>首先明确，技术初试的考察目标：</p><ul><li>候选人的技术基础；</li><li>候选人解决问题的思路和能力。</li></ul><p>技术基础是基石（冰山之下的东西），占七分， 解决问题的思路和能力是落地（冰山之上露出的部分），占三分。 业务和技术基础考察，三七开。</p><p>核心考察目标：分析和解决问题的能力。</p><p>技术层面：深度 + 应用能力 + 广度。 对于校招或社招 P6 级别以下，要多注重 深度 + 应用能力，广度是加分项； 在 P6 之上，可增加 广度。</p><ul><li>校招：基础扎实，思维敏捷。 主要考察内容：基础数据结构与算法、进程与并发、内存管理、系统调用与 IO 机制、网络协议、数据库范式与设计、设计模式、设计原则、编程习惯；</li><li>社招：经验丰富，里外兼修。 主要考察内容：有一定深度的基础技术机制，比如 Java 内存模型及内存泄露、 JVM 机制、类加载机制、数据库索引及查询优化、缓存、消息中间件、项目、架构设计、工程规范等。</li></ul><h3 id="技术基础是什么" tabindex="-1"><a class="header-anchor" href="#技术基础是什么"><span>技术基础是什么?</span></a></h3><p>作为技术初试官，怎么去考察技术基础？究竟什么是技术基础？是知道什么，还是知道如何思考？知识作为现有的成熟原理体系，构成了基础的重要组成部分，而知道如何思考亦尤为重要。俗话说，知其然而知其所以然。知其然，是指熟悉现有知识体系，知其所以然，则是自底向上推导，真正理解知识的来龙去脉，理解为何是这样而不是那样。毕竟，对于本质是逻辑的程序世界而言，并无定法。知道如何思考，并能缜密地设计和开发，深入到细节，这就是技术基础吧。</p><h3 id="为什么要考察技术基础" tabindex="-1"><a class="header-anchor" href="#为什么要考察技术基础"><span>为什么要考察技术基础?</span></a></h3><p>程序员最重要的两种技术思维能力，是逻辑思维能力和抽象设计能力。逻辑思维能力是基础，抽象设计能力是高阶。 考察技术基础，正好可以同时考察这两种思维能力。能不能理解基础技术概念及关联，是考察逻辑思维能力；能不能把业务问题抽象成技术问题并合理的组织映射，是考察抽象设计能力。</p><p>绝大部分业务问题，都可以抽象成技术问题。在某种意义上，业务问题只是技术问题的领域化表述。</p><p>因此，通过技术基础考察候选者，才能考察到候选者的真实技术实力：技术深度和广度。</p><h3 id="为什么不能单考察业务维度" tabindex="-1"><a class="header-anchor" href="#为什么不能单考察业务维度"><span>为什么不能单考察业务维度？</span></a></h3><p>因为业务方面通常比较熟悉，可能就直接按照现有方案说出来了，很难考察到候选人的深入理解、横向拓展和归纳总结能力。</p><p>这一点，建议有针对性地考察下候选人的归纳总结能力：比如， 微服务搭建或开发或维护/保证系统稳定性或性能方面的过程中，你收获了哪些可以分享的经验？</p><h3 id="为什么要考察业务维度" tabindex="-1"><a class="header-anchor" href="#为什么要考察业务维度"><span>为什么要考察业务维度？</span></a></h3><p>技术基础考察，容易错过的地方是，候选人的非技术能力特质，比如沟通组织能力、带项目能力、抗压能力、解决实际问题的能力、团队影响力、其它性格特质等。</p><h2 id="考察方法" tabindex="-1"><a class="header-anchor" href="#考察方法"><span>考察方法</span></a></h2><h3 id="技术基础考察" tabindex="-1"><a class="header-anchor" href="#技术基础考察"><span>技术基础考察</span></a></h3><p>技术基础怎么考察？通过有效的多角度的发问模式来考察。</p><p><strong>是什么-为什么</strong></p><p>是什么考察对概念的基本理解，为什么考察对概念的实现原理。</p><p>比如索引是什么？ 索引是如何实现的？</p><p><strong>引导-横向发问-深入发问</strong></p><p>引导性，比如 “你对 java 同步工具熟悉吗？” 作个试探，得到肯定答复后，可以进一步问：“你熟悉哪些同步工具类？” 了解候选者的广度；</p><p>获取候选者的回答后，可以进一步问：“ 谈谈 ConcurrentHashMap 或 AQS 的实现原理？”</p><p>一个人在多大程度上把技术原理能讲得清晰，包括思路和细节，说明他对技术的掌握能力有多强。</p><p><strong>深度有梯度和层次的发问</strong></p><p>设置三个深度层次的发问。每个深度层次可以对应到某个技术深度。</p><ul><li>第一个发问是基本概念层次，考察候选人对概念的理解能力和深度；</li><li>第二个发问是原理机制层次，考察候选人对概念的内涵和外延的理解深度；</li><li>第三个发问是应用层次，考察候选人的应用能力和思维敏捷程度。</li></ul><p><strong>跳跃式/交叉式发问</strong></p><p>比如，讲到哈希高效查找，可以谈谈哈希一致性算法 。 两者既有关联又有很多不同点。也是一种技术广度的考察方法。</p><p><strong>总结性发问</strong></p><p>比如，你在做 XXX 中，获得了哪些可以分享的经验？ 考察候选人的归纳总结能力。</p><p><strong>实战与理论结合</strong></p><ul><li>比如，候选人叙述 JVM 内存模型布局之后，可以接着问：有哪些原因可能会导致 OOM , 有哪些预防措施? 你是否遇到过内存泄露的问题? 如何排查和解决这类问题?</li><li>比如，候选人有谈到 SQL 优化和索引优化，那就正好谈谈索引的实现原理，如何建立最佳索引？</li><li>比如，候选人有谈到事务，那就正好谈谈事务实现原理，隔离级别，快照实现等；</li></ul><p><strong>熟悉与不熟悉结合</strong></p><p>针对候选人简历上写的熟悉的部分，和没有写出的都问下。比如候选人简历上写着：熟悉 JVM 内存模型， 那我就考察下内存管理相关（熟悉部分），再考察下 Java 并发工具类（不确定是否熟悉部分）。</p><p><strong>死知识与活知识结合</strong></p><p>比如，查找算法有哪些？顺序查找、二分查找、哈希查找。这些大家通常能说出来，也是“死知识”。</p><p>这些查找算法各适用于什么场景？在你工作中，有哪些场景用到了哪些查找算法？为什么？ 这些是“活知识”。</p><p><strong>学习或工作中遇到的</strong></p><p>有时，在学习和工作中遇到的问题，也可以作为面试题。</p><p>比如，最近在学习《操作系统导论》并发部分，有一章节是如何使数据结构成为线程安全的。这里就有一些可以提问的地方：如何实现一个锁？如何实现一个线程安全的计数器？如何实现一个线程安全的链表？如何实现一个线程安全的 Map ？如何提升并发的性能？</p><p>工作中遇到的问题，也可以抽象提炼出来，作为技术基础面试题。</p><p><strong>技术栈适配度发问</strong></p><p>如果候选人（简历上所写的）使用的某些技术与本公司的技术栈比较契合，则可以针对这些技术点进行深入提问，考察候选人在这些技术点的掌握程度。如果掌握程度比较好，则技术适配度相对更高一些。</p><p>当然，这一点并不能作为筛掉那些没有使用该技术栈的候选人的依据。比如本公司使用 MongoDB 和 MySQL， 而一个候选人没有用过 Mongodb， 但使用过 MySQL, Redis, ES, HBase 等多种存储系统，那么适配度并不比仅使用过 MySQL 和 Mongodb 的候选人逊色，因为他所涉及的技术广度更大，可以推断出他有足够能力掌握 Mongodb。</p><p><strong>应对背题式面试</strong></p><p>首先，背题式面试，说明候选人至少是有做准备的。当然，对于招聘的一方来说，更希望找到有能力而不是仅记忆了知识的候选人。</p><p>应对背题式面试，可以通过 “引导-横向发问-深入发问” 的方式，先对候选人关于某个知识点的深度和广度做一个了解，然后出一道实际应用题来考察他是否能灵活使用知识。</p><p>比如 Java 线程同步机制，可以出一道题：线程 A 执行了一段代码，然后创建了一个异步任务在线程 B 中执行，线程 A 需要等待线程 B 执行完成后才能继续执行，请问怎么实现？</p><p>”理论 + 应用题“的模式。敌知我之变，而不知我变之形。变之形，不计其数。</p><p><strong>实用不生僻</strong></p><p>考察工作中频繁用到的知识、技能和能力，不考察冷僻的知识。</p><p>比如我偏向考察数据结构与算法、并发、设计 这三类。因为这三类非常基础非常核心。</p><p><strong>综合串联式发问</strong></p><p>知识之间总是相互联系着的，不要单独考察一个知识点。</p><p>设计一个初始问题，比如说查找算法，然后从这个初始问题出发，串联起各个知识点。比如：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/open-source-project/502996-20220211115505399-72788909.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>在每一个技术点上，都可以应用以上发问技巧，导向不同的问题分支。同时考察面试者的深度、广度和应用能力。</p><p><strong>创造有个性的面试题库</strong></p><p>每个技术面试官都会有一个面试题库。持续积累面试题库，日常中突然想到的问题，就随手记录下来。</p><h3 id="解决问题能力考察" tabindex="-1"><a class="header-anchor" href="#解决问题能力考察"><span>解决问题能力考察</span></a></h3><p>仅仅只是技术基础还不够，通常最好结合实际业务，针对他项目里的业务，抽象出技术问题进行考察。</p><p>解决思路重在层层递进。这一点对于面试官的要求也比较高，兼具良好的倾听能力、技术深度和业务经验。首先要仔细倾听候选人的阐述，找到适当的技术切入点，然后进行发问。如果进不去，那就容易考察失败。 常见问题：</p><ul><li>性能方面，qps, tps 多少？采用了什么优化措施，达成了什么效果？</li><li>如果有大数据量，如何处理？如何保证稳定性？</li><li>你觉得这个功能/模块/系统的关键点在哪里？有什么解决方案？</li><li>为什么使用 XXX 而不是 YYY ？</li><li>长字段如何做索引？</li><li>还有哪些方案或思路？各自的利弊？</li><li>第三方对接，如何应对外部接口的不稳定性？</li><li>第三方对接，对接大量外部系统，代码可维护性？</li><li>资损场景？严重故障场景？</li><li>线上出现了 CPU 飙高，如何处理？ OOM 如何处理？ IO 读写尖刺，如何排查？</li><li>线上运行过程中，出现过哪些问题？如何解决的？</li><li>多个子系统之间的数据一致性问题？</li><li>如果需要新增一个 XXX 需求，如何扩展？</li><li>重来一遍，你觉得可以在哪些方面改进？</li></ul><p>系统可问的关联问题：</p><ul><li>绝大多数系统都有性能相关问题。如果没有性能问题，则说明是小系统，小系统就不值得考察了；</li><li>中大型系统通常有技术选型问题；</li><li>绝大多数系统都有改进空间；</li><li>大多数业务系统都涉及可扩展性问题和可维护性问题；</li><li>大多数重要业务系统都经历过比较惨重的线上教训；</li><li>大数据量系统必定有稳定性问题；</li><li>消费系统必定有时延和堆积问题；</li><li>第三方系统对接必定涉及可靠性问题；</li><li>分布式系统必定涉及可用性问题；</li><li>多个子系统协同必定涉及数据一致性问题；</li><li>交易系统有资损和故障场景；</li></ul><p><strong>设计问题</strong></p><ul><li>比如多个机器间共享大量业务对象，这些业务对象之间有些联合字段是重复的，如何去重？ 如果字段比较长，怎么处理？</li><li>如果瞬时有大量请求涌入，如何保证服务器的稳定性？</li><li>组件级别：设计一个本地缓存？ 设计一个分布式缓存？</li><li>模块级别：设计一个任务调度模块？需要考虑什么因素？</li><li>系统级别：设计一个内部系统，从各个部门获取销售数据然后统计出报表。复杂性体现在哪里？关键质量属性是哪些？模块划分，模块之间的关联关系？技术选型？</li></ul><p><strong>项目经历</strong></p><p>项目经历考察不宜超过两个。因为要深入考察一个项目的详情，所占用的时间还是比较大的。</p><p>一般来说，会让候选人挑选一个他或她觉得最有收获的/最有挑战的/印象最深刻的/自己觉得特有意思/感受到挫折的项目。然后围绕这个项目进行发问。通常是从项目背景出发，考察项目的技术栈、项目模块及交互的整体理解、项目中遇到的有挑战性的技术问题及解决方案、排查和解决问题、代码可维护性问题、工程质量保障、重来一遍可以改进哪些等。</p><h2 id="面试过程" tabindex="-1"><a class="header-anchor" href="#面试过程"><span>面试过程</span></a></h2><h3 id="预先准备" tabindex="-1"><a class="header-anchor" href="#预先准备"><span>预先准备</span></a></h3><p>面试官也需要做一些准备。比如熟悉候选者的技能优势、工作经历等，做一个面试设计。</p><p>在面试将要开始时，做好面试准备。此外，面试官也需要对公司的一些基本情况有所了解，尤其是公司所使用技术栈、业务全景及方向、工作内容、晋升制度等，这一点技术型候选人问得比较多。</p><h3 id="面试启动" tabindex="-1"><a class="header-anchor" href="#面试启动"><span>面试启动</span></a></h3><p>一般以候选人自我介绍启动，不过候选人往往会谈得比较散，因此，我会直接提问：谈谈你有哪些优势以及自己觉得可以改进的地方？</p><p>然后以一个相对简单的基础题作为技术提问的开始：你熟悉哪些查找算法？大多数人是能答上顺序查找、二分查找、哈希查找的。</p><h3 id="问题设计" tabindex="-1"><a class="header-anchor" href="#问题设计"><span>问题设计</span></a></h3><p>提前阅读候选人简历，从简历中筛选出关键词，根据这些关键词进行有针对性地问题设计。</p><p>比如候选人简历里提到 MVVM ，可以问 MVVM 与 MVC 的区别； 提到了观察者模式，可以谈谈观察者模式，顺便问问他还熟悉哪些设计模式。</p><p>可遵循“优势-标准-随机”原则：</p><ul><li>首先，问他对哪方面技术感兴趣、投入较多（优势部分），根据其优势部分，阐述原理及实战应用；</li><li>其次，问若干标准化的问题，看看他的原理理解、实战应用如何；</li><li>最后，随机选一个问题，看看他的原理理解、实战应用如何；</li></ul><p>对于项目同样可以如此：</p><ul><li>首先，问他最有成就感的项目，技术栈、模块及关联、技术选型、设计关键问题、解决方案、实现细节、改进空间；</li><li>其次，问他有挫折感的项目，问题在哪里、做过什么努力、如何改进；</li></ul><h3 id="宽松氛围" tabindex="-1"><a class="header-anchor" href="#宽松氛围"><span>宽松氛围</span></a></h3><p>即使问的问题比较多比较难，也要注意保持宽松氛围。</p><p>在面试前，根据候选人基本信息适当调侃一下，比如一位候选人叫汪奎，那我就说：之前我们团队有位叫袁奎，我们都喊他奎爷。</p><p>在面试过程中，适当提示，或者给出少量自己的看法，也能缓解候选人的紧张情绪。</p><h3 id="学会倾听" tabindex="-1"><a class="header-anchor" href="#学会倾听"><span>学会倾听</span></a></h3><p>多问少说，让候选者多表现。根据候选者的回答适当地引导或递进或横向移动。</p><p>引导候选人表现他最优势的一面，让他或她感觉好一些：毕竟一场面试双方都付出了时间和精力，不应该是面试官 Diss 候选人的场合，而应该让彼此有更好的交流。很大可能，你也能从候选人那里学到不少东西。</p><p>面试这件事，只不过双方的角色和立场有所不同，但并不代表面试官的水平就一定高于候选人。</p><h3 id="记录重点" tabindex="-1"><a class="header-anchor" href="#记录重点"><span>记录重点</span></a></h3><p>认真客观地记录候选人的回答，尽可能避免任何主观评价，亦不作任何加工（比如自己给总结一下，总结能力也是候选人的一个特质）。</p><h3 id="多练习" tabindex="-1"><a class="header-anchor" href="#多练习"><span>多练习</span></a></h3><p>模拟面试。</p><h3 id="作出判断" tabindex="-1"><a class="header-anchor" href="#作出判断"><span>作出判断</span></a></h3><p>面试过程是一种铺垫，关键的是作出判断。</p><p>作出判断最容易陷入误区的是：贪深求全。总希望候选人技术又深入又全面。实际上，这是一种奢望。如果候选人的技术能力又深入又全面，很可能也会面临两种情况：1. 候选人有更好的选择； 2. 候选人在其它方面可能存在不足，比如团队协作方面。</p><p>一个比较合适的尺度是：1. 他或她的技术水平能否胜任当前工作； 2. 他或她的技术水平与同组团队成员水平如何； 3. 他或她的技术水平是否与年限相对匹配，是否有潜力胜任更复杂的任务。</p><h3 id="不同年龄看重的东西不一样" tabindex="-1"><a class="header-anchor" href="#不同年龄看重的东西不一样"><span>不同年龄看重的东西不一样</span></a></h3><p>对于三年以下的工程师，应当更看重其技术基础，因为这代表着他的未来潜能；同时也考察下他在实际开发中的体现，比如团队协作、业务经验、抗压能力、主动学习的热情和能力等。</p><p>对于三年以上的工程师，应当更看重其业务经验、解决问题能力，看看他或她是如何分析具体问题，在业务范畴内考察其技术基础的深度和广度。</p><p>如何判断一个候选人的真实技术水平及是否适合所需，这方面，我也在学习中。</p><h2 id="面试初上路" tabindex="-1"><a class="header-anchor" href="#面试初上路"><span>面试初上路</span></a></h2><ul><li>提前准备好摄像头和音频，可以用耳机测试下。</li><li>提前阅读候选人简历，从中筛选关键字，准备几个基本问题。</li><li>多问技术基础题，培养下面试感觉。</li><li>适当深入问下原理和实现。</li><li>如果候选人简历有突出的地方，就先问那个部分；如果没有，就让候选人介绍项目背景，根据项目背景及经验来提问。</li><li>小量练习“连问”技巧，直到能够熟悉使用。</li><li>着重考察分析和解决问题的能力，必要的话，可以出个编程题。</li><li>留出时间给对方问：你有什么想问的？并告知对方三个工作日内回复面试结果。</li></ul><h2 id="高效考察" tabindex="-1"><a class="header-anchor" href="#高效考察"><span>高效考察</span></a></h2><p>当作为技术面试官有一定熟悉度时，就需要提升面试效率。即：在更少的时间内有效考察候选人的技术深度和技术广度。可以准备一些常见的问题，作为标准化测试。</p><p>比如我喜欢考察内存管理及算法、数据库索引、缓存、并发、系统设计、问题分析和思考能力等子主题。</p><ul><li>熟悉哪些用于查找的数据结构和算法？ 请任选一种阐述其思想以及你认为有意思的地方。</li><li>如果运行到一个 Java 方法，里面创建了一个对象列表，内存是如何分配的？什么时候可能导致栈溢出？什么时候可能导致 OOM ？ 导致 OOM 的原因有哪些？如何避免？ 线上是否有遇到过 OOM ，怎么解决的？</li><li>Java 分代垃圾回收算法是怎样的？ 项目里选用的垃圾回收器是怎样的？为什么选择这个回收器而不是那个？</li><li>Java 并发工具有哪些？不同工具适合于什么场景？</li><li><code>Atomic</code> 原子类的实现原理 ？ <code>ConcurrentHashMap</code> 的实现原理？</li><li>如何实现一个可重入锁？</li><li>举个项目中的例子，哪些字段使用了索引？为什么是这些字段？你觉得还有什么优化空间？如何建一个好的索引？</li><li>缓存的可设置的参数有哪些？分别的影响是什么？</li><li>Redis 过期策略有哪些？ 如何选择 redis 过期策略？</li><li>如何实现病毒文件检测任务去重？</li><li>熟悉哪些设计模式和设计原则？</li><li>从 0 到 1 搭建一个模块/完整系统？你如何着手？</li></ul><p>如果候选人答不上，可以问：如果你来设计这样一个 XXX， 你会怎么做？</p><p>时间占比大概为：技术基础（25-30 分钟） + 项目（20-25 分钟） + 候选人提问（5-10 分钟）</p><h2 id="给候选人的话" tabindex="-1"><a class="header-anchor" href="#给候选人的话"><span>给候选人的话</span></a></h2><p><strong>为什么候选人需要关注技术基础</strong></p><p>一个常见的疑惑是：开发业务系统的大多数时候，基本不涉及数据结构与算法的设计与实现，为什么要考察 <code>HashMap</code> 的实现原理？为什么要学好数据结构与算法、操作系统、网络通信这些基础课程？</p><p>现在我可以给出一个答案了：</p><ul><li>正如上面所述，绝大多数的业务问题，实际上最终都会映射到基础技术问题上：数据结构与算法的实现、内存管理、并发控制、网络通信等；这些是理解现代互联网大规模程序以及解决程序疑难问题的基石，—— 除非能祝福自己永远都不会遇到疑难问题，永远都只满足于编写 CRUD；</li><li>这些技术基础正是程序世界里最有趣最激动人心的地方。如果对这些不感兴趣，就很难在这个领域里深入进去，不如及早转行从事其它职业，非技术的世界一直都很精彩广阔（有时我也想多出去走走，不想局限于技术世界）；</li><li>技术基础是程序员的内功，而具体技术则是招式。徒有招式而内功不深，遇到高手（优秀同行从业者的竞争及疑难杂症）容易不堪一击；</li><li>具备扎实的专业技术基础，能达到的上限更高，未来更有可能胜任复杂的技术问题求解，或者在同样的问题上能够做到更好的方案；</li><li>人们喜欢跟与自己相似的人合作，牛人倾向于与牛人合作能得到更好的效果；如果一个团队大部分人技术基础比较好，那么进来一个技术基础比较薄弱的人，协作成本会变高；如果你想和牛人一起合作拿到更好的结果，那就要让自己至少在技术基础上能够与牛人搭配的上；</li><li>在 CRUD 的基础上拓展其它才能也不失为一种好的选择，但这不会是一个真正的程序员的姿态，顶多是有技术基础的产品经理、项目经理、HR、运营、客满等其它岗位人才。这是职业选择的问题，已经超出了考察程序员的范畴。</li></ul><p><strong>不要在意某个问题回答不上来</strong></p><p>如果面试官问你很多问题，而有些没有回答上来，不要在意。面试官很可能只是在测试你的技术深度和广度，然后判断你是否达到某个水位线。</p><p>重点是：有些问题你答得很有深度，也体现了你的深度思考能力。</p><p>这一点是我当了技术面试官才领会到的。当然，并不是每位技术面试官都是这么想的，但我觉得这应该是个更合适的方式。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>',130),c={href:"https://zhuanlan.zhihu.com/p/51404304",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.zhihu.com/question/26240321",target:"_blank",rel:"noopener noreferrer"};function g(u,m){const e=n("ExternalLinkIcon");return p(),r("div",null,[h,l("ul",null,[l("li",null,[l("a",c,[i("技术面试官的 9 大误区"),t(e)])]),l("li",null,[l("a",d,[i("如何当一个好的面试官？"),t(e)])])])])}const v=a(s,[["render",g],["__file","how-to-examine-the-technical-ability-of-programmers-in-the-first-test-of-technology.html.vue"]]),k=JSON.parse('{"path":"/high-quality-technical-articles/interview/how-to-examine-the-technical-ability-of-programmers-in-the-first-test-of-technology.html","title":"如何在技术初试中考察程序员的技术能力","lang":"zh-CN","frontmatter":{"title":"如何在技术初试中考察程序员的技术能力","category":"技术文章精选集","author":"琴水玉","tag":["面试"],"description":"推荐语：从面试官和面试者两个角度探讨了技术面试！非常不错！ 内容概览： 实战与理论结合。比如，候选人叙述 JVM 内存模型布局之后，可以接着问：有哪些原因可能会导致 OOM , 有哪些预防措施? 你是否遇到过内存泄露的问题? 如何排查和解决这类问题? 项目经历考察不宜超过两个。因为要深入考察一个项目的详情，所占用的时间还是比较大的。一般来说，会让候选人...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/high-quality-technical-articles/interview/how-to-examine-the-technical-ability-of-programmers-in-the-first-test-of-technology.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"如何在技术初试中考察程序员的技术能力"}],["meta",{"property":"og:description","content":"推荐语：从面试官和面试者两个角度探讨了技术面试！非常不错！ 内容概览： 实战与理论结合。比如，候选人叙述 JVM 内存模型布局之后，可以接着问：有哪些原因可能会导致 OOM , 有哪些预防措施? 你是否遇到过内存泄露的问题? 如何排查和解决这类问题? 项目经历考察不宜超过两个。因为要深入考察一个项目的详情，所占用的时间还是比较大的。一般来说，会让候选人..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/open-source-project/502996-20220211115505399-72788909.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T18:44:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"如何在技术初试中考察程序员的技术能力"}],["meta",{"property":"article:author","content":"琴水玉"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:modified_time","content":"2024-03-18T18:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何在技术初试中考察程序员的技术能力\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/open-source-project/502996-20220211115505399-72788909.png\\"],\\"dateModified\\":\\"2024-03-18T18:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"琴水玉\\"}]}"]]},"headers":[{"level":2,"title":"灵魂三连问","slug":"灵魂三连问","link":"#灵魂三连问","children":[]},{"level":2,"title":"考察目标和思路","slug":"考察目标和思路","link":"#考察目标和思路","children":[{"level":3,"title":"技术基础是什么?","slug":"技术基础是什么","link":"#技术基础是什么","children":[]},{"level":3,"title":"为什么要考察技术基础?","slug":"为什么要考察技术基础","link":"#为什么要考察技术基础","children":[]},{"level":3,"title":"为什么不能单考察业务维度？","slug":"为什么不能单考察业务维度","link":"#为什么不能单考察业务维度","children":[]},{"level":3,"title":"为什么要考察业务维度？","slug":"为什么要考察业务维度","link":"#为什么要考察业务维度","children":[]}]},{"level":2,"title":"考察方法","slug":"考察方法","link":"#考察方法","children":[{"level":3,"title":"技术基础考察","slug":"技术基础考察","link":"#技术基础考察","children":[]},{"level":3,"title":"解决问题能力考察","slug":"解决问题能力考察","link":"#解决问题能力考察","children":[]}]},{"level":2,"title":"面试过程","slug":"面试过程","link":"#面试过程","children":[{"level":3,"title":"预先准备","slug":"预先准备","link":"#预先准备","children":[]},{"level":3,"title":"面试启动","slug":"面试启动","link":"#面试启动","children":[]},{"level":3,"title":"问题设计","slug":"问题设计","link":"#问题设计","children":[]},{"level":3,"title":"宽松氛围","slug":"宽松氛围","link":"#宽松氛围","children":[]},{"level":3,"title":"学会倾听","slug":"学会倾听","link":"#学会倾听","children":[]},{"level":3,"title":"记录重点","slug":"记录重点","link":"#记录重点","children":[]},{"level":3,"title":"多练习","slug":"多练习","link":"#多练习","children":[]},{"level":3,"title":"作出判断","slug":"作出判断","link":"#作出判断","children":[]},{"level":3,"title":"不同年龄看重的东西不一样","slug":"不同年龄看重的东西不一样","link":"#不同年龄看重的东西不一样","children":[]}]},{"level":2,"title":"面试初上路","slug":"面试初上路","link":"#面试初上路","children":[]},{"level":2,"title":"高效考察","slug":"高效考察","link":"#高效考察","children":[]},{"level":2,"title":"给候选人的话","slug":"给候选人的话","link":"#给候选人的话","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1710787457000,"updatedTime":1710787457000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":21.91,"words":6572},"filePathRelative":"high-quality-technical-articles/interview/how-to-examine-the-technical-ability-of-programmers-in-the-first-test-of-technology.md","localizedDate":"2024年3月18日","excerpt":"<blockquote>\\n<p><strong>推荐语</strong>：从面试官和面试者两个角度探讨了技术面试！非常不错！</p>\\n<br>\\n<p><strong>内容概览：</strong></p>\\n<ul>\\n<li>实战与理论结合。比如，候选人叙述 JVM 内存模型布局之后，可以接着问：有哪些原因可能会导致 OOM , 有哪些预防措施? 你是否遇到过内存泄露的问题? 如何排查和解决这类问题?</li>\\n<li>项目经历考察不宜超过两个。因为要深入考察一个项目的详情，所占用的时间还是比较大的。一般来说，会让候选人挑选一个他或她觉得最有收获的/最有挑战的/印象最深刻的/自己觉得特有意思的项目。然后围绕这个项目进行发问。通常是从项目背景出发，考察项目的技术栈、项目模块及交互的整体理解、项目中遇到的有挑战性的技术问题及解决方案、排查和解决问题、代码可维护性问题、工程质量保障等。</li>\\n<li>多问少说，让候选者多表现。根据候选者的回答适当地引导或递进或横向移动。</li>\\n</ul>\\n<br>\\n<p><strong>原文地址</strong>：https://www.cnblogs.com/lovesqcc/p/15169365.html</p>\\n</blockquote>","copyright":{"author":"琴水玉"},"autoDesc":true}');export{v as comp,k as data};
