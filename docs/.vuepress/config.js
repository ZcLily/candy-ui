const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')

module.exports = {
  title: 'UILI', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'UI组件库', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
      ['link', 
          { rel: 'icon', href: '/logo.png' }
          //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
      ],  
  ],
  //下面涉及到的md文件和其他文件的路径下一步再详细解释
  themeConfig: {
    logo: '/logo.png',  //网页顶端导航栏左上角的图标
    
    //顶部导航栏
    navbar,
    
    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar,
    sidebarDepth: 2,
  }
  
}  