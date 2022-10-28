const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StatoscopePlugin = require("@statoscope/webpack-plugin").default;
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const LodashWebpackPlugin = require("lodash-webpack-plugin");
const port = process.env.PORT || 3000;

const config = {
  devtool: "eval-source-map",
  mode: "development",
  entry: {
    about: "./src/pages/About.js",
    home: "./src/pages/Home.js",
    main: {
      dependOn: ["about", "home"],
      import: "./src/index.js",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new StatoscopePlugin({
      saveStatsTo: "stats.json",
      saveOnlyStats: false,
      open: false,
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: "public",
    }),
    new LodashWebpackPlugin({ collections: true, paths: true }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        exclude: /(node_modules)/,
        resolve: { extensions: [".js", ".jsx"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
    ],
  },
  target: "web",
  resolve: {
    fallback: {
      crypto: require.resolve("crypto"),
    },
    alias: {
      "crypto-browserify": path.resolve(
        __dirname,
        "src/config/crypto-fallback.js"
      ),
    },
  },
  optimization: {
    minimize: true,
    emitOnErrors: true,
    concatenateModules: true,
    moduleIds: "size",
    mergeDuplicateChunks: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "async",
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    port: port,
    hot: true,
  },
};

module.exports = config;
