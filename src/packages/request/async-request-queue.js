// 通用的异步请求队列处理类
class AsyncRequestQueue {
    constructor() {
      this.queue = []; // 请求队列
      this.processing = false; // 标记是否正在处理请求
    }
  
    // 处理队列中的请求
    async processQueue() {
      if (this.processing) return; // 如果正在处理，直接返回
      this.processing = true;
  
      while (this.queue.length > 0) {
        const { requestFunction, args, resolve, reject } = this.queue.shift(); // 取出队列中的第一个请求
  
        try {
          const result = await requestFunction(...args); // 调用请求方法
          resolve(result); // 请求成功，返回结果
        } catch (error) {
          reject(error); // 请求失败，返回错误
        }
      }
  
      this.processing = false; // 处理完毕，标记为 false
    }
  
    // 添加请求到队列
    add(requestFunction, ...args) {
      return new Promise((resolve, reject) => {
        this.queue.push({ requestFunction, args, resolve, reject }); // 将请求添加到队列
        this.processQueue(); // 开始处理队列
      });
    }
  }

  export default AsyncRequestQueue;