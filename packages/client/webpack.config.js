const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = (env, options) => {
  const { mode } = options;

  const isDevelopment = mode === "development";

  return {
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "./dist"),
      chunkFilename: "[name].bundle.js",
    },
    entry: {
      app: ["./src/index.tsx"],
    },
    optimization: {
      usedExports: true,
      minimize: !isDevelopment,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: "all",
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(@babel(?:\/|\\{1,2})runtime|core-js|node_modules)/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [{ loader: "file-loader" }],
        },
        {
          test: /\.(woff2|woff|ttf)$/,
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, "./dist"),
      historyApiFallback: true,
      compress: true,
      port: 9000,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", "jsx"],
      mainFields: ["browser", "module", "main"],
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
      new BrotliPlugin({
        asset: "[path].br[query]",
        test: /\.(js|css|html|svg|ttf)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  };
};
