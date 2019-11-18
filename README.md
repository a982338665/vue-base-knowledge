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

**6.webpack打包：**
    
    
