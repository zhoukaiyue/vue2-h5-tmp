/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 14:23:06
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 14:44:36
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
    next();
});

// router.afterEach((to) => {});

export default router;
