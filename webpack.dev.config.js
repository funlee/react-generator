const path = require('path');
const webpack = require('webpack')

devServer:{
  hot:true
}
plugins: [
  new webpack.HotModuleReplacementPlugin()
]

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[{
      test:/\.js$/,
      use: ['babel-loader?cacheDirectory=true'], // cacheDirectory是用来缓存编译结果，下次编译加速
      include:path.join(__dirname,'src')
    }]
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  }
};