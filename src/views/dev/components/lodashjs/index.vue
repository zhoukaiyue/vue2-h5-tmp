<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-10 15:45:18
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 15:50:03
-->
<template>
    <frame-view class="dev-lodashjs">
        项目中集成了 Lodash
        <a href="https://www.lodashjs.com/">【官方文档】</a>
        工具库。
        <br />
        <br />
        <strong>强烈推荐按需引入方式使用</strong>
        <br />
        <br />
        例子：
        <br />
        <div>引入：import isArray from "lodash/isArray";</div>
        <div>使用：isArray([111])</div>
    </frame-view>
</template>

<script>
import isArray from 'lodash/isArray';
export default {
    props: {},
    data() {
        return {};
    },
    computed: {},
    created() {
        console.log(isArray([111]));
    },
    mounted() {},
    watch: {},
    methods: {},
    components: {}
};
</script>

<style scoped lang="scss">
.dev-lodashjs {
    :deep(.frame-view-content) {
        padding: 40px 10px;
        font-size: 36px;
        line-height: 48px;
    }
}
</style>
