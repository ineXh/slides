var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'source/');

var config = {
  entry: APP_DIR + '/Main.js', // //
  output: {
    path: BUILD_DIR,
    filename: 'devbundle.js'
  },
  devtool: "#eval-source-map",
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR, //'./src/js/',//APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  /*debug: true,
  devtool: "#eval-source-map",
  plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]*/
};

module.exports = config;

