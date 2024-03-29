/*
 * @Description: Vitepress Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-06-28 17:03:27
 * @LastEditors: Miya
 * @LastEditTime: 2022-09-05 22:20:08
 */
import { defineConfig } from 'vitepress';
// https://vitepress.vuejs.org/config/theme-configs.html#nav
import { navBar } from './tiny/navBar';
// https://vitepress.vuejs.org/config/theme-configs.html#sidebar
import { sideBar } from './tiny/sideBar';
// https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
import { socialLinks } from './tiny/socialLinks';
// https://vitepress.vuejs.org/config/theme-configs.html#footer
import { footer } from './tiny/footer';

const config = defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  appearance: true,
  base: '/VitePress-Template',
  themeConfig: {
    logo: '/favicon.ico',
    socialLinks,
    nav: navBar,
    sidebar: sideBar,
    footer,

  },
});

export default config;
