<template>
    <frame-view class="dev-basic-components">
        <van-notice-bar left-icon="volume-o" text="脚手架内置的基础组件" />
        <div class="nav">
            <div class="nav__block" v-for="(item, index) in findRouterList" :key="index" @click="goPage(item)">
                <span>{{ item.label }}</span>
                <van-icon name="arrow" size="16" color="#B6C3D2" />
            </div>
        </div>
    </frame-view>
</template>

<script>
import { Tag, Icon, NoticeBar } from 'vant';
export default {
    props: {},
    data() {
        return {
            findRouterList: [
                {
                    path: '/dev/basic-components/ellipsis',
                    label: 'Ellipsis 文本省略'
                }
            ]
        };
    },
    methods: {
        goPage({ path }) {
            this.$router.push(path);
        }
    },
    components: {
        [Tag.name]: Tag,
        [Icon.name]: Icon,
        [NoticeBar.name]: NoticeBar
    }
};
</script>

<style scoped lang="scss">
.dev-basic-components {
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
