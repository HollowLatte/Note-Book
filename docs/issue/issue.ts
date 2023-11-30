import {arraySidebar} from "vuepress-theme-hope";

export const issue = arraySidebar([
  {
    text: "Java",
    icon: "windows",
    prefix: "java/",
    collapsible: true,
    children: [
      "mapstruct",
      "maven-reference-subproject-package",
      "start-springboot-exception",
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
      "idea-cannot-start-springboot",
      "idea-cannot-completion-maven-pom",
      "idea-fetch-failed",
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
  {
    text: "Github",
    icon: "github",
    prefix: "github/",
    collapsible: true,
    children: [
      "cannot-push-to-push"
    ],
  },
]);
