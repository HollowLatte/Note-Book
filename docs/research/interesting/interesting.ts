import { arraySidebar } from "vuepress-theme-hope";

export const interesting = arraySidebar([
  {
    text: "API",
    icon: "work",
    prefix: "api/",
    collapsible: true,
    children: [
      "graphic-weather-api"
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
