const path = require('path')
var gulp = require('gulp');
var  watch = require('gulp-watch');

const pathJoin = function (p) {
	return path.resolve(__dirname, p);
};



watch([pathJoin('../src/**/*.js')], function() {
	console.log('dosomething')
});



