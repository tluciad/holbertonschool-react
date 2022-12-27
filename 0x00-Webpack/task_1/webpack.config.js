const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  entry: {
    main: './js/dashboard_main.js'
  },
  mode: 'production',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      filename: 'index.html'
    })
  ]
}