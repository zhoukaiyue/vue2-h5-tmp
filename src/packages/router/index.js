/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 14:23:06
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-15 14:19:24
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '@/packages/store';

Vue.use(VueRouter);
const options = {
    mode: 'history',
    base: process.env.VUE_APP_ROUTER_BASE ? process.env.VUE_APP_ROUTER_BASE : '/',
    routes
};

const router = new VueRouter(options);

router.beforeEach(async (to, from, next) => {
    // 设置 doc.title
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }

    //滚动行为
    if (from.meta && from.meta.keepAlive) {
        Vue.nextTick(() => {
            const $content = document.querySelector('.frame-view-content');
            const scrollTop = ($content && $content.scrollTop) || 0;
            store.commit('SET_VUE_KEEP_SCROLL', scrollTop);
        });
    }

    //显示router切换loading
    document.getElementById('toggle-loading').setAttribute('style', 'display:auto');
    next();
});

router.afterEach((to) => {
    // 隐藏router切换loading
    document.getElementById('toggle-loading')?.setAttribute('style', 'display:none');

    // // 设置 doc.title
    // if (to.meta && to.meta.title) {
    //     document.title = to.meta.title;
    // }

    //滚动行为
    if (to.meta?.keepAlive) {
        Vue.nextTick(() => {
            const $content = document.querySelector('.frame-view-content');
            if ($content) {
                $content.scrollTop = store.vueKeepScroll;
            }
        });
    }
});
// router.afterEach((to) => {});
export default router;
