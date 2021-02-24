/*
 * @Author: your name
 * @Date: 2021-02-24 08:44:47
 * @LastEditTime: 2021-02-24 14:36:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1_搭建vue3项目\vue3-vite\src\utils\localToDoList.js
 */
export default {
    saveToDoList(data){
        localStorage.setItem('toDoList',JSON.stringify(data))
    },
    getToDoList(){
        let res = localStorage.getItem('toDoList')&&localStorage.getItem('toDoList').length!=0 ? JSON.parse(localStorage.getItem('toDoList')) : [
            {
              checked: false,
              tag: "学习compsition api",
              id:1,
            },
            {
              checked: false,
              tag: "学习react",
              id:2,
            },
            {
              checked: false,
              tag: "跑步5公里",
              id:3
            },
          ]
        return res;
    },
    deleteToDoList(){

    },
    updateToDoList(){}
}