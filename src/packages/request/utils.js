/**
 * @description 给每个请求生成唯一 key
 * @param {object} config - 请求配置 
 * @returns {string} - 返回一个唯一 key
 */
export const createUniqueKey = (config) => {
    const { method, url, params, data } = config;
    // console.log(data);
    // 将 params 和 data 转换为 JSON 字符串，用于唯一 key
    const paramsString = params ? JSON.stringify(params) : '';
    const dataString = data ? JSON.stringify(data) : '';

    // 组合成一个唯一 key
    return `${method}_${url}_${paramsString}_${dataString}`;
  };