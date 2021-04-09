import { DebouncedFunc } from 'lodash'
/**
 *
 * @param {Function} cb
 * @param {Number} time 執行間隔時間
 * @returns {LoDashStatic}
 */
type anyfunc = (...args: unknown[]) => unknown
export default (cb: anyfunc, time = 1000): DebouncedFunc<anyfunc> =>
  _.debounce(cb, time, {
    leading: true,
    trailing: false,
  })
