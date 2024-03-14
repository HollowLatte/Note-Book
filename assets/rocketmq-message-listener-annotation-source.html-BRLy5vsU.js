const e=JSON.parse('{"key":"v-032650f6","path":"/notebook/mq/rocketmq/rocketmq-message-listener-annotation-source.html","title":"RocketMQMessageListener注解源码解读","lang":"zh-CN","frontmatter":{"title":"RocketMQMessageListener注解源码解读","author":null,"category":"RocketMQ","tag":"RocketMQ","date":"2024-02-04T00:00:00.000Z","description":"RocketMQ-Spring RocketMQ-Spring官方wiki RocketMQMessageListener使用的是push模式来接收消息 源码 此处的依赖是rocketmq-spring-boot-starter的2.2.3，对应的rocketmq的client是5.0版本，与4.x版本的源码有区别，需要注意","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/Note-Book/notebook/mq/rocketmq/rocketmq-message-listener-annotation-source.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:title","content":"RocketMQMessageListener注解源码解读"}],["meta",{"property":"og:description","content":"RocketMQ-Spring RocketMQ-Spring官方wiki RocketMQMessageListener使用的是push模式来接收消息 源码 此处的依赖是rocketmq-spring-boot-starter的2.2.3，对应的rocketmq的client是5.0版本，与4.x版本的源码有区别，需要注意"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2024-02-04T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQMessageListener注解源码解读\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-04T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"RocketMQ-Spring","slug":"rocketmq-spring","link":"#rocketmq-spring","children":[]},{"level":2,"title":"源码","slug":"源码","link":"#源码","children":[{"level":3,"title":"RocketMQMessageListenerBeanPostProcessor","slug":"rocketmqmessagelistenerbeanpostprocessor","link":"#rocketmqmessagelistenerbeanpostprocessor","children":[]},{"level":3,"title":"DefaultRocketMQListenerContainer","slug":"defaultrocketmqlistenercontainer","link":"#defaultrocketmqlistenercontainer","children":[]},{"level":3,"title":"DefaultMQPushConsumer","slug":"defaultmqpushconsumer","link":"#defaultmqpushconsumer","children":[]},{"level":3,"title":"DefaultMQPushConsumerImpl","slug":"defaultmqpushconsumerimpl","link":"#defaultmqpushconsumerimpl","children":[]},{"level":3,"title":"MQClientInstance","slug":"mqclientinstance","link":"#mqclientinstance","children":[]},{"level":3,"title":"PullMessageService","slug":"pullmessageservice","link":"#pullmessageservice","children":[]}]}],"git":{},"readingTime":{"minutes":2.12,"words":636},"filePathRelative":"notebook/mq/rocketmq/rocketmq-message-listener-annotation-source.md","localizedDate":"2024年2月4日","excerpt":"<h2> RocketMQ-Spring</h2>\\n<p><a href=\\"https://github.com/apache/rocketmq-spring/wiki\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ-Spring官方wiki</a></p>\\n<p>RocketMQMessageListener使用的是push模式来接收消息</p>\\n<h2> 源码</h2>\\n<p>此处的依赖是rocketmq-spring-boot-starter的2.2.3，对应的rocketmq的client是5.0版本，与4.x版本的源码有区别，需要注意</p>","autoDesc":true}');export{e as data};
