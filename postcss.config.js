const autoprefixer = require('autoprefixer');

module.exports = api => ({
  plugins: [
    autoprefixer({
      env: api.env,
    }),
  ],
});
