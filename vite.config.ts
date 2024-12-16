import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
    alias:{
      "@":path.resolve(__dirname,'src'),
      "@Request":path.resolve(__dirname,'src/api')
    }
  }
})
