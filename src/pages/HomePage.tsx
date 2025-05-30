import BottomTabBar from '@/components/home-page/BottomBar'
import ModalContainer from '@/components/home-page/ModalContainer'
import YandexMap from '@/components/home-page/YandexMap'

export default function HomePage() {
  return (
    <div className="flex flex-col" style={{ height: '100dvh' }}>
      <div className="flex-1 overflow-auto pb-16 md:pb-20">
        <YandexMap />
        <ModalContainer />
      </div>
      <div className="fixed bottom-0 w-full z-20">
        <BottomTabBar />
      </div>
    </div>
  )
}
