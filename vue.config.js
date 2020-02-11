module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //@就是src
        'components': '@/components',
        'common': '@/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
