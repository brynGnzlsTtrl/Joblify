const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /.scss/, // test: /\.((s[ac]|c)ss|(jsx?))/i,
        type: "asset",
      },
      {
        test: /\.(svg|img|jpg|avif|woff|woff2|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  devtool: "source-map",
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      // components: path.resolve(__dirname, "src/components")
    }
  },
  devServer: {
    open: true,
    // hot: "only",
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    
  }
};
