import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import lunaria from "@lunariajs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "v-bible Translation Docs",

      social: {
        github: "https://github.com/v-bible/translation",
      },
      editLink: {
        baseUrl: "https://github.com/v-bible/translation/edit/main/",
      },
      plugins: [
        lunaria({
          route: "/dashboard",
        }),
      ],
    }),
  ],
});
