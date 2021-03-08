let path = require('path');
let htmlPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.hbs$/i,
                use: {
                    loader: 'handlebars-loader',
                    options: {
                        helperDirs: [
                            path.join(__dirname, 'src', 'handlebars', 'helpers'),
                        ],
                        partialDirs: [
                            path.join(__dirname, 'src', 'handlebars', 'partials'),
                        ],
                        inlineRequires: '\/assets\/',
                    },
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        sources: {
                            list: [
                                {
                                    tag: 'img',
                                    attribute: 'src',
                                    type: 'src',
                                }
                            ],
                        },
                    },
                },
            },
            {
                test: /\.(jpg|jpeg|svg|gif|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs',
                        esModule: false,
                    },
                },
            },
        ]
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, 'src', 'handlebars', 'index.hbs'),
            filename: 'index.html',
        })
    ]
};