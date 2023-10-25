/*
 * @Descripttion: 用于处理beforeEach守卫逻辑。
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2023-06-11 16:34:49
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-11 16:37:04
 */
import Vue from 'vue';
import store from '@/packages/store';
export default function (to, from, next) {
    //滚动行为
    if (from.meta?.keepAlive) {
        Vue.nextTick(() => {
            const $content = document.querySelector('.frame-view-content');
            const scrollTop = $content?.scrollTop || 0;
            store.commit('SET_SCROLLPOSITIONS', {
                [from.path]: scrollTop
            });
        });
    }

    // 显示router切换loading
    const loadingElement = document.getElementById('toggle-loading');
    loadingElement.style.display = 'auto';

    // 守卫逻辑
    next();
}
