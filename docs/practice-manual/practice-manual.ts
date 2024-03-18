import { arraySidebar } from "vuepress-theme-hope";

export const practiceManual = arraySidebar([
  {
    text: "代码规范",
    icon: "work",
    prefix: "code-style/",
    collapsible: true,
    children: [
      "api-design",
      "print-log",
      {
        text: "Java",
        icon: "java",
        prefix: "java/",
        collapsible: true,
        children: [
          "comment",
        ],
      },
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
      "common-constant-class",
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
    text: "常用框架",
    icon: "framework",
    prefix: "framework/",
    collapsible: true,
    children: [
      {
        text: "🍃Spring&SpringBoot",
        icon: "",
        prefix: "spring/",
        collapsible: true,
        children: [
          "read-nest-config",
          "aop-custom-annotation",
          "programmatic-transaction"
        ],
      },
      {
        text: "Netty",
        icon: "",
        prefix: "netty/",
        collapsible: true,
        children: [
          "netty-string-handle",
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
      "common-param",
      "check-garbage-collector",
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
      "batch-delete",
      {
        text: "命令",
        icon: "work",
        prefix: "command/",
        collapsible: true,
        children: [
          "find-key",
          "find-big-key",
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
      "crontab",
      "nohup-deploy-service",
      "get-extranet-info",
      "simple-calculation",
      "kernel-param-optimize",
      {
        text: "安装",
        icon: "linux",
        prefix: "install/",
        collapsible: true,
        children: [
          "jdk-install",
          "arthas-offline-install",
        ],
      },
      {
        text: "Shell",
        icon: "linux",
        prefix: "shell/",
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
      },
      {
        text: "搜索",
        icon: "work",
        prefix: "search/",
        collapsible: true,
        children: [
          "search-param",
          {
            text: "Term相关查询",
            icon: "work",
            prefix: "term-query/",
            collapsible: true,
            children: [
              "term-query",
              "range-query",
              "exists-query"
            ],
          },
          {
            text: "聚合",
            icon: "elasticsearch",
            prefix: "aggregation/",
            collapsible: true,
            children: [
              "cardinality-agg",
              "terms-agg",
              "histogram-agg",
              "date-histogram-agg",
            ],
          },
        ],
      },
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
    text: "网络",
    icon: "network",
    prefix: "network/",
    collapsible: true,
    children: [
      "nat-traversal",
    ],
  },
  {
    text: "Docker",
    icon: "docker",
    prefix: "docker/",
    collapsible: true,
    children: [
      "docker-mirror-config",
      "docker-run-template",
      {
        text: "Compose",
        icon: "docker",
        prefix: "compose/",
        collapsible: true,
        children: [
          "limit-memory",
        ],
      },
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
    ],
  },
  {
    text: "线上问题排查",
    icon: "github",
    prefix: "troubleshoot/",
    collapsible: true,
    children: [
      "hutool-stackoverflow",
      "jpa-stackoverflow"
    ],
  },
  {
    text: "Windows",
    icon: "windows",
    prefix: "windows/",
    collapsible: true,
    children: [
      "look-big-file",
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
    ],
  },
]);
