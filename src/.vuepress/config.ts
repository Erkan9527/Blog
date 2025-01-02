import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",  
      title: "叶珉子",  
      description: "Personal Blog Demo",  
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
