/*
 * @Descripttion:base router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 16:49:30
 */

import err404 from '@/views/err404';
const routes = [
    {
        path: '*',
        component: err404,
        meta: {
            title: '404'
        }
    }
];
export default routes;
