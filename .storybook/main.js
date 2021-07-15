module.exports = {
  stories: ['../client/**/*.story.@(js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    });

    return config;
  },
};
