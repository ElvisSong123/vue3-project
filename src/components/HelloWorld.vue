<!--
 * @Author: your name
 * @Date: 2021-02-20 10:05:24
 * @LastEditTime: 2021-02-20 11:19:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1_搭建vue3项目\vue3-vite\src\components\HelloWorld.vue
-->
<template>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script>
import { ref, onBeforeMount,onMounted } from "vue";
export default {
  created() {
    console.log("created 执行");
  },
  setup() {
    onBeforeMount(() => {
      console.log("beforeMounte 执行");
    });
    onMounted(()=>{
      console.log('mounted 执行')
    })
    console.log("setup 执行");
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
