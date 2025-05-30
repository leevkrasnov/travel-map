import { useBottomBarStore } from '@/store/useBottombarStore'
import BottomBarButton from './BottomBarButton'

export default function BottomBar() {
  const startModalChange = useBottomBarStore((state) => state.startModalChange)

  return (
    <nav className="bg-gray-50 xl:px-32 2xl:px-60">
      <ul className="flex h-16 md:h-20 text-gray-600 duration-500">
        <li className="flex-1">
          <BottomBarButton
            modalVariant="travelList"
            textVariant="МЕСТА"
            onClick={() => startModalChange('travelList')}
          />
        </li>
        <li className="flex-1">
          <BottomBarButton
            modalVariant="travelForm"
            textVariant="ДОБАВИТЬ"
            onClick={() => startModalChange('travelForm')}
          />
        </li>
        <li className="flex-1">
          <BottomBarButton
            modalVariant="profile"
            textVariant="ПРОФИЛЬ"
            onClick={() => startModalChange('profile')}
          />
        </li>
      </ul>
    </nav>
  )
}
