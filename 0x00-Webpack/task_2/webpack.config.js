const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      }],
    },

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