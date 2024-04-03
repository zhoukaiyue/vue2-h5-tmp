/*
 * @Descripttion:dev router配置文件
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-04-03 16:49:06
 */

const routes = [
    {
        path: '/dev',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev'),
        meta: {
            title: '开发者中心',
            keepAlive: true
        }
    },
    {
        path: '/dev/layOut',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/layOut'),
        meta: {
            title: 'layOut 布局组件',
            keepAlive: true
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
    },
    {
        path: '/dev/basic-components',
        meta: {
            title: '内置组件的使用'
        },
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/components/basic-components/index.vue')
    },
    {
        path: '/dev/basic-components/ellipsis',
        meta: {
            title: '组件 | Ellipsis文本省略组件'
        },
        component: () =>
            import(/* webpackChunkName: "dev" */ '@/views/dev/components/basic-components/components/ellipsis')
    }
];
export default routes;
