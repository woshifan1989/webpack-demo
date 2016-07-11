var path = require('path');

var config = {
    entry: [
        // 支持浏览器自动刷新
        'webpack/hot/dev-server',

        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
};

module.exports = config;
