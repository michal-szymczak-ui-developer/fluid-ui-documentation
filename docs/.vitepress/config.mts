import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Fluid UI Documentation",
  description: "Fluid Modern CSS Starter",
  lastUpdated: true,
  base: "/docs/",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Demo", link: "https://fluid-ui.michalszymczak.com/" },
      {
        text: "Repo",
        link: "https://github.com/michal-szymczak-ui-developer/fluid-ui",
      },
    ],

    sidebar: [
      {
        text: "How to use",
        collapsed: false,
        items: [
          { text: "Installation", link: "/installation" },
          { text: "File system", link: "/file-system" },
          { text: "Fluid layout", link: "/fluid" },
          { text: "Settings", link: "/settings" },
        ],
      },
      {
        text: "CSS",
        collapsed: false,
        items: [
          { text: "Spacers", link: "/spacers" },
          { text: "Typography", link: "/typography" },
          { text: "Colors", link: "/colors" },
          { text: "Utilities", link: "/utilities" },
        ],
      },
      {
        text: "Development",
        collapsed: false,
        items: [
          { text: "Stylelint & Prettier", link: "/stylelint-prettier" },
          { text: "Links", link: "/links" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/michal-szymczak-ui-developer/fluid-ui/",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/themisza/",
      },
    ],
  },
});
