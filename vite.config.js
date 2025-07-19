import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Change if deploying under a sub-path
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
