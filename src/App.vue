<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
<!--    <test></test>-->
    <MinioTest></MinioTest>
  </div>
</template>

<script>

  //导入组件
  import Hello from './components/HelloWorld'
  import Test from './components/Test'
  import MinioTest from './components/MinioTest'

  export default {
    name: 'app',
    components: {
      Hello,
      Test,
      MinioTest

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
