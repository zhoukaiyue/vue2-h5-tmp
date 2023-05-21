# 一个用于生成和显示 QR 码的基础组件

## props

|  属性  |        说明        |  类型  | 默认值 |
| :----: | :----------------: | :----: | :----: |
| value  | 生成的 QR 码的内容 | String |   -    |
|  size  |        尺寸        | Number |  128   |
| margin |      空白边界      | Number |   2    |

## 使用方法

```vue
<template>
    <div>
        <base-qrcode value="https://example.com" :size="200"></base-qrcode>
    </div>
</template>

<script>
import BaseQrcode from '@/resources/components/base-qrcode';

export default {
    components: {
        [BaseQrcode.name]: BaseQrcode
    }
};
</script>
```
