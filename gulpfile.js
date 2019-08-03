var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var assets = require('postcss-assets');
var cssdeclsort = require('css-declaration-sorter');
var mqpacker = require('css-mqpacker');
var browserSync = require("browser-sync");

var pug = require('gulp-pug');

//setting : paths
var paths = {
  'scss': './sass/',
  'css': './css/',
  'pug': './pug/',
  'html': './',
  'js': './js/'
}

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([mqpacker()]))
    .pipe(postcss([cssdeclsort({order: 'smacss'})]))
    .pipe(postcss([assets({
      loadPaths: ['images/', './icons', './banners'],
      relative: true
    })]))
    .pipe(postcss([autoprefixer({
        // IEは11以上、Androidは4.4以上
        // その他は最新1バージョンで必要なベンダープレフィックスを付与する設定
      browsers: ['last 2 versions', 'ie >= 11' , 'Android >= 4'],
      cascade: false
    })]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

var pug = require('gulp-pug');

gulp.task('pug', () => {
	return gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'));
});

//Browser Syncin
gulp.task( 'browser-sync', done => {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'index.html'
		}
	})
	done()
});

gulp.task( 'browserReload', function(done) {
	browserSync.reload()
	done()
	console.log('Browser reload completed')
});

gulp.task('sass:watch', function() {
  var watcherSass = gulp.watch('./sass/**/*.scss', gulp.series('sass', gulp.task('browserReload')))
  watcherSass.on('change', function(event) {
  });
});

gulp.task('pug:watch', function() {
  var watcherPug = gulp.watch('./pug/**/*.pug', gulp.series('pug', gulp.task('browserReload')))
  watcherPug.on('change', function(event) {
  })
});

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', gulp.series( 'browser-sync',gulp.parallel('sass:watch', 'pug:watch')))


// gulp.task('default', gulp.parallel("sass:watch", "pug:watch"));
