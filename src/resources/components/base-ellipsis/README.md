# BaseEllipsis

## 介绍

展示空间不足时，隐去部分内容并用“...”替代。

## 代码演示

### 基础用法

```html
<base-ellipsis :content="msg"></base-ellipsis>
```

```js
import BaseEllipsis from '@/resources/components/base-ellipsis';

export default {
    props: {},
    data() {
        return {
            msg: '在春天的午后，阳光洒在窗台上，微风拂过，带来一丝清爽。窗外，花开成片，芳香扑鼻，仿佛一幅幅绚丽的画卷展开在眼前。这个时刻，让人感受到生活的美好与宁静，也让心灵在宁静中得到一种放松与舒展。'
        };
    },
    components: {
        BaseEllipsis
    }
};
```

### HTML 字符串

```html
<base-ellipsis :content="msg"></base-ellipsis>
```

```js
import BaseEllipsis from '@/resources/components/base-ellipsis';

export default {
    props: {},
    data() {
        return {
            msg: `<p>春雪轻轻飘落，如同白色的花瓣，在初春的园林中飞舞。这是一场意想不到的降临，让人感受到一种清新的气息，也带来了一丝别样的凉爽。</p><p><br></p><p>园中的树木被雪粉妆，如同仙境一般，它们在雪花的映衬下，焕发出勃勃生机。春雪的到来，不仅为大地披上了一层银装，也让人们的心灵得到了一种净化和滋养。</p><p><br></p><p>远处，劳动者们在田间劳作，他们顶着春雪，依旧坚毅地耕耘着土地。他们的汗水与春雪交织在一起，成就了一幅幅勤劳美好的画面。正是有了他们的辛勤付出，才有了丰收的希望，才有了生命的灿烂。</p><p><br></p><p><span style="color: rgb(225, 60, 57);">春雪，</span>在这园囿之中，<span style="color: rgb(225, 60, 57);">不仅是自然的馈赠，更是一种精神的净化。</span>它让人们感受到生命的美好与坚韧，感受到劳动的价值与意义。</p><p><br></p><p>在这春雪覆盖的园中，唯有劳动与希望交织，才能开启一条充满生机与活力的道路。愿春雪洗净尘埃，让我们的心怀充满希望，努力前行，迎接春天的到来。</p>`
        };
    },
    components: {
        BaseEllipsis
    }
};
```

## API

### Props

| 参数          | 说明                                          | 类型                | 默认值   |
| ------------- | --------------------------------------------- | ------------------- | -------- |
| content       | 文本内容                                      | string\|HTML 字符串 | -        |
| direction     | 省略位置，可选值 `start` \| `end` \| `middle` | string              | `end`    |
| rows          | 展示几行                                      | number              | `1`      |
| expand-text   | 展开操作的文案                                | string              | `'展开'` |
| collapse-text | 收起操作的文案                                | string              | `'收起'` |
| symbol        | 省略的符号                                    | string              | `...`    |
| line-height   | 容器的行高                                    | string \| number    | `20`     |

### Events

| 事件名 | 说明               | 回调参数               |
| ------ | ------------------ | ---------------------- |
| click  | 文本点击时触发     | -                      |
| change | 点击展开收起时触发 | `expand` 或 `collapse` |
