/* eslint-disable */

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import _ from 'lodash'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  export default DefineComponent
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}



declare global {
  const _: typeof _;
  interface Window {
      d:any
  }
}


declare module 'moment/min/moment.min'