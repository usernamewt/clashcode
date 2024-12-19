import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve:{
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
    alias:{
      "@":path.resolve(__dirname,'src'),
      "@Request":path.resolve(__dirname,'src/api')
    }
  }
})
