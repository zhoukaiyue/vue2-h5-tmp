/*
 * @Descripttion:index router配置文件
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 16:49:45
 */

const routes = [
    {
        path: '/',
        redirect: '/index' // 自定义属性，重定向到目标页面 router.path
    },
    {
        path: '/index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/index'),
        meta: {
            title: '首页'
        }
    }
];
export default routes;
