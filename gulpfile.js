const path = require('path')
var gulp = require('gulp');
var webserver = require('gulp-webserver');

const pathJoin = function (p) {
	return path.resolve(__dirname, p);
};



gulp.task('webserver', function() {
	gulp.src('../')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: true
		}));
});
gulp.task('default', ['webserver']);




