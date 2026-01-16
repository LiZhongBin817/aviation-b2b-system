/*
 * @Descripttion: 
 * @Author: lizb
 * @Date: 2026-01-16 09:25:16
 * @LastEditors: lizb
 * @LastEditTime: 2026-01-16 14:42:07
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import VueSetupExtend from "unplugin-vue-setup-extend-plus/vite";
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "./auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
      exclude: [/node_modules/, /\.git/],
    }),
    viteMockServe({
      mockPath: './mock',
      // 是否启用mock
      enable: true,
      // 是否在控制台显示请求日志
      logger: true,
      // 支持读取 ts 文件定义 mock
      supportTs: false,
      // 监听文件变更
      watchFiles: true,
      bundle: false,
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 8080,
    open: true,
    host: true,
    proxy: {
      // // 仅在 mock 禁用时使用代理
      // "/backend": {
      //   target: "http://localhost:8080",
      //   changeOrigin: true,
      //   // 只有当启用真实后端时才需要代理
      //   bypass: (req, res, proxyOptions) => {
      //     // 如果启用了 mock，直接返回 null 让请求继续
      //     if (process.env.NODE_ENV === 'development' && mockEnabled) {
      //       return null;
      //     }
      //   },
      // },
    },
  },

});
