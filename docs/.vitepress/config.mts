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
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
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
      { text: "示例", 
        items: [
          { text: "Markdown 示例", link: "/markdown-examples" },
          { text: "API 示例", link: "/api-examples" },
        ],
      },
      { text: "VitePress", link: "https://vitepress.dev/" },
    ],

    sidebar: [
      {
        text: "示例",
        items: [
          { text: "Markdown 示例", link: "/markdown-examples" },
          { text: "API 示例", link: "/api-examples" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    // 配置社交链接
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/W1ndysBot/W1ndysBot",
        ariaLabel: "GitHub",
      },
      {
        icon: {
          svg: '<svg t="1739023291475" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1456" width="200" height="200"><path d="M858.656 192 165.344 192C109.472 192 64 237.44 64 293.312l0 469.376C64 818.56 109.472 864 165.344 864l693.312 0C914.528 864 960 818.56 960 762.688L960 293.312C960 237.44 914.528 192 858.656 192zM858.656 800 165.344 800C144.736 800 128 783.264 128 762.688L128 293.312C128 272.736 144.736 256 165.344 256l684.544 0-307.488 279.808c-14.592 14.56-38.272 14.528-54.752-1.792l-244.256-206.752C229.856 315.84 209.664 317.504 198.272 331.008c-11.424 13.472-9.76 33.664 3.744 45.088l242.304 204.96c19.904 19.904 46.048 29.792 72.032 29.792 25.632 0 51.136-9.632 70.176-28.736L896 300.544l0 462.144C896 783.264 879.264 800 858.656 800z" fill="#5D646F" p-id="1457"></path></svg>',
        },
        link: "mailto:w1ndys@outlook.com",
        ariaLabel: "Email",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2024-${new Date().getFullYear()} W1ndysBot`,
    },
  },
});
