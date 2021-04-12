import { RouteLocationNormalized } from 'vue-router'
export default function (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
): boolean {
  //防報錯用，可刪
  Boolean(to && from)
  return true
}
