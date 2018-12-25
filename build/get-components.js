const fs = require('fs')
const path = require('path')

const excludes = [
  'hsvui-css'
]

module.exports = function () {
  const components = {}
  fs.readdirSync(path.resolve(__dirname, '../packages'))
    .filter(dirName => excludes.indexOf(dirName) === -1)
    .forEach(name => {
      components[name] = `./packages/${name}/index.js`
    })
  return components
}
