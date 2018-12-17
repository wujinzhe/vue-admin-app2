const merge = require('webpack-merge')
const baseWebpack = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const webpack = require('webpack')
const opn = require('opn')
const config = require('../config')
const os = require('os')
const ip = os.networkInterfaces().en0[1].address
var devWebpackConfig = {}

// 监听compiler 在afterEmit时打开浏览器
function WebpackDevCompilation () {}
WebpackDevCompilation.prototype.apply = function apply (compiler) {
  compiler.hooks.afterEmit.tap('WebpackDevCompilation', (compilation) => {
    !Object.keys(compilation.assets).some(item => /\.hot-update\.json/ig.test(item)) &&
     opn(devWebpackConfig.output.publicPath, { app: 'Google Chrome' })
  })
}

module.exports = () => {
  devWebpackConfig = merge(baseWebpack, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // 热更新所必须的插件
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      }),
      new WebpackDevCompilation()
    ],

    devServer: {
      clientLogLevel: 'warning',
      port: 8081,
      host: '0.0.0.0',
      quiet: true,
      hot: true,
      proxy: config.dev.proxy
    }
  })

  return new Promise((resolve, reject) => {
    portfinder.basePort = devWebpackConfig.devServer.port
    portfinder.getPort((err, port) => {
      if (err) {
        reject(err)
      } else {
        // 重新设置过dev的端口
        devWebpackConfig.devServer.port = port
        devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`项目已经运行: http://${ip || devWebpackConfig.devServer.host}:${port}`]
          }
        }))
        // 设置dev下的public路径
        devWebpackConfig.output.publicPath = `http://${ip || '0.0.0.0'}:${port}/`
        resolve(devWebpackConfig)
      }
    })
  })
}
