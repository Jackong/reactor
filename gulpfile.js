const gulp = require('gulp')
const webpack = require('webpack-stream')
const config = require('./webpack.config')

gulp.task('webpack', () => {
    return gulp.src('./public/js/index.jsx')
        .pipe(webpack(config))
        .pipe(gulp.dest('./public/js/'))
})

gulp.task('watch', ['webpack'], () => {
     gulp.watch('./public/js/**/*.jsx', ['webpack'])
})
