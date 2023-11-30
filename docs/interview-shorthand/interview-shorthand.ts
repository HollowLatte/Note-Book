import {arraySidebar} from "vuepress-theme-hope";

export const interviewShorthand = arraySidebar([
  {
    text: "Java",
    icon: "work",
    prefix: "java/",
    collapsible: true,
    children: [],
  },
  {
    text: "Redis",
    icon: "redis",
    prefix: "redis/",
    collapsible: true,
    children: [
      "why-use-single-thread",
      {
        text: "Redis数据结构",
        icon: "redis",
        prefix: "data-structure/",
        collapsible: true,
        children: [
          "string-sds",
          "zset-skiplist"
        ],
      },
      {
        text: "Redis持久化",
        icon: "redis",
        prefix: "thread/",
        collapsible: true,
        children: [
          "why-adopt-multi-thread",
          "update-by-query-api",
          "search-api"
        ],
      },
    ],
  },
  {
    text: "MySQL",
    icon: "work",
    prefix: "mysql/",
    collapsible: true,
    children: [
      // "transaction-isolation-level",
      {
        text: "事务",
        icon: "mysql",
        prefix: "transaction/",
        collapsible: true,
        children: [
          "transaction-isolation-level",
          "innodb-how-to-solve-concurrence",
          "current-snapshot-read",
          "search-api",
        ],
      },
      {
        text: "索引",
        icon: "mysql",
        prefix: "index/",
        collapsible: true,
        children: [
          "document"
        ],
      }
    ],
  }
]);
