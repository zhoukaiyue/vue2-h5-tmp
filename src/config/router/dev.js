/*
 * @Descripttion:dev router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-09 09:55:00
 */

const routes = [
    {
        path: '/dev',
        component: () => import(/* webpackChunkName: "dev" */ '@/views/dev'),
        meta: {
            title: '开发者中心'
        }
    }
];
export default routes;
