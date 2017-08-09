var gp=require("gulp");
var gulp_concat=require("gulp-concat");
var gulp_uglify=require("gulp-uglify");

gp.task("shenyi",function(){

    gp.src(["*.js","!gulpfile.js"]).pipe(gp.dest("./build/js"));
    gp.src(["*.css"]).pipe(gp.dest("./build/css"));

    gp.src(["1.js","2.js"])
        .pipe(gulp_concat("main.js"))//合并
        .pipe(gulp_uglify())//压缩
        .pipe(gp.dest("./build/js"));
});
