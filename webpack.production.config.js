var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/dist/');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  entry: './public/js/MainFlat.js', //APP_DIR + '/index.jsx', // //
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: "#cheap-module-source-map",
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

