const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    'vine-mobile': './examples/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../examples/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  serve: {
    open: false,
    host: '127.0.0.1',
    devMiddleware: {
      logLevel: 'warn'
    },
    hotClient: {
      logLevel: 'warn',
      allEntries: true
    }
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