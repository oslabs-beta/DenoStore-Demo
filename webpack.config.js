const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: './docs.html',
      template: './src/docs.html',
      chunks: ['docs'],
    }),
    new CopyPlugin({
      patterns: [{ from: './src/styles.css' }],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './build'),
    },
    proxy: {
      '/graphql': 'http://localhost:3000', // error appeared so changed it to graphql for now
      '/docs': 'http://localhost:3000',
      secure: false,
    },
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    // inline: true, // error appeared. error was that this property was not in the devServer object
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};
