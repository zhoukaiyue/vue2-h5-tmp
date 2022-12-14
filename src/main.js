/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-18 14:30:01
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

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
