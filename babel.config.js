module.exports = api => ({
  presets: [
    [
      '@babel/preset-env',
      api.caller(caller => caller && caller.target === 'web')
        ? {
            useBuiltIns: 'usage',
            corejs: 3,
            modules: false,
          }
        : {
            useBuiltIns: 'usage',
            corejs: 3,
            targets: {
              node: 'current',
            },
          },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
});
