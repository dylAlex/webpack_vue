const webpack = require('webpack');
const path = require("path");
// const _ = require('./utils');

module.exports = {
    mode: 'production',
    entry: {
        runtime: [
            'vue',
            'vuex',
            'vue-router',
            'element-ui',
            'axios',
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist/vue/dll'),
        library: '[name]_[chunkhash]',
        filename: '[name]_[chunkhash].js'
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    // devtool: 'source-map',
    plugins: [
        new webpack.DllPlugin({
            context: path.resolve(),
            name: '[name]_[chunkhash]',
            path: path.resolve(__dirname, './dist/vue/dll/manifest.json'),
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
}