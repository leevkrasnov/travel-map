import SearchCity from './SearchCity'
import TravelCardLayout from './TravelCardLayout'

export default function TravelListView() {
  return (
    <div className="h-full relative rounded-t-2xl text-davy-gray bg-gray-50 shadow-lg">
      <div className="flex flex-col xl:shadow-lg md:mx-20 xl:mx-32 2xl:mx-60 h-full">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-3xl mx-10 lg:mx-50 pt-20 pb-4 lg:mb-12 bg-gray-50 md:text-4xl lg:text-5xl font-semibold">
            <p>СОХРАНЕННЫЕ</p>
            <p className="lg:mt-4">ПОЕЗДКИ</p>
          </h1>
          <div className="flex justify-end mr-8 md:items-end mb-12 md:mr-2 xl:mr-32">
            <SearchCity />
          </div>
        </div>

        <div className="relative pt-24 flex-1 mx-4 lg:mx-12 flex items-center justify-between">
          <TravelCardLayout />
        </div>
      </div>
    </div>
  )
}
