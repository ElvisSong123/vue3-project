/*
 * @Author: your name
 * @Date: 2021-02-20 15:52:00
 * @LastEditTime: 2021-02-20 16:09:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1_搭建vue3项目\vite.config.js
 */
const path = require('path')
export default {
        // 代理，最重要，其他的都可以有默认配置
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         changeOrigin: true,
        //     }
        // },
        // 项目启动的根路径
        // root:  'G:\\work\\myself\\studyNode\\nodeMysql\\client',
        // 入口
        // entry: 'index.html',
        // 出口
        // outDir: './../public',
        // 打包后的跟路径
        // base:'/',
        // 输出的静态资源的文件夹名称
        // assetsDir:'assets',
        // 是否开启ssr服务断渲染
        // ssr: false,
        // 重命名路径  path.resolve(__dirname, './src')
        alias: {
            '/@/': path.resolve(__dirname, 'src')
        }
        // 端口
        // port: 3002,
        // 是否自动开启浏览器
        // open: false,
        // 开启控制台输出日志
        // silent: false,
        // 哪个第三方的包需要重新编译
        // optimizeDeps:[],
 
}