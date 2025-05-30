import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
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
}: AnimatedButtonProps) {
  return (
    <motion.button
      key={label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`${styles} absolute text-gray-500 top-1/2 -translate-y-1/2 cursor-pointer duration-200`}
    >
      {children}
    </motion.button>
  )
}
