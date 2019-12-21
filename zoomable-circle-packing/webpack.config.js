const path = require("path");

module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/js/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    }
};
