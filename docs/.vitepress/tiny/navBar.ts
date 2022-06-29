/*
 * @Description: NavBar Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-06-29 15:30:06
 * @LastEditors: Mirage
 * @LastEditTime: 2022-06-29 15:33:34
 */

type NavItem = NavItemWithLink | NavItemWithChildren;

type NavItemWithLink = {
  text: string;
  link: string;
  activeMatch?: string;
};

/**
 * @interface NavItemWithChildren
 * @see https://vitepress.vuejs.org/config/theme-configs.html#nav
 */
interface NavItemWithChildren {
  text?: string;
  items: NavItemWithLink[];
  activeMatch?: string;
}

/**
 *  This Config From Official Website
 *  The configuration for the nav menu item
 */
const navBar: Array<NavItem> = [
  { text: 'Guide', link: '/guide' },
  {
    text: 'Dropdown Menu',
    items: [
      { text: 'Item A', link: '/item-1' },
      { text: 'Item B', link: '/item-2' },
      { text: 'Item C', link: '/item-3' },
    ],
  },
];

export { navBar };
