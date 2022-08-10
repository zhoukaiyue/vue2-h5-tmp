<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-10 16:46:29
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 23:34:30
-->
<template>
    <frame-view class="dev-list">
        <base-list :req="req" :size="9" rowKey="pageList">
            <template #default="{ row }">
                <van-cell style="height: 80px" :title="row.estateName" value="" :label="row.propertyTitle" />
            </template>
        </base-list>
    </frame-view>
</template>

<script>
import { Cell } from 'vant';
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
        BaseList,
        [Cell.name]: Cell
    }
};
</script>

<style scoped lang="scss">
.dev-list {
    :deep(.frame-view-content) {
        background: #fff;
        .base-list {
            min-height: 100vh;
        }
    }
}
</style>
