<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-08 16:11:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-09-09 18:10:54
-->
<template>
    <van-tabbar route :fixed="true" class="frame-view-tabbar">
        <van-tabbar-item :to="item.router" :icon="item.icon" v-for="(item, index) in tabs" :key="index">
            {{ item.label }}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    props: {},
    data() {
        return {
            active: 'home',
            tabs: [
                {
                    label: '首页',
                    icon: 'wap-home-o',
                    router: {
                        path: '/index'
                    }
                },
                {
                    label: '开发者中心',
                    icon: 'question-o',
                    router: {
                        path: '/dev'
                    }
                }
            ]
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    }
};
</script>
<style lang="sass" scoped></style>
