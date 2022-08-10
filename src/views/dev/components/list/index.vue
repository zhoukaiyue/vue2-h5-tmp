<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-10 16:46:29
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 17:48:27
-->
<template>
    <frame-view class="dev-list">
        <base-list :req="req" :size="9" rowKey="pageList"></base-list>
    </frame-view>
</template>

<script>
import BaseList from '@/resources/components/base-list';
import { getList } from '@/config/apis/dev.js';
export default {
    props: {},
    data() {
        return {
            req: {
                fn: getList,
                params: {}
            }
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        BaseList
    }
};
</script>

<style scoped lang="scss">
.dev-list {
    :deep(.frame-view-content) {
        .base-list {
            min-height: 100vh;
        }
    }
}
</style>
