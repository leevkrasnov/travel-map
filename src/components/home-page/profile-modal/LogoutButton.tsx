import { useNavigate } from 'react-router'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'

import { logoutUser } from '@/utils/authService'
import { useBottomBarStore } from '@/store/useBottombarStore'

export default function LogoutButton() {
  const navigate = useNavigate()
  const [isLogout, setIsLogout] = useState<boolean>(false)
  const reset = useBottomBarStore((state) => state.reset)

  const handleLogOut = async () => {
    try {
      setIsLogout(true)
      reset()
      await logoutUser()
      navigate('/')
    } finally {
      setIsLogout(false)
    }
  }

  return (
    <button
      onClick={handleLogOut}
      disabled={isLogout}
      className="flex items-center justify-center bg-gray-800 border-2 border-gray-800 cursor-pointer mt-10 text-white rounded-full p-3 disabled:border-gray-700 disabled:bg-gray-700 hover:bg-gray-700 hover:border-gray-700 duration-500"
    >
      {isLogout ? <LoaderCircle className="animate-spin" /> : 'ВЫХОД'}
    </button>
  )
}
