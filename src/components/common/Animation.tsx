import { motion } from 'framer-motion'
import { useState } from 'react'

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'

export default function StateAnimations() {
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { y: 0, opacity: 1 },
    closed: { y: '100%', opacity: 0 },
  }

  return (
    <div>
      <div>
        <button onClick={() => setIsOpen(true)}>Open</button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 flex w-screen items-center justify-center">
            <motion.div
              variants={variants}
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              transition={{ type: 'spring' }}
            >
              <DialogPanel className="h-[80%] rounded bg-white p-6 shadow-lg">
                <DialogTitle className="text-lg font-bold">
                  Profile Info
                </DialogTitle>
                <Description className="mt-2 text-sm text-gray-500">
                  Here is some information about the profile.
                </Description>
                <button
                  type="button"
                  className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </DialogPanel>
            </motion.div>
          </div>
        </Dialog>
      </div>
    </div>
  )
}
