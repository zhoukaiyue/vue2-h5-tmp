/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 10:53:58
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 15:53:47
 */
import { Toast } from 'antd-mobile';

// 计数
let COUNT = 0;

const laoding = {
    show() {
        if (COUNT === 0) {
            Toast.show({
                duration: 0,
                icon: 'loading',
                content: '加载中…'
            });
        }
        COUNT++;
    },
    hide() {
        if (COUNT <= 0) return;
        COUNT--;
        if (COUNT === 0) Toast.clear();
    }
};

export default laoding;
