const gulp = require("gulp");
const path = require("path");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const htmlmin = require("gulp-htmlmin");
const javascriptObfuscator = require("gulp-javascript-obfuscator");
/**
 * 拷贝
 */
gulp.task("assetsCopy", function () {
  return gulp.src("./assets/**").pipe(gulp.dest("./dist/assets"));
});
gulp.task("pageCopy", function () {
  return gulp.src("./page/**").pipe(gulp.dest("./dist/page"));
});
gulp.task("pageJsCopy", function () {
  return gulp.src("./pageJs/**").pipe(gulp.dest("./dist/pageJs"));
});
gulp.task("fileCopy", function () {
  return gulp.src("./file/**").pipe(gulp.dest("./dist/file"));
});
gulp.task("htmlCopy", function () {
  return gulp.src("./*.html").pipe(gulp.dest("./dist"));
});
/**
 * 共通js
 */
gulp.task("commonJs", function () {
  /////找到需要压缩的文件
  gulp
    .src([
      "assets/js/common.js",
      "assets/js/index.js",
      "assets/js/display.js",
      "assets/js/login.js",
      "assets/js/upload.js",
    ]) ////  /**/  表示js目录下的任意层级的目录
    .pipe(babel())
    /////压缩文件
    .pipe(uglify())
    // 混淆
    .pipe(
      javascriptObfuscator({
        stringArrayEncoding: true,
      })
    )
    /////另存压缩后文件
    .pipe(gulp.dest("dist/assets/js"));
});
/**
 * 内嵌页面js
 */
gulp.task("pageJs", function () {
  /////找到需要压缩的文件
  gulp
    .src("pageJs/*.js") ////  /**/  表示js目录下的任意层级的目录
    .pipe(babel())
    /////压缩文件
    .pipe(uglify())
    // 混淆
    .pipe(javascriptObfuscator())
    /////另存压缩后文件
    .pipe(gulp.dest("dist/pageJs"));
});
/**
 * 页面html
 */
gulp.task("pageHtml", function () {
  const options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: false, //省略布尔属性的值 <input checked=”true”/> ==> <input />
    removeEmptyAttributes: false, //删除所有空格作属性值 <input id=”” /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type=”text/javascript”
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type=”text/css”
    minifyJS: true, //压缩页面JS
    minifyCSS: true, //压缩页面CSS
  };
  gulp.src("page/*.html").pipe(htmlmin(options)).pipe(gulp.dest("dist/page"));
});
/**
 * 配置文件
 */
gulp.task("configJs", function () {
  /////找到需要压缩的文件
  gulp
    .src("./config.js") ////  /**/  表示js目录下的任意层级的目录
    .pipe(babel())
    /////压缩文件
    .pipe(uglify())
    // 混淆
    .pipe(
      javascriptObfuscator({
        stringArrayEncoding: true,
      })
    )
    /////另存压缩后文件
    .pipe(gulp.dest("dist"));
});
// 执行任务
gulp.task("copy", [
  "assetsCopy",
  "pageCopy",
  "pageJsCopy",
  "fileCopy",
  "htmlCopy",
]);
gulp.task("min", ["commonJs", "pageJs", "pageHtml", "configJs"]);
