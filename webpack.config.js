const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");

const pathToRoot = path.resolve(__dirname);

const moduleTests = {
  javaScript: /\.(tsx?)|(js)$/,
  gql: /\.(graphql|gql)$/,
}

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    app: `${pathToRoot}/src/index.js`
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: moduleTests.gql,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: moduleTests.javaScript,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([`${pathToRoot}/dist`], {
      root: pathToRoot
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    modules: ["node_modules"]
  },
  target: "node",
  output: {
    filename: "[name].bundle.js",
    library: "app",
    libraryTarget: "commonjs2",
    path: `${pathToRoot}/dist`,
    publicPath: "/public/"
  }
};
