import { MapPinned, CircleUserRound, CirclePlus } from 'lucide-react'
import { useBottomBarStore } from '@/store/bottombarStore'
import NavButton from './NavButton'

export default function BottomBar() {
  const startModalChange = useBottomBarStore((state) => state.startModalChange)

  return (
    <nav className="bg-white">
      <ul className="flex justify-around items-center h-24 text-gray-600 duration-500">
        <NavButton
          modalVariant="travelList"
          textVariant="МЕСТА"
          onClick={() => startModalChange('travelList')}
        >
          <MapPinned size={32} strokeWidth={1.5} />
        </NavButton>
        <NavButton
          modalVariant="travelForm"
          textVariant="ДОБАВИТЬ"
          onClick={() => startModalChange('travelForm')}
        >
          <CirclePlus size={32} strokeWidth={1.5} />
        </NavButton>
        <NavButton
          modalVariant="profile"
          textVariant="ПРОФИЛЬ"
          onClick={() => startModalChange('profile')}
        >
          <CircleUserRound size={32} strokeWidth={1.5} />
        </NavButton>
      </ul>
    </nav>
  )
}
