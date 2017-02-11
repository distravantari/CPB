var webpack = require('webpack')
var _ = require("lodash");
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

// application absolute path
var SCRIPTS_ROOT = path.resolve(__dirname, "./assets/js")
// end of application absolute path

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    preLoaders: [{
			test: /\.(es6|js|jsx)$/,
			include: _.merge([SCRIPTS_ROOT])
		}],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract('css!sass')
      },
      {   test: /\.css$/,
          loader: "style-loader!css-loader?root=."
      },
      {   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + '/www'
  },
  resolve: {
    extensions: ["", ".js", ".es6", ".jsx",".hbs"],
    modulesDirectories: ["node_modules"],
    alias: {
        "scripts_path": SCRIPTS_ROOT
    }
  },
  externals: {
    'jquery.tp.t.min': 'tp-tool',
    'jquery.tp.min': 'tp',
  },
  plugins: [
    new webpack.ProvidePlugin({
        "window.jQuery": "jquery",
        $: "jquery",
        jQuery: "jquery",
        React: "react"
    }),
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('./assets/css/style.css', { allChunks: true })
  ]
}
