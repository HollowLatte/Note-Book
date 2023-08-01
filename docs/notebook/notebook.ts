import { arraySidebar } from "vuepress-theme-hope";

export const notebook = arraySidebar([
  {
    text: "Elasticsearch",
    icon: "elasticsearch",
    prefix: "elasticsearch/",
    collapsible: true,
    children: [
      "analyzer",
      "chinese-analyzer"
    ],
  }
]);
