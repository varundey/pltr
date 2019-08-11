const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/pltr.js',
    output: {
        filename: 'pltr.js',
        path: path.resolve(__dirname, 'dist/src')
    },
    plugins: [
        new CopyPlugin([{
            from: 'manifest.json',
            to: path.resolve(__dirname, 'dist')
        }, {
            from: 'images/',
            to: path.resolve(__dirname, 'dist/images')
        }
        ]),
        new CleanWebpackPlugin({
            verbose: true
        })
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