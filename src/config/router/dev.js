/*
 * @Descripttion:dev router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 16:22:20
 */

const routes = [
    {
        path: '/dev',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev'),
        meta: {
            title: '开发者中心'
        }
    },
    {
        path: '/dev/layOut',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/layOut'),
        meta: {
            title: 'layOut 布局组件'
        }
    },
    {
        path: '/dev/eventBus',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/eventBus'),
        meta: {
            title: 'EventBus事件总线的使用'
        }
    },
    {
        path: '/dev/tabbar',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/tabbar'),
        meta: {
            title: 'tabbar 底部标签栏'
        }
    },
    {
        path: '/dev/list',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/list'),
        meta: {
            title: '下拉刷新，滚动加载列表',
            keepAlive: true
        }
    },
    {
        path: '/dev/vuex',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/vuex'),
        meta: {
            title: 'vuex状态管理的使用'
        }
    },
    {
        path: '/dev/tool',
        meta: {
            title: '脚手架已经集成的工具库'
        },
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/tool/index.vue')
    },
    {
        path: '/dev/tool/copy',
        meta: {
            title: 'JavaScript | 文本复制工具'
        },
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/tool/components/copy.vue')
    },
    {
        path: '/dev/tool/lodashjs',
        meta: {
            title: 'JavaScript | lodashjs库的使用'
        },
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/tool/components/lodashjs.vue')
    }
];
export default routes;
