<!--
 * @Author: your name
 * @Date: 2021-02-20 11:27:49
 * @LastEditTime: 2021-02-24 15:13:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1_搭建vue3项目\vue3-vite\src\components\todoList.vue
-->
<template>
  <div class="wrapper">
    <div class="header">
      <div class="check-all">
        <input type="checkbox" :checked="checkAllRef" @click="checkAllChange" />
        <div :class="{ 'input-decorate': true, ischeck: checkAllRef }"></div>
      </div>
      <input type="text" placeholder="What needs to be done?" v-model="inputValueRef" @keydown.enter="addTag"/>
    </div>
    <div class="content">
      <div class="tag-list" v-for="(item, index) in filterListRef">
        <div class="check-item">
          <input
            type="checkbox"
            :checked="item.checked"
            @click="checkChange($event, item.id)"
          />
          <div :class="{ 'input-decorate': true, ischeck: item.checked }"></div>
        </div>
        <div :class="{'tag':true,'tag-checked':item.checked}" v-if="!isUpdateRef" @dblclick="updateTag(item.tag)">{{item.tag}}</div>
        <input v-if="isUpdateRef" class="tag" v-model="item.tag" @blur="updateBlur($event,item)" @keydown.enter="confirmUpdate($event,item)" /> 
      </div>
    </div>
    <div class="footer">
      <div class="left">{{leftItems}} items left</div>
      <div class="right" @click="classifySearch">
        <div class="item All active">All</div>
        <div class="item Active">Active</div>
        <div class="item Completed">Completed</div>
      </div>
    </div>
    <div class="decorate">
      <div class="decorate"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"; 
import {useToDoList} from '/@/composition/useToDoList.js'
import {createTag} from '/@/composition/useAddTag.js'
import {filterTag} from '/@/composition/useFilterTag.js'
export default {
  setup() {   
    const toDoList = useToDoList();

    return {
      ...toDoList,    
      ...createTag(toDoList),
      ...filterTag(toDoList),
    };
  },
};
</script>
<style lang="scss">
.check-style {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  .input-decorate {
    width: 40px;
    height: 40px;
    background-image: url("/@/assets/unchecked.svg");
    &.ischeck {
      background-image: url("/@/assets/checked.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      border: none;
    }
  }
  input {
    width: 30px;
    height: 30px;
    position: absolute;
    opacity: 0;
  }
}
.wrapper {
  width: 50%;
  height: 50%;
  position: relative;
  border: 1px solid #eee;
  margin: 100px auto;
  box-shadow: -2px 0 3px -1px #eee,
    //左边阴影
    0 -2px 3px -1px #eee,
    //顶部阴影
    2px 0 3px -1px #eee; //右边阴影
  .decorate {
    position: absolute;
    bottom: -7px;
    width: 99%;
    height: 5px;
    border: 1px solid #ddd;
    border-top: none;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .header {
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    border-bottom: 1px solid rgb(227 224 224);
    .check-all {
      @extend .check-style;
    }
    input[type="text"] {
      flex: 1;
      border: none;
      height: 40px;
      background: #fff;
      margin-right: 10px;
      font-size: 20px;
      color: #ccc;
      &:focus {
        outline: none;
      }
      &::-webkit-input-placeholder {
        color: #ccc;
      }
    }
  }
  .content {
    height: 75%;
    overflow: auto;
    border-bottom: 1px solid rgb(227, 224, 224);

    .tag-list {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      .check-item {
        @extend .check-style;
      }
      .tag {
        flex: 1;
        margin-right: 5px;
        color: #4b4b4bd9;
        font-weight: 600;
        border: none;
        font-size: 16px;
        padding: 10px 5px;
        &:focus {
          outline-color: #e5e5e5;
        }
        &.tag-checked{
          text-decoration: line-through;
          text-decoration-color: red; 
        }
      }
    }
  }
  .footer {
    height: calc(25% - 50px);
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    .left,
    .right {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .right {
      div.item {
        margin: 0 10px;
        color: #4b4b4bd9;
        cursor: pointer;
        padding: 2px 5px;
        &.active {
          background: #5fe5e5;
          color: #fff;
        }
      }
    }
  }
}
</style>
 