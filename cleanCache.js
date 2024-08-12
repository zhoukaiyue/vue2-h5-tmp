/*
 * @Descripttion: cleanCache.js （清理缓存文件夹）
 * @version:
 * @Author: zhoukai
 * @Date: 2024-07-29 14:15:49
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 14:21:02
 */
const fs = require('fs');
const path = require('path');

// 定义缓存文件夹路径和大小限制（单位：字节）
const cacheDir = path.resolve(__dirname, 'node_modules/.cache');
const maxSize = 500 * 1024 * 1024; // 500MB

// 获取文件夹大小
function getDirectorySize(dir) {
    const files = fs.readdirSync(dir);
    return files.reduce((total, file) => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        return total + (stats.isDirectory() ? getDirectorySize(filePath) : stats.size);
    }, 0);
}

// 清理缓存文件夹
function cleanCache() {
    if (fs.existsSync(cacheDir)) {
        const size = getDirectorySize(cacheDir);
        console.log(`Current cache size: ${(size / (1024 * 1024)).toFixed(2)} MB`);

        if (size > maxSize) {
            fs.rmSync(cacheDir, { recursive: true, force: true });
            console.log('Cache cleaned.');
        } else {
            console.log('Cache size is within the limit.');
        }
    } else {
        console.log('Cache directory does not exist.');
    }
}

module.exports = cleanCache;
