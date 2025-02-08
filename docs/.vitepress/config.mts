import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
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
  },
});
