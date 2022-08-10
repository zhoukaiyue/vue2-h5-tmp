/*
 * @Descripttion: eventBus 事件总线
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-10 11:23:04
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 15:59:49
 */

/**
 *使用方法：
 *
 * 第一步（引入）：
 * import eventBus from '@/utils/tools/eventBus';
 *
 * 触发事件
 * eventBus.$emit('eventName', param1,param2,...)
 *
 * 监听事件
 * eventBus.$on('eventName', (param1,param2,...)=>{code})
 *
 * 移除事件
 * 在开发的过程中，我们要及时移除不使用的 eventBus ，原因：
 * ① 为了避免在监听时，事件被反复触发
 * ② 由于热更新，事件可能会被多次绑定监听，这时也需要移除事件监听
 * ③ 未及时移除的 eventBus 会导致内存泄漏
 * *建议在每次监听前先移除事件
 * eventBus.$off('eventName');
 *
 */

import Vue from 'vue';
const EventEmitter = new Vue();
export default EventEmitter; // 导出
