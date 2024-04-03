<!--
 * @Descripttion: 
 * @version: 1.3.1 
 * @Author: zhoukai
 * @Date: 2022-08-09 09:53:55
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-04-03 16:43:36
-->
<template>
    <frame-view class="dev">
        <div>
            <van-tag>vue2-h5-tmp</van-tag>
            是基于 Vue2.7 + JavaScript + Webpack5 + Vuex + Vant2 + sass + Rem 布局适配 + axios（封装）+ Eslint +
            Prettier 等流行技术栈构建移动端模板脚手架，开箱即用。
        </div>
        <div style="padding: 12px 0">下面是一些基础组件的使用demo，可以点进去试一试</div>
        <div class="nav">
            <div class="nav__block" v-for="(item, index) in findRouterList" :key="index" @click="goPage(item)">
                <span>{{ item.label }}</span>
                <van-icon name="arrow" size="16" color="#B6C3D2" />
            </div>
        </div>
    </frame-view>
</template>

<script>
import { Tag, Icon } from 'vant';
export default {
    props: {},
    data() {
        return {
            findRouterList: [
                {
                    path: '/dev/layOut',
                    label: 'layOut 布局组件的使用'
                },
                {
                    path: '/dev/tabbar',
                    label: 'tabbar 底部标签栏'
                },
                {
                    path: '/dev/vuex',
                    label: 'vuex状态管理的使用'
                },
                {
                    path: '/dev/eventBus',
                    label: 'EventBus事件总线的使用'
                },
                {
                    path: '/dev/tool',
                    label: '脚手架已经集成的工具库'
                },
                {
                    path: '/dev/basic-components',
                    label: '内置组件的使用'
                }
            ]
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        goPage({ path }) {
            this.$router.push(path);
        }
    },
    components: {
        [Tag.name]: Tag,
        [Icon.name]: Icon
    }
};
</script>

<style scoped lang="scss">
.dev {
    :deep(.frame-view-content) {
        font-size: 30px;
        background-color: #fff;
        padding: 46px 20px 20px;
        .nav {
            margin-top: 20px;
            .nav__block {
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                margin: 0 0 24px;
                padding: 0 40px;
                color: #323233;
                font-weight: bold;
                font-size: 28px;
                height: 80px;
                line-height: 80px;
                background: #f7f8fa;
                border-radius: 99px;
                transition: background 0.3s;
            }
        }
    }
}
</style>
