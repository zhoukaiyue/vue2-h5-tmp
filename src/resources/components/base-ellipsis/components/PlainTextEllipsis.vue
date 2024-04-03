<!-- 用于渲染普通字符串内容的子组件 -->
<template>
    <div ref="PlainTextEllipsis" class="plain-text-ellipsis" @click="handleClick">
        <div v-if="!exceeded">{{ content }}</div>
        <div v-if="exceeded && !expanded">
            {{ ellipsis && ellipsis.leading }}
            <span v-if="expandText" class="plain-text-ellipsis__text" @click.stop="clickHandle(1)">
                {{ expandText }}
            </span>
            {{ ellipsis && ellipsis.tailing }}
        </div>
        <div v-if="exceeded && expanded">
            {{ content }}
            <span v-if="expandText" class="plain-text-ellipsis__text" @click.stop="clickHandle(2)">
                {{ collapseText }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: ''
        },
        direction: {
            type: String,
            default: 'end'
        },
        rows: {
            type: [Number, String],
            default: 1
        },
        expandText: {
            type: String,
            default: '展开'
        },
        collapseText: {
            type: String,
            default: '收起'
        },
        symbol: {
            type: String,
            default: '...'
        },
        lineHeight: {
            type: [Number, String],
            default: '20'
        }
    },

    data() {
        return {
            container: null,
            maxHeight: 0,
            ellipsis: null,
            exceeded: false,
            expanded: false
        };
    },

    mounted() {
        this.createContainer();
    },

    watch: {
        content(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.createContainer();
            }
        }
    },

    methods: {
        createContainer() {
            if (!this.$refs.PlainTextEllipsis) return;
            const originStyle = window.getComputedStyle(this.$refs.PlainTextEllipsis);
            this.container = document.createElement('div');
            const styleNames = Array.prototype.slice.apply(originStyle);
            styleNames.forEach((name) => {
                this.container.style.setProperty(name, originStyle.getPropertyValue(name));
            });
            this.container.style.position = 'fixed';
            this.container.style.left = '999999px';
            this.container.style.top = '999999px';
            this.container.style.zIndex = '-1000';
            this.container.style.height = 'auto';
            this.container.style.minHeight = 'auto';
            this.container.style.maxHeight = 'auto';
            this.container.style.textOverflow = 'clip';
            this.container.style.whiteSpace = 'normal';
            this.container.style.webkitLineClamp = 'unset';
            this.container.style.display = 'block';
            const lineHeight = this.pxToNumber(
                originStyle.lineHeight === 'normal' ? this.lineHeight : originStyle.lineHeight
            );
            this.maxHeight = Math.floor(
                lineHeight * (Number(this.rows) + 0.5) +
                    this.pxToNumber(originStyle.paddingTop) +
                    this.pxToNumber(originStyle.paddingBottom)
            );

            this.container.innerText = this.content;
            document.body.appendChild(this.container);
            this.calcEllipse();
        },

        calcEllipse() {
            if (this.container.offsetHeight <= this.maxHeight) {
                this.exceeded = false;
                document.body.removeChild(this.container);
            } else {
                this.exceeded = true;
                const end = this.content.length;
                const middle = Math.floor((0 + end) / 2);
                const ellipsised =
                    this.direction === 'middle' ? this.tailorMiddle([0, middle], [middle, end]) : this.tailor(0, end);
                this.ellipsis = ellipsised;
                document.body.removeChild(this.container);
            }
        },

        tailor(left, right) {
            const actionText = this.expanded ? this.collapseText : this.expandText;
            const end = this.content.length;
            if (right - left <= 1) {
                if (this.direction === 'end') {
                    return {
                        leading: this.content.slice(0, left) + this.symbol
                    };
                } else {
                    return {
                        tailing: this.symbol + this.content.slice(right, end)
                    };
                }
            }
            const middle = Math.round((left + right) / 2);
            if (this.direction === 'end') {
                this.container.innerText = this.content.slice(0, middle) + this.symbol + actionText;
            } else {
                this.container.innerText = actionText + this.symbol + this.content.slice(middle, end);
            }

            if (this.container.offsetHeight <= this.maxHeight) {
                if (this.direction === 'end') {
                    return this.tailor(middle, right);
                } else {
                    return this.tailor(left, middle);
                }
            } else {
                if (this.direction === 'end') {
                    return this.tailor(left, middle);
                } else {
                    return this.tailor(middle, right);
                }
            }
        },

        tailorMiddle(leftPart, rightPart) {
            const actionText = this.expanded ? this.collapseText : this.expandText;
            const end = this.content.length;
            if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
                return {
                    leading: this.content.slice(0, leftPart[0]) + this.symbol,
                    tailing: this.symbol + this.content.slice(rightPart[1], end)
                };
            }
            const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
            const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);

            this.container.innerText =
                this.content.slice(0, leftPartMiddle) +
                this.symbol +
                actionText +
                this.symbol +
                this.content.slice(rightPartMiddle, end);

            if (this.container.offsetHeight <= this.maxHeight) {
                return this.tailorMiddle([leftPartMiddle, leftPart[1]], [rightPart[0], rightPartMiddle]);
            } else {
                return this.tailorMiddle([leftPart[0], leftPartMiddle], [rightPartMiddle, rightPart[1]]);
            }
        },

        pxToNumber(value) {
            if (!value) return 0;
            const match = value.match(/^\d*(\.\d*)?/);
            return match ? Number(match[0]) : 0;
        },

        clickHandle(type) {
            if (type == 1) {
                this.expanded = true;
                this.$emit('change', 'expand');
            } else {
                this.expanded = false;
                this.$emit('change', 'collapse');
            }
        },

        handleClick() {
            this.$emit('click');
        }
    }
};
</script>
<style scoped lang="scss">
.plain-text-ellipsis {
    .plain-text-ellipsis__text {
        cursor: pointer;
        color: #1890ff;
    }
}
</style>
