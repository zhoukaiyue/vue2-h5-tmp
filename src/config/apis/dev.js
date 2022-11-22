/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 17:02:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-22 10:17:10
 */
import { $post } from '@/packages/request';

export const getList = (params) => {
    return $post('/mock/14/demo/getList', params, {
        retryDelay: 4000, //当前请求重试间隔设置为4秒
        retryFrequency: 2 //当前请求重试次数（重试频率）2次
    });
};
