const path = require("path");
const packageJSON = require("./package.json");
module.exports = [
  {
    target: "node",
    entry: "./index.js",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      library: "calculator",
      libraryTarget: "commonjs",
    },
    externals: {
      "lodash-es": "lodash-es",
    },
  },
  {
    target: "web",
    entry: "./index.js",
    output: {
      filename: "calculator-es5.js",
      path: path.resolve(__dirname, "dist"),
      library: "calculator",
      libraryTarget: "commonjs",
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
  },
  {
    target: "web",
    entry: "./index.js",
    output: {
      filename: "calculator-umd.js",
      path: path.resolve(__dirname, "dist"),
      library: "calculator",
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
  },
];
