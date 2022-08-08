<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-08 15:56:55
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 16:35:23
-->
<template>
    <div :class="[showTabbar ? 'h-tabbar' : '', 'frame-view']">
        <!-- 内容 -->
        <div class="frame-view-content">
            <slot name="default"></slot>
        </div>
        <!-- tabbar -->
        <tabbar v-if="showTabbar" class="layout-tabbar"></tabbar>
    </div>
</template>

<script>
import Tabbar from '../tabbar';
export default {
    props: {
        showTabbar: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        Tabbar
    }
};
</script>

<style scoped lang="scss">
.frame-view {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
    &-content {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .layout-tabbar {
        box-sizing: content-box;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
        width: 100vw;
        height: 100px;
        font-size: 26px;
    }
    &.h-tabbar {
        .frame-view-content {
            height: calc(100% - 100px);
        }
    }
}
</style>
