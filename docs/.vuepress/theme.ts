import { getDirname, path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

// @ts-ignore
const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  hostname: "https://javaguide.cn/",
  logo: "/logo.png",
  favicon: "/favicon.ico",

  // 阿里图标库
  // https://at.alicdn.com/t/c/font_2922463_kweia6fbo9.css
  // icon库配置
  // iconAssets: "//at.alicdn.com/t/c/font_2922463_kweia6fbo9.css",
  iconAssets: "//at.alicdn.com/t/c/font_4369810_6myesmdi4w5.css",

  author: {
    name: "Hollow-Latte",
    url: "https://javaguide.cn/article/",
  },

  repo: "https://github.com/Snailclimb/JavaGuide",
  docsDir: "docs",
  // 纯净模式：https://theme-hope.vuejs.press/zh/guide/interface/pure.html
  pure: true,
  breadcrumb: false,
  navbar,
  sidebar,
  footer:
      '<a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2020015769号-1</a>',
  displayFooter: true,

  pageInfo: [
    "Author",
    "Category",
    "Tag",
    // "Date",
    "Original",
    "Word",
    "ReadingTime",
  ],

  blog: {
    intro: "/about-the-author/",
    sidebarDisplay: "mobile",
    medias: {
      Zhihu: "https://www.zhihu.com/people/javaguide",
      Github: "https://github.com/Snailclimb",
      Gitee: "https://gitee.com/SnailClimb",
    },
  },

  plugins: {
    blog: true,
    copyright: true,
    mdEnhance: {
      align: true,
      codetabs: true,
      container: true,
      figure: true,
      include: {
        resolvePath: (file, cwd) => {
          if (file.startsWith("@"))
            return path.resolve(
                __dirname,
                "../snippets",
                file.replace("@", "./")
            );

          return path.resolve(cwd, file);
        },
      },
      tasklist: true,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
  },
});
