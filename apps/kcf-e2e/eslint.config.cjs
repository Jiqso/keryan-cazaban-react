const baseConfig = require('../../.eslintrc.json');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    // Override or add rules here
    rules: {},
  },
];
