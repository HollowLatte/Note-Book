const e=JSON.parse('{"key":"v-5dbb319c","path":"/java/basis/java-basic-questions-02.html","title":"Java基础常见面试题总结(中)","lang":"zh-CN","frontmatter":{"title":"Java基础常见面试题总结(中)","category":"Java","tag":["Java基础"],"head":[["meta",{"name":"keywords","content":"面向对象,构造方法,接口,抽象类,String,Object"}],["meta",{"name":"description","content":"全网质量最高的Java基础常见知识点和面试题总结，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/java/basis/java-basic-questions-02.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"Java基础常见面试题总结(中)"}],["meta",{"property":"og:description","content":"面向对象基础 面向对象和面向过程的区别 两者的主要区别在于解决问题的方式不同： 面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。 面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。 另外，面向对象开发的程序一般更易维护、易复用、易扩展。 相关 issue : 面向过程：面向过程性能比面向对象高？？ 。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Java基础"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础常见面试题总结(中)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]],"description":"面向对象基础 面向对象和面向过程的区别 两者的主要区别在于解决问题的方式不同： 面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。 面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。 另外，面向对象开发的程序一般更易维护、易复用、易扩展。 相关 issue : 面向过程：面向过程性能比面向对象高？？ 。"},"headers":[{"level":2,"title":"面向对象基础","slug":"面向对象基础","link":"#面向对象基础","children":[{"level":3,"title":"面向对象和面向过程的区别","slug":"面向对象和面向过程的区别","link":"#面向对象和面向过程的区别","children":[]},{"level":3,"title":"创建一个对象用什么运算符?对象实体与对象引用有何不同?","slug":"创建一个对象用什么运算符-对象实体与对象引用有何不同","link":"#创建一个对象用什么运算符-对象实体与对象引用有何不同","children":[]},{"level":3,"title":"对象的相等和引用相等的区别","slug":"对象的相等和引用相等的区别","link":"#对象的相等和引用相等的区别","children":[]},{"level":3,"title":"如果一个类没有声明构造方法，该程序能正确执行吗?","slug":"如果一个类没有声明构造方法-该程序能正确执行吗","link":"#如果一个类没有声明构造方法-该程序能正确执行吗","children":[]},{"level":3,"title":"构造方法有哪些特点？是否可被 override?","slug":"构造方法有哪些特点-是否可被-override","link":"#构造方法有哪些特点-是否可被-override","children":[]},{"level":3,"title":"面向对象三大特征","slug":"面向对象三大特征","link":"#面向对象三大特征","children":[]},{"level":3,"title":"接口和抽象类有什么共同点和区别？","slug":"接口和抽象类有什么共同点和区别","link":"#接口和抽象类有什么共同点和区别","children":[]},{"level":3,"title":"深拷贝和浅拷贝区别了解吗？什么是引用拷贝？","slug":"深拷贝和浅拷贝区别了解吗-什么是引用拷贝","link":"#深拷贝和浅拷贝区别了解吗-什么是引用拷贝","children":[]}]},{"level":2,"title":"Object","slug":"object","link":"#object","children":[{"level":3,"title":"Object 类的常见方法有哪些？","slug":"object-类的常见方法有哪些","link":"#object-类的常见方法有哪些","children":[]},{"level":3,"title":"== 和 equals() 的区别","slug":"和-equals-的区别","link":"#和-equals-的区别","children":[]},{"level":3,"title":"hashCode() 有什么用？","slug":"hashcode-有什么用","link":"#hashcode-有什么用","children":[]},{"level":3,"title":"为什么要有 hashCode？","slug":"为什么要有-hashcode","link":"#为什么要有-hashcode","children":[]},{"level":3,"title":"为什么重写 equals() 时必须重写 hashCode() 方法？","slug":"为什么重写-equals-时必须重写-hashcode-方法","link":"#为什么重写-equals-时必须重写-hashcode-方法","children":[]}]},{"level":2,"title":"String","slug":"string","link":"#string","children":[{"level":3,"title":"String、StringBuffer、StringBuilder 的区别？","slug":"string、stringbuffer、stringbuilder-的区别","link":"#string、stringbuffer、stringbuilder-的区别","children":[]},{"level":3,"title":"String 为什么是不可变的?","slug":"string-为什么是不可变的","link":"#string-为什么是不可变的","children":[]},{"level":3,"title":"字符串拼接用“+” 还是 StringBuilder?","slug":"字符串拼接用-还是-stringbuilder","link":"#字符串拼接用-还是-stringbuilder","children":[]},{"level":3,"title":"String#equals() 和 Object#equals() 有何区别？","slug":"string-equals-和-object-equals-有何区别","link":"#string-equals-和-object-equals-有何区别","children":[]},{"level":3,"title":"字符串常量池的作用了解吗？","slug":"字符串常量池的作用了解吗","link":"#字符串常量池的作用了解吗","children":[]},{"level":3,"title":"String s1 = new String(\\"abc\\");这句话创建了几个字符串对象？","slug":"string-s1-new-string-abc-这句话创建了几个字符串对象","link":"#string-s1-new-string-abc-这句话创建了几个字符串对象","children":[]},{"level":3,"title":"String#intern 方法有什么作用?","slug":"string-intern-方法有什么作用","link":"#string-intern-方法有什么作用","children":[]},{"level":3,"title":"String 类型的变量和常量做“+”运算时发生了什么？","slug":"string-类型的变量和常量做-运算时发生了什么","link":"#string-类型的变量和常量做-运算时发生了什么","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{},"readingTime":{"minutes":27.3,"words":8190},"filePathRelative":"java/basis/java-basic-questions-02.md","excerpt":"<h2> 面向对象基础</h2>\\n<h3> 面向对象和面向过程的区别</h3>\\n<p>两者的主要区别在于解决问题的方式不同：</p>\\n<ul>\\n<li>面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。</li>\\n<li>面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。</li>\\n</ul>\\n<p>另外，面向对象开发的程序一般更易维护、易复用、易扩展。</p>\\n<p>相关 issue : <a href=\\"https://github.com/Snailclimb/JavaGuide/issues/431\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">面向过程：面向过程性能比面向对象高？？</a> 。</p>","autoDesc":true}');export{e as data};
