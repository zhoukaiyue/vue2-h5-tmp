/*
 * @Descripttion:webpack配置文件
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-18 17:50:43
 */
const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
// 使用 analyzer 分析项目编译后的文件组成，以便进行加载速度优化。
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// git 提交哈希
const { gitHash, isEnvDevelopment, isEnvTest, isEnvProduction, BUNDLE_ANALYZE } = require('./util');

module.exports = defineConfig({
    runtimeCompiler: true,
    transpileDependencies: true,
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
    // 例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
    publicPath: process.env.VUE_APP_PUBLIC_URL,
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: 'assets',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // 将 lint 错误输出为编译警告,并且输出到命令行，注意不会使得编译失败。
    lintOnSave: 'warning',
    // 解决[mini-css-extract-plugin] 警告冲突顺序
    css: {
        // 注意：css.extract.ignoreOrder会导致在开发模式下提取 CSS
        extract: !isEnvDevelopment
            ? {
                  ignoreOrder: true
              }
            : false
    },
    // 调整内部的 webpack 配置。
    // 查阅 https://cli.vuejs.org/zh/guide/webpack.html
    chainWebpack: (config) => {
        // 移除 preload 插件
        config.plugins.delete('preload');
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
        //设置路径别名 @表示src 使用方法：import { } from '@/components'
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    },
    configureWebpack: (config) => {
        // production模式下构建时补充HtmlWebpackPlugin插件配置
        if (!isEnvDevelopment && config.plugins[5] && config.plugins[5].userOptions) {
            config.plugins[5].userOptions.minify = {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            };
        }
        /**
         * del 控制台console.log 日志、debugger、代码注释
         * 方式一 ：config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
         * 方式二 ：(重写TerserPlugin)这里采用方式二
         */
        config.plugins.push(
            // 重写
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            new TerserPlugin({
                parallel: 6,
                extractComments: false, // 不将注释提取到单独的文件中
                // https://github.com/terser/terser#minify-options
                terserOptions: {
                    ecma: 5, // specify one of: 5, 2015, 2016, etc.
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    compress: {
                        drop_console: isEnvProduction, // 生产环境下移除控制台所有的内容
                        drop_debugger: false, // 移除断点
                        pure_funcs: isEnvProduction ? ['console.log'] : [] // 生产环境下移除console
                    }
                }
            })
        );
        // 开发环境下下，开启捆绑包分析
        if (isEnvDevelopment && BUNDLE_ANALYZE) {
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
                    generateStatsFile: true // 是否生成stats.json文件
                })
            );
        }

        return {
            optimization: {
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
                        'vendors/vconsole': {
                            name: 'vendors/vconsole',
                            test: /[\\/]node_modules[\\/]vconsole[\\/]/,
                            priority: 9
                        },
                        'vendors/frame-view': {
                            name: 'vendors/frame-view',
                            test: /[\\/]src[\\/](layout)[\\/]/,
                            priority: 8
                        },
                        'vendors/vue-bucket': {
                            name: 'vendors/vue-bucket',
                            test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
                            priority: 7
                        },
                        'vendors/ui': {
                            name: 'vendors/ui',
                            test: /[\\/]node_modules[\\/](vant|element-ui)[\\/]/,
                            priority: 6
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
                // 缓存目录
                cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/webpack', process.env.VUE_APP_MODE),
                buildDependencies: {
                    // 更改配置文件时，重新缓存
                    config: [__filename]
                },
                version: gitHash // 使用 git 哈希作为缓存版本
            },
            performance: {
                maxAssetSize: 500000,
                maxEntrypointSize: 1000000
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
