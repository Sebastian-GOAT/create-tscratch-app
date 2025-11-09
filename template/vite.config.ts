import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  build: {
    minify: 'esbuild',
    outDir: 'dist'
  },
  server: {
    port: 5173,
    open: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
});