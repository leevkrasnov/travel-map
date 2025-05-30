import TravelCardView from './TravelCardView'

export default function TravelListView() {
  return (
    <div className="h-full rounded-t-2xl text-davy-gray bg-gray-50 shadow-lg flex flex-col">
      <div className="xl:shadow-lg md:mx-20 xl:mx-32 2xl:mx-60 h-full no-scrollbar overflow-auto scroll-smooth">
        <div className="z-10 mx-10 lg:mx-50">
          <h1 className="text-3xl sticky top-0 py-20 bg-gray-50 z-20 md:text-4xl lg:text-5xl font-semibold">
            <p>СОХРАНЕННЫЕ</p>
            <p className="lg:mt-4">ПОЕЗДКИ</p>
          </h1>
          <hr className="sticky top-68 z-20 text-gray-300" />
          <div className="mt-20 flex items-center justify-between">
            <TravelCardView />
          </div>
        </div>
      </div>
    </div>
  )
}
