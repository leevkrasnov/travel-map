import BottomTabBar from '@/components/home-page/BottomBar'
import ModalContainer from '@/components/home-page/ModalContainer'
import YandexMapLayout from '@/components/home-page/yandex-map/YandexMapLayout'

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto">
        <YandexMapLayout />
      </div>
      <ModalContainer />
      <div className="z-20">
        <BottomTabBar />
      </div>
    </div>
  )
}
