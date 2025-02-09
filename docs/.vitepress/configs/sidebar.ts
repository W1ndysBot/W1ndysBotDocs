import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
    "/": [
        {
            text: "示例",
            items: [
                { text: "Markdown 示例", link: "/markdown-examples" },
                { text: "API 示例", link: "/api-examples" },
            ],
        },
    ],
};
