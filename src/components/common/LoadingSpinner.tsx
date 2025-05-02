import { LoaderCircle } from 'lucide-react'

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoaderCircle size={50} className="animate-spin text-gray-700" />
    </div>
  )
}
