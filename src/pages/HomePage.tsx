import BottomTabBar from '@/components/home-page/BottomBar'
import ModalContainer from '@/components/home-page/ModalContainer'
import YandexMap from '@/components/home-page/YandexMap'

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto"></div>
      <YandexMap />
      <ModalContainer />
      <div className="z-20">
        <BottomTabBar />
      </div>
    </div>
  )
}
