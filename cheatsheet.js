# in package .json file
  "scripts": {
    "build": "webpack src/main.js dist/bundle.js",
    "watch": "npm run build -- --w"
  },
in empty -- is variable. which will working as variable of others script
