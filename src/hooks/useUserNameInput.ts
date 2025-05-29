import { useEffect, useRef, useState } from 'react'

import { updateUserName } from '@/utils/authService'
import { useUserInfo } from './useUserInfo'
import { useLoadingStore } from '@/store/useLoadingStore'
import { useAlertStore } from '@/store/useAlertStore'

export function useUserNameInput() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const isLoading = useLoadingStore((state) => state.isLoading)

  const { displayName } = useUserInfo()

  const showAlert = useAlertStore((state) => state.showAlert)

  useEffect(() => {
    setInputValue(displayName ?? '')
  }, [displayName])

  const handleConfirm = async () => {
    if (inputValue.trim() !== '' && inputValue.trim() !== displayName) {
      try {
        await updateUserName(inputValue)

        showAlert('info', `Запомнил: ты теперь ${inputValue}!`)
      } catch (error) {
        showAlert(
          'error',
          'Произошла ошибка на сервере. Пожалуйста, повтори операцию'
        )
        console.error('Не удалось обновить имя пользователя')

        throw error
      } finally {
        setIsDisabled(true)
      }
    }
  }

  const handleClick = () => {
    setIsDisabled(false)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const eventKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleConfirm()
    }
    if (event.key === 'Escape') {
      setIsDisabled(true)
      setInputValue(displayName ?? '')
    }
  }

  return {
    isDisabled,
    setIsDisabled,
    inputValue,
    setInputValue,
    inputRef,
    handleClick,
    handleConfirm,
    isLoading,
    displayName,
    eventKeyDown,
  }
}
