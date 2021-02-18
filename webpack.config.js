const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // App entry point (main JS file)
    entry: "./index.js",
    output: {
        // Path where is exported the project
        path: path.resolve(__dirname, "dist"),
        // Final file for production
        filename: "index.js"
    },
    resolve: {
        // Used extensions
        extensions: [".js"]
    },
    module: {
        rules: [
            // Babel structure
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    // Used plugins
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                // Main template
                template: "./public/index.html",
                filename: "index.html"
            }
        )
    ]
}