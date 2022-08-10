<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-10 16:39:34
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 16:40:49
-->
<template>
    <frame-view class="dev-tabbar" :showTabbar="true"> tabbar 底部标签栏 </frame-view>
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
.dev-tabbar {
    :deep(.frame-view-content) {
        font-size: 72px;
    }
}
</style>
