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
			open: true,
			// port:8000,
			// host:'127.0.0.1',
			// middleware:[],
			// proxies:[]
		}));
});
gulp.task('default', ['webserver']);




