<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2024-01-19 16:16:55
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-03-26 11:30:21
-->
<!--
 * @Descripttion: 
 * @version: 1.3.1 
 * @Author: zhoukai
 * @Date: 2022-08-10 16:26:19
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-03-26 11:28:23
-->
<template>
    <frame-view class="dev-eventbus">
        <strong>跨级组件使用EventBus通信案例：</strong>
        <button style="margin: 20px 0" @click="clickEvt">传值给孙组件</button>
        <children></children>
    </frame-view>
</template>

<script>
import { eventBus } from '@/utils/tools';
import children from './components/children.vue';

export default {
    props: {},
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        clickEvt() {
            //触发
            eventBus.$emit('change', '你好！');
        }
    },
    components: {
        children
    }
};
</script>

<style scoped lang="scss">
.dev-eventbus {
    :deep(.frame-view-content) {
        color: '#333';
        padding: 40px;
        font-size: 32px;
    }
}
</style>
