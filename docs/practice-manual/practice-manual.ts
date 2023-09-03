import { arraySidebar } from "vuepress-theme-hope";

export const practiceManual = arraySidebar([
  {
    text: "代码规范",
    icon: "work",
    prefix: "code-style/",
    collapsible: true,
    children: [
      "api-design",
      "print-log"
    ],
  },
  {
    text: "Java",
    icon: "java",
    prefix: "java/",
    collapsible: true,
    children: [
      "spring-util",
      {
        text: "Stream",
        icon: "work",
        prefix: "stream/",
        collapsible: true,
        children: [
          "stream-sort"
        ],
      },
    ],
  },
  {
    text: "Linux",
    icon: "work",
    prefix: "linux/",
    collapsible: true,
    children: [
      "command"
    ],
  },
  {
    text: "ElasticSearch",
    icon: "work",
    prefix: "elasticsearch/",
    collapsible: true,
    link: "elasticsearch",
    children: [
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
      },
      {
        text: "Analyzer",
        icon: "work",
        prefix: "analyzer/",
        collapsible: true,
        children: [
          "ik-analyzer",
          "ik-analyze-strategy"
        ],
      },
      {
        text: "Index",
        icon: "work",
        prefix: "index/",
        collapsible: true,
        children: [
          "create-dynamic-date-index"
        ],
      },
      {
        text: "分页查询",
        icon: "work",
        prefix: "paginate-search/",
        collapsible: true,
        children: [
          "es-paginate-search",
          "deep-pages-search"
        ],
      }
    ],
  },
  {
    text: "WSL2",
    icon: "work",
    prefix: "wsl2/",
    collapsible: true,
    children: [
      "install",
      "wsl2-and-windows",
      "wsl2-config"
    ],
  },
  {
    text: "IDEA",
    icon: "intellijidea",
    prefix: "idea/",
    collapsible: true,
    children: [
      "idea-multiple-instances",
      "idea-comment-style",
    ],
  },
]);
