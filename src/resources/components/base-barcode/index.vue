<template>
    <canvas ref="barcode"></canvas>
</template>

<script>
import JsBarcode from 'jsbarcode';

export default {
    name: 'BaseBarcode',
    props: {
        value: {
            type: String,
            required: true
        },
        format: {
            type: String,
            default: 'CODE128'
        },
        width: {
            type: Number,
            default: 2
        },
        height: {
            type: Number,
            default: 100
        }
    },
    mounted() {
        this.generateBarcode();
    },
    watch: {
        value() {
            this.generateBarcode();
        }
    },
    methods: {
        generateBarcode() {
            const { value, format, width, height } = this;
            JsBarcode(this.$refs.barcode, value, {
                format,
                width,
                height
            });
        }
    }
};
</script>

<style scoped lang="scss">
/* 样式 */
</style>
