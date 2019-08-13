const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/pltr.js',
    output: {
        filename: 'pltr.js',
        path: path.resolve(__dirname, 'dist/pltr/src')
    },
    plugins: [
        new CopyPlugin([{
            from: 'manifest.json',
            to: path.resolve(__dirname, 'dist/pltr')
        }, {
            from: 'images/',
            to: path.resolve(__dirname, 'dist/pltr/images')
        }
        ])
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
};