# vue-template

> A Vue.js project

## 技术栈
vue2 + vuex + vue-router + webpack + es6 + axios + less

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 目标功能
- [x] xxxx -- 完成


# 项目布局
```
|-- build                     // webpack配置文件
|-- config                    // 项目打包路径
|-- dist                      // 上线项目文件，放在服务器即可正常访问
|-- src                       // 源码目录
|   |-- components            // 组件
|   |-- config                // 基本配置
|       |-- rem.js            // 适配js文件
|   |-- images                // 公共图片
|   |-- pages
|       |-- home            
|           |-- index.vue     // 首页
|
|   |-- plugins               // 引用的插件
|
|   |-- router                // 路由配置
|
|   |-- store                 // vuex的状态管理
|       |-- action.js         // 配置actions
|       |-- index.js          // 引用vuex，创建store
|       |-- mutation-types.js // 定义常量mutations名
|       |-- mutations.js      // 配置mutations
|
|   |-- style                 // 样式文件
|       |-- common.less       // 公共样式文件
|
|   |-- App.vue               // 页面入口文件
|
|   |-- main.js               // 程序入口文件，加载各种公共组件
| 
|-- .babelrc                  // ES6语法编译配置
|-- .editorconfig             // 代码编写规格
|-- .gitignore                // 忽略的文件
|-- favicon.ico               // 页面左上角小图标
|-- index.html                // 入口html文件
|-- package.json              // 项目及工具的依赖配置文件
|-- README.md                 // 说明
```

