import React from 'react'
import { useBottomBarStore } from '@/store/bottombarStore'

interface NavButtonProps {
  modalVariant: string
  textVariant: string
  children: React.ReactNode
  onClick: () => void
}

export default function NavButton({
  modalVariant,
  textVariant,
  children,
  onClick,
}: NavButtonProps) {
  const activeModal = useBottomBarStore((state) => state.activeModal)

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer hover:text-black duration-300 ${
        activeModal === modalVariant ? 'text-black font-semibold' : ''
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {children}
        <p className="text-base mt-2">{textVariant}</p>
      </div>
    </button>
  )
}
