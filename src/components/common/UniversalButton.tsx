import { LoaderCircle } from 'lucide-react'

interface AuthButtonProps {
  variant: string
  disabled: boolean
}

export default function UniversalButton({
  variant,
  disabled,
}: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="flex items-center justify-center bg-gray-800 border-2 border-gray-800 cursor-pointer mt-10 text-white w-full h-[45px] md:h-[60px] rounded-full md:text-xl disabled:bg-feldgrau hover:bg-feldgrau disabled:border-feldgrau hover:border-feldgrau duration-500"
    >
      {disabled ? <LoaderCircle size={28} className="animate-spin" /> : variant}
    </button>
  )
}
