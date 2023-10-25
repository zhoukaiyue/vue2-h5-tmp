<!--
 * @Descripttion: 
 * @version: 1.3.1 
 * @Author: zhoukai
 * @Date: 2022-08-10 16:26:44
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 16:33:42
-->
<template>
    <div class="dev-eventbus-children">
        <div style="margin: 20px 0">我是子组件</div>
        <find></find>
    </div>
</template>

<script>
import find from './find.vue';
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
    components: {
        find
    }
};
</script>

<style scoped lang="scss"></style>
