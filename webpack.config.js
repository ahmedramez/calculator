const path = require("path");
const { merge } = require("webpack-merge");
const nodeConfigBase = {
  target: "node",
  entry: "./src/index.ts",
  output: {
    filename: "calculator.js",
    path: path.resolve(__dirname, "dist"),
    library: "calculator",
    libraryTarget: "commonjs",
  },

  externals: {
    "lodash-es": "lodash-es",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};

module.exports = [
  merge(nodeConfigBase, {
    module: {
      rules: [
        {
          test: /\.(tsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: "tsconfig.webpack.json",
              },
            },
          ],
        },
      ],
    },
  }),
  merge(nodeConfigBase, {
    target: "web",
    output: {
      filename: "calculator-umd.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.(tsx?)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
  }),
];
