const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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



  chainWebpack: (config) => {
     // ...other chains
     config.module
     .rule('mjs$')
     .test(/\.mjs$/)
     .include
        .add(/node_modules/)
        .end()
     .type('javascript/auto');
  },

  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      new BundleAnalyzerPlugin(),
    ],
  },

  // devServer: {

  // }
}