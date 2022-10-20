# 简介

vue2-h5-tmp 是基于 Vue CLI （是一个基于 Vue.js 进行快速开发的完整系统）创建的基于 Webpack 的项目。使用 vant2 作为 UI 组件库的一个移动端脚手架，开箱即用。

## 环境要求

-   node 14+

## 编辑器以及对应扩展

-   Visual Studio v69+
-   Vetur v0.35.0+
-   Eslint v2.2.6+
-   Prettier - Code formatter v9.5.0+

## 快速开发

```
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

## 开发基础规范
<font  color="red">如果设计稿的尺寸不是 750，而是 375 或其他大小，请在 .postcssrc.js 中及时调整 rootValue。</font>

- 🚀 重要、复杂逻辑一定要写注释；
- 🚀 代码规范按照 eslint 的规则来，做到 no waring 和 no error；
- 🚀 项目业务开发，优先使用 vue 全家桶技术栈开发项目，预编译使用 sass；
- 🚀 操作成功或失败后要有提示，比如新增成功、新增失败运行时间长的任务（计算量大、请求后台接口），要有 loadding 效果；
- 🚀 vue 单文件组件代码规范，html、script、style 的位置顺序 html > script > style；
- 🚀 公共的状态才放到 store；
- 🚀 代码尽量往纵向发展，一行不要太长；
- 🚀 不要在钩子函数中写大量业务代码；
- 🚀 异步使用 aysnc await 语法；
- 🚀 不是常用的方法不要全局挂载；

### 基础组件名。 【注：src/components 目录。】

> 应该全部以一个特定的前缀 Base 开头。

```
例子：
src
└─ resources
   └─ components
      |- BaseButton.vue
      |- BaseTable.vue
      |- BaseIcon.vue
```

### 业务组件名。 【注：src/views/components 目录。】

> 应该全部以一个特定的前缀 The 开头。

```
例子：
src
└─ views
   └─ components
      |- TheButton.vue
      |- TheTable.vue
      |- TheIcon.vue
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

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改

### Tag 版本号

版本号以 v 开头，根据当前仓库的 tag 编号进行累加，如：v1.10.45。

## 项目目录说明

```
vue2-h5-tmp                           //
├─ .browserslistrc                    //
├─ .env.development                   // 开发环境配置文件
├─ .env.production                    // 生产环境配置文件
├─ .env.test                          // 灰度 or 测试 or or uat环境配置文件
├─ .eslintignore                      //
├─ .eslintrc.js                       //
├─ .prettierrc.js                     //
├─ babel.config.js                    //
├─ jsconfig.json                      //
├─ package-lock.json                  //
├─ package.json                       // 项目描述文件
├─ postcss.config.js                  //
├─ public                             //
│  ├─ index.html                      //
│  └─ static                          // 静态资源 
│     ├─ favicon.ico                  //
│     └─ loading@2x.gif               //
├─ README.md                          //
├─ src                                // 源码目录
│  ├─ App.vue                         //
│  ├─ assets                          // 静态资源 hash处理
│  │  ├─ css                          // css
│  │  │  ├─ index.scss                //
│  │  │  └─ utils                     //
│  │  │     └─ @util.scss             //
│  │  ├─ img                          // img
│  │  │  └─ base                      //
│  │  │     ├─ empty.png              //
│  │  │     └─ loading@2x.gif         //
│  │  ├─ js                           // js
│  │  └─ logo.png                     //
│  ├─ config                          // 项目配套的第三方包配置
│  │  ├─ apis                         // 业务模块接口配置
│  │  │  └─ dev.js                    //
│  │  ├─ router                       // 业务模块router路由配置
│  │  │  ├─ dev.js                    //
│  │  │  └─ index.js                  //
│  │  └─ store                        // 业务模块store配置
│  │     └─ dev                       //
│  │        └─ index.js               //
│  ├─ layout                          // 布局组件
│  │  ├─ frame-view                   //
│  │  │  └─ index.vue                 //
│  │  ├─ index.js                     //
│  │  ├─ README.md                    //
│  │  └─ tabbar                       //
│  │     └─ index.vue                 //
│  ├─ main.js                         // 入口js文件
│  ├─ packages                        // 项目配套的第三方包
│  │  ├─ request                      //
│  │  │  ├─ index.js                  //
│  │  │  └─ loading                   //
│  │  │     └─ index.js               //
│  │  ├─ router                       //
│  │  │  ├─ index.js                  //
│  │  │  ├─ router404.js              //
│  │  │  └─ routes.js                 //
│  │  └─ store                        //
│  │     ├─ index.js                  //
│  │     └─ modules.js                //
│  ├─ resources                       // 全局基础资源如基础组件、全局插件、全局指令等
│  │  ├─ components                   // 基础组件
│  │  │  ├─ base-list                 //
│  │  │  │  ├─ index.vue              //
│  │  │  │  └─ README.md              //
│  │  │  └─ tab                       //
│  │  └─ plugin                       // 全局插件
│  ├─ utils                           // 工具类
│  │  ├─ helper                       // 帮助类
│  │  │  └─ env.js                    //
│  │  └─ tools                        // 其他工具类
│  │     ├─ eventBus                  //
│  │     │  └─ index.js               //
│  │     ├─ get-realpx                //
│  │     │  └─ index.js               //
│  │     └─ sleep.js                  //
│  └─ views                           // 页面级资源
│     ├─ components                   //
│     ├─ dev                          //
│     │  ├─ components                //
│     │  │  ├─ eventBus               //
│     │  │  │  ├─ components          //
│     │  │  │  │  ├─ children.vue     //
│     │  │  │  │  └─ find.vue         //
│     │  │  │  └─ index.vue           //
│     │  │  ├─ layOut                 //
│     │  │  │  └─ index.vue           //
│     │  │  ├─ list                   //
│     │  │  │  └─ index.vue           //
│     │  │  ├─ lodashjs               //
│     │  │  │  └─ index.vue           //
│     │  │  ├─ tabbar                 //
│     │  │  │  └─ index.vue           //
│     │  │  └─ vuex                   //
│     │  │     └─ index.vue           //
│     │  └─ index.vue                 //
│     ├─ err404                       //
│     │  └─ index.vue                 //
│     └─ index                        //
│        └─ index.vue                 //
└─ vue.config.js                      // 构建脚本（webpack配置）

```
