<!--
 * @Author: your name
 * @Date: 2021-02-20 10:05:24
 * @LastEditTime: 2021-02-20 14:25:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1_搭建vue3项目\vue3-vite\src\App.vue
-->
<template> 
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <ToDoList></ToDoList>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDoList from './components/todoList.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ToDoList
  }
}
</script>
<style lang="scss">
*{
  margin:0;
}
html,body{
  width:100%;
  height:100%;
  overflow: hidden;
}
#app{
  width:100%;
  height:100%;
}
</style>