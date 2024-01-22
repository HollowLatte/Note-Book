import { arraySidebar } from "vuepress-theme-hope";

export const notebook = arraySidebar([
  {
    text: "Java",
    icon: "java",
    prefix: "java/",
    collapsible: true,
    children: [
      {
        text: "函数式编程",
        icon: "java",
        prefix: "function-programming/",
        collapsible: true,
        children: [
          "common-functional-interface"
        ]
      },
      {
        text: "并发",
        icon: "java",
        prefix: "concurrence/",
        collapsible: true,
        children: [
          "threadlocal",
          "volatile",
          "cas",
        ]
      },
      {
        text: "JVM",
        icon: "java",
        prefix: "jvm/",
        collapsible: true,
        children: [
          "classes-loading",
          "class-member-loading-order"
        ]
      },
    ]
  },
  {
    text: "MySQL",
    icon: "mysql",
    prefix: "mysql/",
    collapsible: true,
    children: [
      "common-functional-interface",
      {
        text: "索引",
        icon: "mysql",
        prefix: "index/",
        collapsible: true,
        children: [
          "index-pushdown"
        ]
      },
      {
        text: "事务隔离",
        icon: "mysql",
        prefix: "transaction-isolation/",
        collapsible: true,
        children: [
          "innodb-how-to-solve-concurrence"
        ]
      },
      {
        text: "锁",
        icon: "mysql",
        prefix: "lock/",
        collapsible: true,
        children: [
          ""
        ]
      },
    ]
  },
  {
    text: "Elasticsearch",
    icon: "elasticsearch",
    prefix: "elasticsearch/",
    collapsible: true,
    children: [
      {
        text: "分词",
        icon: "elasticsearch",
        prefix: "analyzer/",
        collapsible: true,
        children: [
          "analyzer",
          "chinese-analyzer"
        ],
      },
      {
        text: "索引",
        icon: "elasticsearch",
        prefix: "index/",
        collapsible: true,
        children: [
          "index-template",
        ],
      },
      "mysql-sync-es"
    ],
  },
  {
    text: "Netty",
    icon: "network",
    prefix: "netty/",
    collapsible: true,
    children: [
      "core-concepts",
      "common-classes"
    ]
  },
  {
    text: "Redis",
    icon: "redis",
    prefix: "redis/",
    collapsible: true,
    children: [
      "redis-database-consistent-strategy",
    ]
  },
  {
    text: "Linux",
    icon: "linux",
    prefix: "linux/",
    collapsible: true,
    children: [
      "kill-signal",
    ]
  },
  {
    text: "高可用",
    icon: "highavailable",
    prefix: "high-availability/",
    collapsible: true,
    children: [
      "rate-limit-algorithm",
      "high-availability-system-design",
      "redundancy",
      "fallback-and-circuit-breaker",
      "timeout-and-retry",
      "performance-test",
    ],
  },
  {
    text: "技术解决方案",
    icon: "",
    prefix: "technical-solution/",
    collapsible: true,
    children: [
      "message-push-solution",
    ],
  }
]);
