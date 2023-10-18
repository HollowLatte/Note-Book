import { arraySidebar } from "vuepress-theme-hope";

export const practiceManual = arraySidebar([
  {
    text: "代码规范",
    icon: "work",
    prefix: "code-style/",
    collapsible: true,
    children: [
      "api-design",
      "print-log"
    ],
  },
  {
    text: "Java",
    icon: "java",
    prefix: "java/",
    collapsible: true,
    children: [
      "spring-util",
      "retryable",
      {
        text: "Stream",
        icon: "work",
        prefix: "stream/",
        collapsible: true,
        children: [
          "stream-sort"
        ],
      },
    ],
  },
  {
    text: "JVM",
    icon: "virtual_machine",
    prefix: "jvm/",
    collapsible: true,
    children: [
      {
        text: "JVM工具",
        icon: "virtual_machine",
        prefix: "tool/",
        collapsible: true,
        children: [
          "jstack",
          "jps",
          "jmap"
        ],
      }
    ],
  },
  {
    text: "Redis",
    icon: "redis",
    prefix: "redis/",
    collapsible: true,
    children: [
      {
        text: "command",
        icon: "work",
        prefix: "command/",
        collapsible: true,
        children: [
          "match-key"
        ],
      },
    ],
  },
  {
    text: "Linux",
    icon: "linux",
    prefix: "linux/",
    collapsible: true,
    children: [
      "time-task",
      {
        text: "安装",
        icon: "linux",
        prefix: "install/",
        collapsible: true,
        children: [
          "jdk-install"
        ],
      },
    ],
  },
  {
    text: "ElasticSearch",
    icon: "work",
    prefix: "elasticsearch/",
    collapsible: true,
    link: "elasticsearch",
    children: [
      {
        text: "API",
        icon: "work",
        prefix: "api/",
        collapsible: true,
        children: [
          "document-api",
          "index-api",
          "update-by-query-api",
          "search-api"
        ],
      },
      {
        text: "Java API Client",
        icon: "work",
        prefix: "java-api-client/",
        collapsible: true,
        children: [
          "document"
        ],
      },
      {
        text: "Analyzer",
        icon: "work",
        prefix: "analyzer/",
        collapsible: true,
        children: [
          "ik-analyzer",
          "ik-analyze-strategy"
        ],
      },
      {
        text: "Index",
        icon: "work",
        prefix: "index/",
        collapsible: true,
        children: [
          "create-dynamic-date-index"
        ],
      },
      {
        text: "分页查询",
        icon: "work",
        prefix: "paginate-search/",
        collapsible: true,
        children: [
          "es-paginate-search",
          "deep-pages-search"
        ],
      }
    ],
  },
  {
    text: "WSL2",
    icon: "work",
    prefix: "wsl2/",
    collapsible: true,
    children: [
      "install",
      "wsl2-and-windows",
      "wsl2-config"
    ],
  },
  {
    text: "IDEA",
    icon: "intellijidea",
    prefix: "idea/",
    collapsible: true,
    children: [
      "idea-commend-plugins",
      "idea-multiple-instances",
      "idea-comment-style",
    ],
  },
  {
    text: "Docker",
    icon: "docker",
    prefix: "docker/",
    collapsible: true,
    children: [
      "docker-mirror-config",
      {
        text: "部署",
        icon: "docker",
        prefix: "deploy/",
        collapsible: true,
        children: [
          "rocketmq-deploy",
        ],
      },
    ],
  },
  {
    text: "分布式",
    icon: "distributed-network",
    prefix: "distributed/",
    collapsible: true,
    children: [
      {
        text: "SpringCloud",
        icon: "framework",
        prefix: "springcloud/",
        collapsible: true,
        children: [
          "eureka-config",
          "eureka-service-status-api",
        ],
      }, {
        text: "SpringCloud Alibaba",
        icon: "framework",
        prefix: "springcloud-alibaba/",
        collapsible: true,
        children: [
          "docker-mirror-config",
        ],
      }
    ],
  },
  {
    text: "Github",
    icon: "github",
    prefix: "github/",
    collapsible: true,
    children: [
      "github-deploy-vuepress",
      // {
      //   text: "SpringCloud",
      //   icon: "framework",
      //   prefix: "springcloud/",
      //   collapsible: true,
      //   children: [
      //     "eureka-config",
      //     "eureka-service-status-api",
      //   ],
      // }, {
      //   text: "SpringCloud Alibaba",
      //   icon: "framework",
      //   prefix: "springcloud-alibaba/",
      //   collapsible: true,
      //   children: [
      //     "docker-mirror-config",
      //   ],
      // }
    ],
  },
]);
