import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { useRef } from 'react'

export default function YandexMap() {
  const mapRef = useRef<ymaps.Map | null>(null)
  const mapState = {
    center: [55.751574, 37.573856],
    zoom: 12,
  }

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
    <div className="relative h-full">
      <YMaps
        query={{
          apikey: import.meta.env.VITE_YANDEX_MAPS_API_KEY,
          lang: 'ru_RU',
        }}
      >
        <Map
          state={mapState}
          width="100%"
          height="100%"
          instanceRef={(instance) => {
            mapRef.current = instance
          }}
        >
          {/* Placemark - маркер на карте, указываем координаты [широта, долгота] */}
          <Placemark geometry={[55.684758, 37.738521]} />
          {/* <ZoomControl options={{ position: { bottom: 200, right: 20 } }} /> */}
        </Map>
      </YMaps>
      <div className="absolute right-5 top-20 flex gap-2 flex-col">
        <button
          className="bg-white text-gray-800 w-8 h-8 flex items-center justify-center shadow-2xl hover:bg-gray-50 transition border cursor-pointer"
          onClick={zoomIn}
        >
          <span className="text-3xl">+</span>
        </button>
        <button
          className="bg-white text-gray-800 w-8 h-8 flex items-center justify-center shadow-2xl hover:bg-gray-50 transition border cursor-pointer"
          onClick={zoomOut}
        >
          <span className="text-3xl">−</span>
        </button>
      </div>
    </div>
  )
}
