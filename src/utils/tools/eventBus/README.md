### _使用方法：_

```javascript
//myComponent.vue 【触发】
import eventBus from '@/utils/tools/eventBus';
export default {
    methods: {
        clickEvt() {
            //触发
            eventBus.$emit('change', '你好！');
        }
    }
};
```

```javascript
//myComponent.vue 【监听】
import eventBus from '@/utils/tools/eventBus';
export default {
    created() {
        //移除事件
        eventBus.$off('change');
        //监听事件
        eventBus.$on('change', (msg) => {
            this.msg = msg;
        });
    }
};
```

> 移除事件
>
> 在开发的过程中，我们要及时移除不使用的 eventBus 。
>
> 原因：
>
> ① 为了避免在监听时，事件被反复触发
>
> ② 由于热更新，事件可能会被多次绑定监听，这时也需要移除事件监听
>
> ③ 未及时移除的 eventBus 会导致内存泄漏
>
> _建议在每次监听前先移除事件 eventBus.$off('eventName')_;
