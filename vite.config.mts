import { defineConfig } from "vite";

export default defineConfig({
  // Removed manual define overrides for import.meta.env to allow Lit to detect correct environment
  resolve: {
    dedupe: ['three', 'lit', 'lit-html', 'lit-element', '@lit/reactive-element'],
  },
  build: {
    outDir: "dist",
  },
  plugins: [
  ],
});
