/*
 * @Descripttion:批量注册全局自定义插件
 * @version:
 * @Author: zhoukai
 * @Date: 2023-02-07 11:11:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-05-22 10:26:44
 */
import Vue from 'vue';

// 一个操作 localStorage 的 Vue 插件
import VueLocalStorage from './vue-localstorage';
// ## 一个操作 sessionStorage 的 Vue 插件
import VueSessionStorage from './vue-sessionstorage';

function install(vue) {
    const plugins = [VueLocalStorage, VueSessionStorage];
    plugins.forEach((item) => {
        vue.use(item);
    });
}

Vue.use(install);
