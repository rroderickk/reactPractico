const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //!Dist ()==> Distribution
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  //! Todos los archivos de extension .()=>js jsx
        exclude: /node_modules/,
        use: {
          babel: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          loader: 'html-loader'
        ],
      },
    ]
  },
  puglins : [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
}



