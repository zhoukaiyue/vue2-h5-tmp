<!--
 * @Descripttion: 顶级routerView
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-08-04 22:23:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-08 16:10:16
-->
<template>
    <div id="app" class="top-safe-area bottom-safe-area">
        <router-view />
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
