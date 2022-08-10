<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-10 15:26:29
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 15:34:55
-->
<template>
    <frame-view class="dev-layout">
        布局组件的:
        <br />
        使用方法请参考 layOut 文件下面的README.md文件。
    </frame-view>
</template>

<script>
export default {
    props: {},
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {}
};
</script>

<style scoped lang="scss">
.dev-layout {
    :deep(.frame-view-content) {
        color: '#333';
        padding: 40px;
        font-size: 32px;
    }
}
</style>
