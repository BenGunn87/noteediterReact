module.exports = {
  entry: './blocks/index.js',
  output: {
    filename: 'toolkit.js'
  },
  devtool: 'eval-source-map',
  module: {

    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]

  }

};
