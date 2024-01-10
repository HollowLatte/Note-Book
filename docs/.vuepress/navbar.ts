import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "面试指南", icon: "java", link: "/home.md" },
  {
    text: "研究",
    icon: "github",
    link: "/research",
    children: [
      {
        text: "开源项目",
        icon: "github",
        link: "/research/open-source-project/",
      },
      {
        text: "好玩的",
        icon: "github",
        link: "/research/play",
      },
    ],
  },
  {
    text: "问题",
    icon: "component",
    link: "/issue"
  },
  {
    text: "实践手册",
    icon: "about",
    link: "/practice-manual",
  },
  {
    text: "非开发问题",
    icon: "about",
    link: "/non-development",
  },
  {
    text: "面试速记",
    icon: "about",
    link: "/interview-shorthand",
  },
  {
    text: "笔记本",
    icon: "book",
    link: "/notebook",
  },
  {
    text: "网站相关",
    icon: "about",
    children: [
      { text: "关于作者", icon: "zuozhe", link: "/about-the-author/" },
      {
        text: "更新历史",
        icon: "history",
        link: "/timeline/",
      },
    ],
  },
]);
