/* eslint no-param-reassign: ["error", { "props": false }] */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const shouldAnalyze = process.argv.includes("--analyze");
const devtool = 'source-map';
const mode = 'production';
const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
    favicon: "./public/favicon.ico",
  }),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",


  }),
];
function dev(config) {
  config.devtool = 'eval-source-map';
  config.mode = 'development';
  config.output = {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "/",
  }
  // const devPlugins = [
  // ]
  // config.plugins.push(...devPlugins);
  config.devServer = {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  }
  config.optimization = {};
}
const config = {
  entry: "./src/index.js",
  mode,
  devtool,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    publicPath: "./",
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@container": path.resolve(__dirname, "src/containers"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  module: {
    rules: [
      // Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // css
      {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            //The relative path of the file where the current CSS is located relative to the packed root path dist
            publicPath: '../'
          }
        }, "css-loader"],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      // assets
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: 'asset/resource',
        // https://webpack.js.org/guides/asset-modules/
      },
    ],
  },
  plugins,
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPugin(), new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
};
// analyzer
if (shouldAnalyze) {
  const { BundleAnalyzerPlugin } = module.require("webpack-bundle-analyzer");
  config.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = (env = null) => {
  /* eslint no-process-env: "error" */
  if (env.dev && !shouldAnalyze) {
    dev(config);
  }
  // console.log(config)
  return config;
};

