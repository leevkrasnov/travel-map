/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import mapPin from '@/assets/mapPin.svg'
import { mapStyles } from '@/styles/mapStyles'
import { useTravelStore } from '@/store/useTravelStore'
import { useTravelsListener } from '@/hooks/useTravelsListener'
import LoadingSpinner from '../common/LoadingSpinner'
import { useMapFocusStore } from '@/store/useMapFocusStore'

import { YMap, YMapLocationRequest } from '@yandex/ymaps3-types'

export default function YandexMap() {
  useTravelsListener()

  const travels = useTravelStore((state) => state.travels)

  const coords = useMapFocusStore((state) => state.coordinates)
  const zoom = useMapFocusStore((state) => state.zoom)

  const [reactified, setReactified] = useState<{
    YMap: any
    YMapDefaultSchemeLayer: any
    YMapMarker: any
    YMapDefaultFeaturesLayer: any
  } | null>(null)

  const mapRef = useRef<YMap | null>(null)
  const hasSetInitialLocation = useRef(false)

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

  const defaultLocation: YMapLocationRequest = {
    center: [58.44662, 54.814652],
    zoom: 10,
  }

  useEffect(() => {
    if (mapRef.current && reactified) {
      mapRef.current.setZoomRange({ min: 4, max: 14 })

      if (coords) {
        const newLocation: YMapLocationRequest = {
          center: coords,
          zoom: zoom || defaultLocation.zoom,
          duration: 1500,
        }
        mapRef.current.setLocation(newLocation)
      } else if (!hasSetInitialLocation.current) {
        mapRef.current.setLocation({
          center: defaultLocation.center,
          zoom: defaultLocation.zoom,
          duration: 1500,
        })
        hasSetInitialLocation.current = true
      }
    }
  }, [coords, zoom, reactified, defaultLocation.center, defaultLocation.zoom])

  if (!reactified) return <LoadingSpinner />

  const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } =
    reactified

  return (
    <div className="w-full h-full">
      <YMap mode="vector" location={defaultLocation} ref={mapRef}>
        <YMapDefaultSchemeLayer customization={mapStyles} />
        <YMapDefaultFeaturesLayer />

        {travels.length !== 0 &&
          travels
            .filter((travel) => travel.coordinates != null)
            .map((travel) => (
              <YMapMarker key={travel.id} coordinates={travel.coordinates}>
                <div className="w-10 relative">
                  <div className="absolute top-[-42px] left-[-24px]">
                    <img src={mapPin} height={48} width={48} alt="map pin" />
                  </div>
                </div>
              </YMapMarker>
            ))}
      </YMap>
    </div>
  )
}
