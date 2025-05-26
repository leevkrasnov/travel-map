import { YMap } from '@yandex/ymaps3-types'

import '@yandex/ymaps3-default-ui-theme'

import '@yandex/ymaps3-context-menu'
import '@yandex/ymaps3-drawer-control'
import '@yandex/ymaps3-minimap'
import '@yandex/ymaps3-resizer'
import '@yandex/ymaps3-signpost'
import '@yandex/ymaps3-spinner'

declare global {
  let map: YMap

  interface Window {
    map: YMap
  }
}

export {}
