/*
 * @Descripttion:批量注册全局自定义插件
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2023-05-22 09:31:52
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 23:51:23
 */
import Vue from 'vue';

// 一个操作 剪贴板 的 Vue 指令
import VueClipboard from './copy';

function install(vue) {
    const directives = [VueClipboard];
    directives.forEach((item) => {
        vue.use(item);
    });
}

Vue.use(install);
