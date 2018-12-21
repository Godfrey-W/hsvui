const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    hsvui: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'hsvui',
    libraryTarget: 'umd',
    filename: '[name].min.js',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: true
  }
})