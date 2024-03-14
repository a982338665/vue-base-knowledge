<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<!--    标签必须在一个div中-->
    <router-view></router-view>
  </div>
</template>

<script>
    //导入组件
    import test from './test'

    export default {
        name: 'hello',
        components: {
           test
        },
        data () {
            return {
                msg: '欢迎来到菜鸟教程！'
            }
        }
    }
</script>
