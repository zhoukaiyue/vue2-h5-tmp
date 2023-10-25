/*
 * @Descripttion: 用于处理afterEach守卫逻辑。
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2023-06-11 16:34:49
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-25 11:27:05
 */
import Vue from 'vue';
import store from '@/packages/store';
export default function (to) {
    // 隐藏router切换loading
    document.getElementById('toggle-loading')?.setAttribute('style', 'display:none');

    // 设置 doc.title
    const { title } = to.meta || {};
    if (title) {
        document.title = title;
    }

    // 滚动行为
    Vue.nextTick(() => {
        const $content = document.querySelector('.frame-view-content');
        if ($content) {
            $content.scrollTop = store.state.scrollPositions[to.path] || 0;
        }
    });
}
