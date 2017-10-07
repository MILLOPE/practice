var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var path = require("path");
module.exports =
{
    entry:
        {
            //"index": [__dirname + '/src/jssrc/index.js','webpack-dev-server/client?http://127.0.0.1:8080/']
            "index": __dirname + '/src/jssrc/index.js'
        },
    output: {
        //publicPath: "http://127.0.0.1:8080/",
        path: __dirname + '/src/webapp/js',  //输出文件夹
        filename: '[name].js'   //最终打包生成的文件名(just 文件名，不带路径的哦)
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    /*externals: {
        vue: "vue"
    },*/
    /*module:{
        loaders:[
            {test:/\.js$/,loader:"babel",query:{compact:true}},
            //这里肯定要加入n个loader 譬如vue-loader、babel-loader、css-loader等等
        ]
    },*/
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.vue$/, exclude: /node_modules/, loader:"babel-loader!vue-loader"},
            {test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader:"file-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //filename: __dirname + '/src/webapp/js/index.html',//目标文件
            filename: 'index.html',
            template: __dirname + '/src/html/index.html',//模板文件
            inject: 'body',
            hash: true,//代表js后跟一个随机字符串
            chunks: ["index"]
        })
    ]
};
