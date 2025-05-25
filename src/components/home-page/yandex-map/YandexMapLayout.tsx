import { useYMapV3 } from '@/hooks/useYMap'
import { YandexMapView } from './YandexMapView'

export default function YandexMapContainer() {
  const ready = useYMapV3()

  return (
    <div className="w-full h-full">
      {ready ? (
        <YandexMapView />
      ) : (
        <p className="text-center mt-10">Загрузка карты...</p>
      )}
    </div>
  )
}
