/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-09 10:39:25
 */
const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const isEnvDevelopment = process.env.VUE_APP_MODE === 'development'; // 开发模式
// eslint-disable-next-line no-unused-vars
const isEnvProduction = process.env.VUE_APP_MODE === 'production'; // 生产模式
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
    configureWebpack: () => {
        const plugins = [];
        const minimizer = [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: 6,
                extractComments: false, // 不将注释提取到单独的文件中
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    format: {
                        comments: false
                    },
                    compress: {
                        drop_console: isEnvProduction, // 生产环境下移除控制台所有的内容
                        drop_debugger: false, // 移除断点
                        pure_funcs: isEnvProduction ? ['console.log'] : '' // 生产环境下移除console
                    }
                }
            })
        ];
        return {
            plugins,
            optimization: {
                minimize: true,
                minimizer,
                // 此设置保证有新增的入口文件时,原有缓存的chunk文件仍然可用
                moduleIds: 'deterministic',
                // 值为"single"会创建一个在所有生成chunk之间共享的运行时文件
                runtimeChunk: 'single',
                splitChunks: {
                    // 指明要分割的插件类型, async:异步插件(动态导入),inital:同步插件,all：全部类型
                    chunks: 'all',
                    // 入口文件加载时最大同时请求数不得超过30个
                    maxInitialRequests: 30,
                    // 异步加载代码时同时进行的最大请求数不得超过30个
                    maxAsyncRequests: 30,
                    // 文件最小大小,单位bite;即超过minSize有可能被分割；
                    minSize: 2048,
                    // webpack5新属性，防止0尺寸的chunk
                    minRemainingSize: 0,
                    cacheGroups: {
                        'vendors/frame-view': {
                            name: 'vendors/frame-view',
                            test: /[\\/]src[\\/](layout)[\\/]/,
                            priority: 11
                        },
                        'vendors/vue-bucket': {
                            name: 'vendors/vue-bucket',
                            test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
                            priority: 10
                        },
                        'vendors/ui': {
                            name: 'vendors/ui',
                            test: /[\\/]node_modules[\\/](vant|element-ui)[\\/]/,
                            priority: 9
                        },
                        'vendors/core-js': {
                            name: 'vendors/core-js',
                            test: /[\\/]node_modules[\\/](core-js)[\\/]/,
                            priority: 5
                        },
                        default: {
                            name: 'common',
                            chunks: 'initial',
                            minChunks: 4,
                            reuseExistingChunk: true
                        }
                    }
                }
            },
            cache: {
                // 将缓存类型设置为文件系统,默认是memory
                type: 'filesystem',
                buildDependencies: {
                    // 更改配置文件时，重新缓存
                    config: [__filename]
                }
            }
        };
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
