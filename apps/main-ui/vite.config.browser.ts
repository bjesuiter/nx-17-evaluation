/// <reference types="vitest" />

import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// tt-bj2: WIP right now!
export default defineConfig(({ mode }) => {
  return {
    plugins: [angular()],
    test: {
      globals: true,
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts", "**/*.test.ts"],
      reporters: ["default"],
      browser: {
        enabled: true,
        name: "chromium",
        headless: true, // set to true in CI
        provider: "playwright",
      },
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
