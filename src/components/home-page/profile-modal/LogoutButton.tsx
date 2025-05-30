import { LoaderCircle } from 'lucide-react'

import { logoutUser } from '@/utils/authService'
import { useBottomBarStore } from '@/store/useBottombarStore'
import { useLoadingStore } from '@/store/useLoadingStore'
import { useAlertStore } from '@/store/useAlertStore'
import { useState } from 'react'

export default function LogoutButton() {
  const isLoading = useLoadingStore((state) => state.isLoading)
  const reset = useBottomBarStore((state) => state.reset)
  const showAlert = useAlertStore((state) => state.showAlert)
  const [isLoadingLogout, setIsLoadingLogout] = useState(false)

  const handleLogOut = async () => {
    try {
      setIsLoadingLogout(true)
      await logoutUser()

      reset()
    } catch (error) {
      showAlert(
        'error',
        'Произошла ошибка на сервере. Пожалуйста, повтори операцию'
      )
      console.error('Не удалось выйти из профиля')
      throw error
    } finally {
      setIsLoadingLogout(false)
    }
  }

  return (
    <button
      onClick={handleLogOut}
      disabled={isLoading}
      className="flex items-center justify-center bg-gray-800 border-2 border-gray-800 cursor-pointer mt-10 text-white font-semibold w-full h-[45px] md:h-[60px] rounded-full md:text-xl disabled:feldgrau hover:bg-feldgrau hover:border-feldgrau duration-500"
    >
      {isLoadingLogout ? <LoaderCircle className="animate-spin" /> : 'ВЫХОД'}
    </button>
  )
}
