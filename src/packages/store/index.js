/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-15 14:16:07
 */
import Vue from 'vue';
import Vuex from 'vuex';
//导入modules（切片）
import { modules } from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        vueKeepScroll: void 0
    },
    getters: {},
    mutations: {
        SET_VUE_KEEP_SCROLL(state, params) {
            state.vueKeepScroll = params;
        }
    },
    actions: {},
    modules: {
        ...modules
    }
});
