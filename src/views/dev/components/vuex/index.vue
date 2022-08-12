<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-12 09:51:24
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-12 10:43:56
-->
<template>
    <frame-view class="dev-vuex-demo">
        <input :value="count" :readOnly="true" />
        <br />
        <button aria-label="Increment value" @click="add">增加</button>
        <button aria-label="Decrement value" @click="reduce">减少</button>
        <button aria-label="Decrement value" @click="decrease">步进</button>
    </frame-view>
</template>

<script>
export default {
    props: {},
    data() {
        return {};
    },
    computed: {
        count() {
            return this.$store.state.dev.count;
        }
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {
        add() {
            this.$store.commit('dev/add');
        },
        reduce() {
            //方式一：直接提交commit
            // this.$store.commit('dev/reduce');
            //方式一：提交dispatch
            this.$store.dispatch('dev/reduce');
        },
        decrease() {
            this.$store.commit('dev/decrease', 10);
        }
    },
    components: {}
};
</script>

<style scoped lang="scss">
.dev-vuex-demo {
    :deep(.frame-view-content) {
        background-color: #fff;
        color: '#333';
        font-size: 32px;
        padding: 40px;
    }
}
</style>
