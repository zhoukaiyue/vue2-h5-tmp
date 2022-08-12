/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 15:46:01
 */
import Vue from 'vue';
// 导入全局css
import '@/assets/css/index.scss';
//导入布局
import '@/layout/index';
import App from './App.vue';
import router from '@/packages/router';
import store from '@/packages/store';

// test环境开启vconsole
import VConsole from 'vconsole';
if (process.env.VUE_APP_MODE === 'test') {
    // 配置参考https://github.com/Tencent/vConsole/blob/HEAD/doc/tutorial.md
    // or init with options
    // eslint-disable-next-line no-unused-vars
    const vConsole = new VConsole();
}

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
