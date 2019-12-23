const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { index: "./src/js/index.js", vendor: "./src/js/vendor.js" },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/html/index.html",
            chunks: ["index", "vendor"]
        }),
        new HtmlWebpackPlugin({
            filename: "vendor.html",
            template: "./src/html/vendor.html",
            chunks: ["vendor"]
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            },
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
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
};
