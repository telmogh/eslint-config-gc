module.exports = {
  plugins: [
    'react',
  ],

  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 2,
    'react/jsx-wrap-multilines': 0
  },

  settings: {
    react: {
      pragma: 'React',
      version: '16.0'
    }
  }
};
