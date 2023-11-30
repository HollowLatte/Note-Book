import { arraySidebar } from "vuepress-theme-hope";

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
      "transaction-isolation-level",
      {
        text: "API",
        icon: "work",
        prefix: "api/",
        collapsible: true,
        children: [
          "document-api",
          "index-api",
          "update-by-query-api",
          "search-api"
        ],
      },
      {
        text: "Java API Client",
        icon: "work",
        prefix: "java-api-client/",
        collapsible: true,
        children: [
          "document"
        ],
      }
    ],
  }
]);
