/// <reference types="vitest" />

// import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // plugins: [angular()],
    test: {
      globals: true,
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.test.ts"],
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
