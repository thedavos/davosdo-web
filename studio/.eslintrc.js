module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
