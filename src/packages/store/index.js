/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-11 16:57:17
 */
import Vue from 'vue';
import Vuex from 'vuex';
//导入modules（切片）
import { modules } from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        scrollPositions: {} //定义一个空对象用于保存每个页面的滚动位置
    },
    getters: {},
    mutations: {
        //更新每个页面的滚动位置的状态
        SET_SCROLLPOSITIONS(state, params) {
            state.scrollPositions = Object.assign({}, state.scrollPositions, params);
        }
    },
    actions: {},
    modules: {
        ...modules
    }
});
