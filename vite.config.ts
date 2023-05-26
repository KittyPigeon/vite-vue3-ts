import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import path, { resolve } from "path";
import viteCDNPlugin from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    viteCDNPlugin({
      // 需要 CDN 加速的模块
      modules: [
        {
          name: 'lodash',
          var: '_',
          path: `https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js`
        }
      ]
    }),
    viteMockServe({
      mockPath: 'src/mock',
      watchFiles: true,//设置是否监视mockPath对应的文件夹内文件中的更改
    }),
  ],
});
