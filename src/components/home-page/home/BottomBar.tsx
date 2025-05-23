import { useBottomBarStore } from '@/store/bottombarStore'
import NavButton from './NavButton'

export default function BottomBar() {
  const startModalChange = useBottomBarStore((state) => state.startModalChange)

  return (
    <nav className="bg-white border-t border-t-gray-200">
      <ul className="flex h-20 text-gray-600 duration-500">
        <li className="flex-1">
          <NavButton
            modalVariant="travelList"
            textVariant="МЕСТА"
            onClick={() => startModalChange('travelList')}
          />
        </li>
        <li className="flex-1">
          <NavButton
            modalVariant="travelForm"
            textVariant="ДОБАВИТЬ"
            onClick={() => startModalChange('travelForm')}
          />
        </li>
        <li className="flex-1">
          <NavButton
            modalVariant="profile"
            textVariant="ПРОФИЛЬ"
            onClick={() => startModalChange('profile')}
          />
        </li>
      </ul>
    </nav>
  )
}
