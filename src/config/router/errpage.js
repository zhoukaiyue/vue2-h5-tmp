/*
 * @Descripttion: 错误页路由配置
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2023-06-01 09:25:35
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 09:26:37
 */
const routes = [
    {
        path: '/err404',
        component: () => import(/* webpackChunkName: "errpage" */ '@/views/err404'),
        meta: {
            title: 'Error404'
        }
    }
];
export default routes;
