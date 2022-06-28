/*
 * @Description: Navbar - SocialLinks
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-06-28 17:36:10
 * @LastEditors: Mirage
 * @LastEditTime: 2022-06-28 17:41:13
 */

/**
 * @interface SocialLink
 * @see https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
 */
interface SocialLink {
  icon: SocialLinkIcon;
  link: string;
}
type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'youtube';

/**
 *  This Config From Official Website
 *  You may define this option to show your social account links with icons in nav.
 */
const socialLinks: SocialLink[] = [
  { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
  { icon: 'twitter', link: '...' },
  { icon: 'discord', link: '...' },
];

export { socialLinks };
