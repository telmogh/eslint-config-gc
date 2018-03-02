module.exports = {
  plugins: [
    'react',
    'jsx-a11y'
  ],
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],
    'jsx-a11y/label-has-for': [ 2, {
      'components': [ 'Label' ],
      'required': {
        'every': [ 'nesting', 'id' ]
      },
      'allowChildren': false
    }]
  }
};
