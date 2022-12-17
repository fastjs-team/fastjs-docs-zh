import {defineConfig} from 'vitepress'
import navbar from '../config/navbar'
import sidebar from '../config/sidebar'


export default defineConfig({
  lang: 'en-US',
  title: 'Fastjs-next',
  themeConfig: {
    // theme config
    nav: navbar.nav,
    sidebar: sidebar,
    editLink: {
      pattern: "https://github.com/fastjs-team/fastjs-docs/edit/dev/docs/:path",
      text: "Edit this page on GitHub",
    }
  }
})