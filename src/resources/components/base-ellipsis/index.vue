<template>
    <!-- 用于渲染富文本内容的子组件 -->
    <RichTextEllipsis v-if="isRichText" :content="content" v-bind="$attrs" v-on="$listeners" />
    <!-- 用于渲染普通字符串内容的子组件 -->
    <PlainTextEllipsis v-else :content="content" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
// 导入子组件
import RichTextEllipsis from './components/RichTextEllipsis.vue';
import PlainTextEllipsis from './components/PlainTextEllipsis.vue';
export default {
    props: {
        content: String
    },
    computed: {
        /**
         * 判断是否为富文本内容
         */
        isRichText() {
            return this.content && this.content.includes('<');
        }
    },
    components: {
        RichTextEllipsis,
        PlainTextEllipsis
    }
};
</script>
<style scoped lang="scss"></style>
