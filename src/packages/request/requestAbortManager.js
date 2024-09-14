import QS from 'qs';
import axios from 'axios';
import { createUniqueKey } from './utils';

let pendingRequests = {};

/**
 * 添加请求到 pendingRequests 列表。
 * @param {Object} config - Axios 请求配置。
 * @returns {Promise<Object>} - 带有取消令牌的修改后配置。
 */
async function addRequest(config) {
  const key = createUniqueKey(config);
  try {
    config.cancelToken = new axios.CancelToken((cancel) => {
      if (pendingRequests[key]) {
        pendingRequests[key].cancel('重复请求已取消');
      }
      pendingRequests[key] = { cancel, config };
    });
  } catch (err) {
    console.error('添加请求到 pendingRequests 时出错:', err);
  }

  return config;
}

/**
 * 从 pendingRequests 列表中移除请求。
 * @param {Object} config - Axios 请求配置。
 */
function removeRequest(config) {
  const key = createUniqueKey(config);
  if (pendingRequests[key]) {
    delete pendingRequests[key];
  }
}

/**
 * 取消所有在途的请求。
 */
function cancelAllRequests() {
  Object.keys(pendingRequests).forEach((key) => {
    try {
      pendingRequests[key].cancel('已取消所有请求');
      delete pendingRequests[key];
    } catch (err) {
      console.error(`取消请求 ${key} 时出错:`, err);
    }
  });
}

/**
 * 取消特定的请求。
 * @param {Object} options - 要取消的请求参数。
 * @param {string} options.method - HTTP 方法 (如 'get', 'post')。
 * @param {string} options.url - 请求 URL。
 * @param {string} [options.contentType] - 内容类型 (application/json, application/x-www-form-urlencoded)。当 `method` 为 'post' 且 `contentType` 为 `application/x-www-form-urlencoded` 时，必须传入。
 * @param {Object} [options.params] - URL 查询参数，仅在 `method` 为 'get' 时使用。
 * @param {Object|string} [options.data] - 请求体数据，仅在 `method` 为 'post' 时使用。
 * @throws {Error} - 如果 `method` 为 'post' 且 `contentType` 为 `application/x-www-form-urlencoded` 但未提供 `contentType`，则抛出错误。
 */
function cancelSpecificRequest({ method, url, contentType, params, data }) {
  if (method.toLowerCase() === 'post' && contentType === 'application/x-www-form-urlencoded') {
    data = QS.stringify(data);
  }

  const key = createUniqueKey({ method, url, params, data });
  if (pendingRequests[key]) {
    try {
      pendingRequests[key].cancel('已取消特定请求');
      delete pendingRequests[key];
    } catch (err) {
      console.error(`取消特定请求 ${key} 时出错:`, err);
    }
  }
}

/**
 * 根据请求方法和 URL 取消所有匹配的请求。
 * @param {Object} options - 要取消的请求类别参数。
 * @param {string} options.method - HTTP 方法 (如 'get', 'post')。
 * @param {string} options.url - 请求 URL。
 */
function cancelRequestsByCategory({ method, url }) {
  Object.keys(pendingRequests).forEach((key) => {
    const { config } = pendingRequests[key];

    // 仅匹配 method 和 url
    if (config.method === method && config.url === url) {
      try {
        pendingRequests[key].cancel('已取消此类别的所有请求');
        delete pendingRequests[key];
      } catch (err) {
        console.error(`取消类别请求 ${key} 时出错:`, err);
      }
    }
  });
}

export { addRequest, removeRequest, cancelAllRequests, cancelSpecificRequest, cancelRequestsByCategory };
