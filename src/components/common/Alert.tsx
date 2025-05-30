import { AnimatePresence, motion } from 'framer-motion'

import { useAlertStore } from '@/store/useAlertStore'

export default function Alert() {
  const { type, message, isVisible, hideAlert } = useAlertStore()

  const colorMap = {
    success: 'border-green-800 border-2',
    error: 'border-flame font-semibold border-2',
    info: 'border-gray-600 border-2',
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
          className={`fixed flex justify-center w-[300px] lg:w-[500px] h-auto text-gray-900 bg-gray-100 border top-4 left-1/2 transform -translate-x-1/2 rounded-xl shadow-xl break-words whitespace-normal p-4 text-base lg:text-xl z-50 ${colorMap[type]}`}
          onClick={hideAlert}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
