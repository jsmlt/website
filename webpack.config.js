// Imports
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Folder paths
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  watch: true,
  watchOptions: {
    poll: true
  },
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
    loaders: [
      {
        test: /\.jsx?/,
        include: /src/,
        loader: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }),
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=/images/[name].[ext]',
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        "React": "react",
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ],
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
}