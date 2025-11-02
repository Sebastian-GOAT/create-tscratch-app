import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    minify: 'esbuild',
    outDir: 'dist'
  },
  server: {
    port: 5173,
    open: false
  }
});