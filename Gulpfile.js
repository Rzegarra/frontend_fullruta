var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require ('gulp-rename')
var babel = require('babelify')
var browserify = require ('browserify')
var source = require ('vinyl-source-stream')
var watchify = require ("watchify")
var concat = require('gulp-concat')

// Tarea 2 llamada minify-css
gulp.task('css', function () {
  gulp.src('src/css/*.css')
  .pipe(concat('app.css'))
  .pipe(gulp.dest('public'))
});



gulp.task('sass', function () {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('src/css'))
})
gulp.task('assets', function () {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
})


function compile(watch){
  var bundle = watchify(browserify('src/index.js'))
  function rebundle () {
    bundle
      .transform(babel)
      .bundle()
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('src/js'))

    gulp.src('src/js/*.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public'))
  }
  
  if (watch) {
    bundle.on('udpate', function () {
      console.log('------------> bundling...');
      rebundle()
    })
  }
  rebundle()
}

gulp.task('js', function () {
  gulp.src('src/js/*.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public'))
})

gulp.task('build', function () {
  var bundle = browserify('src/index.js', {debug: true})
  bundle
      .transform(babel, { presets: [ 'es2015' ], plugins: [ 'syntax-async-functions', 'transform-regenerator' ] })
      .bundle()
      .on('error', function (err) { console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
})



gulp.task('watch', function () {
  return compile(true)
})


gulp.task('default', ['sass','build','assets','css'])
