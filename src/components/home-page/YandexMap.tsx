/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { mapStyles } from '@/styles/mapStyles'

import { YMap, YMapLocationRequest } from '@yandex/ymaps3-types'

export default function YandexMap() {
  const [reactified, setReactified] = React.useState<{
    YMap: any
    YMapDefaultSchemeLayer: any
  } | null>(null)

  useEffect(() => {
    let isMounted = true

    async function initMap() {
      const [ymaps3React] = await Promise.all([
        ymaps3.import('@yandex/ymaps3-reactify'),
        ymaps3.ready,
      ])

      const reactify = ymaps3React.reactify.bindTo(React, ReactDOM)
      const { YMap, YMapDefaultSchemeLayer } = reactify.module(ymaps3)

      if (isMounted) {
        setReactified({ YMap, YMapDefaultSchemeLayer })
      }
    }

    initMap()
    return () => {
      isMounted = false
    }
  }, [])

  const location: YMapLocationRequest = {
    center: [20.5092, 54.7081],
    zoom: 14.7,
  }

  if (!reactified) return null

  const { YMap, YMapDefaultSchemeLayer } = reactified

  return (
    <div className="w-full h-full">
      <YMap
        location={location}
        showScaleInCopyrights
        ref={(x: YMap) => (window.map = x)}
      >
        <YMapDefaultSchemeLayer customization={mapStyles} />
      </YMap>
    </div>
  )
}
