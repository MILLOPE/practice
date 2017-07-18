var HtmlWebpackPlugin = require("html-webpack-plugin");
var config = {
    entry: {
        webindex: "./src/js/index"
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
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

module.exports = config;
