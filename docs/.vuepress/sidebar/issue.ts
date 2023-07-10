import { arraySidebar } from "vuepress-theme-hope";

export const issue = arraySidebar([
  {
    text: "Java",
    icon: "windows",
    prefix: "java/",
    collapsible: true,
    children: [
      "mapstruct"
    ],
  },
  {
    text: "WSL2",
    icon: "windows",
    prefix: "wsl2/",
    collapsible: true,
    children: [
      "problem1"
    ],
  }
]);
