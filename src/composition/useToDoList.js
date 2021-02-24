/*
 * @Author: your name
 * @Date: 2021-02-24 08:44:12
 * @LastEditTime: 2021-02-24 14:39:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1_搭建vue3项目\vue3-vite\src\composition\useToDoList.js
 */
import { ref, watchEffect } from "vue";
import toDoListFunc from '../utils/localToDoList'
export function useToDoList() {
    const checkAllRef = ref(false);
    const tagListRef = ref(toDoListFunc.getToDoList());
    const checkAllChange = (e) => {
        checkAllRef.value = e.target.checked;
        tagListRef.value.forEach((ele) => {
            ele.checked = e.target.checked;
        });
    };
    const checkChange = (e, index) => {

        const chooseItem = tagListRef.value.filter((ele) => {
            return ele.id == index
        })[0];
        chooseItem.checked = e.target.checked;
        if (tagListRef.value.every((ele) => ele.checked)) {
            checkAllRef.value = true;
        } else {
            checkAllRef.value = false;
        }
    };
    watchEffect(() => {
        toDoListFunc.saveToDoList(tagListRef.value);
    })
    return {
        checkAllRef,
        tagListRef,
        checkAllChange,
        checkChange
    }
}
