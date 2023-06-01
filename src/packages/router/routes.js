/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 10:53:58
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 16:46:13
 */

const modulesFiles = require.context('@/config/router', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

const routers = [];

for (const key in modules) {
    // if (key === 'dev' && ['development'].includes(process.env.NODE_ENV)) {
    //     routers.push(...modules[key]);
    // }
    // if (key !== 'dev') {
    //     routers.push(...modules[key]);
    // }

    routers.push(...modules[key]);
}
// 设置通配路由
routers.push({
    path: '*',
    redirect: '/err404'
});

export default routers;
