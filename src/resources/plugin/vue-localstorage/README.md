## 一个操作 localStorage 的 Vue 插件

### 使用方法

#### 引入

> 不需要引入，因为全局已经导入了，在 main.js 中。

#### 基础用法

```javascript
// MyComponent.vue
export default {
    mounted() {
        // 设置
        this.$localStorage.set('key', `${value}`);
        // 获取
        this.$localStorage.get('key');
        // 删除
        this.$localStorage.remove('key');
    }
};
```
