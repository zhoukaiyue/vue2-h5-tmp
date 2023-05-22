## 一个操作 剪贴板 的 Vue 指令

> Vue-Clipboard2 是一个用于在 Vue.js 应用程序中实现剪贴板功能的库。它是基于 Vue.js 和 Clipboard.js 构建的，提供了一种简单的方式来复制文本到剪贴板或从剪贴板粘贴文本。

### 使用方法

#### 以指令的方式使用

```vue
<div id="app"></div>

<template id="t">
    <div class="container">
        <input type="text" v-model="message" />
        <button type="button" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">
            Copy!
        </button>
    </div>
</template>

<script>
new Vue({
    el: '#app',
    template: '#t',
    data: function () {
        return {
            message: 'Copy These Text'
        };
    },
    methods: {
        onCopy: function (e) {
            alert('You just copied: ' + e.text);
        },
        onError: function (e) {
            alert('Failed to copy texts');
        }
    }
});
</script>
```

#### 以函数的方式使用

```vue
<div id="app"></div>

<template id="t">
    <div class="container">
        <input type="text" v-model="message" />
        <button type="button" @click="doCopy">Copy!</button>
    </div>
</template>

<script>
new Vue({
    el: '#app',
    template: '#t',
    data: function () {
        return {
            message: 'Copy These Text'
        };
    },
    methods: {
        doCopy: function () {
            this.$copyText(this.message).then(
                function (e) {
                    alert('Copied');
                    console.log(e);
                },
                function (e) {
                    alert('Can not copy');
                    console.log(e);
                }
            );
        }
    }
});
</script>
```
