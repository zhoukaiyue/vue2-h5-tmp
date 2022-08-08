/*
 * @Descripttion:index router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 14:34:12
 */

const routes = [
    {
        path: '/',
        redirect: '/index' // 自定义属性，重定向到目标页面 router.path
    },
    {
        path: '/index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/index'),
        exact: true
    }
];
export default routes;
