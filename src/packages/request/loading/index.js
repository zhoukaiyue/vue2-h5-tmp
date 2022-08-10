/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 10:53:58
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 17:28:00
 */
import { Toast } from 'vant';

// 计数
let COUNT = 0;

const laoding = {
    show() {
        if (COUNT === 0) {
            Toast.loading({
                duration: 0,
                loadingType: 'spinner',
                message: '加载中…'
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
