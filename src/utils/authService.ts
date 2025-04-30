import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
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

export const loginUser = async function (email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user
    console.log('Auth instance:', auth)

    useAuthStore.getState().setUser(user)
    return user
  } catch (error) {
    console.error('Ошибка авторизации:', error)
    console.log('Auth instance:', auth)

    throw error
  }
}
