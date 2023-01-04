const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  }, 

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
     },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      }
    ],
  },  

  devServer: {
    hot: true,
    static: path.resolve('./dist'),
    compress: true,
    port: 3000,
  },  
  performance : {
    hints : false, 
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  },   
}
