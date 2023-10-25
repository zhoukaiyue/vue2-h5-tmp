<!--
 * @Descripttion: 
 * @version: 1.3.1 
 * @Author: zhoukai
 * @Date: 2022-08-10 16:43:24
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-10 23:31:10
-->
<template>
    <van-pull-refresh
        class="base-list"
        v-model="refreshing"
        success-text="刷新成功"
        @refresh="getListMore('refresh')"
        :disabled="pullDisabled"
    >
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getListMore('load')">
            <div v-for="(item, index) in list" :key="index">
                <slot name="default" :row="item" :index="index"></slot>
            </div>
        </van-list>
    </van-pull-refresh>
</template>

<script>
import { PullRefresh, List } from 'vant';
import { sleep } from '@/utils/helper/sleep';
export default {
    props: {
        /**
         * 是否禁用下拉刷新，默认false
         */
        pullDisabled: {
            type: Boolean,
            default: false
        },
        /**
         * @param {Promise<any>} fn 构造的接口请求函数
         * @param {Object} params //除必须分页参数外的其他接口入参
         */
        req: {
            type: Object,
            required: true
        },
        /**
         * 每页显示数量,默认 10 条
         */
        size: {
            type: Number,
            default: 10
        },

        //数据存在的key，比如返回数据是{businessCode: '1', data: {pageList:[],...}, errorCode: '1', msg: '', success: true}，则传递pageList，如果还在pageList下面层级，则传递pageList.xxx.xx.xx，依此递归
        rowKey: String
    },
    data() {
        return {
            page: 1, //当前页
            list: [], //最终结果
            loading: false, //是否处于滚动加载状态，加载过程中不触发load事件
            finished: false, //是否滚动已加载完成，加载完成后不再触发load事件
            refreshing: false //是否处于下拉加载中状态
        };
    },
    computed: {},
    created() {
        sleep(1000);
    },
    mounted() {},
    watch: {},
    methods: {
        /**
         * 业务code
         * @param {String} type 可选值："init"（初始化） | "refresh"（下拉刷新操作） | "load" 滚动加载
         */
        async getListMore(type = '') {
            // 下拉刷新方式
            if (type === 'refresh') {
                this.refreshing = false;
                //初始化或者下拉刷新时，滚动加载状态、滚动已加载完成，防止触发list的onload方法
                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.finished = false;
            }

            if (type === 'init' || type === 'refresh') {
                //重置分页
                this.page = 1;
                // 清空页面数据
                this.list = [];
                // await sleep(1000);
            }

            try {
                const res = await this.req.fn({ ...this.req.params, page: this.page, size: this.size });
                //下一页
                this.page = this.page + 1;
                //接口返回的当前页的数据
                let _list = res.data;
                if (this.rowKey) {
                    const rowKeyArr = this.rowKey.split('.');
                    rowKeyArr.forEach((item) => {
                        _list = _list[item];
                    });
                }
                this.list = [...this.list, ..._list];
                this.loading = false;
                // 分页是否加载完毕
                if (_list.length < (this.size || 10)) {
                    this.finished = true;
                } else {
                    this.finished = false;
                }
            } catch (error) {
                console.log(`下拉刷新组件在加载数据时方法内部出错：\n` + error);
                this.refreshing = false;
                this.finished = false;
                this.loading = false;
            }
        }
    },
    components: {
        [PullRefresh.name]: PullRefresh,
        [List.name]: List
    }
};
</script>

<style scoped lang="scss"></style>
