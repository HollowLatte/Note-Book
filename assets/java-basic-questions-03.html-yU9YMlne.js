const e=JSON.parse('{"key":"v-5a51805e","path":"/java/basis/java-basic-questions-03.html","title":"Java基础常见面试题总结(下)","lang":"zh-CN","frontmatter":{"title":"Java基础常见面试题总结(下)","category":"Java","tag":["Java基础"],"head":[["meta",{"name":"keywords","content":"Java异常,泛型,反射,IO,注解"}],["meta",{"name":"description","content":"全网质量最高的Java基础常见知识点和面试题总结，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/java/basis/java-basic-questions-03.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Java基础常见面试题总结(下)"}],["meta",{"property":"og:description","content":"异常 Java 异常类层次结构图概览： Java 异常类层次结构图 Exception 和 Error 有什么区别？ 在 Java 中，所有的异常都有一个共同的祖先 java.lang 包中的 Throwable 类。Throwable 类有两个重要的子类:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java基础"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础常见面试题总结(下)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]],"description":"异常 Java 异常类层次结构图概览： Java 异常类层次结构图 Exception 和 Error 有什么区别？ 在 Java 中，所有的异常都有一个共同的祖先 java.lang 包中的 Throwable 类。Throwable 类有两个重要的子类:"},"headers":[{"level":2,"title":"异常","slug":"异常","link":"#异常","children":[{"level":3,"title":"Exception 和 Error 有什么区别？","slug":"exception-和-error-有什么区别","link":"#exception-和-error-有什么区别","children":[]},{"level":3,"title":"Checked Exception 和 Unchecked Exception 有什么区别？","slug":"checked-exception-和-unchecked-exception-有什么区别","link":"#checked-exception-和-unchecked-exception-有什么区别","children":[]},{"level":3,"title":"Throwable 类常用方法有哪些？","slug":"throwable-类常用方法有哪些","link":"#throwable-类常用方法有哪些","children":[]},{"level":3,"title":"try-catch-finally 如何使用？","slug":"try-catch-finally-如何使用","link":"#try-catch-finally-如何使用","children":[]},{"level":3,"title":"finally 中的代码一定会执行吗？","slug":"finally-中的代码一定会执行吗","link":"#finally-中的代码一定会执行吗","children":[]},{"level":3,"title":"如何使用 try-with-resources 代替try-catch-finally？","slug":"如何使用-try-with-resources-代替try-catch-finally","link":"#如何使用-try-with-resources-代替try-catch-finally","children":[]},{"level":3,"title":"异常使用有哪些需要注意的地方？","slug":"异常使用有哪些需要注意的地方","link":"#异常使用有哪些需要注意的地方","children":[]}]},{"level":2,"title":"泛型","slug":"泛型","link":"#泛型","children":[{"level":3,"title":"什么是泛型？有什么作用？","slug":"什么是泛型-有什么作用","link":"#什么是泛型-有什么作用","children":[]},{"level":3,"title":"泛型的使用方式有哪几种？","slug":"泛型的使用方式有哪几种","link":"#泛型的使用方式有哪几种","children":[]},{"level":3,"title":"项目中哪里用到了泛型？","slug":"项目中哪里用到了泛型","link":"#项目中哪里用到了泛型","children":[]}]},{"level":2,"title":"反射","slug":"反射","link":"#反射","children":[{"level":3,"title":"何谓反射？","slug":"何谓反射","link":"#何谓反射","children":[]},{"level":3,"title":"反射的优缺点？","slug":"反射的优缺点","link":"#反射的优缺点","children":[]},{"level":3,"title":"反射的应用场景？","slug":"反射的应用场景","link":"#反射的应用场景","children":[]}]},{"level":2,"title":"注解","slug":"注解","link":"#注解","children":[{"level":3,"title":"何谓注解？","slug":"何谓注解","link":"#何谓注解","children":[]},{"level":3,"title":"注解的解析方法有哪几种？","slug":"注解的解析方法有哪几种","link":"#注解的解析方法有哪几种","children":[]}]},{"level":2,"title":"SPI","slug":"spi","link":"#spi","children":[{"level":3,"title":"何谓 SPI?","slug":"何谓-spi","link":"#何谓-spi","children":[]},{"level":3,"title":"SPI 和 API 有什么区别？","slug":"spi-和-api-有什么区别","link":"#spi-和-api-有什么区别","children":[]},{"level":3,"title":"SPI 的优缺点？","slug":"spi-的优缺点","link":"#spi-的优缺点","children":[]}]},{"level":2,"title":"序列化和反序列化","slug":"序列化和反序列化","link":"#序列化和反序列化","children":[{"level":3,"title":"什么是序列化?什么是反序列化?","slug":"什么是序列化-什么是反序列化","link":"#什么是序列化-什么是反序列化","children":[]},{"level":3,"title":"如果有些字段不想进行序列化怎么办？","slug":"如果有些字段不想进行序列化怎么办","link":"#如果有些字段不想进行序列化怎么办","children":[]},{"level":3,"title":"常见序列化协议有哪些？","slug":"常见序列化协议有哪些","link":"#常见序列化协议有哪些","children":[]},{"level":3,"title":"为什么不推荐使用 JDK 自带的序列化？","slug":"为什么不推荐使用-jdk-自带的序列化","link":"#为什么不推荐使用-jdk-自带的序列化","children":[]}]},{"level":2,"title":"I/O","slug":"i-o","link":"#i-o","children":[{"level":3,"title":"Java IO 流了解吗？","slug":"java-io-流了解吗","link":"#java-io-流了解吗","children":[]},{"level":3,"title":"I/O 流为什么要分为字节流和字符流呢?","slug":"i-o-流为什么要分为字节流和字符流呢","link":"#i-o-流为什么要分为字节流和字符流呢","children":[]},{"level":3,"title":"Java IO 中的设计模式有哪些？","slug":"java-io-中的设计模式有哪些","link":"#java-io-中的设计模式有哪些","children":[]},{"level":3,"title":"BIO、NIO 和 AIO 的区别？","slug":"bio、nio-和-aio-的区别","link":"#bio、nio-和-aio-的区别","children":[]}]},{"level":2,"title":"语法糖","slug":"语法糖","link":"#语法糖","children":[{"level":3,"title":"什么是语法糖？","slug":"什么是语法糖","link":"#什么是语法糖","children":[]},{"level":3,"title":"Java 中有哪些常见的语法糖？","slug":"java-中有哪些常见的语法糖","link":"#java-中有哪些常见的语法糖","children":[]}]}],"git":{},"readingTime":{"minutes":20.56,"words":6167},"filePathRelative":"java/basis/java-basic-questions-03.md","excerpt":"<h2> 异常</h2>\\n<p><strong>Java 异常类层次结构图概览</strong>：</p>\\n<figure><img src=\\"https://oss.javaguide.cn/github/javaguide/java/basis/types-of-exceptions-in-java.png\\" alt=\\"Java 异常类层次结构图\\" tabindex=\\"0\\"><figcaption>Java 异常类层次结构图</figcaption></figure>\\n<h3> Exception 和 Error 有什么区别？</h3>\\n<p>在 Java 中，所有的异常都有一个共同的祖先 <code>java.lang</code> 包中的 <code>Throwable</code> 类。<code>Throwable</code> 类有两个重要的子类:</p>","autoDesc":true}');export{e as data};
