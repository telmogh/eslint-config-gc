module.exports = {
  plugins: [
    'react',
  ],
  env: {
    es6: true,
    node: true,
    browser: true
  },

  globals: {
    __DEV__: false,
    __PROD__: false,
    __TEST__: false,
    __DEBUG__: false,
    browser: false,
    before: false,
    after: false
  },

  rules: {
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'never',
        'prev': [ 'const', 'let', 'var' ],
        'next': [ 'const', 'let', 'var' ]
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': [ 'const', 'let', 'var' ],
        'next': [
          'block',
          'block-like','break',
          'case',
          'cjs-export',
          'cjs-import',
          'class',
          'continue',
          'debugger',
          'default',
          'directive',
          'do',
          'empty',
          'export',
          'expression',
          'for',
          'function',
          'if',
          'import',
          'multiline-block-like',
          'return',
          'switch',
          'throw',
          'try',
          'while',
          'with'
        ]
      }
    ],
    'comma-dangle': ['error', 'never'],
    'curly': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', { 'code': 120, 'tabWidth': 2, 'ignoreUrls': true }],
    'newline-before-return': 'error',
    'no-eval': ['error', {
      'allowIndirect': false
    }],
    'no-shadow': 0,
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var-declaration-per-line': 0,
    'one-var': 0,
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'semi': ['error', 'always']
  },

  extends: 'eslint:recommended'
};
