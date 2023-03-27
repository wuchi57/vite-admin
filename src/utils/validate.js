/**
 * 效验用户账号是否存在
 * @param str
 * @return {boolean}
 */
export function valid (str) {
  const user_map = ['admin', 'editor']
  return user_map.includes(str)
}

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
