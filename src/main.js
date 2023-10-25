/*
 * @Descripttion:
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-05-22 10:29:27
 */
import 'current-script-polyfill';
import Vue from 'vue';
// 导入全局css
import '@/assets/css/index.scss';
//导入布局
import '@/layout/index';
import App from './App.vue';
import router from '@/packages/router';
import store from '@/packages/store';
//vconsole
import '@/packages/console';
// 导入全局插件
import '@/resources/plugin/index.js';
// 导入全局自定义指令
import '@/resources/directive/index.js';

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
