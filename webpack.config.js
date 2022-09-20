const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = {
  mode: "development",
  entry: {
    "react-vendors": ["react", "react-dom/client"],
    "css-abstract": [path.resolve(__dirname, "./src/assets/style/main.scss")],

    signIn: {
      import: "./src/pages/signIn/signIn.js",
      dependOn: ["react-vendors", "css-abstract"],
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js",
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  optimization: {
    emitOnErrors: false,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
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
        exclude: /node_modules/,
        type: "asset",
      },
      {
        test: /\.(svg|img|jpg|avif|woff|woff2|webp|png)$/,
        type: "asset/resource",
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
    new MiniCssExtractPlugin({
      filename: "[name]/[name].css",
    }),
    new HtmlWebpackPlugin({
      excludeChunks: [ 'react-vendors', "css-abstract" ],
      filename: "[name]/[name].html",
      title: "Joblify [name]",
      templatecontent: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Joblify</title>
          <link  type="text/css" rel="stylesheet" href="main.css" />
        </head>
        <body>
          <div id="root"></div>
        </body>
      
      </html>
      `,
      excludeAssets: ["react-vendors", "css-abstract", "react", "react-dom/client"],
    }),
    new BundleAnalyzerPlugin(),
  ],
  devtool: "source-map",
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      common: path.resolve(__dirname, "src/common")
    },
  },
  devServer: {
    open: true,
    // hot: "only",
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
