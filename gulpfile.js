var gp=require("gulp");

gp.task("shenyi",function(){

    gp.src(["*.js","!gulpfile.js"]).pipe(gp.dest("./build/js"));
    gp.src(["*.css"]).pipe(gp.dest("./build/css"))
});
