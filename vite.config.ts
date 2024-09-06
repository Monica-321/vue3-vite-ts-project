import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import pxtovw from 'postcss-px-to-viewport'

// postcss-px-to-viewport 适配
const loder_pxtovw = pxtovw({
  // 设计稿宽度
  viewportWidth: 375,
  viewportUnit: 'vw'
})


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ['@import "./src/common/style/base.scss";'],
        charset: false
      }
    },
    postcss: {
      plugins: [loder_pxtovw]
    }
  }
})
