// @ts-ignore
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

// @ts-ignore
const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  hostname: "https://hollowlatte.github.io/Note-Book",
  logo: "/logo.png",
  favicon: "/favicon.ico",

  // 阿里图标库
  // https://at.alicdn.com/t/c/font_2922463_kweia6fbo9.css
  // icon库配置
  // iconAssets: "//at.alicdn.com/t/c/font_2922463_kweia6fbo9.css",
  iconAssets: "//at.alicdn.com/t/c/font_4369810_6myesmdi4w5.css",

  author: {
    name: "Hollow-Latte",
    url: "https://hollowlatte.github.io/Note-Book",
  },

  repo: "https://github.com/HollowLatte/Note-Book",
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
    "Date",
    "Original",
    "Word",
    "ReadingTime",
  ],

  blog: {
    intro: "/about-the-author/",
    sidebarDisplay: "mobile",
    medias: {
      Zhihu: "https://www.zhihu.com/people/javaguide",
      Github: "https://github.com/HollowLatte",
      Gitee: "https://gitee.com/SnailClimb",
    },
    timeline: "没有更多啦😋"
  },

  plugins: {
    blog: true,
    copyright: true,
    search: {
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    },
    mdEnhance: {
      align: true,
      codetabs: true,
      hint: true,
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
      mermaid: true,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    sitemap: true,
  },
  encrypt: {
    global: true,
    admin: "hollowlatte",
  },
});
