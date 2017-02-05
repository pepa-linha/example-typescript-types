var path = require("path");

module.exports = {
    devtool: "source-map",
    devServer: {
        inline: true
    },
    context: __dirname + "/src",
    entry: __dirname + "/src/app.ts",
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: ["ts-loader"],
                exclude: "node_modules"
            }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts"]
    },
    output: {
        path: path.join(__dirname, "public"),
        publicPath: "/public/",
        filename: "bundle.js"
    }
};