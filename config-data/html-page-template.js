const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPages = [
    new HtmlWebpackPlugin({
        filename: "signIn/SignIn.html",
        template: path.resolve(__dirname, "src/pages/signIn/signIn.html"),
        excludeChunks: [""]

    })
]
