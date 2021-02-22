export const debounce = (
  fn: (...args: any) => void,
  delay: number
): ((...args: any) => void) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const isEmpty = (value: any): boolean => {
  return [null, undefined, '', NaN].includes(value);
};

const randomAccess = (min: number, max: number): number => {
  return Math.floor(Math.random() * (min - max) + max);
};

const decodeUnicode = (str: string): string => {
  str = '\\u' + str;
  str = str.replace(/\\/g, '%');
  str = unescape(str);
  str = str.replace(/%/g, '\\');
  return str;
};

export const createNickName = (NameLength: number = 4): string => {
  let nickName: string = '';
  for (let i = 0; i < NameLength; i++) {
    let unicodeNum: string = '';
    unicodeNum = randomAccess(0x4e00, 0x9fa5).toString(16);
    nickName += decodeUnicode(unicodeNum);
  }
  return nickName;
};
