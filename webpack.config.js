const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const babelLoader = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
  },
};

const client = {
  entry: './src/client/index.jsx',
  target: 'web',
  mode: 'development', // todo: make dynamic
  devtool: 'source-map', // todo: make dynamic as well ( most likely 'nosources-source-map' for production)
  output: {
    path: path.resolve(__dirname, 'build', 'static'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
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
  module: {
    rules: [
      babelLoader,
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MERN App',
      template: path.resolve(__dirname, 'src', 'client', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.png'),
    }),
  ],
};

// todo: make watch mode not re-build on 'npm run dev'

const server = {
  entry: './src/server/index.js',
  target: 'node',
  mode: 'development', // todo: make dynamic
  devtool: 'source-map', // todo: make dynamic as well ( most likely 'nosources-source-map' for production)
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  module: {
    rules: [babelLoader],
  },
};

module.exports = [client, server];
