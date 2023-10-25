<!--
 * @Descripttion: 顶级routerView
 * @version: 1.3.1 
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-15 10:31:39
-->
<template>
    <div id="app" class="top-safe-area bottom-safe-area">
        <keep-alive>
            <!-- 缓存的视图 -->
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <!-- 不缓存的视图 -->
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<style lang="scss" scoped>
#app {
    background-color: #f4f5f6;
    height: 100%;
    overflow-y: auto;
}

.top-safe-area {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
}

.bottom-safe-area {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
</style>
