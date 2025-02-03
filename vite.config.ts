import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",  // Важно для правильных путей на Vercel
  build: {
    outDir: 'build',
  }
})
