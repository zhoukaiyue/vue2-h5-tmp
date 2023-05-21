<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-05-21 16:14:53
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-05-21 22:56:05
-->
<template>
    <div class="base-qrcode">
        <canvas ref="qrcodeCanvas"></canvas>
    </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
    name: 'base-qrcode',
    props: {
        value: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 128
        },
        margin: {
            type: Number,
            default: 2
        }
    },
    mounted() {
        this.generateQRCode();
    },
    watch: {
        value() {
            this.generateQRCode();
        }
    },
    methods: {
        generateQRCode() {
            const canvas = this.$refs.qrcodeCanvas;
            canvas.width = this.size;
            canvas.height = this.size;
            QRCode.toCanvas(canvas, this.value, { width: this.size, margin: this.margin }, (error) => {
                if (error) {
                    console.error('Failed to generate QR code', error);
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
.base-qrcode {
    display: inline-block;
}
</style>
