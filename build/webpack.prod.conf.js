const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseWebpack = require('./webpack.base.conf')
const inquirer = require('inquirer')
const config = require('../config/')

const prodWebpackConfig = merge(baseWebpack, {
  mode: 'production',
  stats: {
    all: false,
    timings: true,
    version: true,
    builtAt: true,
    assets: true,
    assetsSort: 'field'
  },
  plugins: [
    // 定义该环境下的全局变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../'),
      verbose: false
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  const question = {
    type: 'list',
    default: 'default',
    message: '你想要打包的资源路径是',
    name: 'path',
    choices: config.prod.publicPathList
  }
  inquirer.prompt([ question ]).then(answers => {
    prodWebpackConfig.output.publicPath = answers.path
    resolve(prodWebpackConfig)
  })
})
