import { arraySidebar } from "vuepress-theme-hope";

export const interviewShorthand = arraySidebar([
  {
    text: "Java",
    icon: "work",
    prefix: "java/",
    collapsible: true,
    children: [
      "command"
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
