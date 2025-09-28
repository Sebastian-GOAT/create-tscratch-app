import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  minify: true,
  target: 'esnext',
  banner: {
    js: '#!/usr/bin/env node'
  },
  outDir: 'dist'
});