/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 10:29:13
 */
import Vue from 'vue';
import Vuex from 'vuex';
//导入modules（切片）
import { modules } from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        ...modules
    }
});
