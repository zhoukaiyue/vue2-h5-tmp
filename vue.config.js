/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 14:47:13
 */
const { defineConfig } = require('@vue/cli-service');
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir);
}
module.exports = defineConfig({
    transpileDependencies: true,
    // 基本url
    publicPath: process.env.VUE_APP_PUBLIC_URL,
    // 调整内部的 webpack 配置。
    // 查阅 https://cli.vuejs.org/zh/guide/webpack.html
    chainWebpack: (config) => {
        // 添加别名
        config.resolve.alias.set('@', resolve('src'));
    },
    // 配置开发选项
    // 代理设置
    devServer: {
        hot: true,
        open: false,
        host: '0.0.0.0',
        port: 21000,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        }
        // 代理接口
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        // proxy: {
        //   "/proxy_url": {
        //     target: process.env.VUE_APP_PROXY_URL,
        //     changeOrigin: true,
        //     secure: false,
        //     ws: true,
        //     pathRewrite: {
        //       "^/proxy_url": "",
        //     },
        //   },
        // },
    }
});
