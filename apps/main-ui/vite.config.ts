/// <reference types="vitest" />

import angular from "@analogjs/vite-plugin-angular";
import { defineConfig } from "vite";

/**
 * File Configured for Angular Component & Service Testing with TestBed
 * Needed for @analogjs/platform:vitest executor to pick up this config
 *
 * tt-bj2: works only wiht jsdom right now!
 */
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [angular()],
    test: {
      globals: true,
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
      environment: "jsdom", // # can be used to run tests in jsdom
      // alternative: run unit tests in browser via playwright!
      // browser: {
      //   enabled: true,
      //   name: "chromium",
      //   headless: true, // set to true in CI
      //   provider: "playwright",
      // },
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
