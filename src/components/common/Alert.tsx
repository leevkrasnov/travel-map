import { AnimatePresence, motion } from 'framer-motion'

import { useAlertStore } from '@/store/useAlertStore'
import { useUserName } from '@/hooks/useUserName'

export default function Alert() {
  const userName = useUserName()
  const { type, message, isVisible, hideAlert } = useAlertStore()
  const colorMap = {
    success: 'text-davy-gray',
    error: 'text-flame',
    info: 'text-davy-gray',
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className={`fixed flex justify-center w-[500px] h-auto bg-white top-2 left-1/2 transform -translate-x-1/2 font-semibold rounded-2xl shadow-xl px-6 py-4 text-xl z-50 ${colorMap[type]}`}
          onClick={hideAlert}
        >
          {userName}, {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
