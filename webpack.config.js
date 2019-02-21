const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: path.join(__dirname, "src/index.js"),
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "dist")
    },
    devServer: {
      // publicPath determines where bundles are served from and takes precedenct over contentBase
      //   publicPath: path.join(),
      // ContentBase determines where to serve static files
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 9000,
      hot: true,
      open: false,
      overlay: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.join(__dirname, "src/index.html"),
        favicon: path.join(__dirname, "public/favicon.ico")
      }),
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
