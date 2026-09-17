import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // "/" por defecto (Vercel); el Dockerfile lo construye con BASE_PATH=/vizor3d/
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
