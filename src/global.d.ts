type anyfunc = (...args: unknown[]) => unknown
type canJson = string | number | { [key: string]: canJson } | boolean
interface Window {
  d: (cb: anyfunc, time = 1000) => DebouncedFunc<anyfunc>
}

declare const _
declare const d
// declare namespace _ {
// }
