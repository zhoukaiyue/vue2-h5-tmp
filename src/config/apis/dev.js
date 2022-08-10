/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 17:02:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 17:03:21
 */
import { $post } from '@/packages/request';

export const getList = (params) => {
    return $post('/mock/14/demo/getList', params);
};
