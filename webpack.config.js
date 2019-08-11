const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
        }])
    ]
};