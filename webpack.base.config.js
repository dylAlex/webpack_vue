//公共的 基础的 配置
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: "./src/index.js", //main

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]_[hash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        // include: path.resolve(__dirname, "./src"), //推荐使用include
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:6].[ext]",
            outputPath: "iconfont/",
            limit: 1024, // 转为base64的格式，放入bundle.js文件中
          },
        },
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"), //推荐使用include
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ],
  },
  resolve: {
    //定位第三方依赖的位置
    modules: [path.resolve(__dirname, "./node_modules")],
    alias: {
      //给图片起个别名，注意html css里的使用
      "@assets": path.resolve(__dirname, "./src/images"),
      'vue$': 'vue/dist/vue.esm.js'
    },
    //后缀列表,缺点：这个列表越长，需要匹配的时间就越久，所以推荐大家使用后缀！
    extensions: [".js", ".json", ".jsx"],
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(),
      manifest: require(path.resolve(__dirname, './dist/vue/dll/manifest.json'))
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dist/vue/dll/runtime_*.js')
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',//对同步 initial，异步 async，所有的模块有效 all
  //     minSize: 30000,//最⼩尺⼨，当模块⼤于30kb
  //     maxSize: 0,//对模块进⾏⼆次分割时使⽤，不推荐使⽤
  //     minChunks: 1,//打包⽣成的chunk⽂件最少有⼏个chunk引⽤了这个模块
  //     maxAsyncRequests: 5,//最⼤异步请求数，默认5
  //     maxInitialRequests: 3,//最⼤初始化请求书，⼊⼝⽂件同步请求，默认3
  //     automaticNameDelimiter: '-',//打包分割符号
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name:"vendor", // 要缓存的 分隔出来的 chunk 名称
  //         priority: -10,
  //       },
  //       other: {
  //         chunks: "initial", // 必须三选⼀： "initial" | "all" | "async"(默认就是async)
  //         test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk,
  //         name:"other",
  //         minSize: 30000,
  //         minChunks: 1,
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true//可设置是否重⽤该chunk
  //       }
  //     }
  //   }
  // }
};
