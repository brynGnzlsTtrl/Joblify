const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: {
    "react-vendors": ["react", "react-dom", "react-dom/client"],
    "common-css": [path.resolve(__dirname, "src/common/styles/common.scss")],
    "fonts" : [path.resolve(__dirname, "src/common/styles/abstracts/_font.scss")],
    signIn: {
      import: "./src/pages/signIn/signIn.js",
      dependOn: ["react-vendors"],
    },
  },
  output: {
    path: (path.resolve(__dirname, "dist-prod")),
    filename: (pathData) => {
      return ["react-vendors", "fonts", "common-css"].includes(pathData.chunk.name) ? "/common/[name].js" : "[name]/[name].js"
    },
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  optimization: {
    emitOnErrors: false,
    // runtimeChunk: {
    //   name: true,
    // },
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
      filename: (pathData) => {
        return ["react-vendors", "common-css", "fonts"].includes(pathData.chunk.name) ? "/common/[name].css" : "[name]/[name].css"
      },
    }),
    // new HtmlWebpackPlugin({
    //   filename: "sample.html",
    //   template: path.resolve(__dirname, "src/pages/signIn/signIn.html"),
    // }),
    ...["signIn"].map((e) => {
      return new HtmlWebpackPlugin({
        filename: e + "/" + e + ".html",
        template: path.resolve(__dirname, "src/pages/" + e + "/" + e + ".html"),
      });
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
      common: path.resolve(__dirname, "src/common"),
    },
  },
  devServer: {
    open: true,
    // hot: "only",
    static: {
      directory: path.join(__dirname, "dist-prod"),
    },
    compress: true,
    port: 9001,
  },
  // target: "web",
  
};
