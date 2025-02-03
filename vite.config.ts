import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./", // Исправьте "/" на "./" (чтобы пути были относительными)
  build: {
    outDir: 'build',
    assetsDir: 'assets', // Папка для ассетов
  }
})
