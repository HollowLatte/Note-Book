import { arraySidebar } from "vuepress-theme-hope";

export const nonDev = arraySidebar([
  {
    text: "Windows",
    icon: "work",
    prefix: "windows/",
    collapsible: true,
    children: [
      "win11-skip-networking",
      "GeForceExperience-skip-login",
      "virtual-numpad",
      "microsoft-todo-cannot-sync",
      "create-markdown-shortcut",
      "start-menu-cannot-open",
    ],
  }
]);
