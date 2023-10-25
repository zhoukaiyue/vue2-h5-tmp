/*
 * @Descripttion:
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-08-08 14:23:06
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-11 16:42:29
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import beforeEachGuard from './guards/beforeEach';
import afterEachGuard from './guards/afterEach';

Vue.use(VueRouter);

const options = {
    mode: 'history',
    base: process.env.VUE_APP_ROUTER_BASE || '/',
    routes
};

const router = new VueRouter(options);
router.beforeEach(beforeEachGuard);
router.afterEach(afterEachGuard);
export default router;
