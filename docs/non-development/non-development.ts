import { arraySidebar } from "vuepress-theme-hope";

export const nonDevelopment = arraySidebar([
  {
    text: "Windows",
    icon: "work",
    prefix: "windows/",
    collapsible: true,
    children: [
      "win11-skip-networking",
      "GeForceExperience-skip-login",
      "virtual-numpad"
    ],
  }
]);
