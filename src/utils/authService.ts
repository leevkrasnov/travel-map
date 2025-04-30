import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuthStore } from '@/store/AuthStore'

export const registerUser = async function (email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    useAuthStore.getState().setUser(user)
    console.log(useAuthStore.getState().user)
    return user
  } catch (error) {
    console.error('Ошибка регистрации пользователя:', error)
    throw error
  }
}
