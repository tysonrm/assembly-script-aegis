var path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const httpNode = require("./webpack/http-node");

var serverConfig = {
  target: httpNode,
  entry: "/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath:
      "https://api.github.com?owner=tysonrm&repo=assembnly-script-aegis&filedir=dist&branch=main",
    libraryTarget: "commonjs",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "webassembly/async",
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true,
  },
  optimization: {
    chunkIds: "deterministic", // To keep filename consistent between different modes (for example building only)
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "wasm",
      //llibrary: { type: "commonjs-modudle" },
      filename: "remoteEntry.js",
      exposes: {
        "./domain": "./src/domain",
      },
    }),
  ],
};

module.exports = [serverConfig];
