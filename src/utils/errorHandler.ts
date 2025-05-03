import { FirebaseError } from 'firebase/app'

import type { UseFormSetError } from 'react-hook-form'
import type { LoginFormValues } from '@/types/authForm.types'

export const handleFirebaseError = (
  error: FirebaseError,
  setError: UseFormSetError<LoginFormValues>
) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      setError('email', { message: 'Пользователь уже зарегистрирован' })
      break
    case 'auth/user-not-found':
      setError('email', { message: 'Пользователь не зарегистрирован' })
      break
    case 'auth/wrong-password':
      setError('password', { message: 'Пароль не подходит' })
      break
    default:
      console.error(error)
  }
}
