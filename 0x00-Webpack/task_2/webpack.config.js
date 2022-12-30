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
        test: /\.(png|jpe?g|gif)$/i,
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
 
  performance : {
    hints : false, 
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},    
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      filename: 'index.html'
    }),
 
  ]
}
/*changes*/