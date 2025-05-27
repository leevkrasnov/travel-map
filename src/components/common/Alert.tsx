import { AnimatePresence, motion } from 'framer-motion'

import { useAlertStore } from '@/store/useAlertStore'
import { useUserName } from '@/hooks/useUserName'

export default function Alert() {
  const userName = useUserName()

  const { type, message, isVisible, hideAlert } = useAlertStore()

  const colorMap = {
    success: 'bg-gray-300',
    error: 'bg-flame font-semibold',
    info: 'bg-yellow-500',
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
          className={`fixed flex justify-center w-[500px] h-auto text-gray-900 border top-4 left-1/2 transform -translate-x-1/2 rounded-xl shadow-xl px-6 py-4 text-xl z-50 ${colorMap[type]}`}
          onClick={hideAlert}
        >
          {userName}, {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
