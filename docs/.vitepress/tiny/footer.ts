/*
 * @Description: Footer Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-06-29 16:01:59
 * @LastEditors: Mirage
 * @LastEditTime: 2022-06-29 16:02:00
 */

interface Footer {
  message?: string;
  copyright?: string;
}

const footer: Footer = {
  message: 'Released under the MIT License.',
  copyright: 'Copyright © 2019-present Evan You',
};

export { footer };
