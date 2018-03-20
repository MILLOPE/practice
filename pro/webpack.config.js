var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var config = {
    entry: {
        webindex: "./src/js/index",
        userlogin: "./src/js/userlogin",
        test: "./src/js/test",
        test_async: "./src/js/test_async",
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/build"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/index.html",
            chunks: ["webindex"]
        }),
        new HtmlWebpackPlugin({
            filename: "login.html",
            template: "./src/pages/userlogin.html",
            chunks: ["userlogin"]
        }),
        new HtmlWebpackPlugin({
            filename: "test.html",
            template: "./src/pages/test.html",
            chunks: ["test"]
        }),
        new HtmlWebpackPlugin({
            filename: "test_async.html",
            template: "./src/pages/test.html",
            chunks: ["test_async"]
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};

module.exports = config;
