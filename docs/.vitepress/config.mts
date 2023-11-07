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
        text: "Introduction",
        items: [
          { text: "How to use", link: "/how-to-use" },
          { text: "Fluid layout", link: "/fluid" },
          { text: "SCSS Directory structure", link: "/directory-structure" },
        ],
      },
      {
        text: "CSS",
        items: [
          { text: "Spacers", link: "/spacers" },
          { text: "Typography", link: "/typography" },
          { text: "Colors", link: "/colors" },
        ],
      },
      {
        text: "Development",
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
