import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'
import { useState } from 'react'

export default function ProfileInfo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="max-w-md rounded bg-white p-6 shadow-lg">
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
        </div>
      </Dialog>
    </div>
  )
}
