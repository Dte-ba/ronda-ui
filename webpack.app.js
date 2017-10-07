var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig(ops) {

  var plugins = [], outputFile, bundleFile;
  bundleFile = 'app.bundle.js';

  var entry = {};

  entry['./docs/'+bundleFile] = './docs/app/app.js';

  var config = {
    entry: './docs/app/app.js',
    output: {
      path: __dirname,
      filename: 'app.bundle.js'
    },
    externals: {
      'angular': 'angular',
      'jquery': 'jQuery',
      'ronda-ui': 'ronda-ui',
      'hljs': 'hljs'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },{

            // HTML LOADER
            // Reference: https://github.com/webpack/raw-loader
            // Allow loading html through js
            test: /\.html$/,
            loader: 'raw-loader'
        }
      ]
    },
    plugins: plugins
  };

  return config;
};