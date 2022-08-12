/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-12 09:51:01
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 11:08:57
 */

/**
 * dev 就是你的 模块名
 */
export const dev = {
    /**
     * 声明分模块的store时加上namespaced:true,使用模块中的mutations、getters、actions时候，要加上模块名(这里的模块名就是 dev)
     * 提交mutations：格式：store.commit(dev/模块中的mutations)
     * 提交dispatch：格式：store.dispatch(dev/模块中的dispatch)
     * 获取状态属性：格式：store.state.dev.模块属性
     */
    namespaced: true,
    /**
     * 状态树（注意必须是一个函数）
     */
    state: () => ({
        count: 0
    }),
    /**
     * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
     */
    mutations: {
        add(state) {
            // 变更状态
            state.count++;
        },
        reduce: (state) => {
            state.count--;
        },
        decrease: (state, params) => {
            state.count += params;
        }
    },
    /**
     * Action 类似于 mutation，不同在于：
     * - Action 提交的是 mutation，而不是直接变更状态。
     * - Action 可以包含任意异步操作。
     */
    actions: {
        reduce(context) {
            context.commit('reduce');
        }
    },
    getters: {}
};
