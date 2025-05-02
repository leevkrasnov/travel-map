import { LoaderCircle } from 'lucide-react'

interface AuthButtonProps {
  variant: string
  disabled: boolean
}

export default function AuthButton({ variant, disabled }: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="flex items-center justify-center bg-gray-800 border-2 border-gray-800 cursor-pointer mt-4 text-white rounded-full p-2 disabled:border-gray-700 disabled:bg-gray-700 hover:bg-gray-700 hover:border-gray-700 duration-500"
    >
      {disabled ? <LoaderCircle className="animate-spin" /> : variant}
    </button>
  )
}
