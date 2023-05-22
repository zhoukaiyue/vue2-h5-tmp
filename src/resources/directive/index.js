/*
 * @Descripttion:批量注册全局自定义插件
 * @version:
 * @Author: zhoukai
 * @Date: 2023-05-22 09:31:52
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-05-22 10:28:47
 */
import Vue from 'vue';

// 一个操作 剪贴板 的 Vue 指令
import * as VueClipboard from './copy';

function install(vue) {
    const directives = [VueClipboard];
    directives.forEach((item) => {
        vue.use(item);
    });
}

Vue.use(install);
