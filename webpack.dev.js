let { merge } = require('webpack-merge');
let common = require('./webpack.common');

module.exports = merge(common, {
    devServer: {
        contentBase: './static',
        watchContentBase: true,

        host: '0.0.0.0',
    },
});