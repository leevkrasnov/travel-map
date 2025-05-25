/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'

type YandexMapViewProps = {
  center?: [number, number]
  zoom?: number
}

export const YandexMapView: React.FC<YandexMapViewProps> = ({
  center = [37.64, 55.76],
  zoom = 10,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    const ymaps3 = (window as any).ymaps3
    if (!ymaps3) return

    const initMap = async () => {
      try {
        await ymaps3.ready
        if (mapContainer.current && !mapRef.current) {
          mapRef.current = new ymaps3.YMap(mapContainer.current, {
            location: { center, zoom },
          })
          mapRef.current.addChild(new ymaps3.YMapDefaultSchemeLayer())
        }
      } catch (error) {
        console.error('Ошибка при инициализации карты:', error)
      }
    }

    initMap()

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy()
        mapRef.current = null
      }
    }
  }, [center, zoom])

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
}
