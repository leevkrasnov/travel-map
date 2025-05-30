import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'

import { deleteCurrentUser } from '@/utils/authService'
import { useLoadingStore } from '@/store/useLoadingStore'
import { useAlertStore } from '@/store/useAlertStore'
import { useBottomBarStore } from '@/store/useBottombarStore'

export default function DeleteUserButton() {
  const isLoading = useLoadingStore((state) => state.isLoading)
  const showAlert = useAlertStore((state) => state.showAlert)
  const reset = useBottomBarStore((state) => state.reset)
  const [isLoadingDeleteUser, setIsLoadingDeleteUser] = useState(false)

  const handleDeleteUser = async () => {
    try {
      setIsLoadingDeleteUser(true)
      await deleteCurrentUser()

      reset()
    } catch (error) {
      showAlert(
        'error',
        'Произошла ошибка на сервере. Пожалуйста, повтори операцию'
      )
      console.error('Не удалось удалить аккаунт')
      throw error
    } finally {
      setIsLoadingDeleteUser(true)
    }
  }

  return (
    <button
      onClick={handleDeleteUser}
      disabled={isLoading}
      className="flex items-center justify-center bg-transparent cursor-pointer lg:mt-2 mt-6 px-2 w-[200px] font-semibold text-gray-600 h-[45px] md:h-[60px] text-base rounded-full lg:text-lg disabled:text-flame hover:text-flame duration-500"
    >
      {isLoadingDeleteUser ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        'Удалить аккаунт'
      )}
    </button>
  )
}
