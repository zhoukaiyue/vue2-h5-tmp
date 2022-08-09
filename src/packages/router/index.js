/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 14:23:06
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-09 10:15:07
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
console.log(routes);
const options = {
    mode: 'history',
    base: process.env.VUE_APP_ROUTER_BASE ? process.env.VUE_APP_ROUTER_BASE : '/',
    routes
};

const router = new VueRouter(options);

router.beforeEach(async (to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    document.getElementById('toggle-loading').setAttribute('style', 'display:auto');
    next();
});

router.afterEach((to) => {
    document.getElementById('toggle-loading')?.setAttribute('style', 'display:none');
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
});
// router.afterEach((to) => {});
export default router;
