const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'client',
  entry: {
    app: path.join(__dirname, 'src/client/index.jsx'),
  },
  target: 'web',
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
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/i, // todo: add scss
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
