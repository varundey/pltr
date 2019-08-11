const path = require('path');

module.exports = {
    entry: './src/pltr.js',
    output: {
        filename: 'pltr.js',
        path: path.resolve(__dirname, 'dist/src')
    }
};