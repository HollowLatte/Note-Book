import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Note-Book/",
  dest: "./dist",
  port: 9099,
  title: "Note-Book",
  description:
      "「Java学习指北 + Java面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，复习 Java 知识点，首选 JavaGuide！  ",
  lang: "zh-CN",

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "Guide" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
            "Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // 添加百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5dd2e8c97962d57b7b8fea1737c01743";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`,
    ],
    // 配置代码展示字体JetBrains Mono
    ["link", { ref: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { ref: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { ref: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" }]
  ],

  theme,

  plugins: [
    // searchPlugin({
    //   // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
    //   // 排除首页
    //   isSearchable: (page) => page.path !== "/",
    //   maxSuggestions: 10,
    //   hotKeys: ["s", "/"],
    //   // 用于在页面的搜索索引中添加额外字段
    //   getExtraFields: () => [],
    //   locales: {
    //     "/": {
    //       placeholder: "搜索",
    //     },
    //   },
    // }),
    // searchProPlugin({
    //   indexContent: true,
    //   indexOptions: {
    //     tokenize: (text, fieldName) =>
    //       fieldName === "id" ? [text] : cut(text, true),
    //   },
    //   customFields: [
    //     {
    //       getter: ({ frontmatter }) =>
    //         <string | undefined>frontmatter.category ?? null,
    //       formatter: "分类: $content",
    //     },
    //   ],
    //   suggestDelay: 60,
    // }),
  ],

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  shouldPrefetch: false,
});
