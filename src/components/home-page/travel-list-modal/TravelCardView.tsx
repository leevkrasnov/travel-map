import { useBottomBarStore } from '@/store/useBottombarStore'
import { useMapFocusStore } from '@/store/useMapFocusStore'
import { useTravelStore } from '@/store/useTravelStore'

export default function TravelCardView() {
  const startModalChange = useBottomBarStore((state) => state.startModalChange)
  const setFocus = useMapFocusStore((state) => state.setFocus)
  const travels = useTravelStore((state) => state.travels)

  function showTravelOnMap(coords: [number, number]) {
    startModalChange(null)
    setFocus(coords, 8)
  }

  return (
    <div className="flex max-h-full flex-wrap overflow-auto gap-14">
      {travels.map((travel) => (
        <div
          key={travel.id}
          className="relative shadow-md hover:shadow-2xl duration-500 ease-in-out rounded-2xl w-180 h-40"
        >
          <div className="py-3 px-5">
            <div className="flex gap-x-2 text-xl">
              <h1>{travel.travelCountry},</h1>
              <h2 className="font-semibold">{travel.travelCity}</h2>
            </div>

            {travel.coordinates ? (
              <button
                onClick={() => showTravelOnMap(travel.coordinates!)}
                className="cursor-pointer text-blue-600 underline"
              >
                Показать на карте
              </button>
            ) : (
              <p className="text-gray-400 text-sm italic">
                Координаты не указаны
              </p>
            )}

            <p className="text-sm text-gray-500">
              {travel.travelDateStart} – {travel.travelDateEnd}
            </p>
          </div>

          <span className="absolute top-2 right-4 cursor-pointer text-red-600">
            X
          </span>
        </div>
      ))}
    </div>
  )
}
