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
      "",
      {
        text: "Redis线程",
        icon: "redis",
        prefix: "redis-thread/",
        collapsible: true,
        children: [
          "why-use-single-thread",
          "why-adopt-multi-thread",
          "update-by-query-api",
          "search-api"
        ],
      },
      {
        text: "Redis数据结构",
        icon: "redis",
        prefix: "redis-data-structure/",
        collapsible: true,
        children: [
          "string-sds"
        ],
      }
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
