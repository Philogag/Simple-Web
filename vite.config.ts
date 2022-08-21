import { fileURLToPath, URL } from 'node:url'
import viteCompression from 'vite-plugin-compression';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // viteCompression(), // gzip 打包压缩，不需要则注释
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
