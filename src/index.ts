/*
 * @Description: Pretty Console
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-05-18 16:40:48
 * @LastEditors: Mirage
 * @LastEditTime: 2022-05-18 17:10:29
 */
import os from 'os';
import ErrorStackParser from 'error-stack-parser';

const hasProcessObject = typeof process !== 'undefined';
const isNodejs = hasProcessObject && typeof global !== 'undefined';

interface IDealWithFilePathParam {
  showFullFilePath?: boolean;
}

class ConsoleFormat {
  public globalSelf: any = {};

  constructor() {
    this.init();
  }

  public static getTime() {
    const year = new Date().getFullYear();
    let month: string | number = new Date().getMonth() + 1;
    let day: string | number = new Date().getDate();
    let hour: string | number = new Date().getHours();
    let minute: string | number = new Date().getMinutes();
    let second: string | number = new Date().getSeconds();
    let mileSecond: string | number = new Date().getMilliseconds();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    if (hour < 10) {
      hour = '0' + hour;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (second < 10) {
      second = '0' + second;
    }
    if (mileSecond < 10) {
      mileSecond = '00' + mileSecond;
    }
    if (mileSecond < 100) {
      mileSecond = '0' + mileSecond;
    }
    const time = `${year}-${month}-${day} ${hour}:${minute}:${second}.${mileSecond}`;
    return time;
  }

  public static getProjectFolder() {
    const slash = os.type ? (os.type() === 'Windows_NT' ? '\\' : '/') : '/';
    const currentFolder =
      typeof __dirname !== 'undefined'
        ? __dirname
        : hasProcessObject
        ? process.cwd()
        : '';
    const pwd = currentFolder.split('node_modules')[0];
    const path = ['/', '\\'].includes(pwd[pwd.length - 1]) ? pwd : pwd + slash;
    return path;
  }

  public static getDealWithFilePath(params: IDealWithFilePathParam = {}) {
    const { showFullFilePath = false } = params;
    let filePath = 'node_modules';
    const err = new Error('error');
    const error: any[] = ErrorStackParser.parse(err);
    error.some((item) => {
      if (
        item.fileName &&
        !/^internal.+/.test(item.fileName) &&
        !/node_modules/.test(item.fileName) &&
        !['net.js', 'events.js', 'domain.js', 'async_hooks.js'].includes(
          item.fileName
        ) &&
        !item.fileName.includes('node:internal/')
      ) {
        filePath = item.fileName + ':' + item.lineNumber;
        if (isNodejs && !showFullFilePath) {
          const pwd = ConsoleFormat.getProjectFolder();
          if (item.fileName !== pwd && item.fileName.includes(pwd)) {
            filePath = filePath.replace(pwd, '');
          }
        }
        return true;
      } else {
        return false;
      }
    });
    if (filePath === 'node_modules') {
      error.some((item) => {
        if (
          item.fileName.includes('node_modules') &&
          !item.fileName.includes('console-format') &&
          !item.fileName.includes('node:internal/') &&
          ![
            'Object.debug',
            'Object.log',
            'Object.info',
            'Object.warn',
            'Object.error',
          ].includes(item.functionName)
        ) {
          filePath =
            'node_modules' +
            item.fileName.split('node_modules')[1] +
            ':' +
            item.lineNumber;
          return true;
        } else {
          return false;
        }
      });
    }
    return filePath;
  }

  public init() {
    console.log(this);
    const colors: any = {
      error: '\x1b[31m',
      log: '\x1b[32m',
      warn: '\x1b[33m',
      debug: '\x1b[34m',
    };
    try {
      this.globalSelf = window.console ? window : global;
      if (!this.globalSelf.nativeConsole) {
        //被调用多次会导致console打印的格式异常
        this.globalSelf.nativeConsole = console;
        const _console: any = { ...console };
        this.globalSelf.console = { ...console };
        'debug:debug:FgBlue,warn:warn:FgYellow,error:error:FgRed,log:log:FgGreen'
          .split(',')
          .forEach((logColor) => {
            const [log, color] = logColor.split(':');
            this.globalSelf.console[log] = function (...args: any[]) {
              _console[log](
                `${
                  colors[color]
                }[${ConsoleFormat.getTime()}] [${ConsoleFormat.getDealWithFilePath()}]`,
                '\n',
                ...args
              );
            };
          });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('终端日志格式初始化异常', err);
    }
  }
}

export default ConsoleFormat;
