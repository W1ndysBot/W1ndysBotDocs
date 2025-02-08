import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  lastUpdated: true,
  title: "W1ndysBot",
  description: "W1ndysBot 的部署和说明文档",
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  appearance: true,
  // 配置sitemap
  sitemap: {
    hostname: "https://bot.w1ndys.top",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.jpg",
    darkModeSwitchLabel: "切换主题",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    outline: {
      level: "deep",
      label: "当前页面目录",
    },
    editLink: {
      pattern: "https://github.com/W1ndysBot/W1ndysBot/edit/main/docs/:path",
      text: "编辑此页面",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "full",
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "指南",
        items: [
          { text: "快速上手", link: "/getting-started" },
          { text: "配置", link: "/configuration" },
          { text: "页面", link: "/page" },
          { text: "frontmatter", link: "/frontmatter" },
        ],
      },
      { text: "VitePress", link: "https://vitepress.dev/" },
    ],

    sidebar: [
      {
        text: "指南",
        items: [
          { text: "前言", link: "/preface" },
          { text: "快速上手", link: "/getting-started" },
          { text: "配置", link: "/configuration" },
          { text: "Markdown", link: "/markdown" },
          { text: "静态资源", link: "/assets" },
        ],
      },
      {
        text: "文档",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    // 配置社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/W1ndysBot/W1ndysBot" },
      { icon: "email", link: "mailto:w1ndys@outlook.com" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2024-${new Date().getFullYear()} W1ndysBot`,
    },
  },
});
