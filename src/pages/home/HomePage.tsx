import BottomTabBar from '@/components/home-page/home/BottomBar'
import YandexMap from '@/components/home-page/home/YandexMap'
import ModalContainer from '@/components/home-page/home/ModalContainer'

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto">
        <YandexMap />
      </div>

      <ModalContainer />
      <div className="z-20">
        <BottomTabBar />
      </div>
    </div>
  )
}
