var abc = require("jquery");

var getlib = require("slib");
//getlib.showName();

var file = require("fs");
file.writeFile("build.js","");

function genCode(key,value)
{
    return "var "+key+"="+value+";\n";
}

for (var aa in getlib)
{
    file.appendFile("build.js",genCode(aa,getlib[aa]));
    //console.log(getlib[aa])
}
file.appendFile("build.js","showName();\n");