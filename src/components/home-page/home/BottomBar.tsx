import { MapPinned, CircleUserRound, House, CirclePlus } from 'lucide-react'
import { useBottomBarStore } from '@/store/bottombarStore'

export default function BottomBar() {
  const startModalChange = useBottomBarStore((state) => state.startModalChange)

  return (
    <nav className="bg-white shadow-md ">
      <ul className="flex justify-around items-center h-24 text-gray-500 duration-500">
        <button
          onClick={() => startModalChange('home')}
          className="cursor-pointer"
        >
          <House size={32} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => startModalChange('travelForm')}
          className="cursor-pointer"
        >
          <MapPinned size={32} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => startModalChange('travelList')}
          className="cursor-pointer"
        >
          <CirclePlus size={32} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => startModalChange('profile')}
          className="cursor-pointer"
        >
          <CircleUserRound size={32} strokeWidth={1.5} />
        </button>
      </ul>
    </nav>
  )
}
