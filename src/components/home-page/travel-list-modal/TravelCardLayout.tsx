import { useBottomBarStore } from '@/store/useBottombarStore'
import { useMapFocusStore } from '@/store/useMapFocusStore'
import { useTravelStore } from '@/store/useTravelStore'
import TravelCardView from './TravelCardView'
import { useSearchCityStore } from '@/store/useSearchCityState'

export default function TravelCardLayout() {
  const startModalChange = useBottomBarStore((state) => state.startModalChange)
  const setFocus = useMapFocusStore((state) => state.setFocus)
  const travels = useTravelStore((state) => state.travels)
  const query = useSearchCityStore((state) => state.query)

  function showTravelOnMap(coords: [number, number]) {
    startModalChange(null)
    setFocus(coords, 8)
  }

  const filteredTravels = travels.filter((travel) =>
    travel.travelCity.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="absolute inset-0 no-scrollbar overflow-auto pt-24 scroll-smooth flex flex-wrap justify-center gap-x-12 gap-y-20">
      {filteredTravels.map((travel) => (
        <TravelCardView
          key={travel.id}
          travel={travel}
          onShowOnMap={showTravelOnMap}
        />
      ))}
    </div>
  )
}
