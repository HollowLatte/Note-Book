---
title: 消息推送方案
author:
category: Solution
tag: Solution
---


通常在服务端会有若干张消息推送表，用来记录用户触发不同事件所推送不同类型的消息，前端主动查询（拉）或者被动接收（推）用户所有未读的消息数。

消息推送表的参考设计：

```sql
CREATE TABLE `message_record`
(
    `id`                bigint unsigned NOT NULL auto_increment COMMENT '主键',
    `template_idbigint` unsigned      NOT NULL COMMENT '消息模板ID',
    `type`              int           NOT NULL DEFAULT COMMENT '推送渠道1短信,2邮件,3微信,4APP',
    `receiver`          varchar(128)  NOT NULL DEFAULT COMMENT '消息接收者(手机号，邮箱号，微信openid等)',
    `device_info`       varchar(128)  NOT NULL DEFAULT COMMENT 'APP推送终端设备信息',
    `content`           varchar(1024) NOT NULL COMMENT '消息推送内容',
    `deleted`           tinyint       NOT NULL DEFAULTO COMMENT '逻辑删除标记: 删除;0未删除',
    `create_by`         bigint unsigned NOT NULLCOMMENT '创建人',
    `create_time`       datetime      NOT NULL COMMENT '创建时间',
    `update_by`         bigint unsigned NOT NULL COMMENT '修改人',
    `update_time`       datetime      NOT NULL COMMENT '修改时间',
    PRIMARY KEY (id),
    KEY                 `idx_template_id` (`template_id`),
    KEY                 `idx_receiver` (`receiver`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='消息推送记录表';
```

## 短轮询

轮询(polling)应该是实现消息推送方案中最简单的一种，这里我们暂且将轮询分为短轮询和长轮询。

短轮询很好理解，指定的时间间隔，由浏览器向服务器发出HTTP请求，服务器实时返回未读消息数据给客户端，浏览器再做渲染显示。

一个简单的JS定时器就可以搞定，每秒钟请求一次未读消息数接口，返回的数据展示即可。

```javascript
setInterval(() => {
    // 方法请求
    messageCount().then((res) => {
        if (res.code === 200) {
            this.messageCount = res.data
        }
    })
}, 1000);
```

效果还是可以的，短轮询实现固然简单，缺点也是显而易见，由于推送数据并不会频繁变更，无论后端此时是否有新的消息产生，客户端都会进行请求，势必会对服务端造成很大压力，浪费带宽和服务器资源。

## 长轮询

长轮询是对上边短轮询的一种改进版本，在尽可能减少对服务器资源浪费的同时，保证消息的相对实时性。长轮询在中间件中应用的很广泛，比如Nacos和apollo配置中心，消息队列kafka、RocketMQ中都有用到长轮询。

这次我使用apollo配置中心实现长轮询的方式，应用了一个类DeferredResult，它是在servelet3.0后经过Spring封装提供的一种异步请求机制，直意就是延迟结果。

DeferredResult可以允许容器线程快速释放占用的资源，不阻塞请求线程，以此接受更多的请求提升系统的吞吐量，然后启动异步工作线程处理真正的业务逻辑，处理完成调用DeferredResult.setResult(
200)提交响应结果。

下边我们用长轮询来实现消息推送：

因为一个ID可能会被多个长轮询请求监听，所以我采用了guava包提供的Multimap结构存放长轮询，一个key可以对应多个value。一旦监听到key发生变化，对应的所有长轮询都会响应。前端得到非请求超时的状态码，知晓数据变更，主动查询未读消息数接口，更新页面数据。

```java

@Controller
@RequestMapping("/polling")
public class PollingController {

    // 存放监听某个Id的长轮询集合
    // 线程同步结构
    public static Multimap<String, DeferredResult<String>> watchRequests = Multimaps.synchronizedMultimap(HashMultimap.create());

    /**
     * 设置监听
     */
    @GetMapping(path = "watch/{id}")
    @ResponseBody
    public DeferredResult<String> watch(@PathVariable String id) {
        // 延迟对象设置超时时间
        DeferredResult<String> deferredResult = new DeferredResult<>(TIME_OUT);
        // 异步请求完成时移除 key，防止内存溢出
        deferredResult.onCompletion(() -> {
            watchRequests.remove(id, deferredResult);
        });
        // 注册长轮询请求
        watchRequests.put(id, deferredResult);
        return deferredResult;
    }

    /**
     * 变更数据
     */
    @GetMapping(path = "publish/{id}")
    @ResponseBody
    public String publish(@PathVariable String id) {
        // 数据变更 取出监听ID的所有长轮询请求，并一一响应处理
        if (watchRequests.containsKey(id)) {
            Collection<DeferredResult<String>> deferredResults = watchRequests.get(id);
            for (DeferredResult<String> deferredResult : deferredResults) {
                deferredResult.setResult("我更新了" + new Date());
            }
        }
        return "success";
    }
}
```

当请求超过设置的超时时间，会抛出AsyncRequestTimeoutException异常，这里直接用@ControllerAdvice全局捕获统一返回即可，前端获取约定好的状态码后再次发起长轮询请求，如此往复调用。

```java

@ControllerAdvice
public class AsyncRequestTimeoutHandler {
    @ResponseStatus(HttpStatus.NOT_MODIFIED)
    @ResponseBody
    @ExceptionHandler(AsyncRequestTimeoutException.class)
    public String asyncRequestTimeoutHandler(AsyncRequestTimeoutException e) {
        System.out.println("异步请求超时");
        return "304";
    }
}
```

长轮询相比于短轮询在性能上提升了很多，但依然会产生较多的请求，这是它的一点不完美的地方。

## SSE

服务端向客户端推送消息，其实除了可以用WebSocket这种耳熟能详的机制外，还有一种服务器发送事件(Server-sent events)，简称SSE。

SSE它是基于HTTP协议的，我们知道一般意义上的HTTP协议是无法做到服务端主动向客户端推送消息的，但SSE是个例外，它变换了一种思路。

SSE在服务器和客户端之间打开一个单向通道，服务端响应的不再是一次性的数据包而是text/event-stream类型的数据流信息，在有数据变更时从服务器流式传输到客户端。

整体的实现思路有点类似于在线视频播放，视频流会连续不断的推送到浏览器，你也可以理解成，客户端在完成一次用时很长（网络不畅）的下载。

SSE与WebSocket作用相似，都可以建立服务端与浏览器之间的通信，实现服务端向客户端推送消息，但还是有些许不同：

- SSE 是基于HTTP协议的，它们不需要特殊的协议或服务器实现即可工作；WebSocket需单独服务器来处理协议。
- SSE 单向通信，只能由服务端向客户端单向通信；webSocket全双工通信，即通信的双方可以同时发送和接受信息。
- SSE 实现简单开发成本低，无需引入其他组件；WebSocket传输数据需做二次解析，开发门槛高一些。
- SSE 默认支持断线重连；WebSocket则需要自己实现。
- SSE 只能传送文本消息，二进制数据需要经过编码后传送；WebSocket默认支持传送二进制数据。

### SSE和Websocket如何选择？

SSE好像一直不被大家所熟知，一部分原因是出现了WebSockets，这个提供了更丰富的协议来执行双向、全双工通信。对于游戏、即时通信以及需要双向近乎实时更新的场景，拥有双向通道更具吸引力。

但是，在某些情况下，不需要从客户端发送数据。而你只需要一些服务器操作的更新。比如：站内信、未读消息数、状态更新、股票行情、监控数量等场景，SEE不管是从实现的难易和成本上都更加有优势。此外，SSE
具有WebSockets在设计上缺乏的多种功能，例如：自动重新连接、事件ID和发送任意事件的能力。

前端只需进行一次HTTP请求，带上唯一ID，打开事件流，监听服务端推送的事件就可以了

前端代码：

```javascript
<script>
    let source = null;
    let userId = 7777
    if (window.EventSource) {
    // 建立连接
    source = new EventSource('http://localhost:7777/sse/sub/' + userId);
    setMessageInnerHTML("连接用户=" + userId);
    /**
     * 连接一旦建立，就会触发open事件
     * 另一种写法：source.onopen = function (event) {}
     */
    source.addEventListener('open', function (e) {
    setMessageInnerHTML("建立连接。。。");
}, false);
    /**
     * 客户端收到服务器发来的数据
     * 另一种写法：source.onmessage = function (event) {}
     */
    source.addEventListener('message', function (e) {
    setMessageInnerHTML(e.data);
});
} else {
    setMessageInnerHTML("你的浏览器不支持SSE")
}
</script>
```

服务端的实现更简单，创建一个SseEmitter对象放入sseEmitterMap进行管理

```java
public class SSEService {
    private static Map<String, SseEmitter> sseEmitterMap = new ConcurrentHashMap<>();

    /**
     * 创建连接
     */
    public static SseEmitter connect(String userId) {
        try {
            // 设置超时时间，0表示不过期。默认30秒
            SseEmitter sseEmitter = new SseEmitter(0L);
            // 注册回调
            sseEmitter.onCompletion(completionCallBack(userId));
            sseEmitter.onError(errorCallBack(userId));
            sseEmitter.onTimeout(timeoutCallBack(userId));
            sseEmitterMap.put(userId, sseEmitter);
            count.getAndIncrement();
            return sseEmitter;
        } catch (Exception e) {
            log.info("创建新的sse连接异常，当前用户：{}", userId);
        }
        return null;
    }

    /**
     * 给指定用户发送消息
     */
    public static void sendMessage(String userId, String message) {

        if (sseEmitterMap.containsKey(userId)) {
            try {
                sseEmitterMap.get(userId).send(message);
            } catch (IOException e) {
                log.error("用户[{}]推送异常:{}", userId, e.getMessage());
                removeUser(userId);
            }
        }
    }
}
```

注意： SSE不支持IE浏览器，对其他主流浏览器兼容性做的还不错。

## MQTT

## Websocket

## 第三方推送平台

goEasy、极光推送等

消息推送系统内部是相当复杂的，诸如消息内容的维护审核、圈定推送人群、触达过滤拦截（推送的规则频次、时段、数量、黑白名单、关键词等等）、推送失败补偿非常多的模块，技术上涉及到大数据量、高并发的场景也很多。




