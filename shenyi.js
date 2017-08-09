var abc = require("jquery");

var getlib = require("slib");
var getobj = require("./test");

var file = require("fs");
file.writeFile("build.js","");
//console.log(global.process.mainModule.children)
function genCode(key,value)
{
    return "var "+key+"="+value+";\n";
}

file.readFile("./a.css",function(err,data){
    if(err)
    {
        //代表出错
    }
    else
    {
        var pattern = /['|"](.*\.jpg)['|"]/g;
        var res;
        while (res=pattern.exec(data.toString()))
        {
            //console.log(res[1])
            var getImg=file.readFileSync(res[1]);
            console.log(getImg.toString("base64"));
            data=data.toString().replace(res[1],"data:image;base64,"+getImg.toString("base64")).trim();
            file.appendFile("build.js","document.write('<style>"+data+"</style>');")
        }


    }
});

for(var i=0;i< global.process.mainModule.children.length;i++)
{
    var child=global.process.mainModule.children[i];
    for(var bb in child.exports)// child.exports就是我们导出的属性
        file.appendFile('build.js',genCode(bb,child.exports[bb]));

}