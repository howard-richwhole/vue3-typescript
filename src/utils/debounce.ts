import { DebouncedFunc } from 'lodash'

export default (cb: anyfunc, time = 1000): DebouncedFunc<anyfunc> =>
  _.debounce(cb, time, {
    leading: true,
    trailing: false,
  })
