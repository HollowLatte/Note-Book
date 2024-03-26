import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as p,a as n,d as a,b as e,e as u}from"./app-lFGRJO1c.js";const c={},o=n("h2",{id:"delayqueue简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#delayqueue简介"},[n("span",null,"DelayQueue简介")])],-1),r=n("p",null,"DelayQueue是JUC包(java.util.concurrent)为我们提供的延迟队列，它是一个基于PriorityQueue实现的一个无界队列，是一个线程安全的延迟队列。",-1),d=n("p",null,"关于PriorityQueue可以参考笔者编写的这篇文章:",-1),v={href:"http://t.csdn.cn/XJuAf",target:"_blank",rel:"noopener noreferrer"},k=u(`<p>当我们希望某个任务在某个时间才能取出并操作时，我们就可以让这个继承Delayed接口，实现其计算任务到期时间的方法 getDelay 。然后将任务存放到 DelayQueue 中,默认情况下, DelayQueue 会按照到期时间升序编排任务。随后当 DelayQueue 发现任务到期时，我们才能从 DelayQueue 中取出这个任务并执行。</p><p>这使得 DelayQueue非常适合运用于以下两种场景:</p><ol><li>定时任务 : DelayQueue 非常适合用于处理那些到期才能执行的任务，例如用户触发下单请求，我们规定15min后未支付则取消订单，那么我们就可以提交一个15min后到查询用户下单情况的任务给DelayQueue，如果15min后取出该任务发现用户还未下单，则取消这个订单。</li><li>缓存过期 : 假如我们使用Java维护一个内存，我们希望缓存具备时效性，同样我们可以封装一个缓存过期删除的任务提交到DelayQueue，DelayQueue会在到期后取出这个任务并将缓存数据删除。</li></ol><h2 id="delayqueue发展史" tabindex="-1"><a class="header-anchor" href="#delayqueue发展史"><span>DelayQueue发展史</span></a></h2><p>DelayQueue 最早是在 Java 5 中引入的，作为 java.util.concurrent 包中的一部分，用于支持基于时间的任务调度和缓存过期删除等场景，该版本仅仅支持延迟功能的实现，还未解决线程安全问题。</p><p>在 Java 6 中，DelayQueue 的实现进行了优化，通过使用 ReentrantLock 和 Condition 解决线程安全及线程间交互的效率，提高了其性能和可靠性。</p><p>在 Java 7 中，DelayQueue 的实现进行了进一步的优化，通过使用 CAS 操作实现元素的添加和移除操作，提高了其并发操作性能。</p><p>在 Java 8 中，DelayQueue 的实现没有进行重大变化，但是在 java.time 包中引入了新的时间类，如 Duration 和 Instant，使得使用 DelayQueue 进行基于时间的调度更加方便和灵活。</p><p>在 Java 9 中，DelayQueue 的实现进行了一些微小的改进，主要是对代码进行了一些优化和精简。</p><p>总的来说，DelayQueue 的发展史主要是通过优化其实现方式和提高其性能和可靠性，使其更加适用于基于时间的调度和缓存过期删除等场景。</p><h2 id="delayqueue常见使用场景示例" tabindex="-1"><a class="header-anchor" href="#delayqueue常见使用场景示例"><span>DelayQueue常见使用场景示例</span></a></h2><h4 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务"><span>定时任务</span></a></h4><p>我们希望任务可以按照我们预期的时间执行，例如提交3个任务，分别要求1s、2s、3s后执行，即使是乱序添加，1s后要求1s执行的任务会准时执行。</p><figure><img src="https://qiniuyun.sharkchili.com/img202306301213027.png" alt="在这里插入图片描述" tabindex="0"><figcaption>在这里插入图片描述</figcaption></figure><p>对此我们可以使用DelayQueue来实现,所以我们首先需要继承Delayed实现 DelayedTask，实现getDelay方法以及优先级比较compareTo。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/**
 * 延迟任务
 */
public class DelayedTask implements Delayed <span class="token punctuation">{</span>
    /**
     * 任务到期时间
     */
    private long executeTime<span class="token punctuation">;</span>
    /**
     * 任务
     */
    private Runnable task<span class="token punctuation">;</span>

    public DelayedTask<span class="token punctuation">(</span>long delay, Runnable task<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        this.executeTime <span class="token operator">=</span> System.currentTimeMillis<span class="token punctuation">(</span><span class="token punctuation">)</span> + delay<span class="token punctuation">;</span>
        this.task <span class="token operator">=</span> task<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    /**
     * 查看当前任务还有多久到期
     * @param unit
     * @return
     */
    @Override
    public long getDelay<span class="token punctuation">(</span>TimeUnit unit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> unit.convert<span class="token punctuation">(</span>executeTime - System.currentTimeMillis<span class="token punctuation">(</span><span class="token punctuation">)</span>, TimeUnit.MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    /**
     * 延迟队列需要到期时间升序入队，所以我们需要实现compareTo进行到期时间比较
     * @param o
     * @return
     */
    @Override
    public int compareTo<span class="token punctuation">(</span>Delayed o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> Long.compare<span class="token punctuation">(</span>this.executeTime, <span class="token punctuation">((</span>DelayedTask<span class="token punctuation">)</span> o<span class="token punctuation">)</span>.executeTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    public void <span class="token function-name function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        task.run<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成任务的封装之后，使用就很简单了，设置好多久到期然后将任务提交到延迟队列中即可。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>public static void main<span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws InterruptedException <span class="token punctuation">{</span>
        // 创建延迟队列，并添加任务
        DelayQueue<span class="token operator">&lt;</span>DelayedTask<span class="token operator">&gt;</span> delayQueue <span class="token operator">=</span> new DelayQueue<span class="token operator">&lt;&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        //分别添加1s、2s、3s到期的任务
        delayQueue.add<span class="token punctuation">(</span>new DelayedTask<span class="token punctuation">(</span><span class="token number">2000</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> -<span class="token operator">&gt;</span> System.out.println<span class="token punctuation">(</span><span class="token string">&quot;Task 2&quot;</span><span class="token punctuation">))</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        delayQueue.add<span class="token punctuation">(</span>new DelayedTask<span class="token punctuation">(</span><span class="token number">1000</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> -<span class="token operator">&gt;</span> System.out.println<span class="token punctuation">(</span><span class="token string">&quot;Task 1&quot;</span><span class="token punctuation">))</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        delayQueue.add<span class="token punctuation">(</span>new DelayedTask<span class="token punctuation">(</span><span class="token number">3000</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> -<span class="token operator">&gt;</span> System.out.println<span class="token punctuation">(</span><span class="token string">&quot;Task 3&quot;</span><span class="token punctuation">))</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        // 取出任务并执行
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>delayQueue.isEmpty<span class="token punctuation">(</span><span class="token punctuation">))</span> <span class="token punctuation">{</span>
            //阻塞获取最先到期的任务
            DelayedTask task <span class="token operator">=</span> delayQueue.take<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>task <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                task.execute<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果可以看出，即使笔者先提到2s到期的任务，1s到期的任务Task1还是优先执行的。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Task <span class="token number">1</span>
Task <span class="token number">2</span>
Task <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="缓存过期" tabindex="-1"><a class="header-anchor" href="#缓存过期"><span>缓存过期</span></a></h4><p>对于某些热点数据，我们希望将其缓存到内存中，为避免没必要的内存占用，我们希望对缓存数据设置到期失效。</p><figure><img src="https://qiniuyun.sharkchili.com/img202306301213864.png" alt="在这里插入图片描述" tabindex="0"><figcaption>在这里插入图片描述</figcaption></figure><p>对于这种需求，如果不希望引入中间件或者第三方工具的话，我们完全可以通过DelayQueue实现，这里笔者大概介绍一下实现思路:</p><ol><li>封装要提交到DelayQueue的任务，该任务指明到期要删除的key和删除时间。</li><li>封装缓存类，实现缓存数据的存取以及缓存到期清除的逻辑。</li><li>测试类，测试未到期时缓存是否可以获取以及到期后是否返回null。</li></ol><p>首先我们需要编写一个缓存的任务CacheItem，告知延迟队列何时到期以及优先级如何判断。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/**
 * 定时删除缓存项
 * @param <span class="token operator">&lt;</span>K<span class="token operator">&gt;</span>
 */
public class CacheItem<span class="token operator">&lt;</span>K<span class="token operator">&gt;</span> implements Delayed <span class="token punctuation">{</span>
    /**
     * 到期将被删除的key名称
     */
    private final K key<span class="token punctuation">;</span>
    /**
     * 到期时间
     */
    private final long expireTime<span class="token punctuation">;</span>


    /**
     * 设置key以及key的到期时间
     * @param key
     * @param expireAfterWrite
     * @param timeUnit
     */
    public CacheItem<span class="token punctuation">(</span>K key, long expireAfterWrite, TimeUnit timeUnit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        this.key <span class="token operator">=</span> key<span class="token punctuation">;</span>
        this.expireTime <span class="token operator">=</span> System.currentTimeMillis<span class="token punctuation">(</span><span class="token punctuation">)</span> + timeUnit.toMillis<span class="token punctuation">(</span>expireAfterWrite<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    /**
     * 查询到期时间
     * @param unit
     * @return
     */
    @Override
    public long getDelay<span class="token punctuation">(</span>TimeUnit unit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> unit.convert<span class="token punctuation">(</span>expireTime - System.currentTimeMillis<span class="token punctuation">(</span><span class="token punctuation">)</span>, TimeUnit.MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    @Override
    public int compareTo<span class="token punctuation">(</span>Delayed o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> Long.compare<span class="token punctuation">(</span>expireTime, <span class="token punctuation">((</span>CacheItem<span class="token operator">&lt;</span>?<span class="token operator">&gt;</span><span class="token punctuation">)</span> o<span class="token punctuation">)</span>.expireTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    public K <span class="token function-name function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成任务编写之后，我们就可以实现我们自己的缓存工具了，这里实现的方式非常简单，对于缓存数据的存取我们都用ConcurrentHashMap来管理，而到期删除的逻辑，我们在存缓存数据的同时，提交一个缓存到期的任务给DelayQueue即可。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/**
 * 基于延迟队列实现缓存过期的示例
 * @param <span class="token operator">&lt;</span>K<span class="token operator">&gt;</span>
 * @param <span class="token operator">&lt;</span>V<span class="token operator">&gt;</span>
 */
public class Cache<span class="token operator">&lt;</span>K, V<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    /**
     * 延迟队列，定时清除到期缓存数据
     */
    private final DelayQueue<span class="token operator">&lt;</span>CacheItem<span class="token operator">&lt;</span>K<span class="token operator">&gt;&gt;</span> queue <span class="token operator">=</span> new DelayQueue<span class="token operator">&lt;&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    /**
     * 存放缓存的键值对
     */
    private final  Map<span class="token operator">&lt;</span>K, V<span class="token operator">&gt;</span> cache <span class="token operator">=</span> new ConcurrentHashMap<span class="token operator">&lt;&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    /**
     * 构造方法创建一个守护线程，定时查询到期的key并清除缓存
     */
    public <span class="token function-name function">Cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Thread t <span class="token operator">=</span> new Thread<span class="token punctuation">(</span>this::expireItems<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t.setDaemon<span class="token punctuation">(</span>true<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t.start<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    /**
     * 添加数据到缓存中
     * @param key
     * @param value
     * @param expireAfterWrite
     * @param timeUnit
     */
    public void put<span class="token punctuation">(</span>K key, V value, long expireAfterWrite, TimeUnit timeUnit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        //插入数据到缓存中
        cache.put<span class="token punctuation">(</span>key, value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        //添加一个任务，到期时清除缓存中的key
        queue.put<span class="token punctuation">(</span>new CacheItem<span class="token operator">&lt;&gt;</span><span class="token punctuation">(</span>key, expireAfterWrite, timeUnit<span class="token punctuation">))</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    /**
     * 从缓存中获取数据
     * @param key
     * @return
     */
    public V get<span class="token punctuation">(</span>K key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> cache.get<span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    private void <span class="token function-name function">expireItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>true<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            try <span class="token punctuation">{</span>
                CacheItem<span class="token operator">&lt;</span>K<span class="token operator">&gt;</span> item <span class="token operator">=</span> queue.take<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                System.out.println<span class="token punctuation">(</span><span class="token string">&quot;item:&quot;</span> + item.getKey<span class="token punctuation">(</span><span class="token punctuation">)</span> + <span class="token string">&quot;已过期,开始删除&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                cache.remove<span class="token punctuation">(</span>item.getKey<span class="token punctuation">(</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
                System.out.println<span class="token punctuation">(</span><span class="token string">&quot;item:&quot;</span> + item.getKey<span class="token punctuation">(</span><span class="token punctuation">)</span> + <span class="token string">&quot;删除成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> catch <span class="token punctuation">(</span>InterruptedException e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                Thread.currentThread<span class="token punctuation">(</span><span class="token punctuation">)</span>.interrupt<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token builtin class-name">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成缓存工具开发之后，我们不妨进行一下简单的测试，我们往缓存中添加一个5s到期的缓存，看看6s前和6s后的获取情况。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> public static void main<span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws InterruptedException <span class="token punctuation">{</span>
        Cache<span class="token operator">&lt;</span>String, Integer<span class="token operator">&gt;</span> cache <span class="token operator">=</span> new Cache<span class="token operator">&lt;&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        // 存储数据项，并设置过期时间为 <span class="token number">5</span> 秒
        cache.put<span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span>, <span class="token number">1</span>, <span class="token number">5</span>, TimeUnit.<span class="token environment constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cache.put<span class="token punctuation">(</span><span class="token string">&quot;key2&quot;</span>, <span class="token number">2</span>, <span class="token number">5</span>, TimeUnit.<span class="token environment constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        // 获取数据项
        System.out.println<span class="token punctuation">(</span>cache.get<span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">))</span><span class="token punctuation">;</span> // 输出 <span class="token number">1</span>

        // 等待 <span class="token number">6</span> 秒，让数据项过期
        Thread.sleep<span class="token punctuation">(</span><span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        // 再次获取数据项
        System.out.println<span class="token punctuation">(</span>cache.get<span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">))</span><span class="token punctuation">;</span> // 输出 null
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果来看5s到期的缓存数据在休眠6s后已经无法获取到了:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>
item:key1已过期,开始删除
item:key1删除成功
item:key2已过期,开始删除
item:key2删除成功
null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delayqueue源码解析" tabindex="-1"><a class="header-anchor" href="#delayqueue源码解析"><span>DelayQueue源码解析</span></a></h2><h3 id="核心成员变量" tabindex="-1"><a class="header-anchor" href="#核心成员变量"><span>核心成员变量</span></a></h3><p>了解了DelayQueue的使用方式之后，我们就可以深入的去了解DelayQueue源码了。首先我们先来看看几个比较核心的成员变量:</p><ol><li>lock : 我们都知道DelayQueue存取是线程安全的，所以为了保证存取元素时线程安全，我们就需要在存取时上锁,而DelayQueue就是基于lock独占锁确保存取操作的线程安全。</li><li>q : 延迟队列要求元素按照到期时间进行升序排列，所以元素添加时势必需要进行优先级排序,所以DelayQueue底层元素的存取都是通过这个优先队列PriorityQueue的成员变量q来管理的。</li><li>leader : 延迟队列的任务只有到期之后才会执行,对于没有到期的任务只有等待,为了确保优先级最高的任务到期后可以即刻被执行,设计者就用leader来管理延迟任务，只有leader所指向的线程才具备定时等待任务到期执行的权限，而其他那些优先级低的任务只能无限期等待，直到leader线程执行完手头的延迟任务后唤醒它。</li><li>available : 上文讲述leader线程时提到的等待唤醒操作的交互就是通过 available 实现的，假如线程1尝试在空的DelayQueue获取任务时，available 就会将其放入等待队列中。直到有一个线程添加一个延迟任务后通过available 的signal方法将其唤醒。</li></ol><p>所有成员变量的定义如下:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>	//可重入锁，实现线程安全的关键
    private final transient ReentrantLock lock <span class="token operator">=</span> new ReentrantLock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    //延迟队列底层存储数据的集合,确保元素按照到期时间升序排列
    private final PriorityQueue<span class="token operator">&lt;</span>E<span class="token operator">&gt;</span> q <span class="token operator">=</span> new PriorityQueue<span class="token operator">&lt;</span>E<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 	//指向准备执行优先级最高的线程
    private Thread leader <span class="token operator">=</span> null<span class="token punctuation">;</span>
	//实现多线程之间等待唤醒的交互
    private final Condition available <span class="token operator">=</span> lock.newCondition<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法"><span>构造方法</span></a></h3><p>相较于其他的并发容器，延迟队列的构造方法比较简单，它只有两个构造方法，因为所有成员变量在类加载时都已经初始完成了，所以默认构造方法什么也没做。还有一个传入Collection对象的构造方法，它会将调用addAll将集合元素存到优先队列q中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>	public <span class="token function-name function">DelayQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

 
    public DelayQueue<span class="token punctuation">(</span>Collection<span class="token operator">&lt;</span>? extends E<span class="token operator">&gt;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        this.addAll<span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加元素" tabindex="-1"><a class="header-anchor" href="#添加元素"><span>添加元素</span></a></h3><p>DelayQueue 添加元素的方法无论是add、put还是offer,本质上就是调用一下 offer ,所以了解延迟队列的添加逻辑我们只需阅读offer方法即可。</p><p>offer 方法的整体逻辑为:</p><ol><li>尝试获取 lock 。</li><li>如果上锁成功,则调 q 的 offer 方法将元素存放到优先队列中。</li><li>调用 peek 方法看看当前队首元素是否就是本次入队的元素,如果是则说明当前这个元素是即将到期的任务(即优先级最高的元素)，于是将leader设置为空,通知因为队列为空时调用take等方法导致阻塞的线程来争抢元素。</li><li>上述步骤执行完成，释放lock。</li><li>返回true。</li></ol><p>源码如下，笔者已详细注释，读者可自行参阅:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>public boolean offer<span class="token punctuation">(</span>E e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		//尝试获取lock 
        final ReentrantLock lock <span class="token operator">=</span> this.lock<span class="token punctuation">;</span>
        lock.lock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        try <span class="token punctuation">{</span>
        //如果上锁成功,则调q的offer方法将元素存放到优先队列中
            q.offer<span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            //调用peek方法看看当前队首元素是否就是本次入队的元素,如果是则说明当前这个元素是即将到期的任务<span class="token punctuation">(</span>即优先级最高的元素<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>q.peek<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            //将leader设置为空,通知调用取元素方法而阻塞的线程来争抢这个任务
                leader <span class="token operator">=</span> null<span class="token punctuation">;</span>
                available.signal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token builtin class-name">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> finally <span class="token punctuation">{</span>
        //上述步骤执行完成，释放lock
            lock.unlock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取元素" tabindex="-1"><a class="header-anchor" href="#获取元素"><span>获取元素</span></a></h3><p>DelayQueue 中获取元素的方式分为阻塞式和非阻塞式，先来看看逻辑比较复杂的阻塞式获取元素方法take,为了让读者可以更直观的了解阻塞式获取元素的全流程，笔者将以3个线程并发获取元素为例讲述take的工作流程。</p><ol><li>首先3个线程会尝试获取可重入锁lock,假设我们现在有3个线程分别是t1、t2、t3,随后t1得到了锁，而t2、t3没有抢到锁，故将这两个线程存入等待队列中。</li></ol><figure><img src="https://qiniuyun.sharkchili.com/img202306301213758.png" alt="在这里插入图片描述" tabindex="0"><figcaption>在这里插入图片描述</figcaption></figure><ol start="2"><li>紧接着t1开始进行元素获取的逻辑。</li><li>线程t1首先会查看DelayQueue队列首元素是否为空。</li><li>如果元素为空，则说明当前队列没有任何元素，故t1就会被阻塞存到conditionWaiter这个队列中。</li></ol><figure><img src="https://qiniuyun.sharkchili.com/img202306301213690.png" alt="在这里插入图片描述" tabindex="0"><figcaption>在这里插入图片描述</figcaption></figure><p>注意，调用await之后t1就会释放lcok锁，假如DelayQueue持续为空，那么t2、t3也会像t1一样执行相同的逻辑并进入conditionWaiter队列中。</p><figure><img src="https://qiniuyun.sharkchili.com/img202306301213656.png" alt="在这里插入图片描述" tabindex="0"><figcaption>在这里插入图片描述</figcaption></figure><p>如果元素不为空，则判断当前任务是否到期，如果元素到期，则直接返回出去。如果元素未到期，则判断当前leader线程(DelayQueue中唯一一个可以等待并获取元素的线程引用)是否为空，若不为空，则说明当前leader正在等待执行一个优先级比当前元素还高的元素到期，故当前线程t1只能调用await进入无限期等待，等到leader取得元素后唤醒。</p><figure><img src="https://qiniuyun.sharkchili.com/img202306301213007.png" alt="在这里插入图片描述" tabindex="0"><figcaption>在这里插入图片描述</figcaption></figure><p>反之若leader线程为空，则将当前线程设置为leader并进入有限期等待,到期后取出元素并返回。</p><p>自此我们阻塞式获取元素的逻辑都已完成后,源码如下，读者可自行参阅:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>public E take<span class="token punctuation">(</span><span class="token punctuation">)</span> throws InterruptedException <span class="token punctuation">{</span>
		// 尝试获取可重入锁,将底层AQS的state设置为1,并设置为独占锁
        final ReentrantLock lock <span class="token operator">=</span> this.lock<span class="token punctuation">;</span>
        lock.lockInterruptibly<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        try <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                //查看队列第一个元素
                E first <span class="token operator">=</span> q.peek<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                //若为空,则将当前线程放入ConditionObject的等待队列中，并将底层AQS的state设置为0，表示释放锁并进入无限期等待
                <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">==</span> null<span class="token punctuation">)</span>
                    available.await<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span> <span class="token punctuation">{</span>
                	//若元素不为空，则查看当前元素多久到期
                    long delay <span class="token operator">=</span> first.getDelay<span class="token punctuation">(</span>NANOSECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    //如果小于0则说明已到期直接返回出去
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>delay <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                        <span class="token builtin class-name">return</span> q.poll<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                     //如果大于0则说明任务还没到期，首先需要释放对这个元素的引用
                    first <span class="token operator">=</span> null<span class="token punctuation">;</span> // don&#39;t retain ref <span class="token keyword">while</span> waiting
                    //判断leader是否为空，如果不为空，则说明正有线程作为leader并等待一个任务到期，则当前线程进入无限期等待
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>leader <span class="token operator">!=</span> null<span class="token punctuation">)</span>
                        available.await<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    	//反之将我们的线程成为leader
                        Thread thisThread <span class="token operator">=</span> Thread.currentThread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        leader <span class="token operator">=</span> thisThread<span class="token punctuation">;</span>
                        try <span class="token punctuation">{</span>
                        	//并进入有限期等待
                            available.awaitNanos<span class="token punctuation">(</span>delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> finally <span class="token punctuation">{</span>
                        //等待任务到期时，释放leader引用，进入下一次循环将任务return出去
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>leader <span class="token operator">==</span> thisThread<span class="token punctuation">)</span>
                                leader <span class="token operator">=</span> null<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> finally <span class="token punctuation">{</span>
        //收尾逻辑:如果leader不为空且q有元素，则说明有任务没人认领，直接发起通知唤醒因为锁被当前消费者持有而导致阻塞的生产者<span class="token punctuation">(</span>即调用put、add、offer的线程<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>leader <span class="token operator">==</span> null <span class="token operator">&amp;&amp;</span> q.peek<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> null<span class="token punctuation">)</span>
                available.signal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            //释放锁
            lock.unlock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再来看看非阻塞的获取元素方法 poll ，逻辑比较简单，整体步骤如下:</p><ol><li>尝试获取可重入锁。</li><li>查看队列第一个元素,判断元素是否为空。</li><li>若元素为空，或者元素未到期，则直接返回空。</li><li>若元素不为空且到期了，直接调用poll返回出去。</li><li>释放可重入锁 lock 。</li></ol><p>源码如下,读者可自行参阅源码及注释:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>public E <span class="token function-name function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		//尝试获取可重入锁
        final ReentrantLock lock <span class="token operator">=</span> this.lock<span class="token punctuation">;</span>
        lock.lock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        try <span class="token punctuation">{</span>
        //查看队列第一个元素,判断元素是否为空
            E first <span class="token operator">=</span> q.peek<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			//若元素为空，或者元素未到期，则直接返回空
            <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">==</span> null <span class="token operator">||</span> first.getDelay<span class="token punctuation">(</span>NANOSECONDS<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token builtin class-name">return</span> null<span class="token punctuation">;</span>
            <span class="token keyword">else</span>
            //若元素不为空且到期了，直接调用poll返回出去
                <span class="token builtin class-name">return</span> q.poll<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> finally <span class="token punctuation">{</span>
           //释放可重入锁lock
            lock.unlock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看元素" tabindex="-1"><a class="header-anchor" href="#查看元素"><span>查看元素</span></a></h3><p>上文获取元素时都会调用到peek方法，peek顾名思义仅仅窥探一下队列中的元素，它的步骤就4步:</p><ol><li>上锁。</li><li>调用优先队列q的peek方法查看索引0位置的元素。</li><li>释放锁。</li><li>将元素返回出去。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>public E <span class="token function-name function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        final ReentrantLock lock <span class="token operator">=</span> this.lock<span class="token punctuation">;</span>
        lock.lock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        try <span class="token punctuation">{</span>
            <span class="token builtin class-name">return</span> q.peek<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> finally <span class="token punctuation">{</span>
            lock.unlock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delayqueue常见面试题" tabindex="-1"><a class="header-anchor" href="#delayqueue常见面试题"><span>DelayQueue常见面试题</span></a></h2><h3 id="delayqueue-的实现原理是什么" tabindex="-1"><a class="header-anchor" href="#delayqueue-的实现原理是什么"><span>DelayQueue 的实现原理是什么？</span></a></h3><p>DelayQueue底层是使用优先队列PriorityQueue来存储元素，而PriorityQueue采用二叉小顶堆的思想确保值小的元素排在最前面，这就使得DelayQueue对于延迟任务优先级的管理就变得十分方便了。同时DelayQueue为了保证线程安全还用到了可重入锁ReentrantLock,确保单位时间内只有一个线程可以操作延迟队列。最后，为了实现多线程之间等待和唤醒的交互效率，DelayQueue还用到了Condition，通过Condition的await和signal方法完成多线程之间的等待唤醒。</p><h3 id="delayqueue-的使用场景有哪些" tabindex="-1"><a class="header-anchor" href="#delayqueue-的使用场景有哪些"><span>DelayQueue 的使用场景有哪些？</span></a></h3><p>DelayQueue 通常用于实现定时任务调度和缓存过期删除等场景。在定时任务调度中，需要将需要执行的任务封装成延迟任务对象，并将其添加到 DelayQueue 中，DelayQueue 会自动按照剩余延迟时间进行升序排序(默认情况)，以保证任务能够按照时间先后顺序执行。对于缓存过期这个场景而言，在数据被缓存到内存之后，我们可以将缓存的key封装成一个延迟的删除任务，并将其添加到 DelayQueue 中，当数据过期时，拿到这个任务的key，将这个key从内存中移除。</p><h3 id="delayqueue-中-delayed-接口的作用是什么" tabindex="-1"><a class="header-anchor" href="#delayqueue-中-delayed-接口的作用是什么"><span>DelayQueue 中 Delayed 接口的作用是什么？</span></a></h3><p>Delayed接口定义了元素的剩余延迟时间(getDelay)和元素之间的比较规则(该接口继承了Comparable接口)。若希望元素能够存放到DelayQueue 中，就必须实现 Delayed 接口的 getDelay() 方法和 compareTo() 方法，否则DelayQueue无法得知当前任务剩余时长和任务优先级的比较。</p><h3 id="delayqueue-和-timer-timertask-的区别是什么" tabindex="-1"><a class="header-anchor" href="#delayqueue-和-timer-timertask-的区别是什么"><span>DelayQueue 和 Timer/TimerTask 的区别是什么？</span></a></h3><p>DelayQueue 和 Timer/TimerTask 都可以用于实现定时任务调度，但是它们的实现方式不同。DelayQueue 是基于优先级队列和堆排序算法实现的，可以实现多个任务按照时间先后顺序执行；而 Timer/TimerTask 是基于单线程实现的，只能按照任务的执行顺序依次执行，如果某个任务执行时间过长，会影响其他任务的执行。另外，DelayQueue 还支持动态添加和移除任务，而 Timer/TimerTask 只能在创建时指定任务。</p><h3 id="delayqueue-的实现是否线程安全" tabindex="-1"><a class="header-anchor" href="#delayqueue-的实现是否线程安全"><span>DelayQueue 的实现是否线程安全？</span></a></h3><p>DelayQueue 的实现是线程安全的，它通过 ReentrantLock 实现了互斥访问和 Condition 实现了线程间的等待和唤醒操作，可以保证多线程环境下的安全性和可靠性。</p><h3 id="实现延迟队列的几种方式" tabindex="-1"><a class="header-anchor" href="#实现延迟队列的几种方式"><span>实现延迟队列的几种方式</span></a></h3><p>实现延迟队列的方式有很多，我们需要结合场景选用合适的方案，总体来说有一下几种实现方案:</p><ol><li>DelayQueue:直接将任务到JDK自带的DelayQueue用线程去监听。</li><li>第三方任务调度工具:例如Quartz 等定时任务调度工具。</li><li>Redis有序集合:以时分秒作为整数等方式作为优先级，元素作为value存到redis sorted set中,然后Java进程去轮询redis的set集合,判断当前时间是否到期，若到期则将元素从set中移除并执行。</li><li>Redis过期回调:设置 Redis 过期回调监听即将到期的key。</li><li>RabbitMQ: 基于 RabbitMQ 的TTL和DLX设置延迟消息，待延迟消息进入死信队列时将其转发到正常消息队列中，我们只需监听这个消息队列并处理这些从死信队列中转发过来的消息即可。</li><li>时间轮算法: 这种不是很常见,以钟表为为单表，设置好时间点index和圈数round,待时间轮到达这个值时将任务取出执行。</li></ol>`,83),m={href:"https://blog.csdn.net/monokai/article/details/109023025",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"参考文献",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考文献"},[n("span",null,"参考文献")])],-1),h={href:"https://book.douban.com/subject/36262609/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jb51.net/article/186192.htm",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/every__day/article/details/113810985",target:"_blank",rel:"noopener noreferrer"};function f(D,Q){const s=i("ExternalLinkIcon");return l(),p("div",null,[o,r,d,n("p",null,[n("a",v,[a("PriorityQueue源码分析"),e(s)])]),k,n("p",null,[a("详情可参考这篇文章,写的比较详细:"),n("a",m,[a("一口气说出Java 6种延时队列的实现方法(面试官也得服)"),e(s)])]),b,n("p",null,[a("深入理解高并发编程：JDK核心技术: "),n("a",h,[a("https://book.douban.com/subject/36262609/"),e(s)])]),n("p",null,[a("一口气说出Java 6种延时队列的实现方法(面试官也得服): "),n("a",y,[a("https://www.jb51.net/article/186192.htm"),e(s)])]),n("p",null,[a("图解DelayQueue源码（java 8）——延时队列的小九九: "),n("a",g,[a("https://blog.csdn.net/every__day/article/details/113810985"),e(s)])])])}const x=t(c,[["render",f],["__file","delayqueue-source-code.html.vue"]]),w=JSON.parse('{"path":"/java/collection/delayqueue-source-code.html","title":"","lang":"zh-CN","frontmatter":{"description":"DelayQueue简介 DelayQueue是JUC包(java.util.concurrent)为我们提供的延迟队列，它是一个基于PriorityQueue实现的一个无界队列，是一个线程安全的延迟队列。 关于PriorityQueue可以参考笔者编写的这篇文章: PriorityQueue源码分析 当我们希望某个任务在某个时间才能取出并操作时，我们...","head":[["meta",{"property":"og:url","content":"https://hollowlatte.github.io/Note-Book/java/collection/delayqueue-source-code.html"}],["meta",{"property":"og:site_name","content":"Note-Book"}],["meta",{"property":"og:description","content":"DelayQueue简介 DelayQueue是JUC包(java.util.concurrent)为我们提供的延迟队列，它是一个基于PriorityQueue实现的一个无界队列，是一个线程安全的延迟队列。 关于PriorityQueue可以参考笔者编写的这篇文章: PriorityQueue源码分析 当我们希望某个任务在某个时间才能取出并操作时，我们..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://qiniuyun.sharkchili.com/img202306301213027.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T18:41:05.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"property":"article:author","content":"Hollow-Latte"}],["meta",{"property":"article:modified_time","content":"2024-03-26T18:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://qiniuyun.sharkchili.com/img202306301213027.png\\",\\"https://qiniuyun.sharkchili.com/img202306301213864.png\\",\\"https://qiniuyun.sharkchili.com/img202306301213758.png\\",\\"https://qiniuyun.sharkchili.com/img202306301213690.png\\",\\"https://qiniuyun.sharkchili.com/img202306301213656.png\\",\\"https://qiniuyun.sharkchili.com/img202306301213007.png\\"],\\"dateModified\\":\\"2024-03-26T18:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollow-Latte\\",\\"url\\":\\"https://hollowlatte.github.io/Note-Book\\"}]}"]]},"headers":[{"level":2,"title":"DelayQueue简介","slug":"delayqueue简介","link":"#delayqueue简介","children":[]},{"level":2,"title":"DelayQueue发展史","slug":"delayqueue发展史","link":"#delayqueue发展史","children":[]},{"level":2,"title":"DelayQueue常见使用场景示例","slug":"delayqueue常见使用场景示例","link":"#delayqueue常见使用场景示例","children":[]},{"level":2,"title":"DelayQueue源码解析","slug":"delayqueue源码解析","link":"#delayqueue源码解析","children":[{"level":3,"title":"核心成员变量","slug":"核心成员变量","link":"#核心成员变量","children":[]},{"level":3,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[]},{"level":3,"title":"添加元素","slug":"添加元素","link":"#添加元素","children":[]},{"level":3,"title":"获取元素","slug":"获取元素","link":"#获取元素","children":[]},{"level":3,"title":"查看元素","slug":"查看元素","link":"#查看元素","children":[]}]},{"level":2,"title":"DelayQueue常见面试题","slug":"delayqueue常见面试题","link":"#delayqueue常见面试题","children":[{"level":3,"title":"DelayQueue 的实现原理是什么？","slug":"delayqueue-的实现原理是什么","link":"#delayqueue-的实现原理是什么","children":[]},{"level":3,"title":"DelayQueue 的使用场景有哪些？","slug":"delayqueue-的使用场景有哪些","link":"#delayqueue-的使用场景有哪些","children":[]},{"level":3,"title":"DelayQueue 中 Delayed 接口的作用是什么？","slug":"delayqueue-中-delayed-接口的作用是什么","link":"#delayqueue-中-delayed-接口的作用是什么","children":[]},{"level":3,"title":"DelayQueue 和 Timer/TimerTask 的区别是什么？","slug":"delayqueue-和-timer-timertask-的区别是什么","link":"#delayqueue-和-timer-timertask-的区别是什么","children":[]},{"level":3,"title":"DelayQueue 的实现是否线程安全？","slug":"delayqueue-的实现是否线程安全","link":"#delayqueue-的实现是否线程安全","children":[]},{"level":3,"title":"实现延迟队列的几种方式","slug":"实现延迟队列的几种方式","link":"#实现延迟队列的几种方式","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1711478465000,"updatedTime":1711478465000,"contributors":[{"name":"hollowlatte","email":"hollowlatte@outlook.com","commits":1}]},"readingTime":{"minutes":17.29,"words":5187},"filePathRelative":"java/collection/delayqueue-source-code.md","localizedDate":"2024年3月26日","excerpt":"<h2>DelayQueue简介</h2>\\n<p>DelayQueue是JUC包(java.util.concurrent)为我们提供的延迟队列，它是一个基于PriorityQueue实现的一个无界队列，是一个线程安全的延迟队列。</p>\\n<p>关于PriorityQueue可以参考笔者编写的这篇文章:</p>\\n<p><a href=\\"http://t.csdn.cn/XJuAf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PriorityQueue源码分析</a></p>\\n<p>当我们希望某个任务在某个时间才能取出并操作时，我们就可以让这个继承Delayed接口，实现其计算任务到期时间的方法 getDelay 。然后将任务存放到 DelayQueue 中,默认情况下, DelayQueue 会按照到期时间升序编排任务。随后当 DelayQueue 发现任务到期时，我们才能从 DelayQueue 中取出这个任务并执行。</p>","autoDesc":true}');export{x as comp,w as data};
