import { useEffect, useRef, useState } from 'react'
import { updateUserName } from '@/utils/authService'
import { useUserName } from '@/hooks/useUserName'
import { useLoadingStore } from '@/store/useLoadingStore'

export function useUserNameInput() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const isLoading = useLoadingStore((state) => state.isLoading)

  const userName = useUserName()

  useEffect(() => {
    setInputValue(userName ?? '')
  }, [userName])

  const handleConfirm = async () => {
    if (inputValue.trim() !== '' && inputValue.trim() !== userName) {
      try {
        await updateUserName(inputValue)
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
      setInputValue(userName ?? '')
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
    userName,
    eventKeyDown,
  }
}
