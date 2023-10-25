/*
 * @Descripttion:一个操作 sessionStorage 的 Vue 插件
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2023-02-07 11:12:18
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-07 11:15:13
 */
const VueSessionStorage = {
    install(Vue) {
        Vue.prototype.$sessionStorage = {
            set(key, value) {
                sessionStorage.setItem(key, JSON.stringify(value));
            },
            get(key) {
                return JSON.parse(sessionStorage.getItem(key));
            },
            remove(key) {
                sessionStorage.removeItem(key);
            }
        };
    }
};

export default VueSessionStorage;
