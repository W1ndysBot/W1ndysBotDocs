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

    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
