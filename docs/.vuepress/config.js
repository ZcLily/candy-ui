import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import {
  head,
  navbarZh,
  sidebarZh,
} from './configs/index.ts'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'UlLili',
      description: '基于 Vue 3，面向设计师和开发者的组件库',
    },
  },

  // configure default theme
  theme: defaultTheme({
    logo: '/logo.png',
    docsDir: 'docs',
    repo: 'https://github.com/ZcLily/lili-vue-page-main',
    repoLabel: '仓库地址',

    // theme-level locales config
    locales: {

      /**
       * Chinese locale config
       */
      '/': {
        // navbar
        navbar: navbarZh,
        // sidebar
        sidebar: sidebarZh,
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
  }),

  // use plugins
  plugins: [],
})
