<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-04-13 09:40:15
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 22:47:44
-->
<template>
    <frame-view class="dev-layout">
        <blockquote>
            基础布局组件是用来布局的，集成了tabbar（底部导航栏，用于在不同页面之间进行切换。）功能于一体。
        </blockquote>
        <p><br /></p>
        <p><br /></p>
        <strong style="text-align: start">何时使用</strong>
        <ul>
            <li style="text-align: start">&nbsp;&nbsp;&nbsp;- 常用于路由组件的根标签使用。</li>
        </ul>
        <p style="text-align: start"><br /></p>
        <strong style="text-align: start">代码演示</strong>
        <p>
            <span style="color: rgb(171, 178, 191)">&lt;</span>
            <span style="color: rgb(224, 108, 117)">frame-view</span>
            <span style="color: rgb(171, 178, 191)">&nbsp;</span>
            <span style="color: rgb(209, 154, 102)">class</span>
            <span style="color: rgb(171, 178, 191)">=</span>
            <span style="color: rgb(152, 195, 121)">"dev-layout"</span>
            <span style="color: rgb(171, 178, 191)">&gt;</span>
        </p>
        <p><span style="color: rgb(171, 178, 191)">&nbsp; &nbsp;xxx</span></p>
        <p>
            <span style="color: rgb(171, 178, 191)">&lt;/</span>
            <span style="color: rgb(224, 108, 117)">frame-view&gt;</span>
        </p>
        <p><br /></p>
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
        blockquote {
            margin: 0;
        }
    }
}
</style>
