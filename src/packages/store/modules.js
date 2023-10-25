/*
 * @Descripttion:
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-08-12 10:06:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 10:28:59
 */
import assign from 'lodash/assign';
const modulesFiles = require.context('@/config/store', true, /\.js$/);
export const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath);
    modules = assign(modules, value);
    return modules;
}, {});
