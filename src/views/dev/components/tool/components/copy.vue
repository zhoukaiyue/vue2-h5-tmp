<template>
    <frame-view class="dev-tool-copy">
        <p>基础用法</p>
        <p><br /></p>
        <p><br /></p>
        <p>以函数的方式调用：</p>
        <p><br /></p>
        <van-button size="small" plain type="primary" @click="doCopy">复制到剪贴板</van-button>
        <p><br /></p>
        <p><br /></p>
        <p>以自定义指令的方式调用：</p>
        <p><br /></p>
        <van-button
            size="small"
            plain
            type="primary"
            v-clipboard:copy="message"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
        >
            复制到剪贴板
        </van-button>
    </frame-view>
</template>

<script>
import { Button, Toast } from 'vant';
export default {
    data() {
        return {
            message: 'Copy These Text'
        };
    },
    methods: {
        doCopy: function () {
            this.$copyText(this.message).then(
                function () {
                    Toast.success('Copied');
                },
                function () {
                    Toast.fail('Can not copy');
                }
            );
        },
        onCopy: function () {
            Toast.success('Copied');
        },
        onError: function () {
            Toast.fail('Can not copy');
        }
    },
    components: {
        [Button.name]: Button
    }
};
</script>

<style scoped lang="scss">
.dev-tool-copy {
    :deep(.frame-view-content) {
        background-color: #ffffff;
        padding: 20px;
        font-size: 30px;
    }
}
</style>
