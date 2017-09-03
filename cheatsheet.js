#1 in package .json file
  "scripts": {
    "build": "webpack src/main.js dist/bundle.js",
    "watch": "npm run build -- --w"
  },
in empty -- is variable. which will working as variable of others script

#2
entry: './src/main.js',
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
}
#3
common js 
>> module.exports = {}
>>var variable = require('moduleName')
es2015
>>export default
#4 rules > uses work right to left
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
#5 converting es6 to es5
npm i babel-core babel-loader
rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
]

npm i --save-dev babel-preset-env
.babelrc 
{
  "presets": ["env"]
}

#6using plugin based on condition
package.json/scripts  >> "prod": "NODE_ENV=production webpack",
webpack.config.js
var inProduction = process.env.NODE_ENV === 'production'
plugins: []
if (inProduction) {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

#7 sass loader
yarn add sass-loader node-sass //The sass-loader requires node-sass and webpack as peerDependency
rules: [
  {
    test: /\.s[ac]ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
]





