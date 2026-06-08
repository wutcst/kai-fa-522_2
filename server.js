/**
 * server.js — Snake3D 静态文件服务器
 * Node.js 内置 http 模块，零外部依赖
 * 用法: node server.js
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const BASE_DIR = path.join(__dirname, 'src', 'main', 'resources', 'web');

const MIME = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer(function (req, res) {
    var urlPath = req.url === '/' ? '/index.html' : req.url;
    var filePath = path.join(BASE_DIR, urlPath);

    // 安全检查：防止路径遍历攻击
    if (!filePath.startsWith(BASE_DIR)) {
        res.writeHead(403);
        res.end('403 Forbidden');
        return;
    }

    var ext = path.extname(filePath);
    var contentType = MIME[ext] || 'application/octet-stream';

    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
            res.end('404 Not Found: ' + urlPath);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(PORT, function () {
    console.log('Snake3D Server running at http://localhost:' + PORT);
});
