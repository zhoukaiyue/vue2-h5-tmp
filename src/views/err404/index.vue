<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-08 16:44:32
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 16:48:26
-->
<template>
    <frame-view class="err404">
        <div class="bg"></div>
        <p class="text">抱歉，您访问的内容不存在～</p>
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
.err404 {
    ::v-deep .frame-view-content {
        background-color: #fff;
        .bg {
            width: 270px;
            height: 270px;
            background-image: url('~@/assets/img/base/empty.png');
            background-repeat: no-repeat;
            background-position: 100%;
            background-color: #fff;
            background-size: 100%;
            margin: 300px auto auto;
        }
        .text {
            font-size: 30px;
            color: #666;
            text-align: center;
            line-height: 48px;
            margin-top: 15px;
        }
    }
}
</style>
