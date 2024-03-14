<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h1>{{ data }}</h1>
    <h1>{{ value }}</h1>
    <h1>{{ details() }}</h1>
  </div>
</template>

<script>
    export default {
        el:'#test',
        name: 'test',
        data () {
            return {
                msg: '欢迎来到菜鸟教程！',
                data:'test',
                value:18
            }
        },
        methods (){
            return {
                details:function () {
                    return this.msg + '方法返回';
                }
            }
        }
    }
</script>
