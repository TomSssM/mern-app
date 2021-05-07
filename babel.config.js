module.exports = api => ({
  presets: [
    [
      '@babel/preset-env',
      api.caller(caller => caller && caller.target === 'web')
        ? {
            useBuiltIns: 'usage',
            corejs: 3,
            modules: false,
            browserslistEnv: 'production',
          }
        : {
            useBuiltIns: 'usage',
            corejs: 3,
            browserslistEnv: 'server',
          },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
});
