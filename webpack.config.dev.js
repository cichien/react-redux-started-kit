var webpack = require('webpack');
var path = require('path');

var devConfigs = {
  debug: true,
  devtool: 'cheap-module-source-map',
  progress: true,
  devServer: {
    host: 'localhost',
    port: '8080',
    contentBase: 'www/',
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  entry: {
    main: './src',
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx', '.css'],
  },
  output: {
    path: path.resolve(__dirname, 'www/dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development')),
    }),
  ],
};

module.exports = devConfigs;
