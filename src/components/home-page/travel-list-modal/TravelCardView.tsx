import { motion, type Variants } from 'motion/react'
import type { Travel } from '@/store/useTravelStore'
import BgImageTravelCard from './BgImagesTravelCard'
import { ArrowUpRight } from 'lucide-react'

interface TravelCardViewProps {
  travel: Travel
  onShowOnMap: (coords: [number, number]) => void
}

export default function TravelCardView({
  travel,
  onShowOnMap,
}: TravelCardViewProps) {
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: -50,
      opacity: 1,
      rotate: -3,
      transition: {
        type: 'spring',
        bounce: 0.6,
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6 }}
    >
      {/* ОСНОВНАЯ КАРТОЧКА ПОЕЗДКИ */}
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02, borderColor: '#e5e7eb' }}
        transition={{
          duration: 0.2,
          ease: 'easeIn',
        }}
        className="w-[300px] h-[160px] lg:w-[450px] lg:h-[230px] border border-gray-50 flex flex-col justify-center items-start p-4 lg:p-6 rounded-2xl bg-white shadow-md relative"
      >
        <BgImageTravelCard />

        <button className="text-sm lg:text-md absolute lg:bottom-4 bottom-3 left-4 lg:left-6 cursor-pointer text-flame hover:font-medium duration-200">
          Забыть поездку
        </button>

        {/* ИНФОРМАЦИЯ О ПОЕЗДКЕ */}
        <div className="w-full cursor-default">
          <div className="flex gap-x-2 text-lg lg:text-2xl mb-1 lg:mb-3">
            <h1 className="text-gray-700">{travel.travelCountry},</h1>
            <h2 className="font-semibold text-davy-gray">
              {travel.travelCity}
            </h2>
          </div>

          {/* КНОПКА КАРТЫ: Показывает поездку на карте если есть координаты */}
          {travel.coordinates ? (
            <button
              onClick={() => onShowOnMap(travel.coordinates!)}
              className="absolute right-7 top-3 lg:top-6 lg:right-6 cursor-pointer text-mount-pink hover:scale-101 transition-all duration-200 hover:font-medium mb-2"
            >
              <div className="flex items-center gap-1 lg:text-lg">
                <p>На карте</p>
                <ArrowUpRight strokeWidth={1.5} />
              </div>
            </button>
          ) : (
            <p className="text-gray-400 italic absolute right-7 top-3 lg:top-6 lg:right-6 text-sm lg:text-base">
              Координаты отсутствуют
            </p>
          )}

          {/* ДАТЫ ПОЕЗДКИ */}
          <p className="text-xs lg:text-base text-cadet-gray">
            {travel.travelDateStart} – {travel.travelDateEnd}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
