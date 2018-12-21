const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  stats: {
    modules: false,
    children: false
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin()
  ]
}