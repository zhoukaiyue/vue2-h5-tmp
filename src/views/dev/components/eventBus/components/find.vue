<!--
 * @Descripttion: 
 * @version: 1.3.1 
 * @Author: zhoukai
 * @Date: 2022-08-10 16:27:04
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 16:38:01
-->
<template>
    <div class="dev-eventbus-find">
        我是孙组件
        <br />
        <span>这是我接收到祖父的传值：{{ msg }}</span>
    </div>
</template>

<script>
import { eventBus } from '@/utils/tools';
export default {
    props: {},
    data() {
        return {
            msg: ''
        };
    },
    computed: {},
    created() {
        //移除事件
        eventBus.$off('change');
        //监听事件
        eventBus.$on('change', (msg) => {
            this.msg = msg;
            //业务代码...
        });
    },
    mounted() {},
    watch: {},
    methods: {},
    components: {}
};
</script>

<style scoped lang="scss"></style>
