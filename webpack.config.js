const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react'],
        },
      }],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpg|gif|ico)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(__dirname, 'src/client/'),
        },
      }],
    },
    ],
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  watch: false,
};
