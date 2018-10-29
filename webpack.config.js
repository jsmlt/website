// Imports
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Folder paths
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  watch: true,
  watchOptions: {
    poll: true
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build',
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: /src/,
        loader: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      { 
        test: /\.(scss|css)$/, 
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: {} },
          { loader: "sass-loader", options: {} },
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: 'file-loader?name=/images/[name].[ext]',
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        "React": "react",
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ],
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
}