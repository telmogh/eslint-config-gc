module.exports = {
  extends: [
    'eslint-config-react-app',
    'eslint-config-airbnb',
    './rules/react',
    './rules/react-a11y',
    './rules/import',
    './rules/gerocampo'
  ].map(require.resolve),
  rules: {}
};
