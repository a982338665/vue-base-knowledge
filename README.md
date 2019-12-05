# vue-base-knowledge

##课程基于vue2.1.8 Vue.js 不支持 IE8 及其以下 IE 版本
##内容来源：菜鸟教程 https://www.runoob.com/vue2/vue-tutorial.html
##其他资料：
    
    Webpack 入门教程：http://www.runoob.com/w3cnote/webpack-tutorial.html
    官方文档：http://vuejs.org/v2/guide/syntax.html
    中文文档: https://cn.vuejs.org/v2/guide/syntax.html

**1.安装vue的三种方式：**
    
    1.下载vue.min.js后引入:https://vuejs.org/js/vue.min.js 
    2.使用cdn：--> 国内暂无稳定版，建议下载
        Staticfile CDN（国内） : https://cdn.staticfile.org/vue/2.2.2/vue.min.js
        unpkg：https://unpkg.com/vue/dist/vue.js, 会保持和 npm 发布的最新的版本一致。
        cdnjs : https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.8/vue.min.js
    3.npm：构建大型应用时推荐 npm install vue
      由于 npm 安装速度慢，本教程使用了淘宝的镜像及其命令 cnpm：
        $ npm install -g cnpm --registry=https://registry.npm.taobao.org
      npm 版本需要大于 3.0，如果低于此版本需要升级它：
        # 查看版本
        $ npm -v
        2.3.0
        #升级 npm
        cnpm install npm -g
        # 升级或安装 cnpm
        npm install cnpm -g
      快速搭建单页应用：
            # 全局安装 vue-cli
            $ cnpm install --global vue-cli
            # 创建一个基于 webpack 模板的新项目
            $ vue init webpack my-project
            # 这里需要进行一些配置，默认回车即可
            $ cd my-project
            $ cnpm install
            $ cnpm run dev
            访问 http://localhost:8080/

**2.项目目录：**
    
    build	项目构建(webpack)相关代码
    config	配置目录，包括端口号等。我们初学可以使用默认的。
    node_modules	npm 加载的项目依赖模块
    src	这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
        assets: 放置一些图片，如logo等。
        components: 目录里面放了一个组件文件，可以不用。
        App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
        main.js: 项目的核心文件。
    static	静态资源目录，如图片、字体等。
    test	初始测试目录，可删除
    .xxxx文件	这些是一些配置文件，包括语法配置，git配置等。
    index.html	首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
    package.json	项目配置文件。
    README.md	项目的说明文档，markdown 格式

**3.目标：**
    
    1.使用vue.js完整开发移动端app
    2.学会组件化，模块化的开发方式

**4.内容：**   
    
    1.vue.js框架介绍
    2.vue-cli脚手架，搭建基本代码框架
    3.vue-router 官方插件管理路由
    4.vue-resource Ajax通信
    5.webpack   构建工具
    6.es6+eslint    eslint：es6的代码风格检查工具
    7.工程化-组件化-模块化
    8.移动端常用开发技巧：
        flex弹性布局
        css stickyfooter
        酷炫的交互设计
        
**5.vue的MVVM框架：**

    1.前端开发趋势：
        ·旧浏览器淘汰，移动端需求增加
        ·前端交互越来越多，功能越来越复杂
        ·架构从传统后台mvc 向restful api + 前端mv*（前后端分离）迁移
            MV*：框架分类
                1.MVC
                2.MVP
                3.MVVM ：vue.js属于mvvm框架
    2.MVVM框架：
        1.View --> 视图 DOM
        2.ViewModel --> 通讯 观察者（通常实现了Observe监听数据变化，实现了数据的双向绑定）
        3.Model --> 数据 javascript对象
        4.介绍：
            ·针对具有复杂交互逻辑的前端应用
            ·提供基础的架构抽象
            ·通过Ajax数据持久化，保证前端用户体验，不会每次都对前段页面进行刷新，只拿数据渲染
        5.常见的mvvm框架：
            ·angular
            ·react
            ·vue
    3.vue介绍：
        ·他是一个轻量级MVVM框架
        ·数据驱动+组件化的前端开发
        ·github的star数很高，社区完善：去官网可以看到论坛，聊天室等
    4.对比Angular，react，vue：
        ·vue更轻量，gzip大小20k，angular大小56k，react大小40k，所以针对移动端vue更加适合
        ·vue更易上手，学习曲线平稳
        ·借鉴了angualr指令和react的组件化
    5.vue的核心思想：
        1.数据驱动：数据的双向绑定
        2.组件化：拓展html元素，封装可重用代码
      
**6.vue-cli脚手架：**
    
    1. vue-cli是vue的脚手架工具，会帮我们写好vue基础代码的工具
    2.可以帮我们生成：目录结构，本地调试，代码部署，热加载，单元测试等
    3.vue-cli安装：
        node -v
        npm install -g vue-cli
        vue list
        vue init webpack sell-name
        生成脚手架成功
        cd sell-name
        npm install
        npm run dev
    4.
    
**6.webpack打包：**
    
    
