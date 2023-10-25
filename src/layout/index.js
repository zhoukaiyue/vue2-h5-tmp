/*
 * @Descripttion:
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-08-08 15:58:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 15:59:04
 */

import Vue from 'vue';
import FrameView from './frame-view/index.vue';

const Components = {
    install(Vue) {
        Vue.component('FrameView', FrameView);
    }
};

Vue.use(Components);
