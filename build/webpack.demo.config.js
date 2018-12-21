const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config.js')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    'vine-mobile': './examples/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../examples/dist'),
    publicPath: './',
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/async_[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['vine-mobile'],
      template: 'examples/src/index.tpl',
      filename: 'index.html',
      inject: true
    })
  ]
})