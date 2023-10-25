<!--
 * @Descripttion: 
 * @version: 1.3.1 
 * @Author: zhoukai
 * @Date: 2022-08-08 11:00:15
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-09 10:18:37
-->
<template>
    <frame-view class="index">
        <van-button type="info" :to="{ path: '/dev' }">开发者中心</van-button>
    </frame-view>
</template>

<script>
import { Button } from 'vant';
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
    components: {
        [Button.name]: Button
    }
};
</script>

<style scoped lang="scss">
.index {
    display: flex;
    font-size: 28px;
    :deep(.frame-view-content) {
        padding: 20px;
    }
}
</style>
