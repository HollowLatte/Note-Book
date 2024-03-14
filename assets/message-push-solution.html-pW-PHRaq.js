const n=JSON.parse('{"key":"v-11407404","path":"/notebook/technical-solution/message-push-solution.html","title":"消息推送方案","lang":"zh-CN","frontmatter":{"title":"消息推送方案","author":null,"category":"Solution","tag":"Solution","description":"通常在服务端会有若干张消息推送表，用来记录用户触发不同事件所推送不同类型的消息，前端主动查询（拉）或者被动接收（推）用户所有未读的消息数。 消息推送表的参考设计： CREATE TABLE `message_record` ( `id` bigint unsigned NOT NULL auto_increment COMMENT \'主键\', `template_idbigint` unsigned NOT NULL COMMENT \'消息模板ID\', `type` int NOT NULL DEFAULT COMMENT \'推送渠道1短信,2邮件,3微信,4APP\', `receiver` varchar(128) NOT NULL DEFAULT COMMENT \'消息接收者(手机号，邮箱号，微信openid等)\', `device_info` varchar(128) NOT NULL DEFAULT COMMENT \'APP推送终端设备信息\', `content` varchar(1024) NOT NULL COMMENT \'消息推送内容\', `deleted` tinyint NOT NULL DEFAULTO COMMENT \'逻辑删除标记: 删除;0未删除\', `create_by` bigint unsigned NOT NULLCOMMENT \'创建人\', `create_time` datetime NOT NULL COMMENT \'创建时间\', `update_by` bigint unsigned NOT NULL COMMENT \'修改人\', `update_time` datetime NOT NULL COMMENT \'修改时间\', PRIMARY KEY (id), KEY `idx_template_id` (`template_id`), KEY `idx_receiver` (`receiver`) )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=\'消息推送记录表\';","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/notebook/technical-solution/message-push-solution.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"消息推送方案"}],["meta",{"property":"og:description","content":"通常在服务端会有若干张消息推送表，用来记录用户触发不同事件所推送不同类型的消息，前端主动查询（拉）或者被动接收（推）用户所有未读的消息数。 消息推送表的参考设计： CREATE TABLE `message_record` ( `id` bigint unsigned NOT NULL auto_increment COMMENT \'主键\', `template_idbigint` unsigned NOT NULL COMMENT \'消息模板ID\', `type` int NOT NULL DEFAULT COMMENT \'推送渠道1短信,2邮件,3微信,4APP\', `receiver` varchar(128) NOT NULL DEFAULT COMMENT \'消息接收者(手机号，邮箱号，微信openid等)\', `device_info` varchar(128) NOT NULL DEFAULT COMMENT \'APP推送终端设备信息\', `content` varchar(1024) NOT NULL COMMENT \'消息推送内容\', `deleted` tinyint NOT NULL DEFAULTO COMMENT \'逻辑删除标记: 删除;0未删除\', `create_by` bigint unsigned NOT NULLCOMMENT \'创建人\', `create_time` datetime NOT NULL COMMENT \'创建时间\', `update_by` bigint unsigned NOT NULL COMMENT \'修改人\', `update_time` datetime NOT NULL COMMENT \'修改时间\', PRIMARY KEY (id), KEY `idx_template_id` (`template_id`), KEY `idx_receiver` (`receiver`) )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=\'消息推送记录表\';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"Solution"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息推送方案\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"短轮询","slug":"短轮询","link":"#短轮询","children":[]},{"level":2,"title":"长轮询","slug":"长轮询","link":"#长轮询","children":[]},{"level":2,"title":"SSE","slug":"sse","link":"#sse","children":[{"level":3,"title":"SSE和Websocket如何选择？","slug":"sse和websocket如何选择","link":"#sse和websocket如何选择","children":[]}]},{"level":2,"title":"MQTT","slug":"mqtt","link":"#mqtt","children":[]},{"level":2,"title":"Websocket","slug":"websocket","link":"#websocket","children":[]},{"level":2,"title":"第三方推送平台","slug":"第三方推送平台","link":"#第三方推送平台","children":[]}],"git":{},"readingTime":{"minutes":7.26,"words":2178},"filePathRelative":"notebook/technical-solution/message-push-solution.md","excerpt":"<p>通常在服务端会有若干张消息推送表，用来记录用户触发不同事件所推送不同类型的消息，前端主动查询（拉）或者被动接收（推）用户所有未读的消息数。</p>\\n<p>消息推送表的参考设计：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>message_record<span class=\\"token punctuation\\">`</span></span>\\n<span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>id<span class=\\"token punctuation\\">`</span></span>                <span class=\\"token keyword\\">bigint</span> <span class=\\"token keyword\\">unsigned</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">auto_increment</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'主键\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>template_idbigint<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">unsigned</span>      <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'消息模板ID\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>type<span class=\\"token punctuation\\">`</span></span>              <span class=\\"token keyword\\">int</span>           <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'推送渠道1短信,2邮件,3微信,4APP\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>receiver<span class=\\"token punctuation\\">`</span></span>          <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">128</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'消息接收者(手机号，邮箱号，微信openid等)\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>device_info<span class=\\"token punctuation\\">`</span></span>       <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">128</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'APP推送终端设备信息\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>content<span class=\\"token punctuation\\">`</span></span>           <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1024</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'消息推送内容\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>deleted<span class=\\"token punctuation\\">`</span></span>           <span class=\\"token keyword\\">tinyint</span>       <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> DEFAULTO <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'逻辑删除标记: 删除;0未删除\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>create_by<span class=\\"token punctuation\\">`</span></span>         <span class=\\"token keyword\\">bigint</span> <span class=\\"token keyword\\">unsigned</span> <span class=\\"token operator\\">NOT</span> NULLCOMMENT <span class=\\"token string\\">\'创建人\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>create_time<span class=\\"token punctuation\\">`</span></span>       <span class=\\"token keyword\\">datetime</span>      <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'创建时间\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>update_by<span class=\\"token punctuation\\">`</span></span>         <span class=\\"token keyword\\">bigint</span> <span class=\\"token keyword\\">unsigned</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'修改人\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>update_time<span class=\\"token punctuation\\">`</span></span>       <span class=\\"token keyword\\">datetime</span>      <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'修改时间\'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span> <span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token keyword\\">KEY</span>                 <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>idx_template_id<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>template_id<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token keyword\\">KEY</span>                 <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>idx_receiver<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>receiver<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token keyword\\">ENGINE</span><span class=\\"token operator\\">=</span><span class=\\"token keyword\\">InnoDB</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">CHARSET</span><span class=\\"token operator\\">=</span>utf8mb4 <span class=\\"token keyword\\">COMMENT</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\'消息推送记录表\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
