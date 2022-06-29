/*
 * @Description: SideBar Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-06-29 15:37:21
 * @LastEditors: Mirage
 * @LastEditTime: 2022-06-29 15:49:00
 */

/**
 * @interface sidebar
 * @see https://vitepress.vuejs.org/config/theme-configs.html#sidebar
 */
type Sidebar = SidebarGroup[] | SidebarMulti;

interface SidebarMulti {
  [path: string]: SidebarGroup[];
}

interface SidebarGroup {
  text: string;
  items: SidebarItem[];
  collapsible?: boolean;
  collapsed?: boolean;
}

interface SidebarItem {
  text: string;
  link: string;
}

/**
 *  This Config From Official Website
 *  The configuration for the sidebar menu item
 */
const sideBar: Sidebar = [
  {
    text: 'Guide',
    items: [
      { text: 'Introduction', link: '/introduction' },
      { text: 'Getting Started', link: '/getting-started' },
    ],
  },
];

export { sideBar };
