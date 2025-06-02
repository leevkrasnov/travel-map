import { AnimatePresence, motion } from 'framer-motion'

import { useAlertStore } from '@/store/useAlertStore'

export default function Alert() {
  const { type, message, isVisible, hideAlert } = useAlertStore()

  const colorMap = {
    success: 'border-gray-200',
    error: 'border-flame font-semibold',
    info: 'border-gray-200',
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className={`fixed flex justify-center w-[300px] lg:w-[500px] h-auto text-gray-700 bg-white top-4 left-1/2 transform -translate-x-1/2 rounded-xl shadow-xl break-words whitespace-normal p-4 lg:px-12 text-base lg:text-xl z-50 ${colorMap[type]}`}
          onClick={hideAlert}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
