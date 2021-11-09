module.exports = function (api) {
  const isTest = api.env('test');

  /**
   * Babel config for running tests with Jest.
   */
  if (isTest) {
    return {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
    };
  }

  return {
    targets: {
      esmodules: true,
    },
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
    ignore: [
      'node_modules',
      'dist',
      '**/__test__',
      '**/__tests__',
      '**/__mocks__',
      '**/__fixtures__',
      '**/__snapshots__',
      '**/*.test.js',
      '**/*.spec.js',
      '**/*.stories.js',
      '**/*.stories.jsx',
    ],
  };
};
