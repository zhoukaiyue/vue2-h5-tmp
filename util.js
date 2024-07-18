// 获取git提交的hash值（短）
const gitHash = require('git-rev-sync').short();
// 开发环境
const isEnvDevelopment = process.env.VUE_APP_MODE === 'development';
// 测试环境
const isEnvTest = process.env.VUE_APP_MODE === 'test';
// 生产模式
const isEnvProduction = process.env.VUE_APP_MODE === 'production';
//是否需要进行捆绑包分析
const BUNDLE_ANALYZE = process.env.VUE_APP_BUNDLE_ANALYZE === 'true';

module.exports = {
    // 获取git提交的hash值（短）
    gitHash,
    // 开发环境
    isEnvDevelopment,
    // 测试环境
    isEnvTest,
    // 生产模式
    isEnvProduction,
    // 是否需要进行捆绑包分析
    BUNDLE_ANALYZE
};
