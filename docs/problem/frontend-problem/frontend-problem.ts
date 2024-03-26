import { arraySidebar } from "vuepress-theme-hope";

export const frontendProblem = arraySidebar([
  {
    text: "Vue",
    icon: "work",
    prefix: "windows/",
    collapsible: true,
    children: [],
  },
  {
    text: "VuePress",
    icon: "work",
    prefix: "vuepress/",
    collapsible: true,
    children: [
      "icon-color",
      "vuepress-deploy-miss-style",
    ],
  },
]);
