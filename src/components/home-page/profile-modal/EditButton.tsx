import { ReactNode } from 'react'

interface EditButtonProps {
  label: string
  styles?: string
  children: ReactNode
  onClick: () => void
  disabled?: boolean
}

export default function EditButton({
  label,
  styles,
  onClick,
  disabled = false,
  children,
}: EditButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`${styles} absolute text-gray-500 top-1/2 -translate-y-1/2 cursor-pointer duration-200`}
    >
      {children}
    </button>
  )
}
