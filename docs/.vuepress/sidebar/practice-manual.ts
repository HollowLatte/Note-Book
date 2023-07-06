import { arraySidebar } from "vuepress-theme-hope";

export const practiceManual = arraySidebar([
  {
    text: "Linux",
    icon: "work",
    prefix: "linux/",
    collapsible: true,
    children: [
      "command"
      // "get-into-work-mode-quickly-when-you-join-a-company",
      // "32-tips-improving-career",
      // "employee-performance",
    ],
  },
  {
    text: "ElasticSearch",
    icon: "work",
    prefix: "elasticsearch/",
    collapsible: true,
    children: [
      {
        text: "API",
        icon: "work",
        prefix: "api/",
        collapsible: true,
        children: [
          "document-api",
          "index-api"
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
]);
