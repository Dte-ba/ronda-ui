var webpack = require('webpack');
var path = require('path');

module.exports = function makeWebpackConfig(ops) {

  var libraryName = 'rondaUI';
  var libraryFilename = 'ronda-ui';

  ops = ops || {};

  var isBUILD = ops.BUILD === true;

  var plugins = [];
  plugins.push(
    new webpack.NoEmitOnErrorsPlugin()
  );

  if (isBUILD){
    plugins.push(
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ 
        minimize: true,
        sourceMap: true,
        mangle: false,
        warnings: false,
     })
    ); 
  }

  var configs = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/build/',
      filename: isBUILD ? 'ronda-ui.min.js' : 'ronda-ui.js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: { 
      'angular': 'angular',
      'jquery': 'jQuery'
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
        }, {

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

  return configs;
};