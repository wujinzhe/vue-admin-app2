module.exports = {
  dev: {
    proxy: {
      '/api/mbp/': {
        target: 'http://172.30.2.13:8080/mbp-gateway/', // 开发环境
        changeOrigin: true,
        pathRewrite: {
          '^/api/mbp/': ''
        }
      }
    }
  },
  prod: {
    publicPathList: [
      'http://172.30.61.123/vue-admin-app2/dist/',
      'http://localhost:8081/',
      'http://baidu.com/',
      'http://iboxpay.com/',
      'http://localhost:8081/dist/'
    ]
  }
}