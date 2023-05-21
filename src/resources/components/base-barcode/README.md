# 一个用于生成和显示 条形 码的基础组件

## props

<!-- [All Options](https://github.com/lindell/JsBarcode/wiki/Options) -->

|  属性  |      说明       |  类型  |  默认值   |
| :----: | :-------------: | :----: | :-------: |
| value  | 生成的 码的内容 | String |     -     |
| format |   条形码类型    | String | 'CODE128' |
| width  |  单个条的宽度   | Number |     2     |
| height |  条形码的高度   | Number |    100    |

## 使用方法

```vue
<template>
    <div>
        <base-barcode :value="barcodeValue" format="CODE128" :width="2" :height="100" />
    </div>
</template>

<script>
import BaseBarcode from '@/resources/components/base-barcode/index.vue';

export default {
    data() {
        return {
            barcodeValue: '1234567890'
        };
    },
    components: {
        [BaseBarcode.name]: BaseBarcode
    }
};
</script>
```
