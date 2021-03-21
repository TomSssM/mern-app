const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const client = {
  entry: './client/index.jsx',
  target: 'web',
  mode: 'development', // todo: make dynamic
  devtool: 'source-map', // todo: make dynamic as well ( most likely 'nosources-source-map' for production)
  output: {
    path: path.resolve(__dirname, 'build', 'static'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MERN App',
    }),
  ],
};

const server = {
  entry: './server/index.js',
  target: 'node',
  mode: 'development', // todo: make dynamic
  devtool: 'source-map', // todo: make dynamic as well ( most likely 'nosources-source-map' for production)
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
};

module.exports = [client, server];
