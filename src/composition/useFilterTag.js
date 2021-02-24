/*
 * @Author: your name
 * @Date: 2021-02-24 10:44:01
 * @LastEditTime: 2021-02-24 15:13:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1_搭建vue3项目\vue3-vite\src\composition\useFilterTag.js
 */
import {computed, ref} from 'vue'
import {deepClone} from '/@/utils/index.js'
const filterByStatus = function(data,status){
    if(status == 'All'){
        return data
    }
    if(status == 'Completed'){
        return data.filter(ele=>ele.checked)
    }
    if(status == 'Active'){
        return data.filter(ele=>!ele.checked)
    }
}
export function filterTag({tagListRef}){ 
    const statusRef = ref('All')
    const filterListRef = computed(()=>{ 
        return filterByStatus(tagListRef.value,statusRef.value)
    }) 
    const leftItems = computed(()=>{
        return tagListRef.value.filter(ele=>!ele.checked).length
    })
    const classifySearch = (e) => {
        if (!e.target.classList.contains("item")) return;
        let itemarr = [...document.getElementsByClassName("item")];
        itemarr.forEach((ele) => {
          ele.classList.remove("active");
        }); 
        e.target.classList.add("active");
        if(e.target.classList.contains('Completed')){
            statusRef.value = 'Completed'
        }else if(e.target.classList.contains('Active')){
            statusRef.value = 'Active'
        }else{
            statusRef.value = 'All'
        }
      }; 
    return { 
        classifySearch,
        filterListRef,
        leftItems
    }
}