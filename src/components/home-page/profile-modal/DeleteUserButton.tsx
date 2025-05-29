import { useNavigate } from 'react-router'
import { LoaderCircle } from 'lucide-react'

import { deleteCurrentUser } from '@/utils/authService'
import { useBottomBarStore } from '@/store/useBottombarStore'
import { useLoadingStore } from '@/store/useLoadingStore'
import { useAlertStore } from '@/store/useAlertStore'

export default function DeleteUserButton() {
  const navigate = useNavigate()
  const reset = useBottomBarStore((state) => state.reset)
  const isLoading = useLoadingStore((state) => state.isLoading)
  const showAlert = useAlertStore((state) => state.showAlert)

  const handleLogOut = async () => {
    try {
      reset()

      await deleteCurrentUser()

      navigate('/')
    } catch (error) {
      showAlert(
        'error',
        'Произошла ошибка на сервере. Пожалуйста, повтори операцию'
      )
      console.error('Не удалось удалить аккаунт')

      throw error
    }
  }

  return (
    <button
      onClick={handleLogOut}
      disabled={isLoading}
      className="flex items-center justify-center bg-gray-50 cursor-pointer lg:mt-2 mt-6 px-2 w-[200px] text-gray-600 h-[45px] md:h-[60px] text-base rounded-full lg:text-lg disabled:text-flame hover:text-flame duration-500"
    >
      {isLoading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        'Удалить аккаунт'
      )}
    </button>
  )
}
