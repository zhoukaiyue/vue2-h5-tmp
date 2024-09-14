## 导入

在你的项目中导入该模块：

```javascript
import { cancelAllRequests,cancelSpecificRequest,cancelRequestsByCategory } from 'path/requestTermination';
```

## 函数说明

### `cancelAllRequests()`

**描述**：取消所有在途的请求。

**示例**：
```javascript
cancelAllRequests();
```

### `cancelSpecificRequest(options)`

**描述**：取消特定的请求，根据方法、URL、内容类型、参数和数据进行匹配。

**参数**：
- `options` (Object): 取消请求的参数。
  - `method` (string): 请求方法（如 'get', 'post'）。
  - `url` (string): 请求 URL。
  - `contentType` (string, 可选): 内容类型（application/json, application/x-www-form-urlencoded）。
  - `params` (Object, 可选): URL 查询参数。
  - `data` (Object|string, 可选): 请求体数据。

**示例**：
```javascript
cancelSpecificRequest({
  method: 'post',
  url: '/api/submit',
  contentType: 'application/json',
  data: { name: 'John' }
});
```

### `cancelRequestsByCategory(options)`

**描述**：根据请求方法和 URL 取消所有匹配的请求。

**参数**：
- `options` (Object): 取消请求的类别参数。
  - `method` (string): 请求方法（如 'get', 'post'）。
  - `url` (string): 请求 URL。

**示例**：
```javascript
cancelRequestsByCategory({
  method: 'get',
  url: '/api/data'
});
```
