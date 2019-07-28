var gulp = require('gulp');
var plumber = require('gulp-plumber');
var exec = require('child_process').exec;
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var del = require('del');
var browserSync = require('browser-sync').create();

//Cleaning build directory
gulp.task('clean:build', function(done) {
	del.sync([ 'build/script/**', 'build/style/**' ]);
	done();
});

//Compiling Rust
gulp.task('compile:wasm', function(done) {
	plumber();
	exec('wasm-pack build src/wasm/ --target web', function(err, stdout, stderr) {
		console.log(stdout);
	});
	done();
});

//Compiling Typescript
gulp.task('compile:ts', function(done) {
	gulp
		.src(['src/script/**.ts' ], {
			base: 'src/script'
		})
		.pipe(plumber())
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('build/script/'));
	done();
});
//Compiling Sass
gulp.task('compile:sass', function(done) {
	gulp
		.src([ 'src/style/**.scss' ], {
			base: 'src/style'
		})
		.pipe(plumber())
		.pipe(
			sass({
				outputStyle: 'expanded'
			})
		)
		.pipe(gulp.dest('build/style/'));
	done();
});

//Syncing Web Browser
gulp.task('browser:sync', function(done) {
	setTimeout(function() {
		browserSync.init({
			server: {
				baseDir: '.',
				directory: true
			},
			files: [ 'index.html' ]
		});
	}, 1000);
	done();
});

//Reloading web browser
gulp.task('browser:reload', function(done) {
	setTimeout(function() {
		browserSync.reload();
	}, 1000);
	done();
});

//Watching src directory & reload
gulp.task('watch', function(done) {
	gulp.watch('src/script/**.ts', gulp.series('compile:ts', 'browser:reload'));
	gulp.watch('src/style/**.scss', gulp.series('compile:sass', 'browser:reload'));
	done();
});

//Main routine
gulp.task('default', function(done) {
	done();
});

gulp.task('debug', gulp.series('clean:build', gulp.parallel('compile:ts', 'compile:sass'), 'browser:sync', 'watch'));

gulp.task('build', gulp.series('clean:build', gulp.parallel('compile:ts', 'compile:sass')));

gulp.task('sync', gulp.series('browser:sync', 'watch'));

gulp.task('test', function(done) {
	done();
});
