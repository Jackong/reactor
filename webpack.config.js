const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: './public/js/index.jsx',
    vendor: [
      'react'
    ]
  },
  output: {
    path: path.join(__dirname, 'public/js/'),
    filename: '[name]/index.js',
    chunkFilename: '[name]/index.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor/app.js', ['app']),
  ],
  resolve: {
    extensions: ['', '.json', '.node', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
    }]
  }
}
