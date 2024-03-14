const t=JSON.parse('{"key":"v-9bb26798","path":"/database/mysql/a-thousand-lines-of-mysql-study-notes.html","title":"一千行 MySQL 学习笔记","lang":"zh-CN","frontmatter":{"title":"一千行 MySQL 学习笔记","category":"数据库","tag":["MySQL"],"description":"原文地址：https://shockerli.net/post/1000-line-mysql-note/ ，JavaGuide 对本文进行了简答排版，新增了目录。 非常不错的总结，强烈建议保存下来，需要的时候看一看。 基本操作 /* Windows服务 */ -- 启动 MySQL \\t\\t\\tnet start mysql -- 创建Windows服务 \\t\\t\\t\\tsc create mysql binPath= mysqld_bin_path(注意：等号与值之间有空格) /* 连接与断开服务器 */ -- 连接 MySQL \\t\\t\\t\\tmysql -h 地址 -P 端口 -u 用户名 -p 密码 -- 显示哪些线程正在运行 \\t\\t\\t\\tSHOW PROCESSLIST -- 显示系统变量信息 \\t\\t\\t\\tSHOW VARIABLES","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/database/mysql/a-thousand-lines-of-mysql-study-notes.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"一千行 MySQL 学习笔记"}],["meta",{"property":"og:description","content":"原文地址：https://shockerli.net/post/1000-line-mysql-note/ ，JavaGuide 对本文进行了简答排版，新增了目录。 非常不错的总结，强烈建议保存下来，需要的时候看一看。 基本操作 /* Windows服务 */ -- 启动 MySQL \\t\\t\\tnet start mysql -- 创建Windows服务 \\t\\t\\t\\tsc create mysql binPath= mysqld_bin_path(注意：等号与值之间有空格) /* 连接与断开服务器 */ -- 连接 MySQL \\t\\t\\t\\tmysql -h 地址 -P 端口 -u 用户名 -p 密码 -- 显示哪些线程正在运行 \\t\\t\\t\\tSHOW PROCESSLIST -- 显示系统变量信息 \\t\\t\\t\\tSHOW VARIABLES"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"MySQL"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一千行 MySQL 学习笔记\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":3,"title":"基本操作","slug":"基本操作","link":"#基本操作","children":[]},{"level":3,"title":"数据库操作","slug":"数据库操作","link":"#数据库操作","children":[]},{"level":3,"title":"表的操作","slug":"表的操作","link":"#表的操作","children":[]},{"level":3,"title":"数据操作","slug":"数据操作","link":"#数据操作","children":[]},{"level":3,"title":"字符集编码","slug":"字符集编码","link":"#字符集编码","children":[]},{"level":3,"title":"数据类型(列类型)","slug":"数据类型-列类型","link":"#数据类型-列类型","children":[]},{"level":3,"title":"列属性(列约束)","slug":"列属性-列约束","link":"#列属性-列约束","children":[]},{"level":3,"title":"建表规范","slug":"建表规范","link":"#建表规范","children":[]},{"level":3,"title":"SELECT","slug":"select","link":"#select","children":[]},{"level":3,"title":"UNION","slug":"union","link":"#union","children":[]},{"level":3,"title":"子查询","slug":"子查询","link":"#子查询","children":[]},{"level":3,"title":"连接查询(join)","slug":"连接查询-join","link":"#连接查询-join","children":[]},{"level":3,"title":"TRUNCATE","slug":"truncate","link":"#truncate","children":[]},{"level":3,"title":"备份与还原","slug":"备份与还原","link":"#备份与还原","children":[]},{"level":3,"title":"视图","slug":"视图","link":"#视图","children":[]},{"level":3,"title":"事务(transaction)","slug":"事务-transaction","link":"#事务-transaction","children":[]},{"level":3,"title":"锁表","slug":"锁表","link":"#锁表","children":[]},{"level":3,"title":"触发器","slug":"触发器","link":"#触发器","children":[]},{"level":3,"title":"SQL 编程","slug":"sql-编程","link":"#sql-编程","children":[]},{"level":3,"title":"存储过程","slug":"存储过程","link":"#存储过程","children":[]},{"level":3,"title":"用户和权限管理","slug":"用户和权限管理","link":"#用户和权限管理","children":[]},{"level":3,"title":"表维护","slug":"表维护","link":"#表维护","children":[]},{"level":3,"title":"杂项","slug":"杂项","link":"#杂项","children":[]}],"git":{},"readingTime":{"minutes":33,"words":9899},"filePathRelative":"database/mysql/a-thousand-lines-of-mysql-study-notes.md","excerpt":"<blockquote>\\n<p>原文地址：https://shockerli.net/post/1000-line-mysql-note/ ，JavaGuide 对本文进行了简答排版，新增了目录。</p>\\n</blockquote>\\n<p>非常不错的总结，强烈建议保存下来，需要的时候看一看。</p>\\n<h3> 基本操作</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">/* Windows服务 */</span>\\n<span class=\\"token comment\\">-- 启动 MySQL</span>\\n\\t\\t\\tnet <span class=\\"token keyword\\">start</span> mysql\\n<span class=\\"token comment\\">-- 创建Windows服务</span>\\n\\t\\t\\t\\tsc <span class=\\"token keyword\\">create</span> mysql binPath<span class=\\"token operator\\">=</span> mysqld_bin_path<span class=\\"token punctuation\\">(</span>注意：等号与值之间有空格<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">/* 连接与断开服务器 */</span>\\n<span class=\\"token comment\\">-- 连接 MySQL</span>\\n\\t\\t\\t\\tmysql <span class=\\"token operator\\">-</span>h 地址 <span class=\\"token operator\\">-</span>P 端口 <span class=\\"token operator\\">-</span>u 用户名 <span class=\\"token operator\\">-</span>p 密码\\n<span class=\\"token comment\\">-- 显示哪些线程正在运行</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">SHOW</span> PROCESSLIST\\n<span class=\\"token comment\\">-- 显示系统变量信息</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">SHOW</span> VARIABLES\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
