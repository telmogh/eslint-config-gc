module.exports = {
  plugins: [
    'import',
  ],

  rules: {
    'import/prefer-default-export': 0,
    'import/order': ['error', {
      'newlines-between': 'always',
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
    }],
    'import/no-named-as-default': 0
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      },
      webpack: {
        config: 'config/webpack.config.dev.js'
      }
    }
  },

  extends: [
    'plugin:import/errors',
    'plugin:import/warnings'
  ]
};
