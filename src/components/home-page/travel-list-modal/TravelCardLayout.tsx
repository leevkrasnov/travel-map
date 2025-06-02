import { useBottomBarStore } from '@/store/useBottombarStore'
import { useMapFocusStore } from '@/store/useMapFocusStore'
import { Travel, useTravelStore } from '@/store/useTravelStore'
import TravelCardView from './TravelCardView'
import { useSearchCityStore } from '@/store/useSearchCityState'
import { deleteTravel } from '@/utils/dbService'
import { useState } from 'react'
import { useAlertStore } from '@/store/useAlertStore'

export default function TravelCardLayout() {
  const startModalChange = useBottomBarStore((state) => state.startModalChange)
  const setFocus = useMapFocusStore((state) => state.setFocus)
  const travels = useTravelStore((state) => state.travels)
  const query = useSearchCityStore((state) => state.query)
  const [isLoading, setIsLoading] = useState(false)
  const showAlert = useAlertStore((state) => state.showAlert)

  const showTravelOnMap = (coords: [number, number]) => {
    startModalChange(null)
    setFocus(coords, 8)
  }

  const handleDeleteTravel = async (travel: Travel) => {
    const { id, travelCity } = travel
    try {
      setIsLoading(true)
      await deleteTravel(id!)
      showAlert('success', `Забыли про поездку в ${travelCity}!`)
    } catch (error) {
      console.error('Ошибка удаления поездки:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredTravels = travels.filter((travel) =>
    travel.travelCity.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      {travels ? (
        <div className="absolute inset-0 no-scrollbar overflow-auto pt-24 scroll-smooth flex flex-wrap justify-center gap-x-12 gap-y-20">
          {filteredTravels.map((travel) => (
            <TravelCardView
              key={travel.id}
              travel={travel}
              onShowOnMap={showTravelOnMap}
              isLoading={isLoading}
              handleDelete={(id) => handleDeleteTravel(id)}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[100px] flex items-center justify-center text-sm lg:text-lg text-gray-400 mt-12 rotate-1 rounded-2xl shadow-sm border border-gray-200 bg-white absolute inset-0">
          Пусто
        </div>
      )}
    </div>
  )
}
