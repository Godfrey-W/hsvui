const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

// 编译sass
gulp.task('default', done => {
  gulp.src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('hsvui.css'))
    .pipe(gulp.dest('../lib/styles'))
  
  done()
})
