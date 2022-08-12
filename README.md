# 简介

vue2-h5-tmp 是基于 vue create(vueCli5) 创建并使用 vant2 作为 UI 组件库的一个移动端脚手架，开箱即用。

## 环境要求

-   node 14+

## 编辑器以及对应扩展

-   Visual Studio 69+
-   Vetur v0.35.0
-   Eslint v2.2.6
-   Prettier - Code formatter v9.5.0

## 快速开发

```
#安装项目依赖
npm install
#开发环境启动
npm run start
#打包 test 环境代码
npm run build:test
#打包生产环境代码
npm run build or npm run build:prod
#执行 js 类型检查
npm run lint:fix
#执行 prettier 批量格式化代码
npm run lint:prettier

##注：详细请阅读package.json 以及对应的配置文件！
```

## 开发规范

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
│  ├─ favicon.ico                     //
│  ├─ index.html                      //
│  └─ loading@2x.gif                  //
├─ README.md                          //
├─ src                                // 源码目录
│  ├─ App.vue                         //
│  ├─ assets                          // 静态资源
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
