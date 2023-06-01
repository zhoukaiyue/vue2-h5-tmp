<template>
    <frame-view class="dev-lodashjs">
        <strong>*强烈推荐按需引入方式使用</strong>
        <p><br /></p>
        <div>
            <p>
                <span style="color: rgb(171, 178, 191)">&lt;</span>
                <span style="color: rgb(224, 108, 117)">script</span>
                <span style="color: rgb(171, 178, 191)">&gt;</span>
            </p>
            <p>
                <span style="color: rgb(198, 120, 221)">&nbsp; &nbsp;import&nbsp;&nbsp;</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(224, 108, 117)">isArray</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(198, 120, 221)">&nbsp;from&nbsp;</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(152, 195, 121)">'lodash/isArray'</span>
                <span style="color: rgb(171, 178, 191)">;</span>
            </p>
            <p>
                <span style="color: rgb(198, 120, 221)">&nbsp; &nbsp;export</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(198, 120, 221)">&nbsp;&nbsp;default&nbsp;</span>
                <span style="color: rgb(171, 178, 191)">{</span>
            </p>
            <p>
                <span style="color: rgb(171, 178, 191)">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                <span style="color: rgb(97, 175, 239)">data&nbsp;</span>
                <span style="color: rgb(171, 178, 191)">() {</span>
            </p>
            <p>
                <span style="color: rgb(171, 178, 191)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                <span style="color: rgb(198, 120, 221)">return&nbsp;</span>
                <span style="color: rgb(171, 178, 191)">{};</span>
            </p>
            <p><span style="color: rgb(171, 178, 191)">&nbsp; &nbsp; &nbsp; &nbsp;},</span></p>
            <p>
                <span style="color: rgb(171, 178, 191)">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                <span style="color: rgb(97, 175, 239)">created&nbsp;</span>
                <span style="color: rgb(171, 178, 191)">() {</span>
            </p>
            <p>
                <span style="color: rgb(171, 178, 191)">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                <span style="color: rgb(97, 175, 239)">isArray</span>
                <span style="color: rgb(171, 178, 191)">([</span>
                <span style="color: rgb(209, 154, 102)">111</span>
                <span style="color: rgb(171, 178, 191)">])</span>
                <span style="color: rgb(198, 120, 221)">&nbsp;?&nbsp;</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(152, 195, 121)">'是数组'</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(198, 120, 221)">&nbsp;:&nbsp;</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(152, 195, 121)">'不是数组'</span>
                <span style="color: rgb(171, 178, 191)">;</span>
            </p>
            <p><span style="color: rgb(171, 178, 191)">&nbsp; &nbsp; &nbsp; &nbsp;}</span></p>
            <p><span style="color: rgb(171, 178, 191)">&nbsp; &nbsp;};</span></p>
            <p>
                <span style="color: rgb(171, 178, 191)">&lt;/</span>
                <span style="color: rgb(224, 108, 117)">script</span>
                <span style="color: rgb(171, 178, 191)">&gt;</span>
            </p>
        </div>
    </frame-view>
</template>
<script>
import isArray from 'lodash/isArray';
export default {
    data() {
        return {};
    },
    created() {
        console.log(isArray([111]) ? '是数组' : '不是数组');
    }
};
</script>
<style scoped lang="scss">
.dev-lodashjs {
    :deep(.frame-view-content) {
        padding: 20px;
        font-size: 36px;
        line-height: 48px;
    }
}
</style>
