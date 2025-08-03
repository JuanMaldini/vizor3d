/// <reference types="vitest" />
import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Removed manual define overrides for import.meta.env to allow Lit to detect correct environment
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['three', 'lit', 'lit-html', 'lit-element', '@lit/reactive-element'],
  },
  build: {
    outDir: "dist",
    sourcemap: process.env.SOURCE_MAP === "true",
  },
  plugins: [
    pwa({
      filename: "serviceWorker.ts",
      srcDir: "src",
      strategies: "injectManifest",
      manifest: false,
      injectManifest: {
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024, // 3 MB (aumentado desde 2 MB predeterminado)
      },
    }),
    react(),
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
