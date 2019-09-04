const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/bench_bnb.jsx',
  watch: true,
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env', '@babel/react'],
      },
    }],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
};
