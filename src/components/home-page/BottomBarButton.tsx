import { useBottomBarStore } from '@/store/useBottombarStore'
import { motion, AnimatePresence } from 'framer-motion'

interface BottomBarButtonProps {
  modalVariant: string
  textVariant: string
  onClick: () => void
}

export default function BottomBarButton({
  modalVariant,
  textVariant,
  onClick,
}: BottomBarButtonProps) {
  const activeModal = useBottomBarStore((state) => state.activeModal)

  const isActive = activeModal === modalVariant

  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer hover:text-black duration-300 w-full h-full ${
        isActive ? 'text-davy-gray' : 'text-gray-400'
      }`}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="background"
            initial={{ opacity: 0, y: -1 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1 }}
            layoutId="activeBackground"
            className="absolute inset-0 bg-cadet-gray/60 shadow-xl rounded-xl"
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="text-lg lg:text-2xl font-semibold mt-2">{textVariant}</p>
      </div>
    </button>
  )
}
