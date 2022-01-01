const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");
const {merge} = require('webpack-merge')
const productionConfig = require('./webpack.prod')
const developmentConfig = require('./webpack.dev')
const commonConfig = {

  entry: './index.jsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/iconfont/[name][hash:6][ext]'
  },
  resolve: {
    extensions: ['.js', '.css', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'app',
        template: "./public/index.html"
      }
    ),
    new webpack.DefinePlugin(
      {
        BASE_URL: "'./'"
      }
    ),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          globOptions: {
            ignore: ["**/index.html"],
          },
          to: path.resolve(__dirname, '../dist'),
        },

      ],
    }),

  ]
}

module.exports = (env) => {
  let isDevelopment = env.development
  console.log(env,isDevelopment)
  if(!isDevelopment){
    return merge(commonConfig,productionConfig)
  }else{
    return merge(commonConfig,developmentConfig)
  }
}

