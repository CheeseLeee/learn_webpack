const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");
const glob = require('glob')
module.exports = {
  mode: 'development',
  entry: {
    index: './index.js',

  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CompressionPlugin({test: /\.js(\?.*)?$/i,}),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new PurgecssPlugin({
      paths: glob.sync(`${path.resolve(__dirname, '/src/**/*')}`, { nodir: true })
    })
  ],

  optimization: {
    usedExports: true,
  },
};