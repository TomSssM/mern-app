const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
