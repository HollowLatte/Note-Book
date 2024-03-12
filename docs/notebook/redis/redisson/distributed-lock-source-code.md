---
title: Redisson 分布式锁源码
author:
category: Redis
tag: Redis
date: 2024-03-06
---

Redisson的不同版本代码有所区别，此处源码是`org.redisson:redisson:3.24.2`

## 分布式锁核心代码

org.redisson.RedissonLock#tryLockInnerAsync

```java
<T> RFuture<T> tryLockInnerAsync(long waitTime, long leaseTime, TimeUnit unit, long threadId, RedisStrictCommand<T> command) {
    return evalWriteAsync(getRawName(), LongCodec.INSTANCE, command,
            "if ((redis.call('exists', KEYS[1]) == 0) " +
                        "or (redis.call('hexists', KEYS[1], ARGV[2]) == 1)) then " +
                    "redis.call('hincrby', KEYS[1], ARGV[2], 1); " +
                    "redis.call('pexpire', KEYS[1], ARGV[1]); " +
                    "return nil; " +
                "end; " +
                "return redis.call('pttl', KEYS[1]);",
            Collections.singletonList(getRawName()), unit.toMillis(leaseTime), getLockName(threadId));
}
```

调用Redis的EVAL命令执行上锁操作的Lua脚本

### Lua脚本解释

```lua
if ((redis.call('exists', KEYS[1]) == 0) or (redis.call('hexists', KEYS[1], ARGV[2]) == 1)) then
    redis.call('hincrby', KEYS[1], ARGV[2], 1);
    redis.call('pexpire', KEYS[1], ARGV[1]);
    return nil;
end;
return redis.call('pttl', KEYS[1]);
```

1. `if ((redis.call('exists', KEYS[1]) == 0) or (redis.call('hexists', KEYS[1], ARGV[2]) == 1)) then`：检查是否可以获取锁。
    - `redis.call('exists', KEYS[1]) == 0`：检查锁是否已存在（即 Redis 中是否已经有这个键）。如果不存在，表示锁当前没有被其他线程持有，或者是该线程的首次获取。
    - `redis.call('hexists', KEYS[1], ARGV[2]) == 1`：检查当前线程是否已经持有了锁。这里使用 Redis
      哈希表（hash）的 `hexists` 命令，其中 `KEYS[1]` 是锁的名称，`ARGV[2]` 是当前线程的标识。如果返回 1，表示当前线程已经持有锁。

2. 在上一步的条件成立时，表示可以获取锁，执行以下操作：
    - `redis.call('hincrby', KEYS[1], ARGV[2], 1);`：将当前线程对应的计数加一，用于表示锁的重入次数。
    - `redis.call('pexpire', KEYS[1], ARGV[1]);`：设置锁的过期时间，单位是毫秒，即在一定时间后锁会自动释放。

3. `return nil;`：表示获取锁成功，返回空值。

4. 如果上述条件不成立，说明锁已经存在且当前线程未持有锁，则执行以下操作：
    - `return redis.call('pttl', KEYS[1]);`：返回当前锁的剩余过期时间，单位是毫秒。这是为了告知调用者当前无法获取锁的原因。

这个 Lua 脚本通过使用 Redis 的键和哈希表，以及 Lua 的条件语句，实现了对分布式锁获取的控制逻辑。脚本结合了锁的存在性、当前线程是否已经持有锁以及锁的重入次数等因素，以确保获取锁的正确性。

### 锁超时时间

上面的`redis.call('pexpire', KEYS[1], ARGV[1]);`中，`ARGV[1]`对应的其实是leaseTime，其实就是Watchdog看门狗的超时时间

在RedissonLock类中追溯leaseTime值，可以发现不指定该值时会有默认值internalLockLeaseTime，RedissonLock类的构造函数中就对internalLockLeaseTime进行赋值了

```java
public RedissonLock(CommandAsyncExecutor commandExecutor, String name) {
     super(commandExecutor, name);
     this.commandExecutor = commandExecutor;
     this.internalLockLeaseTime = getServiceManager().getCfg().getLockWatchdogTimeout();
     this.pubSub = commandExecutor.getConnectionManager().getSubscribeService().getLockPubSub();
 }
```

从getLockWatchdogTimeout方法过去会跳转到`org.redisson.config.Config`
，可以看到`private long lockWatchdogTimeout = 30 * 1000;`

所以Watchdog看门狗的默认超时时间就是30秒

## Watchdog看门狗核心代码

```java
private RFuture<Long> tryAcquireAsync(long waitTime, long leaseTime, TimeUnit unit, long threadId) {
     RFuture<Long> ttlRemainingFuture;
     if (leaseTime > 0) {
         ttlRemainingFuture = tryLockInnerAsync(waitTime, leaseTime, unit, threadId, RedisCommands.EVAL_LONG);
     } else {
         ttlRemainingFuture = tryLockInnerAsync(waitTime, internalLockLeaseTime,
                 TimeUnit.MILLISECONDS, threadId, RedisCommands.EVAL_LONG);
     }
     CompletionStage<Long> s = handleNoSync(threadId, ttlRemainingFuture);
     ttlRemainingFuture = new CompletableFutureWrapper<>(s);

     CompletionStage<Long> f = ttlRemainingFuture.thenApply(ttlRemaining -> {
         // lock acquired
         if (ttlRemaining == null) {
             if (leaseTime > 0) {
                 internalLockLeaseTime = unit.toMillis(leaseTime);
             } else {
                 scheduleExpirationRenewal(threadId);
             }
         }
         return ttlRemaining;
     });
     return new CompletableFutureWrapper<>(f);
 }
```

ttlRemainingFuture在获取锁时做了回调监听，可以发现回调处理里面有个`scheduleExpirationRenewal`方法，该方法实现了Watchdog看门狗锁续期

### 锁续期实现

org.redisson.RedissonBaseLock#scheduleExpirationRenewal

```java
protected void scheduleExpirationRenewal(long threadId) {
     ExpirationEntry entry = new ExpirationEntry();
     ExpirationEntry oldEntry = EXPIRATION_RENEWAL_MAP.putIfAbsent(getEntryName(), entry);
     if (oldEntry != null) {
         oldEntry.addThreadId(threadId);
     } else {
         entry.addThreadId(threadId);
         try {
             renewExpiration();
         } finally {
             if (Thread.currentThread().isInterrupted()) {
                 cancelExpirationRenewal(threadId);
             }
         }
     }
 }
```

进到renewExpiration方法

org.redisson.RedissonBaseLock#renewExpiration

```java
private void renewExpiration() {
     ExpirationEntry ee = EXPIRATION_RENEWAL_MAP.get(getEntryName());
     if (ee == null) {
         return;
     }
     
     Timeout task = getServiceManager().newTimeout(new TimerTask() {
         @Override
         public void run(Timeout timeout) throws Exception {
             ExpirationEntry ent = EXPIRATION_RENEWAL_MAP.get(getEntryName());
             if (ent == null) {
                 return;
             }
             Long threadId = ent.getFirstThreadId();
             if (threadId == null) {
                 return;
             }
             
             CompletionStage<Boolean> future = renewExpirationAsync(threadId);
             future.whenComplete((res, e) -> {
                 if (e != null) {
                     log.error("Can't update lock {} expiration", getRawName(), e);
                     EXPIRATION_RENEWAL_MAP.remove(getEntryName());
                     return;
                 }
                 
                 if (res) {
                     // reschedule itself
                     renewExpiration();
                 } else {
                     cancelExpirationRenewal(null);
                 }
             });
         }
     }, internalLockLeaseTime / 3, TimeUnit.MILLISECONDS);
     
     ee.setTimeout(task);
 }
```

通过TimerTask启动一个定时任务，定时去将锁续期，定时任务的间隔是`internalLockLeaseTime / 3`
，internalLockLeaseTime默认是30，所以每10秒会去续期一次锁

### 锁续期Lua脚本

在上面定时任务方法的`renewExpirationAsync`方法中就是实际的锁续期操作

```java
protected CompletionStage<Boolean> renewExpirationAsync(long threadId) {
    return evalWriteAsync(getRawName(), LongCodec.INSTANCE, RedisCommands.EVAL_BOOLEAN,
            "if (redis.call('hexists', KEYS[1], ARGV[2]) == 1) then " +
                    "redis.call('pexpire', KEYS[1], ARGV[1]); " +
                    "return 1; " +
                    "end; " +
                    "return 0;",
            Collections.singletonList(getRawName()),
            internalLockLeaseTime, getLockName(threadId));
}
```

```lua
if (redis.call('hexists', KEYS[1], ARGV[2]) == 1) then
    redis.call('pexpire', KEYS[1], ARGV[1]);
    return 1;
else
    return 0;
end;
```

