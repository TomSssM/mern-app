module.exports = api => ({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false,
        browserslistEnv: api.caller(caller => caller && caller.target === 'web')
          ? 'web'
          : 'server',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
});
