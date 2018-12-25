const fs = require('fs')
const path = require('path')
let Components = require('../get-components')()
const themes = [
  'hsvui-css'
]

Components = Object.keys(Components)
const basepath = path.resolve(__dirname, '../../packages/')

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile()
  } catch (err) {
    return false
  }
}

themes.forEach((theme) => {
  let indexContent = '@import "./base.scss";\n'
  Components.forEach(key => {
    if (['icon'].indexOf(key) > -1) return
    const fileName = key + '.scss'
    indexContent += '@import "./' + fileName + '";\n'
    const filePath = path.resolve(basepath, theme, 'src', fileName)
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8')
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件')
    }
  })
  fs.writeFileSync(path.resolve(basepath, theme, 'src', 'index.scss'), indexContent)
})
