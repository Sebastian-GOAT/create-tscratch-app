import { defineConfig } from 'vite-plus';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    staged: {
        '*': 'vp check --fix'
    },
    fmt: {
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 4
    },
    lint: {
        jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
        rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
        options: { typeAware: true, typeCheck: true }
    },
    base: './',
    build: {
        minify: 'esbuild',
        outDir: 'dist'
    },
    server: {
        port: 5173,
        open: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
