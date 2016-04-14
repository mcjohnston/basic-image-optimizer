var gulp = require('gulp');
var imageop = require('gulp-image-optimization');

gulp.task('images', function (cb) {
	gulp.src(['src/**/*.jpg', 'src/**/*.gif', 'src/**/*.png', 'src/**/*.jpeg'])
		.pipe(imageop({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('optimized'))
		//.on('end', cb)
		//.on('error', cb);
});

gulp.task('default', function (cb) {
	gulp.start('images');
});