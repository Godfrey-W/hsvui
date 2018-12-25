const path = require('path')
const Components = require('./get-components')()

let externals = {}

Object.keys(Components).forEach(key => {
  externals[`hsvui/packages/${key}`] = `hsvui/lib/${key}`
})

externals = Object.assign({
  vue: 'vue'
}, externals)

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  hsvui: path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}
