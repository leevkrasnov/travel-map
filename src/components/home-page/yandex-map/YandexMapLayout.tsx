import { useEffect, useRef } from 'react'

import { useTravelStore } from '@/store/useTravelStore'
import { getTravelsFromFirestore } from '@/utils/dbService'
import YandexMapView from './YandexMapView'

export default function YandexMapContainer() {
  const mapRef = useRef<ymaps.Map | null>(null)
  const travels = useTravelStore((state) => state.travels)

  const mapState = {
    center: [55.751574, 37.573856],
    zoom: 12,
  }

  useEffect(() => {
    getTravelsFromFirestore()
  }, [])

  const zoomIn = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() + 1, { duration: 200 })
    }
  }

  const zoomOut = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() - 1, { duration: 200 })
    }
  }

  return (
    <YandexMapView
      mapRef={mapRef}
      mapState={mapState}
      travels={travels}
      onZoomIn={zoomIn}
      onZoomOut={zoomOut}
    />
  )
}
