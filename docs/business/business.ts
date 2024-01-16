import { arraySidebar } from "vuepress-theme-hope";

export const business = arraySidebar([
  {
    text: "微信",
    icon: "work",
    prefix: "wx/",
    collapsible: true,
    children: [
      {
        text: "公众号",
        icon: "work",
        prefix: "mp/",
        collapsible: true,
        children: [
          "icon-color"
        ],
      },
    ],
  },
  {
    text: "VuePress",
    icon: "work",
    prefix: "vuepress/",
    collapsible: true,
    children: [
      "icon-color"
    ],
  },
]);
