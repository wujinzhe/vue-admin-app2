const merge = require('webpack-merge')
const baseWebpack = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const webpack = require('webpack')

module.exports = () => {
  const devWebpackConfig = merge(baseWebpack, {
    devtool: 'cheap-eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      clientLogLevel: 'warning',
      port: 8080,
      host: '0.0.0.0',
      quiet: true,
      hot: true,
      compress: true, // 一切服务都是用gzip压缩
      // 配置静态文件目录
      contentBase: false,
      // watchContentBase: true,
      // 提供在服务器内部的所有其他中间件之后执行自定义中间件的能力。
      // after (app) {
      // },
      // 提供在服务器内部的所有其他中间件之前执行自定义中间件的能力。这可用于定义自定义处理程序
      // before (app) {
      //   app.get('/some/path', function(req, res) {
      //     res.json({ custom: 'response' });
      //   })
      // },
      // 添加头部信息
      // headers: {
      //   "X-Custom-Foo": "bar"
      // },
      proxy: {
        '/api/mbp/': {
          target: 'http://172.30.2.13:8080/mbp-gateway/', // 开发环境
          changeOrigin: true,
          pathRewrite: {
            '^/api/mbp/': ''
          }
        }
      },
      // 开启服务器时，打开浏览器
      open: true,
      overlay: {
        warnings: true,
        errors: true
      },
      // 打开页面的路由
      // openPage: 'demo',
      // publicPath: '/static'
      useLocalIp: true,
      stats: {
        all: false,
        timings: true,
        version: true,
        builtAt: true,
        assets: true,
        assetsSort: 'field'
      }
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
            messages: [`项目已经运行: http://${devWebpackConfig.devServer.host}:${port}`]
          }
        }))
        resolve(devWebpackConfig)
      }
    })
  })
}
