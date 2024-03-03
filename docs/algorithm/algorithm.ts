import { arraySidebar } from "vuepress-theme-hope";

export const algorithm = arraySidebar([
  {
    text: "双指针",
    icon: "work",
    prefix: "two-pointers/",
    collapsible: true,
    children: [
      "move-zeros",
    ],
  },
  {
    text: "哈希",
    icon: "work",
    prefix: "hash/",
    collapsible: true,
    children: [
      "icon-color"
    ],
  },
]);
