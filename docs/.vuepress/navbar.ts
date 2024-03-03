import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "面试指南", icon: "java", link: "/home.md" },
  {
    text: "🧐研究",
    children: [
      {
        text: "开源项目",
        icon: "github",
        link: "/research/open-source-project/",
      },
      {
        text: "好玩的",
        icon: "github",
        link: "/research/interesting",
      },
    ],
  },
  {
    text: "😋业务",
    link: "/business",
  },
  {
    text: "😎实践手册",
    icon: "about",
    link: "/practice-manual",
  },
  {
    text: "😰问题集合",
    children: [
      {
        text: "后端问题",
        icon: "github",
        link: "/problem/backend-problem",
      },
      {
        text: "前端问题",
        icon: "github",
        link: "/problem/frontend-problem",
      },
      {
        text: "非开发问题",
        icon: "github",
        link: "/problem/non-dev",
      },
    ],
  },
  {
    text: "💯面试速记",
    icon: "about",
    link: "/interview-shorthand",
  },
  {
    text: "🫵笔记本",
    icon: "book",
    link: "/notebook",
  },
  {
    text: "🧮算法",
    icon: "book",
    link: "/algorithm",
  },
  {
    text: "🤣网站相关",
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
