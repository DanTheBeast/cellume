import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative paths so the built app works in subdirectories (GitHub Pages, etc.)
  base: './',
})
