/*
 * @Descripttion:
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-08-10 17:02:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-09 15:32:00
 */
import { $post } from '@/packages/request';

export const getList = (params) => {
    return $post('/mock/14/demo/getList', params, {
        enableCancelModel: true,
        enableRetryModel: true,
        enableErrorMessage: true,
        retryDelay: 4000, //当前请求重试间隔设置为4秒
        retryFrequency: 2 //当前请求重试次数（重试频率）2次
    });
};
