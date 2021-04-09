import debounce from './debounce'

export default {
  install(): void {
    window.d = debounce
  },
}
