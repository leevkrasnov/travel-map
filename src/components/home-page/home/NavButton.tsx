import { useBottomBarStore } from '@/store/bottombarStore'
import { motion, AnimatePresence } from 'framer-motion'

interface NavButtonProps {
  modalVariant: string
  textVariant: string
  onClick: () => void
}

export default function NavButton({
  modalVariant,
  textVariant,
  onClick,
}: NavButtonProps) {
  const activeModal = useBottomBarStore((state) => state.activeModal)

  const isActive = activeModal === modalVariant

  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer hover:text-black duration-300 w-full h-full ${
        isActive ? 'text-black' : 'text-gray-500'
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
            className="absolute inset-0 bg-gray-200"
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="text-xl font-semibold mt-2">{textVariant}</p>
      </div>
    </button>
  )
}
