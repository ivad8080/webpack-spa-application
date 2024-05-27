const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    port: 3000,
    open: false,
    hot: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: false,
      logging: 'none',
    },
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'UltraPhone',
      template: './src/template.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/images', to: 'images' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
};
