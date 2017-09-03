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
#5
