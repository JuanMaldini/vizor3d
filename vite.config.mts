/// <reference types="vitest" />
import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // Removed manual define overrides for import.meta.env to allow Lit to detect correct environment
  resolve: {
    dedupe: ['three', 'lit', 'lit-html', 'lit-element', '@lit/reactive-element'],
  },
  build: {
    outDir: "build",
    sourcemap: process.env.SOURCE_MAP === "true",
  },
  plugins: [
    pwa({
      filename: "serviceWorker.ts",
      srcDir: "src",
      strategies: "injectManifest",
      manifest: false,
    }),
    react(),
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
