import { Map, Placemark } from '@pbe/react-yandex-maps'

import ZoomControls from './ZoomControls'
import type { Travel } from '@/store/useTravelStore'

interface YandexMapViewProps {
  mapRef: React.MutableRefObject<ymaps.Map | null>
  mapState: { center: number[]; zoom: number }
  travels: Travel[]
  onZoomIn: () => void
  onZoomOut: () => void
}

export default function YandexMapView({
  mapRef,
  mapState,
  travels,
  onZoomIn,
  onZoomOut,
}: YandexMapViewProps) {
  return (
    <div className="relative h-full">
      <Map
        state={mapState}
        width="100%"
        height="100%"
        instanceRef={(instance) => {
          mapRef.current = instance
        }}
      >
        {travels.map((travel) => (
          <Placemark
            key={travel.id}
            geometry={travel.coordinates}
            properties={{
              balloonContentHeader: `${travel.travelCity}, ${travel.travelCountry}`,
              balloonContentBody: `С ${travel.travelDateStart} по ${travel.travelDateEnd}`,
            }}
          />
        ))}
      </Map>
      <ZoomControls onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
    </div>
  )
}
