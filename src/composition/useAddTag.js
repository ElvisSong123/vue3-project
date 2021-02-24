/*
 * @Author: your name
 * @Date: 2021-02-24 10:04:56
 * @LastEditTime: 2021-02-24 15:10:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1_搭建vue3项目\vue3-vite\src\composition\useAddTag.js
 */
import {ref} from 'vue'
export function createTag({tagListRef}){
    const inputValueRef = ref(''); 
    const isUpdateRef = ref(false);
    let currentTagValue = '';
    const addTag = ()=>{
        console.log(inputValueRef.value);
        if(inputValueRef.value){
            tagListRef.value.push({
                id:Math.random().toString(36).slice(2),
                checked:false,
                tag:inputValueRef.value
            })
            inputValueRef.value = ''
        }
    }
    const updateTag = (value)=>{
        isUpdateRef.value = true;
        currentTagValue = value;
    }
    const updateBlur = (e,item)=>{
        isUpdateRef.value = false;
        console.log(item,tagListRef.value);
        console.log( tagListRef.value.filter(ele=>ele.id == item.id)[0]);
        if(currentTagValue){
            tagListRef.value.filter(ele=>ele.id == item.id)[0].tag = currentTagValue;
        }else{
            tagListRef.value = tagListRef.value.filter(ele=>ele.id != item.id);
        }
    }
    const confirmUpdate = (e,item)=>{
        isUpdateRef.value = false; 
        currentTagValue = e.target.value;
    }
    return {
        inputValueRef,
        addTag,
        isUpdateRef,
        updateTag,
        updateBlur,
        confirmUpdate
    }
}
