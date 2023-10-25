/*
 * @Descripttion:一个操作 localStorage 的 Vue 插件
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2023-02-07 11:12:18
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-07 11:20:18
 */
const VueLocalStorage = {
    install(Vue) {
        Vue.prototype.$localStorage = {
            set(key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            },
            get(key) {
                return JSON.parse(localStorage.getItem(key));
            },
            remove(key) {
                localStorage.removeItem(key);
            }
        };
    }
};

export default VueLocalStorage;
