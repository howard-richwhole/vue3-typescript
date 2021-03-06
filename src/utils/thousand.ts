/**
 * 轉千份位
 * @param {(Number|String)} value
 * @returns {String}
 */
export default (value: number | string): string => {
  if (!isNaN(Number(value))) {
    value = Number(value).toFixed(2)
    value += ''
  }
  const arr = value.toString().split('.')
  const re = /(\d{1,3})(?=(\d{3})+$)/g
  return arr[0].replace(re, '$1,') + (arr.length === 2 ? '.' + arr[1] : '')
}
