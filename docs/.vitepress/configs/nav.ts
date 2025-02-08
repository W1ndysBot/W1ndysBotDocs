/* configs/nav.ts */
import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "首页", link: "/" },
  {
    text: "示例",
    items: [
      { text: "Markdown 示例", link: "/markdown-examples" },
      { text: "API 示例", link: "/api-examples" },
    ],
  },
  { text: "VitePress", link: "https://vitepress.dev/" },
];
