import CryptoJS from 'crypto-js'
// 需16字元
const default_key = 'youaregoodviking'

/**
 * 加密
 * @param {*} word
 * @param {String} keyStr
 */

export function encrypt(word: canJson, keyStr: string = default_key): string {
  if (typeof word !== 'string') word = JSON.stringify(word)
  const key = CryptoJS.enc.Utf8.parse(keyStr)
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.toString()
}

/**
 * 解密
 * @param {String} word
 * @param {String} keyStr
 */
export function decrypt(word: string, keyStr: string = default_key): string {
  const key = CryptoJS.enc.Utf8.parse(keyStr)
  const decrypted = CryptoJS.AES.decrypt(word || '', key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  let res = CryptoJS.enc.Utf8.stringify(decrypted).toString()
  try {
    res = JSON.parse(res)
  } catch {
    //
  }
  return res
}
