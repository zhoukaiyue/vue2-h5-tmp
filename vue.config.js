/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-09 22:58:23
 */
const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const isEnvDevelopment = process.env.NODE_ENV === 'development'; // 开发模式
// eslint-disable-next-line no-unused-vars
const isEnvProduction = process.env.NODE_ENV === 'production'; // 生产模式

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = defineConfig({
    transpileDependencies: true,
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
    //例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
    publicPath: process.env.VUE_APP_PUBLIC_URL,
    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: 'static',
    /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     * 打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
     * map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     * 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     * */
    productionSourceMap: false,
    //将 lint 错误输出为编译警告,并且输出到命令行，注意不会使得编译失败。
    lintOnSave: 'warning',
    runtimeCompiler: true,
    // 调整内部的 webpack 配置。
    // 查阅 https://cli.vuejs.org/zh/guide/webpack.html
    chainWebpack: (config) => {
        // 移除 preload 插件
        config.plugins.delete('preload');
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
        // 添加别名
        config.resolve.alias.set('@', resolve('src'));
        config.devtool(isEnvDevelopment ? 'cheap-module-source-map' : false);
    },
    configureWebpack: () => {
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
                },
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        extractComments: false, //不将注释提取到单独的文件中
                        terserOptions: {
                            compress: {
                                // 移除 warning,console,debugger等
                                warnings: false,
                                drop_console: true,
                                drop_debugger: true,
                                pure_funcs: ['console.log'] // 移除console
                            }
                        }
                    })
                ]
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
