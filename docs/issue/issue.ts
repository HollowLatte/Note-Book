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
  },
  {
    text: "IDEA",
    icon: "intellijidea",
    prefix: "idea/",
    collapsible: true,
    children: [
      "cannot-start-springboot",
      "cannot-completion-maven-pom",
    ],
  },
  {
    text: "MySQL",
    icon: "mysql",
    prefix: "mysql/",
    collapsible: true,
    children: [
      "jdbc-connect-fail"
    ],
  },
]);
