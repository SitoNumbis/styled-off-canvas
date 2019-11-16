const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

const pkg = require('../../package.json')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'standard-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: [
    ...Object.keys(pkg.devDependencies)
  ],
  output: {
    path: path.join(__dirname, '..', '..', 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new StyleLintPlugin({
      files: 'src/**/*.js'
    })
  ]
}
