// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Documate from "@documate/vue";
import "@documate/vue/dist/style.css";
import "./style.scss";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-before": () =>
        h(Documate, {
          endpoint: "https://z5tbqsc6t9.us.aircode.run/ask",
        }),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
