const path = require('path')
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var  watch = require('gulp-watch');

const pathJoin = function (p) {
	return path.resolve(__dirname, p);
};








let TARGET = process.argv[3];
console.log(TARGET)

 if('TARGET:watch'  === TARGET){

	 watch([pathJoin('../src/**/*.js')], function() {
		console.log('dosomething')
	 });
 }else if('TARGET:web-server' === TARGET){
	 gulp.task('webserver', function() {
		 gulp.src('../')
			 .pipe(webserver({
				 livereload: true,
				 directoryListing: true,
				 open: true
			 }));
	 });
 	console.log('234')
	 gulp.task('default', ['webserver']);
 }



