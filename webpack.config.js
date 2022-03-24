const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: { path: path.resolve(__dirname, 'build') },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
