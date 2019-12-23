const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { index: "./src/js/index.js", vendor: "./src/js/vendor.js" },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "../template/index.html",
            template: "./src/html/index.html",
            chunks: ["index", "vendor"]
        }),
        new HtmlWebpackPlugin({
            filename: "../template/vendor.html",
            template: "./src/html/vendor.html",
            chunks: ["vendor"]
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs",
                        publicPath: "../dist/imgs/"
                    }
                }
            }
        ]
    }
};
