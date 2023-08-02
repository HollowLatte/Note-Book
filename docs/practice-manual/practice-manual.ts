import { arraySidebar } from "vuepress-theme-hope";

export const practiceManual = arraySidebar([
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
