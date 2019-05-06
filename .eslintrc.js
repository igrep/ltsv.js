module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      globals: {
        TransformStream: true
      },
      files: ['src/browser_stream.mjs']
    },
    {
      env: {
        mocha: true
      },
      files: ['test/**/*.mjs']
    },
    {
      files: ['.runkit.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  root: true
};
