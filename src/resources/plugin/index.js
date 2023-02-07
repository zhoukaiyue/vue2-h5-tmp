/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2023-02-07 11:11:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-07 11:24:37
 */
import Vue from 'vue';

// 导入组件
import VueLocalStorage from './vue-localstorage';
import VueSessionStorage from './vue-sessionstorage';

// 组件初始化
Vue.use(VueLocalStorage);
Vue.use(VueSessionStorage);
