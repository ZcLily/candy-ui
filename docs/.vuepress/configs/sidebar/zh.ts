import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/README.md',
        '/guide/install.md',
        '/guide/start.md',
      ],
    },
  ],
  '/vue/': [
    {
      text: '指南',
      children: [
        '/vue/basic/Tabs.md',
      ],
    },
  ],
}
