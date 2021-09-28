module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',

  css: {
    // 是否将组件中的css提取到一个独立的css文件
    extract: false,
    sourceMap: process.env.NODE_ENV !== 'production',

    // css-loader postcss-loader sass-loader less-loader stylus-loader
    loaderOptions: {
      css: {

      },
    },

    // 设置为false后，去掉module后缀
    // requireModuleExtension: false
  },

  chainWebpack: () => {
    
  },

  configureWebpack: () => {
    
  }

  // devServer: {

  // }
}