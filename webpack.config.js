var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path')
var inProduction = process.env.NODE_ENV === 'production'
module.exports = {
  entry: {
    app: ['./src/main.js', './src/main.scss']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        }) 
      },
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin("[name].css"),
      new webpack.LoaderOptionsPlugin({
          minimize: inProduction
        })
  ]
}

if (inProduction) {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin())
}