const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackHashChunkPlugin = require('webpack-hash-chunk-plugin')
const webpack = require('webpack')

// 产生关联文件的插件，将关联文件的hash值去掉
function WebpackCreateAssociate () {}
WebpackCreateAssociate.prototype.apply = function apply (compiler) {
  compiler.hooks.compilation.tap('WebpackCreateAssociate', (compilation) => {
    compilation.hooks.afterOptimizeChunkAssets.tap('WebpackCreateAssociate', (chunks) => {
      chunks.forEach(chunk => {
        chunk.files.forEach(file => {
          if (/associate\.[\d\w]{6}.js/ig.test(file)) {
            compilation.assets['js/associate.js'] = compilation.assets[file]
            delete compilation.assets[file]
          }
        })
      })
    })
  })
}

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
    associate: path.resolve(__dirname, '../src/associate.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    // 不同的环境构建，将使用不同的hash策略
    filename: process.env.NODE_ENV === 'production' ? 'js/[name].[contenthash:6].js' : 'js/[name].[hash:6].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../src/')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src/'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=3024'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `index.html`,
      chunks: ['main']
    }),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? 'css/[name].[contenthash:6].css' : 'css/[name].[hash:6].css'
    }),
    // vue-loader 必须引入的插件
    new VueLoaderPlugin(),
    // 验证css的插件
    new StyleLintPlugin({
      files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}']
    }),
    new webpack.DllReferencePlugin({
      manifest: require('vue-admin-main/lib/common/library.json')
    }),
    new CopyWebpackPlugin([
      {
        from: 'static/',
        to: 'static'
      },
      {
        from: 'node_modules/vue-admin-main/lib/common/',
        to: 'library'
      }
    ]),
    new WebpackHashChunkPlugin({
      algorithm: 'md5',
      encoding: 'hex', // hex, latin1, base64
      length: 4
    }),
    new WebpackCreateAssociate()
  ]
}
