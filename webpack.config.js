var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
const {LoaderOptionsPlugin} = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LoadablePlugin = require('@loadable/webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const loaderOptionPlugin = new LoaderOptionsPlugin({
  minimize: false,
  debug: true,
})

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin()

const browserConfig = {
  entry: './src/client/index.js',
  devtool: 'source-map',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/',
    filename: "[name].[contenthash].js"
  },
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.s(c)ss$/,
        use: [devMode ? 'style-loader' : miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        // I cannot use style-loader and miniCssExtractPlugin loader in the same time, otherwise I get the error:
        // ReferenceError: document is not defined at insertStyleElement 
        // (https://github.com/webpack-contrib/style-loader/issues/439#issuecomment-566946315)
        // Do not use style laoder and mini-css-extract-plugin loader together: https://www.npmjs.com/package/mini-css-extract-plugin
      },
    ]
  },
  plugins: [new LoadablePlugin(), loaderOptionPlugin, bundleAnalyzerPlugin],
  optimization: {
    moduleIds: 'named',
    runtimeChunk: {
      name: "manifest",
   }, 
   splitChunks: {
    cacheGroups: {
      // bundle for all the content coming from node-modules
      vendor: {
        name: "node_vendors", //custom name for vendor which includes everything coming from node modules
        test: /[\\/]node_modules[\\/]/,
        chunks: "all",
      },
      // bundle for all shared content, which is used in more than one component
      shared: {
        name: "shared_vendors",
        test: /[\\/]src[\\/]client[\\/]shared[\\/]/,
        chunks: "all",
        minSize: 0,
      },
    },
  }
  }
}

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'server.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.s(c)ss$/,
        loader: 'ignore-loader'
        // style files are ignored by server, since they are parsed only bu browser
      },
    ]
  },
}

module.exports = [browserConfig, serverConfig]