const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './index.js',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/iconfont/[name][hash:6][ext]'
    },
    devtool: 'inline-source-map',
    resolve:{
      extensions:['.js','.css','.vue']
    },
    module: {
        rules: [
          {
            test:/\.js/,
            exclude: /(node_modules|bower_components)/,
            use:{
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader','postcss-loader']
          },
          {
            test: /\.(svg|gif|png|jpe?g)/,
            type: 'asset/resource',
            generator: {
              filename: 'assets/imgs/[name][hash:6][ext]'
            }
          }
        ],
    },
    plugins:[
      new webpack.ProvidePlugin({
        //_: 'lodash',
        join: ['lodash', 'join'],
      }),
      new HtmlWebpackPlugin(
        {
          filename: 'index.html',
          template:"./public/index.html"
        }
      ),
      new webpack.DefinePlugin(
        {
          BASE_URL:"'./'"
        }
      ),
      new CopyPlugin({
        patterns: [
          { from:path.resolve(__dirname, 'public'),
            globOptions:{
              ignore: ["**/index.html"],
            },
            to: path.resolve(__dirname, 'dist'),
          },

        ],
      }),
    ]
};
