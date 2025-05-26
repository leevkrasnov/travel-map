/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { mapStyles } from '@/styles/mapStyles'
import { useTravelStore } from '@/store/useTravelStore'

import { YMap, YMapLocationRequest } from '@yandex/ymaps3-types'
import { useTravelsListener } from '@/hooks/useTravelsListener'

export default function YandexMap() {
  useTravelsListener()
  const travels = useTravelStore((state) => state.travels)
  console.log(travels)

  const [reactified, setReactified] = React.useState<{
    YMap: any
    YMapDefaultSchemeLayer: any
    YMapMarker: any
    YMapDefaultFeaturesLayer: any
  } | null>(null)

  useEffect(() => {
    let isMounted = true

    async function initMap() {
      const [ymaps3React] = await Promise.all([
        ymaps3.import('@yandex/ymaps3-reactify'),
        ymaps3.ready,
      ])

      const reactify = ymaps3React.reactify.bindTo(React, ReactDOM)
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapMarker,
        YMapDefaultFeaturesLayer,
      } = reactify.module(ymaps3)

      if (isMounted) {
        setReactified({
          YMap,
          YMapDefaultSchemeLayer,
          YMapMarker,
          YMapDefaultFeaturesLayer,
        })
      }
    }

    initMap()
    return () => {
      isMounted = false
    }
  }, [])

  const location: YMapLocationRequest = {
    center: [58.44662, 54.814652],
    zoom: 6,
  }

  if (!reactified) return null

  const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } =
    reactified

  return (
    <div className="w-full h-full">
      <YMap location={location} ref={(x: YMap) => (window.map = x)}>
        <YMapDefaultSchemeLayer customization={mapStyles} />
        <YMapDefaultFeaturesLayer />

        {travels.length !== 0 &&
          travels.map((travel) => (
            <YMapMarker key={travel.id} coordinates={travel.coordinates}>
              <div className="w-30">
                <img
                  src="src/assets/mapPin.svg"
                  height={48}
                  width={48}
                  alt="map pin"
                />
              </div>
            </YMapMarker>
          ))}
      </YMap>
    </div>
  )
}
