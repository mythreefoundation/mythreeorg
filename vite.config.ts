import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import forwardToTrailingSlash from './forward-to-trailing-slash-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mythreeorg/',
  plugins: [
    vue(),
    vueJsx(),
    // add the plugin here
    forwardToTrailingSlash(['mitrarashmi', 'books', 'events','nityasubashita','arogyasubashita'])
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
