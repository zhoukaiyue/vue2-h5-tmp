/*
 * @Descripttion:
 * @version: 1.3.1
 * @Author: zhoukai
 * @Date: 2022-08-12 16:10:17
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-16 16:09:11
 */

/** TODO:由于 vconsole 包比较大，仅在test环境下开启，生产环境请谨慎开启。*/
import fetch from 'isomorphic-fetch';
import Proxy from 'es6-proxy-polyfill';
import VConsole from 'vconsole';
/** 兼容ie浏览器vconsole插件 */
if (!window.fetch) {
    window.fetch = fetch;
}
if (!window.Proxy) {
    window.Proxy = Proxy;
}

/** 开启vconsole */
if (process.env.VUE_APP_MODE === 'test') {
    // 配置参考https://github.com/Tencent/vConsole/blob/HEAD/doc/tutorial.md
    // or init with options
    // eslint-disable-next-line no-unused-vars
    new VConsole();
}
