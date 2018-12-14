const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackHashChunkPlugin = require('webpack-hash-chunk-plugin')
// const WebpackHashChunkPlugin = require('../config/hash')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
    router: path.resolve(__dirname, '../src/router/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    // filename: 'js/[name].[hash:6].js'
    filename: 'js/[name].js'
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
        exclude: /node_modules/,
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
          {
            loader: 'css-loader'
            // options: {
            //   modules: true,
            //   localIdentName: '[path][name]__[local]--[hash:base64:5]'
            // }
          },
          'postcss-loader',
          'sass-loader'
          // {
          //   loader: 'sass-resources-loader',
          //   options: {
          //     resources: [
          //       path.resolve(__dirname, '../src/theme/default/variables.scss')
          //     ]
          //   }
          // }
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
      chunksSortMode: 'dependency'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:6].css'
    }),
    // vue-loader 必须引入的插件
    new VueLoaderPlugin(),
    // 验证css的插件
    new StyleLintPlugin({
      files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}']
    }),
    new webpack.DllReferencePlugin({
      manifest: require('vue-admin-library/lib/library.json')
    }),
    new CopyWebpackPlugin([
      {
        from: 'static/',
        to: 'static'
      },
      {
        from: 'node_modules/vue-admin-library/lib/',
        to: 'library'
      }
    ]),
    new WebpackHashChunkPlugin({
      algorithm: 'md5',
      encoding: 'hex', // hex, latin1, base64
      length: 4
    })
  ]
}
