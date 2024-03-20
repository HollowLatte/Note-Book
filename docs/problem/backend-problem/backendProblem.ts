import { arraySidebar } from "vuepress-theme-hope";

export const backendProblem = arraySidebar([
  {
    text: "Java",
    icon: "windows",
    prefix: "java/",
    collapsible: true,
    children: [
      "mapstruct",
      "maven-reference-subproject-package",
      "mybatis-plus-page-total-zero",
      {
        text: "Spring",
        icon: "spring",
        prefix: "spring/",
        collapsible: true,
        children: [
          "springboot-start-fail-snakeyaml",
          "springboot3-rocketmq-no-bean",
        ],
      },
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
      "terminal-command-not-exist"
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
      "cannot-push-to-github",
      "cannot-fetch-from-github",
    ],
  },
  {
    text: "生产环境问题",
    icon: "",
    prefix: "product-env-problem/",
    collapsible: true,
    children: [
      "jpa-delete-slowsql-so",
      "jpa-delete-oom",
      "jpa-select-cache-oom",
    ],
  },
]);
