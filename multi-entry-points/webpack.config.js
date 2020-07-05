const path = require('path');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'js', 'index.js'),
    price: path.resolve(__dirname, 'src', 'js', 'price.js'),
    details: path.resolve(__dirname, 'src', 'js', 'details.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
};
