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
      }
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
      }
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
]);
