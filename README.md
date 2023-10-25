# 简介

vue2-h5-tmp 是基于 Vue2.7 + JavaScript + Webpack5 + Vuex + Vant2 + sass + Rem 布局适配 + axios（封装）+ Eslint + Prettier 等流行技术栈构建移动端模板脚手架，开箱即用。

## 环境要求

-   node ^14.17.0 || >=16.0.0
-   pnpm >=7

## 编辑器以及对应扩展

-   Visual Studio v69+
-   Vetur v0.35.0+
-   Eslint v2.2.6+
-   Prettier - Code formatter v9.5.0+

## 快速开发

```
#通过 npm 安装 pnpm (如果本地已安装pnpm,请忽略)
npm install -g pnpm
#安装项目依赖
pnpm install
#开发环境启动
pnpm start
#打包 test 环境代码
pnpm build:test
#打包生产环境代码
pnpm build or pnpm build:prod
#执行 js 类型检查
pnpm lint:fix
#执行 prettier 批量格式化代码
pnpm lint:prettier

##注：详细请阅读package.json 以及对应的环境配置文件（即.env 文件）！
```

```text
同时在项目根目录下包含一个 run.bat，该文件会列出所有 package.json 中 script 块里面的所有命令，
通过双击该文件，你可以在命令行中输入相应的序号并按 Enter 键，程序将运行你选择的脚本。
```

## 开发基础规范

<font  color="red">如果设计稿的尺寸不是 750，而是 375 或其他大小，请在 .postcssrc.js 中及时调整 rootValue。</font>

-   🚀 重要、复杂逻辑一定要写注释；
-   🚀 代码规范按照 eslint 的规则来，做到 no waring 和 no error；
-   🚀 项目业务开发，优先使用 vue 全家桶技术栈开发项目，预编译使用 sass；
-   🚀 操作成功或失败后要有提示，比如新增成功、新增失败运行时间长的任务（计算量大、请求后台接口），要有 loadding 效果；
-   🚀 vue 单文件组件代码规范，html、script、style 的位置顺序 html > script > style；
-   🚀 公共的状态才放到 store；
-   🚀 代码尽量往纵向发展，一行不要太长；
-   🚀 不要在钩子函数中写大量业务代码；
-   🚀 异步使用 aysnc await 语法；
-   🚀 不是常用的方法不要全局挂载；
-   🚀 文件命名如果是多单词则采用驼峰命名或者烤肉串大小写，尽量简洁明了；

### 基础组件名。 【注：src/components 目录。】

> 基础组件文件命名应该以 base 为前缀命名，以示其唯一性，并且以横线连接。

```
例子：
src
└─ resources
   └─ components
      └─ base-list
         ├─ index.vue      //源码
         └─ README.md      //组件使用说明文档
```

### 业务组件名。 【注：src/views/components 目录。】

> 业务组件文件命名应该以 the 为前缀命名，以示其唯一性，并且以横线连接。

```
例子：
src
└─ views
   └─ components
      └─ the-button
         ├─ index.vue      //源码
         └─ README.md      //组件使用说明文档
```

### 路由文件创建与命名。 【注：src/config/router 目录。】

为了方便维护与开发，建议路由文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ router
      |- index.js
      |- dev.js
      |- home.js
```

### 接口文件创建与命名。 【注：src/config/apis 目录。】

为了方便维护与开发，建议接口文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ apis
      |- index.js
      |- home.js
```

### 状态切片文件创建与命名。 【注：src/config/store 目录。】

为了方便维护与开发，建议以当前对应模块或者功能命名文件夹，尽量简洁明了。

```
例子：
src
└─ config
   └─ store
      └─ dev
         |- index.js
      └─ home
         |- index.js
```

### 图片资源。 【注：src/assets/img 目录。】

建议图片文件夹命名与对应的页面文件命名保持一致，公共图片资源放置到 src/assets/img/base 目录下即可。

```
例子：
src
└─ assets
   └─ img
      |- index
      |- dev
      |- base
```

## git 版本规范

### 分支管理

一般项目分主分支（master）和其他分支。 当有团队成员要开发新功能(Feather)或改 BUG(Fix) 时，就从 master 分支开一个新的分支。

### Commit 规范

-   feat 新增功能
-   fix 修复 bug
-   docs 文档变更
-   style 代码格式（不影响功能，例如空格、分号等格式修正）
-   refactor 代码重构
-   perf 改善性能
-   test 测试
-   build 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
-   ci 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等
-   chore 变更构建流程或辅助工具
-   revert 代码回退

### Tag 版本号

版本号以 v 开头，根据当前仓库的 tag 编号进行累加，如：v1.10.45。

## 项目目录说明

```
vue2-h5-tmp
├─ .browserslistrc                      //
├─ .env.development                     // 开发环境配置文件
├─ .env.production                      // 生产环境配置文件
├─ .env.test                            // 测试环境配置文件
├─ .eslintignore                        //
├─ .eslintrc.js                         //
├─ .npmrc                               //
├─ .prettierrc.js                       //
├─ .vscode                              //
│  └─ settings.json                     //
├─ babel.config.js                      //
├─ jsconfig.json                        //
├─ package.json                         //
├─ pnpm-lock.yaml                       //
├─ postcss.config.js                    //
├─ public                               //
│  ├─ index.html                        // template模板
│  └─ static                            // 静态资源
│     ├─ css                            //
│     │  └─ index.css                   //
│     ├─ img                            //
│     │  ├─ favicon.ico                 //
│     │  └─ loading@2x.gif              //
│     └─ js                             //
├─ README.md                            // 项目基本信息描述文件
├─ run.bat                              // 批处理文件脚本
├─ src                                  // 业务代码块
│  ├─ App.vue                           // 顶层router-view
│  ├─ assets                            // 静态资源 hash处理
│  │  ├─ css                            //
│  │  │  ├─ index.scss                  //
│  │  │  └─ utils                       //
│  │  │     └─ @util.scss               //
│  │  ├─ img                            //
│  │  │  ├─ base                        //
│  │  │  │  ├─ empty.png                //
│  │  │  │  └─ loading@2x.gif           //
│  │  │  └─ images                      //
│  │  └─ js                             //
│  ├─ config                            // 业务配置目录
│  │  ├─ apis                           // 所有接口相关
│  │  │  └─ dev.js                      //
│  │  ├─ router                         // 所有路由相关
│  │  │  ├─ dev.js                      //
│  │  │  ├─ errpage.js                  //
│  │  │  └─ index.js                    //
│  │  └─ store                          // 状态商店（所有全局状态管理相关）
│  │     └─ dev                         //
│  │        └─ index.js                 //
│  ├─ layout                            // 基础布局组件
│  │  ├─ frame-view                     //
│  │  │  └─ index.vue                   //
│  │  ├─ index.js                       //
│  │  ├─ README.md                      //
│  │  └─ tabbar                         //
│  │     └─ index.vue                   //
│  ├─ main.js                           // 入口js文件
│  ├─ packages                          // 第三方包配置
│  │  ├─ console                        // vConsole
│  │  │  └─ index.js                    //
│  │  ├─ request                        // axios
│  │  │  ├─ cancel                      //
│  │  │  │  ├─ index.js                 //
│  │  │  │  └─ utils                    //
│  │  │  │     └─ generateReqKey.js     //
│  │  │  ├─ httpErrorStatusHandle       //
│  │  │  │  └─ index.js                 //
│  │  │  ├─ index.js                    //
│  │  │  ├─ loading                     //
│  │  │  │  ├─ components               //
│  │  │  │  │  ├─ loading.js            //
│  │  │  │  │  └─ loading.scss          //
│  │  │  │  └─ index.js                 //
│  │  │  ├─ README.md                   //
│  │  │  └─ retry                       //
│  │  │     └─ index.js                 //
│  │  ├─ router                         // vue-router
│  │  │  ├─ guards                      //
│  │  │  │  ├─ afterEach.js             //
│  │  │  │  └─ beforeEach.js            //
│  │  │  ├─ index.js                    //
│  │  │  └─ routes.js                   //
│  │  └─ store                          //
│  │     ├─ index.js                    //
│  │     └─ modules.js                  //
│  ├─ resources                         // 全局基础资源如基础组件、全局插件、全局指令等
│  │  ├─ components                     //
│  │  │  ├─ base-barcode                //
│  │  │  │  ├─ index.vue                //
│  │  │  │  └─ README.md                //
│  │  │  ├─ base-list                   //
│  │  │  │  ├─ index.vue                //
│  │  │  │  └─ README.md                //
│  │  │  └─ base-qrcode                 //
│  │  │     ├─ index.vue                //
│  │  │     └─ README.md                //
│  │  ├─ directive                      //
│  │  │  ├─ copy                        //
│  │  │  │  ├─ index.js                 //
│  │  │  │  └─ README.md                //
│  │  │  └─ index.js                    //
│  │  └─ plugin                         //
│  │     ├─ index.js                    //
│  │     ├─ vue-localstorage            //
│  │     │  ├─ index.js                 //
│  │     │  └─ README.md                //
│  │     └─ vue-sessionstorage          //
│  │        ├─ index.js                 //
│  │        └─ README.md                //
│  ├─ utils                             // 工具库
│  │  ├─ helper                         // 帮助类如一些类型校验函数、判断浏览器 终端等
│  │  │  ├─ sleep.js                    //
│  │  │  ├─ validate.js                 //
│  │  │  └─ env.js                      //
│  │  └─ tools                          // 其他工具类
│  │     ├─ eventBus                    //
│  │     │  └─ index.js                 //
│  │     └─ get-realpx                  //
│  │        └─ index.js                 //
│  └─ views                             // 视图层
│     ├─ components                     // 业务组件
│     ├─ dev                            //
│     │  ├─ components                  //
│     │  │  ├─ eventBus                 //
│     │  │  │  ├─ components            //
│     │  │  │  │  ├─ children.vue       //
│     │  │  │  │  └─ find.vue           //
│     │  │  │  └─ index.vue             //
│     │  │  ├─ layOut                   //
│     │  │  │  └─ index.vue             //
│     │  │  ├─ plugin                   //
│     │  │  ├─ tabbar                   //
│     │  │  │  └─ index.vue             //
│     │  │  ├─ tool                     //
│     │  │  │  ├─ components            //
│     │  │  │  │  ├─ copy.vue           //
│     │  │  │  │  └─ lodashjs.vue       //
│     │  │  │  └─ index.vue             //
│     │  │  └─ vuex                     //
│     │  │     └─ index.vue             //
│     │  └─ index.vue                   //
│     ├─ err404                         //
│     │  └─ index.vue                   //
│     └─ index                          //
│        └─ index.vue                   //
└─ vue.config.js                        // 调整 webpack 配置

```
