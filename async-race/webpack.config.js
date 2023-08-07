const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
//const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Output directory for the SVG files
              publicPath: 'images/' // Public URL path for the SVG files
            }
          }
        ]
      },
      { test: /.ts$/i, use: 'ts-loader' },
      {
        test: /.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    port: 8056,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: path.resolve(__dirname, 'src/index.html') // Specify the path to your HTML template file
    }),
    new EslintPlugin({ extensions: 'ts' })
  ]
};
